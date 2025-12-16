import React from "react";

const ResumePage = () => {
    return (
        <div className="min-h-screen bg-pink-60 flex flex-col items-center justify-center p-10">
            <h2 className="text-5xl font-display italic font-bold mb-8 text-center">
                My Resume
            </h2>
            <div className="flex justify-center">
                <p className="text-gray-600 text-xl text-center max-w-5xl leading-relaxed">
                    "Upload resume"
                </p>
            </div>
        </div>
    );
};

export default ResumePage;