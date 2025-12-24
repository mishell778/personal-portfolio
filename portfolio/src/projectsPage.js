import React from "react";
import { FaGithub } from "react-icons/fa";
import Carousel from "./components/Carousel";
import TechPill from "./components/TechPill";
import MovingGradient from "./components/MovingGradience";
import portfolio1 from "./assets/personal_portfolio_1.png";
import portfolio2 from "./assets/personal_portfolio_2.png";
import portfolio3 from "./assets/personal_portfolio_3.png";
import portfolio4 from "./assets/personal_portfolio_4.png";
import portfolio5 from "./assets/personal_portfolio_5.png";
import portfolio6 from "./assets/personal_portfolio_6.png";
import mb1 from "./assets/mb1.png";
import mb2 from "./assets/mb2.png";
import mb3 from "./assets/mb3.png";
import mb4 from "./assets/mb4.png";
import mb5 from "./assets/mb5.png";
import mb6 from "./assets/mb6.png";
import mb7 from "./assets/mb7.png";
import mb8 from "./assets/mb8.png";
import sap1 from "./assets/sap1.png";
import sap2 from "./assets/sap2.png";
import sap3 from "./assets/sap3.png";

const ProjectsPage = () => {
  return (
    <>
      <MovingGradient/>
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 space-y-7 pt-28 pb-28">
        <h2 className="text-5xl font-display2 italic font-bold mb-6">
          My Personal Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          <div className="bg-white p-8 rounded-lg shadow">
            <Carousel images={[portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6]} height="h-58" />
            <h3 className="text-xl font-semibold mb-2 text-center">
              Portfolio Website
            </h3>
            <p>Web based application to showcase my information in my personal portfolio.</p>
            <TechPill tools={["REACT", "JAVSCRIPT", "TAILWIND CSS"]} />
            <div className="flex justify-center mt-4">
              <a
                href="https://github.com/mishell778/personal-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black hover:text-pink-400 transition font-medium"
              >
                <FaGithub size={23} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow">
            <Carousel
              images={[mb1, mb2, mb3, mb4, mb5, mb6, mb7, mb8]}
              height="h-58"
            />
            <h3 className="text-xl font-semibold mb-2 text-center">
              GreenTrack: Microgreens Order Management System
            </h3>
            <p>
              Web based application to help microgreen farms manage their day to
              day operations.
            </p>
            <TechPill
              tools={["PYTHON", "TYPESCRIPT", "REACT", "MYSQL", "FAST API"]}
            />
            <div className="flex justify-center mt-4">
              <a
                href="https://github.com/mishell-cardenas/microgreen_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black hover:text-pink-400 transition font-medium"
              >
                <FaGithub size={23} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <Carousel images={[sap1, sap2, sap3]} height="h-58" />
            <h3 className="text-xl font-semibold mb-2 text-center">
              SAP Logistics Data Integration
            </h3>
            <p>
              Web based application to help steel importing companies manage the
              sourcing and procurement process of the products through SAP
              Business One.
            </p>
            <TechPill
              tools={["REACT", "JAVASCRIPT", "HTML", "CSS", "SAP HANA"]}
            />
            <div className="flex justify-center mt-4">
              <a
                href="https://github.com/mishell778/infoImportaciones"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black hover:text-pink-400 transition font-medium"
              >
                <FaGithub size={23} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          {/* <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2 text-center">Eclát Elan</h3>
            <p>
              This full-stack project is a virtual fashion assistant designed to
              help users discover their ideal fashion style. By allowing users to
              browse and select images from various style categories, the system
              identifies their preferences and provides tailored recommendations.
              It also connects users to online shopping platforms where they can
              purchase clothing items that match their chosen style. Additionally,
              an integrated chatbot offers personalized guidance, helping users
              refine their look and explore new fashion inspirations.
            </p>
            <p>
              <span className="font-bold italic">Tools used: </span>
              React, MySQLWorkbench, Express, HTML, CSS, Javascript
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2 text-center">ProsperaAI</h3>
            <p>
              With ProsperaAI we aimed to develop a finance assitant by helping
              users keep track of their expenses and thus strategize better for
              their budgeting. Through the use of bank and card statements, the
              program is able to determine when, where, and in what categories the
              user spends the most money in. Therefore, if the user has certain
              budgeting goals or wants to cut down expenses, the program is able
              to showcase that information accurately through the use of charts
              and a chatbot. The chatbot in particular is provides the user with
              accurate information from a specific/precise question they might
              have.
            </p>
            <p>
              <span className="font-bold italic">Tools used: </span>
              Typescript
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
