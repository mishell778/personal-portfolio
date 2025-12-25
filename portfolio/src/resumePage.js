import MovingGradient from "./components/MovingGradience";

const ResumePage = () => {
  const pdfPath = `${process.env.PUBLIC_URL}/cardenas_espinosa_resume.pdf`;

  return (
    <>
        <MovingGradient/>
        <div className="min-h-screen bg-pink-60 flex flex-col items-center pt-32 px-10 pb-16">
        <div className="w-full max-w-5xl mb-6 relative">
            <h2 className="text-5xl font-display2 italic font-bold text-center">
            My Resume
            </h2>
            
        </div>
        <div className="w-full max-w-5xl h-[80vh] rounded-xl overflow-hidden shadow bg-white">
            <iframe src={pdfPath} title="Resume PDF" className="w-full h-full" />
        </div>
        </div>
    </>
  );
};

export default ResumePage;
