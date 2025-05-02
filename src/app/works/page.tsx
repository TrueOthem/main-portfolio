import Link from "next/link";
import { Button } from "@/components/ui/button";

// Define project data
const projects = [
  {
    id: "project1",
    title: "Green Hydrogen Production Process Optimization",
    category: "processDevelopment",
    company: "Electric Hydrogen",
    year: "2023",
    description:
      "Developed and optimized manufacturing processes for next-generation green hydrogen production, resulting in a 20% improvement in process capability and efficiency.",
    image: "bg-[#f4f4f0]",
  },
  {
    id: "project2",
    title: "Manufacturing Data Architecture System",
    category: "dataArchitecture",
    company: "Electric Hydrogen",
    year: "2023",
    description:
      "Created robust data architectures for real-time data storage and visualization, enhancing project tracking and decision-making across manufacturing operations.",
    image: "bg-[#e8e8e0]",
  },
  {
    id: "project3",
    title: "Production Line Efficiency Enhancement",
    category: "manufacturing",
    company: "Advanced Power Conversion",
    year: "2022",
    description:
      "Improved production line efficiency by 30% through collaboration with R&D teams and implementation of streamlined manufacturing processes.",
    image: "bg-[#f4f4f0]",
  },
  {
    id: "project4",
    title: "Quality Control System Implementation",
    category: "manufacturing",
    company: "Advanced Power Conversion",
    year: "2022",
    description:
      "Designed and implemented a comprehensive quality control system achieving 95% compliance with industry standards for advanced power units.",
    image: "bg-[#e8e8e0]",
  },
  {
    id: "project5",
    title: "CAD-Based Design Optimization",
    category: "designEngineering",
    company: "Advanced Power Conversion",
    year: "2021",
    description:
      "Utilized CAD and SolidWorks to optimize product designs, resulting in 30% improvement in design accuracy and production efficiency.",
    image: "bg-[#f4f4f0]",
  },
  {
    id: "project6",
    title: "Renewable Energy Material Testing",
    category: "rdEngineering",
    company: "NIST",
    year: "2019",
    description:
      "Participated in research projects focused on materials testing for renewable energy applications, gathering and analyzing experimental data.",
    image: "bg-[#e8e8e0]",
  },
];

// Define categories
const categories = [
  { id: "all", label: "All" },
  { id: "processDevelopment", label: "Process Development" },
  { id: "manufacturing", label: "Manufacturing" },
  { id: "designEngineering", label: "Design Engineering" },
  { id: "dataArchitecture", label: "Data Architecture" },
  { id: "rdEngineering", label: "R&D Engineering" },
];

export default function WorksPage() {
  return (
    <>
      {/* Hero Section */}

      {/* Projects Grid */}

      {/* Resume Download Section */}
      <section
        className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]"
        data-oid=".v_.wz6"
      >
        <div
          className="col-span-1 p-8 border-r border-[#d1d1c7]"
          data-oid="gcfqd3a"
        >
          <div className="flex items-center mb-6" data-oid="wgvyxuh">
            <span className="mr-2 text-sm" data-oid="7kn6n26">
              +
            </span>
            <h3 className="text-sm" data-oid="qx4c5r2">
              Resume
            </h3>
          </div>
        </div>
        <div className="col-span-2 p-8 md:p-12" data-oid="9aq.hkd">
          <h2 className="text-3xl md:text-4xl mb-6" data-oid="9rsdg_w">
            My Resume
          </h2>
          <p className="text-muted-foreground mb-8" data-oid="2wjk4lh">
            Download my full resume to learn more about my professional
            experience, skills, and educational background.
          </p>
          <a
            href="/uploads/Mohamed-adil-resume-PSE.pdf"
            download
            data-oid="ssi_1ci"
          >
            <Button className="main-button rounded-full" data-oid="arhloln">
              Download Resume (PDF)
            </Button>
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section
        className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]"
        data-oid="z_0l4f-"
      >
        <div
          className="col-span-1 p-8 border-r border-[#d1d1c7]"
          data-oid="zjr9ygv"
        >
          <div className="flex items-center mb-6" data-oid="k5:9jls">
            <span className="mr-2 text-sm" data-oid="deeizqo">
              +
            </span>
            <h3 className="text-sm" data-oid="qu7h59-">
              Skills
            </h3>
          </div>
        </div>
        <div className="col-span-2 p-8 md:p-12" data-oid="kf7c2:-">
          <h2 className="text-3xl md:text-4xl mb-6" data-oid="zt3828g">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground mb-8" data-oid="zlmhh1e">
            My core technical skills and competencies that I bring to every
            project.
          </p>

          <div className="grid grid-cols-1 gap-8" data-oid="rxe:9k7">
            <div data-oid=".oyi9.a">
              <h3 className="text-xl font-medium mb-4" data-oid="tp2h-t2">
                Engineering
              </h3>
              <div className="flex flex-wrap gap-2" data-oid="1-7tb9v">
                {[
                  "CAD & SolidWorks",
                  "Operations Research",
                  "Process Development",
                  "Manufacturing Systems",
                  "Product Design",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-4 py-2 bg-[#f4f4f0] rounded-full text-sm"
                    data-oid="rtjdr8r"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div data-oid="fej8yi0">
              <h3 className="text-xl font-medium mb-4" data-oid="9:41s.o">
                Data & Programming
              </h3>
              <div className="flex flex-wrap gap-2" data-oid="8myl7yh">
                {[
                  "SQL & Database Design",
                  "Python Development",
                  "Data Analysis & Visualization",
                  "C/C++ Programming",
                  "Machine Learning",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-4 py-2 bg-[#f4f4f0] rounded-full text-sm"
                    data-oid="qfrw4:z"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div data-oid="vma5xrg">
              <h3 className="text-xl font-medium mb-4" data-oid="tvbgno3">
                Management
              </h3>
              <div className="flex flex-wrap gap-2" data-oid="jv2yh4-">
                {[
                  "Project Management",
                  "SCRUM & Agile Methodologies",
                  "Risk Management",
                  "Team Leadership",
                  "Cross-functional Collaboration",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-4 py-2 bg-[#f4f4f0] rounded-full text-sm"
                    data-oid="il_lqp_"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
