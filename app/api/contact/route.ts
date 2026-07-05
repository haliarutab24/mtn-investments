import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

type ContactPayload = {
  name?: string;
  organisation?: string;
  email?: string;
  enquiry_type?: string;
  message?: string;
  botcheck?: string;
};

function envValueFromFile(content: string, key: string) {
  const match = content.match(new RegExp(`^${key}=([^\\r\\n]+)`, "m"));
  return match?.[1]?.trim().replace(/^["']|["']$/g, "");
}

async function getAccessKey() {
  const envKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (envKey) {
    return envKey;
  }

  const envExample = await readFile(path.join(process.cwd(), ".env.example"), "utf8").catch(() => "");
  return envValueFromFile(envExample, "WEB3FORMS_ACCESS_KEY") || envValueFromFile(envExample, "NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY");
}

function stringValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!payload) {
    return NextResponse.json({ success: false, message: "Invalid form submission." }, { status: 400 });
  }

  if (stringValue(payload.botcheck)) {
    return NextResponse.json({ success: true, message: "Submitted." });
  }

  const name = stringValue(payload.name);
  const organisation = stringValue(payload.organisation);
  const email = stringValue(payload.email);
  const enquiryType = stringValue(payload.enquiry_type);
  const message = stringValue(payload.message);

  if (!name || !organisation || !email || !enquiryType || !message) {
    return NextResponse.json({ success: false, message: "Please complete all required fields." }, { status: 400 });
  }

  const accessKey = await getAccessKey();

  if (!accessKey) {
    return NextResponse.json({ success: false, message: "Contact form is not configured yet." }, { status: 500 });
  }

  const formData = new FormData();
  formData.append("access_key", accessKey);
  formData.append("subject", `MTN Investments inquiry: ${enquiryType}`);
  formData.append("from_name", "MTN Investments Website");
  formData.append("name", name);
  formData.append("organisation", organisation);
  formData.append("email", email);
  formData.append("enquiry_type", enquiryType);
  formData.append("message", message);

  try {
    const response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      body: formData,
    });

    const result = (await response.json().catch(() => null)) as { success?: boolean; message?: string } | null;

    if (!response.ok || result?.success === false) {
      return NextResponse.json(
        { success: false, message: result?.message || "Unable to send your message right now." },
        { status: response.ok ? 400 : response.status },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your partnership enquiry has been sent. We will get back to you shortly.",
    });
  } catch {
    return NextResponse.json({ success: false, message: "Unable to reach the contact service right now." }, { status: 502 });
  }
}
