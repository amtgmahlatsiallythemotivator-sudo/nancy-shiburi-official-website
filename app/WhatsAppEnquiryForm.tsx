"use client";

const WHATSAPP = "https://wa.me/27762938829";

type Props = { kind: "booking" | "contact" };

export default function WhatsAppEnquiryForm({ kind }: Props) {
  const booking = kind === "booking";

  function sendToWhatsApp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const fields = booking
      ? ["Full name", "Church or organisation", "Contact number", "Email address", "Event type", "Event date", "Event location", "Message"]
      : ["Full name", "Email address", "Message"];
    const intro = booking ? "Booking enquiry from Nancy Shiburi’s official website:" : "Website message for Nancy Shiburi:";
    const message = [intro, ...fields.map((label) => `${label}: ${String(values.get(label) || "Not provided")}`)].join("\n");
    window.open(`${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="form" onSubmit={sendToWhatsApp}>
      <h3>{booking ? "Booking Enquiry" : "Send a Message"}</h3>
      <label>Full name *<input name="Full name" required autoComplete="name" /></label>
      {booking && <label>Church or organisation<input name="Church or organisation" /></label>}
      {booking && <label>Contact number *<input name="Contact number" type="tel" required autoComplete="tel" /></label>}
      <label>Email address<input name="Email address" type="email" autoComplete="email" /></label>
      {booking && <div className="form-row"><label>Event type<input name="Event type" placeholder="Church service, concert…" /></label><label>Event date<input name="Event date" type="date" /></label></div>}
      {booking && <label>Event location<input name="Event location" placeholder="Town / venue" /></label>}
      <label>{booking ? "Additional message" : "Message"} *<textarea name="Message" rows={4} required /></label>
      <button className="button gold" type="submit">{booking ? "Continue booking on WhatsApp" : "Send message on WhatsApp"}</button>
      <p className="form-note">Your message opens in WhatsApp for you to review and send. It is not emailed or submitted to a website database.</p>
    </form>
  );
}
