import { useState } from "react";
import "./ContactSection.css";
import call__icon from "../../../public/icons/call__icon.svg";
import email__icon from "../../../public/icons/email__icon.svg";
import address__icon from "../../../public/icons/address__icon.svg";
export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const TOKEN = "8611767351:AAH3B_Jyzghzc1AMEKO1U8cJIQd8w-_4qS4";
  const CHAT_ID = "5644197936";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = `
🆕 Yangi murojaat:
👤 Ism: ${form.name}
📧 Email: ${form.email}
💬 Xabar: ${form.message}
`;
    try {
      await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
        }),
      });
      alert("Yuborildi ✅");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      alert("Xatolik ❌");
    }
  };
  return (
    <section id="contact" className="w-full bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Find us</h2>

          <div className="space-y-4">
           <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]  hover:translate-x-1 transition-all duration-300">

              <img src={call__icon} alt="icon" />
              <div>
                <p className="font-semibold">Call Us</p>
                <p className="text-gray-500 text-sm">+(08) 255 201 888</p>
              </div>
            </div>
           <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] hover:translate-x-1 transition-all duration-300">

              <img src={email__icon} alt="icon" />
              <div>
                <p className="font-semibold">Email Now</p>
                <p className="text-gray-500 text-sm">Hello@procleaning.com</p>
              </div>
            </div>
           <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]    hover:translate-x-1 transition-all duration-300">

              <img src={address__icon} alt="icon" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-500 text-sm">
                  7510, Brand Tower, New York, USA
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-2">Contact info</p>
          <h2 className="text-3xl font-semibold mb-4">Keep In Touch</h2>
          <p className="text-gray-500 mb-6">
            We prioritize responding to your inquiries promptly
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full p-3 rounded-lg border border-gray-500 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full p-3 rounded-lg border border-gray-500 outline-none"
              required
            />
            <textarea
              placeholder="Message"
              rows="4"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full p-3 rounded-lg border border-gray-500 outline-none"
              required
            />
             <button
              type="submit"
              className="bg-[#36B864] text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}