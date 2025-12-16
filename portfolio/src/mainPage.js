import React from 'react';
import './App.css';
import profilePic from './assets/ghibli-profile-pic.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import ProjectsPage from './projectsPage';
import InfoPage from './infoPage';
import ContactPage from './contactPage';
import ResumePage from './resumePage';

const MainPage = () => {
    const projectsRef = useRef(null);
    const infoRef = useRef(null);
    const contactRef = useRef(null);
    const resumeRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (projectsRef.current) {
            observer.observe(projectsRef.current);
        }
        else if (infoRef.current) {
            observer.observe(infoRef.current);
        }
        else if (contactRef.current) {
            observer.observe(contactRef.current);
        }
         else if (resumeRef.current) {
            observer.observe(contactRef.current);
        }
        return () => {
            if (projectsRef.current) {
                observer.unobserve(projectsRef.current);
            }
            else if (infoRef.current) {
                observer.unobserve(infoRef.current);
            }
            else if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }
            else if (resumeRef.current) {
                observer.unobserve(contactRef.current);
            }
        };
    }, []);

    return (
        <div className="relative min-h-screen bg-animated-gradient bg-[length:400%_400%] animate-gradientShift px-6">
            <div className="pointer-events-none absolute top-4 left-4 right-4 bottom-4 border border-black z-50" />

            <div className="flex items-center min-h-screen">
                <div className="flex-1 flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-display italic font-semibold text-black mb-4">
                        Mishell Cárdenas Espinosa
                    </h1>
                    <p className="text-pink-400 text-lg font-bodoni italic font-bold mb-4">MS CS Student</p>

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

                        <button
                            onClick={() => infoRef.current.scrollIntoView({ behavior: 'smooth' })}
                            className="text-pink-400 text-2xl font-bodoni font-semibold mb-6 block hover:underline"
                        >
                            Info
                        </button>

                        <button
                            onClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}
                            className="text-pink-400 text-2xl font-bodoni font-semibold mb-6 block hover:underline"
                        >
                            Personal Projects
                        </button>

                        <button
                            onClick={() => resumeRef.current.scrollIntoView({ behavior: 'smooth' })}
                            className="text-pink-400 text-2xl font-bodoni font-semibold mb-6 block hover:underline"
                        >
                            Resume
                        </button>

                        <button
                            onClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}
                            className="text-pink-400 text-2xl font-bodoni font-semibold mb-6 block hover:underline"
                        >
                            Contact
                        </button>

                    </div>
                </div>
            </div>
            <div
                ref={infoRef}
                className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <InfoPage />
            </div>
            <div
                ref={projectsRef}
                className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <ProjectsPage />
            </div>
            <div
                ref={resumeRef}
                className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <ResumePage />
            </div>
            <div
                ref={contactRef}
                className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <ContactPage />
            </div>
        </div>
    );
};

export default MainPage;