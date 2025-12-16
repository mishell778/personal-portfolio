import React from "react";

const ProjectsPage = () => {
  return (
    //<div className="min-h-screen bg-white flex flex-col items-center justify-center p-10">
    // turn the words in tools used into images when there's wifi
    <div className="min-h-screen bg-pink-60 flex flex-col items-center justify-center p-10">
      <h2 className="text-5xl font-display italic font-bold mb-6">Personal Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2 text-center">Portfolio Website</h3>
          <p>This personal website built with React and Tailwind CSS.</p>
          <p>
            <span className="font-bold italic">Tools used: </span>
            React and Tailwind CSS
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2 text-center">Eclát Elan</h3>
          <p>This full-stack project is a virtual fashion assistant designed to help users discover their 
            ideal fashion style. By allowing users to browse and select images from various style categories, 
            the system identifies their preferences and provides tailored recommendations. 
            It also connects users to online shopping platforms where they can purchase clothing 
            items that match their chosen style. Additionally, an integrated chatbot offers personalized 
            guidance, helping users refine their look and explore new fashion inspirations.
          </p>
          <p>
            <span className="font-bold italic">Tools used: </span>
            React, MySQLWorkbench, Express, HTML, CSS, Javascript
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2 text-center">SAP Logistics Data Integration</h3>
          <p>As an Ecuadorian steel importing company, Import Aceros requires detailed and concise information of thier 
            importation orders. Throguh the use of SAP's databse, I developed this full stack project to ensure such information
            could be easily accessible and displayed. 
          </p>
          <p>
            <span className="font-bold italic">Tools used: </span>
            Tools used: React, Postman,  HTML, CSS, Javascript
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2 text-center">ProsperaAI</h3>
          <p>With ProsperaAI we aimed to develop a finance assitant by helping users keep track of their expenses and thus
            strategize better for their budgeting. Through the use of bank and card statements, the program is able to determine
            when, where, and in what categories the user spends the most money in. Therefore, if the user has certain budgeting goals
            or wants to cut down expenses, the program is able to showcase that information accurately through the use of charts and 
            a chatbot. The chatbot in particular is provides the user with accurate information from a specific/precise question they 
            might have. 
          </p>
          <p>
            <span className="font-bold italic">Tools used: </span>
            Typescript
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;