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
      <section
        className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]"
        data-oid="u.880qy"
      >
        <div
          className="col-span-1 p-8 border-r border-[#d1d1c7]"
          data-oid="rc6x-1r"
        >
          <div className="flex items-center mb-6" data-oid="3spm6t4">
            <span className="mr-2 text-sm" data-oid="-k0zgp5">
              +
            </span>
            <h3 className="text-sm" data-oid="utuyett">
              Professional Work
            </h3>
          </div>
        </div>
        <div className="col-span-2 p-8 md:p-12" data-oid="tfbzkd4">
          <h1
            className="text-3xl md:text-5xl font-medium mb-6"
            data-oid="t6ybnzw"
          >
            My Creative Works
          </h1>
          <p className="text-muted-foreground mb-8" data-oid="rro_57d">
            A selection of my professional work and projects across different
            industries, focusing on process development, manufacturing
            optimization, and engineering design.
          </p>

          {/* Project Categories Navigation - Client side filtering will be added in a future version */}
          <div className="flex flex-wrap gap-2 mb-8" data-oid="csv._ux">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 text-sm rounded-full border border-[#d1d1c7] ${
                  category.id === "all"
                    ? "bg-[#0f0f0f] text-white"
                    : "hover:bg-[#f4f4f0]"
                }`}
                data-oid="rdxz6g8"
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section
        className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-[#d1d1c7] works-grid"
        data-testid="works-grid"
        data-oid="xp9cbnl"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="work-item border-r border-b border-[#d1d1c7] p-6 flex flex-col"
            data-testid="work-item"
            data-oid="r7nz68o"
          >
            <div
              className={`${project.image} w-full aspect-video flex items-center justify-center mb-6`}
              data-oid="8zo1u77"
            >
              <span className="text-lg font-medium" data-oid="26ms-w:">
                {project.title.substring(0, 2)}
              </span>
            </div>
            <h3 className="text-xl font-medium mb-2" data-oid="4l6b-uh">
              {project.title}
            </h3>
            <div
              className="flex justify-between mb-4 text-sm text-muted-foreground"
              data-oid="rlqm_qf"
            >
              <span data-oid="x:c2vqd">{project.company}</span>
              <span data-oid="bl6ex8t">{project.year}</span>
            </div>
            <p
              className="text-sm text-muted-foreground mb-6 flex-grow"
              data-oid="5m30h7d"
            >
              {project.description}
            </p>
            <div data-oid="7d:l8a9">
              <Button
                variant="outline"
                className="text-sm w-full"
                data-oid="rpl1arc"
              >
                View Details
              </Button>
            </div>
          </div>
        ))}
      </section>

      {/* Resume Download Section */}
      <section
        className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]"
        data-oid="ax8l1ud"
      >
        <div
          className="col-span-1 p-8 border-r border-[#d1d1c7]"
          data-oid="895mmq4"
        >
          <div className="flex items-center mb-6" data-oid="8tg_git">
            <span className="mr-2 text-sm" data-oid="-6t4utv">
              +
            </span>
            <h3 className="text-sm" data-oid="k_4fie8">
              Resume
            </h3>
          </div>
        </div>
        <div className="col-span-2 p-8 md:p-12" data-oid="y7zhnz:">
          <h2 className="text-3xl md:text-4xl mb-6" data-oid="8:izy:d">
            My Resume
          </h2>
          <p className="text-muted-foreground mb-8" data-oid="ka12n_b">
            Download my full resume to learn more about my professional
            experience, skills, and educational background.
          </p>
          <a
            href="/uploads/Mohamed-adil-resume-PSE.pdf"
            download
            data-oid=":duxb9v"
          >
            <Button className="main-button rounded-full" data-oid="r0_9tln">
              Download Resume (PDF)
            </Button>
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section
        className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]"
        data-oid="k1-yzda"
      >
        <div
          className="col-span-1 p-8 border-r border-[#d1d1c7]"
          data-oid="unzr-qq"
        >
          <div className="flex items-center mb-6" data-oid="l8ujkhp">
            <span className="mr-2 text-sm" data-oid="zykpe7q">
              +
            </span>
            <h3 className="text-sm" data-oid="f6hs168">
              Skills
            </h3>
          </div>
        </div>
        <div className="col-span-2 p-8 md:p-12" data-oid="b3fg7eq">
          <h2 className="text-3xl md:text-4xl mb-6" data-oid="jbcn72o">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground mb-8" data-oid="x0casdj">
            My core technical skills and competencies that I bring to every
            project.
          </p>

          <div className="grid grid-cols-1 gap-8" data-oid="zhopusz">
            <div data-oid="ruf7fj8">
              <h3 className="text-xl font-medium mb-4" data-oid="tn3z7gl">
                Engineering
              </h3>
              <div className="flex flex-wrap gap-2" data-oid=":bdanxl">
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
                    data-oid="oskip32"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div data-oid="5zjlksu">
              <h3 className="text-xl font-medium mb-4" data-oid="258m5au">
                Data & Programming
              </h3>
              <div className="flex flex-wrap gap-2" data-oid="7glux:h">
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
                    data-oid="m:h13.v"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div data-oid="t5q8ldw">
              <h3 className="text-xl font-medium mb-4" data-oid="0d1eyzk">
                Management
              </h3>
              <div className="flex flex-wrap gap-2" data-oid="9hvecdg">
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
                    data-oid="w75noyc"
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
