import aboutMe from "./assets/about_me4.png";
import MovingGradient from "./components/MovingGradience";

const InfoPage = () => {
  return (
    <>
        <MovingGradient/>
        <div className="min-h-screen bg-pink-60 flex flex-col items-center pt-32 px-10 pb-16">
        <h2 className="text-5xl font-display2 italic font-bold mb-8 text-center">
            About Me
        </h2>
        <div className="p-1 rounded-full bg-gradient-to-r from-[#9ba759] via-[#cfc5b9] to-pink-200 mb-10">
            <img
            src={aboutMe}
            alt="Profile"
            className="w-[180px] h-[180px] md:w-[320px] md:h-[320px] rounded-full object-cover object-[center_10%]"
            />
        </div>
        <div className="max-w-5xl text-gray-800 text-xl leading-relaxed space-y-6 text-justify">
            <p>
            I graduated with a Bachelor's in Business Administration, having a
            double concentration in Marketing and Supply Chain Management. After
            graduating, I spent two years working as a Management Assistant at
            Import Aceros, where I monitored day-to-day operations and helped
            automate several internal processes. One project I worked on involved
            using SAP to predict demand of the products and improve sourcing and
            procurement decisions.
            </p>
            <p>
            This experience showed me first hand how powerful technology and
            automation can be in improving business performance, which motivated
            me to pursue a Master's in Computer Science to complement my business
            background. Now in my second year of the program, I have developed the
            technical skills necessary to build real solutions, such as a recent
            project I worked on were we built web application to manage order
            operations at a microgreens company.
            </p>
            <p>
            As I move forward in computer science, I am excited about
            opportunities that let me grow as a software engineer while allowing
            me to apply my creativity when developing projects and solving real
            life problems. I am also especially interested in AI and I am
            currently working on a project that uses Gemini AI to generate
            insights from consumer financial data.
            </p>
        </div>
        </div>
    </>
  );
};

export default InfoPage;
