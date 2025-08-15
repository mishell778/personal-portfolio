import React from 'react';
import './App.css'; 
import profilePic from './assets/ghibli-profile-pic.png'

const MainPage = () => {
    return (
        <div className="relative min-h-screen bg-animated-gradient bg-[length:400%_400%] animate-gradientShift px-6">
            <div className="pointer-events-none absolute top-4 left-4 right-4 bottom-4 border border-black z-50" />

            <div className="flex items-center min-h-screen">
                <div className="flex-1 flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-display italic font-semibold text-black mb-4">Mishell Cárdenas Espinosa</h1> 
                    <p className="text-pink-400 font-bodoni italic font-semibold mb-4">MS CS Student</p>

                    <img
                        src={profilePic}
                        alt="Happy group"
                        className="max-w-xs md:max-w-sm w-full h-auto rounded-3xl object-cover"
                    />
                </div>

                <div className="flex-1 flex justify-center text-left">
                    <div>
                        <h1 className="text-7xl font-display italic font-semibold text-black leading-tight mb-4">
                            Welcome<br />To My Website
                        </h1>
                        <p className="text-pink-400 font-bodoni italic font-semibold mb-6">Projects</p>
                        <p className="text-pink-400 font-bodoni italic font-semibold mb-6">Info</p>
                        <p className="text-pink-400 font-bodoni italic font-semibold mb-6">Contact</p>
                        <p className="text-gray-600 font-philosopher font-semibold mb-6">
                            I am second year student persuing a masters in Computer Science.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default MainPage;
