import ContactSection from "./components/ContactBox";
import MovingGradient from "./components/MovingGradience";

const ContactPage = () => {
  return (
    <>
        <MovingGradient/>
        <div className="min-h-screen bg-pink-60 flex flex-col items-center pt-32 px-10 pb-16">
        <h2 className="text-5xl font-display2 italic font-bold mb-8 text-center">
            Here's how you can reach me!
        </h2>
        <div className="max-w-5xl text-gray-800 text-xl leading-relaxed space-y-6 text-justify mb-6">
            <p>
            I am always excited to collaborate in meaningful projects. I'd love to connect!
            </p>
        </div>
        <div className="mx-auto w-full max-w-2xl ">
            <ContactSection />
        </div>
        </div>
    </>
  );
};

export default ContactPage;
