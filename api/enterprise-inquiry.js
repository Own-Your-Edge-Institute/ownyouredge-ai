import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, company, role, teamSize, challenge, website } = req.body;

    // Honeypot: if this hidden field is filled, it's a bot
    if (website) {
      return res.status(200).json({ success: true });
    }

    if (!name || !company || !role || !teamSize) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const emailBody = `
New Enterprise Inquiry from ownyouredge.ai

Name: ${name}
Company: ${company}
Role: ${role}
Team Size: ${teamSize}

What they're trying to solve:
${challenge || 'Not specified'}
    `.trim();

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: "Enterprise Inquiries <speaking@astridsaitips.com>",
        to: "speaking@astridsaitips.com",
        subject: `Enterprise Inquiry from ${name} at ${company}`,
        text: emailBody,
      });
    } else {
      console.log("=== NEW ENTERPRISE INQUIRY ===");
      console.log(emailBody);
      console.log("Set RESEND_API_KEY to enable email delivery.");
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Enterprise inquiry error:", error);
    return res.status(500).json({ error: "Failed to process inquiry" });
  }
}
