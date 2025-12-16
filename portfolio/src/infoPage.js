import React from "react";

const InfoPage = () => {
    return (
        <div className="min-h-screen bg-pink-60 flex flex-col items-center justify-center p-10">
            <h2 className="text-5xl font-display italic font-bold mb-8 text-center">
                About Me
            </h2>
            <div className="flex justify-center">
                <p className="text-gray-600 text-xl text-center max-w-5xl leading-relaxed">
                    I recently completed my first year as a master's student in Computer Science at Northeastern University.
                    During this time, I have had the opportunity to refine and expand my knowledge in CS, nurturing my interest
                    in AI and data handling as I begin to explore which area of specialization I want to pursue.
                    It has been exciting to develop full-stack projects using the skills I have acquired, especially when I
                    can combine that knowledge with personal interests such as fashion and finance.<br />
                    I look forward to future opportunities that will help me grow as a software engineer while allowing me
                    to apply my creativity when developing projects or solving problems.
                </p>
            </div>
        </div>
    );
};

export default InfoPage;