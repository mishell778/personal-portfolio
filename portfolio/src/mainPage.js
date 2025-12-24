import React from "react";
import "./App.css";
import SoftBlobBackground from "./components/SoftBlobBackground";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const MainPage = () => {
  const projectsRef = useRef(null);
  const infoRef = useRef(null);
  const contactRef = useRef(null);
  const resumeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    } else if (infoRef.current) {
      observer.observe(infoRef.current);
    } else if (contactRef.current) {
      observer.observe(contactRef.current);
    } else if (resumeRef.current) {
      observer.observe(contactRef.current);
    }
    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      } else if (infoRef.current) {
        observer.unobserve(infoRef.current);
      } else if (contactRef.current) {
        observer.unobserve(contactRef.current);
      } else if (resumeRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

 
  return (
    <>
      <SoftBlobBackground />
      <div className="relative min-h-screen w-full">
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 space-y-14">
          <h4 className="text-2xl md:text-4xl font-display2 text-black">
            Hi there! I'm <span className="italic font-bold">Mishell</span>.
          </h4>
          <h2
            className="font-formal text-black italic text-[15vw] md:text-[10vw] leading-none tracking-tight">
            Welcome to my website!
          </h2>
          <h4 className="text-xl md:text-3xl font-display2 text-black mt-4">
            I'm a Computer Science student who loves applying my knwoledge{" "}
            <br /> and skills to create <span className="italic font-bold">pretty things</span>!
          </h4>
        </div>
      </div>
    </>
  );
};

export default MainPage;
