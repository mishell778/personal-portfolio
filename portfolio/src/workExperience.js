import { FaBriefcase, FaCode } from "react-icons/fa";
import Timeline from "./components/Timeline";
import MovingGradient from "./components/MovingGradience";

const ExperiencePage = () => {
    const experiences = [
        {
        date: "Dec 2025 – Jan 2026",
        location: "Quito, Ecuador",
        title: "Software Engineer Internship",
        subtitle: "Import Aceros",
        description: "Developed a full-stack application to streamline and enhance inventory sourcing and procurement operations.",
        bullets: [
            "Built a React frontend with PrimeReact components (DataTable, Calendar, Modal, FileUpload) to manage and render 1000+ importation records.", 
            "Implemented robust state management and dynamic form validation in React to capture and track 100+ attributes (contracts, invoices, shipments, payments).",
            "Integrated a Node.js and Express.js backend with SAP HANA APIs, designing RESTful endpoints for secure retrieval of enterprise data."
        ],
        icon: FaCode,
        },
        {
        date: "Aug 2022 – Aug 2024",
        location: "Quito, Ecuador",
        title: "Management Assistant",
        subtitle: "Import Aceros",
        description: "Supported day-to-day operations and helped automate processes, including SAP-based demand planning for procurement.",
        bullets: [
            "Streamlined importation logistics for 100+ product SKUs by tracking shipments and vendor performance in structured datasets, cutting delivery delays by 15% and improving supply chain visibility.",
            "Partnered with the marketing team to analyze engagement metrics and optimize exposure strategies, driving 20% lift in campaign performance and demonstrating cross functional data collaboration.",
            "Developed sourcing and pricing strategies by modeling cost, demand, and competitor data, reducing procurement costs by 10% while maintaining availability in volatile markets.",
            "Pioneered the adoption of a SAP demand forecasting tool, improving demand planning accuracy by 25% and providing leadership with valuable, data-backed insights for inventory sourcing decisions."
        ],
        icon: FaBriefcase,
        },
        {
        date: "Jul 2021 – Dec 2023",
        location: "Boston, MA",
        title: "Marketing Communications Co-Op",
        subtitle: "Amundi",
        description: "Managed financial data validation, coordinated content updates, and launched an ESG training initiative.",
        bullets: [
            "Reorganized the monthly raw data from Morningstar in Excel for release and use of the customer base.", 
            "Oversaw the four-month project of updating 25 wholesaler bios using Workfront while maintaining consistent communication with them regarding the changes to be made.",
            "Evaluated over 20 financial documents using Red Oak to guarantee they had the right financial information and data before they were published.",
            "Initiated the company’s first training course for Environmental, Social and Governance (ESG) Investment through the use Rise 360, improving employee awareness."
        ],
        icon: FaBriefcase,
        },
    ];
    return (
    <>
        <MovingGradient/>
        <div className="min-h-screen bg-pink-60 flex flex-col items-center pt-32 px-10 pb-16">
        <div className="w-full max-w-5xl mb-6 relative">
            <h2 className="text-5xl font-display2 italic font-bold text-center">
            My Work Experience
            </h2>
        </div>
        <Timeline title="" items={experiences} />
        </div>
    </>
  );
};

export default ExperiencePage;
