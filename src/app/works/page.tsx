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
        data-oid="xt-wkup"
      >
        <div
          className="col-span-1 p-8 border-r border-[#d1d1c7]"
          data-oid="v56d3.x"
        >
          <div className="flex items-center mb-6" data-oid="a7:htc9">
            <span className="mr-2 text-sm" data-oid="t4vovk:">
              +
            </span>
            <h3 className="text-sm" data-oid="thuvoh5">
              Resume
            </h3>
          </div>
        </div>
        <div className="col-span-2 p-8 md:p-12" data-oid="_puvvpb">
          <h2 className="text-3xl md:text-4xl mb-6" data-oid="mvmsz3n">
            My Resume
          </h2>
          <p className="text-muted-foreground mb-8" data-oid="su.pbkb">
            Download my full resume to learn more about my professional
            experience, skills, and educational background.
          </p>
          <a
            href="/uploads/Mohamed-adil-resume-PSE.pdf"
            download
            data-oid="-vebmu8"
          >
            <Button className="main-button rounded-full" data-oid="599-3wr">
              Download Resume (PDF)
            </Button>
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section
        className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]"
        data-oid=".ouozgt"
      >
        <div
          className="col-span-1 p-8 border-r border-[#d1d1c7]"
          data-oid="083w6an"
        >
          <div className="flex items-center mb-6" data-oid="cxjh96g">
            <span className="mr-2 text-sm" data-oid="sw_ez-5">
              +
            </span>
            <h3 className="text-sm" data-oid=".rns3v8">
              Skills
            </h3>
          </div>
        </div>
        <div className="col-span-2 p-8 md:p-12" data-oid="945_5rd">
          <h2 className="text-3xl md:text-4xl mb-6" data-oid="quolv2c">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground mb-8" data-oid="c4y:.li">
            My core technical skills and competencies that I bring to every
            project.
          </p>

          <div className="grid grid-cols-1 gap-8" data-oid="_:-e3x8">
            <div data-oid="muwt5y2">
              <h3 className="text-xl font-medium mb-4" data-oid="a9h_kp8">
                Engineering
              </h3>
              <div className="flex flex-wrap gap-2" data-oid="tvy63k7">
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
                    data-oid="nodc3:_"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div data-oid="w7ld5sf">
              <h3 className="text-xl font-medium mb-4" data-oid="vdg181_">
                Data & Programming
              </h3>
              <div className="flex flex-wrap gap-2" data-oid="nm9r_o5">
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
                    data-oid="68p5al9"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div data-oid="jg8s5_x">
              <h3 className="text-xl font-medium mb-4" data-oid="0kbqe8u">
                Management
              </h3>
              <div className="flex flex-wrap gap-2" data-oid="03p9cjh">
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
                    data-oid=":pzh31u"
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
