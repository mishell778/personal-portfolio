import { Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const FORMSPREE_URL = "https://formspree.io/f/mvzpldyq";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setIsPending(true);

    if (!formData.fullname || !formData.email || !formData.message) {
      setStatus({
        success: false,
        message: "Please fill in all required fields.",
      });
      setIsPending(false);
      return;
    }

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.fullname,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!res.ok) {
        setStatus({ success: false, message: "Something went wrong. Please try again." });
        setIsPending(false);
        return;
      }

      setStatus({ success: true, message: "Message sent successfully!" });
    } catch (err) {
      setStatus({ success: false, message: "Network error. Please try again." });
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    if (status?.success) {
      setFormData({
        fullname: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  }, [status?.success]);

  return (
    <section
      id="contact"
      className="mx-auto grid max-w-6xl grid-cols-1 gap-16 rounded-3xl 
             bg-white/60 backdrop-blur-lg border border-white/30 
             p-8 shadow-xl"
    >
      {status?.success ? (
        <p className="self-center text-center text-2xl font-medium text-indigo-600">
          {status.message}
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mx-auto w-full max-w-2xl space-y-6"
        >
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[#344054]">
              Full name *
            </label>
            <input
              type="text"
              name="fullname"
              required
              placeholder="Your name here"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#D0D5DD] px-4 py-2.5 text-gray-700 placeholder:text-[#667085] focus:border-blue-200 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-[#344054]">
              Email address *
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Your email address here"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#D0D5DD] px-4 py-2.5 text-gray-700 placeholder:text-[#667085] focus:border-blue-200 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-[#344054]">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Your subject here"
              value={formData.subject}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#D0D5DD] px-4 py-2.5 text-gray-700 placeholder:text-[#667085] focus:border-blue-200 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-[#344054]">
              Message *
            </label>
            <textarea
              name="message"
              required
              rows={7}
              placeholder="Your message here"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#D0D5DD] px-4 py-2.5 text-gray-700 placeholder:text-[#667085] focus:border-blue-200 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            />
          </div>

          {!status?.success && status?.message && (
            <p className="my-2 font-light text-red-600">{status.message}</p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="mt-3 w-full rounded-lg bg-pink-400 px-4 py-2.5 font-medium text-white transition hover:bg-pink-300 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            {isPending ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactSection;
