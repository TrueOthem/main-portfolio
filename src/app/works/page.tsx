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
        data-oid="q.717xa"
      >
        <div
          className="col-span-1 p-8 border-r border-[#d1d1c7]"
          data-oid="15_ly1d"
        >
          <div className="flex items-center mb-6" data-oid=":g.e3s4">
            <span className="mr-2 text-sm" data-oid="upjziag">
              +
            </span>
            <h3 className="text-sm" data-oid="l5rtc25">
              Professional Work
            </h3>
          </div>
        </div>
        <div className="col-span-2 p-8 md:p-12" data-oid="50whblw">
          <h1
            className="text-3xl md:text-5xl font-medium mb-6"
            data-oid="yj_gwii"
          >
            My Creative Works
          </h1>
          <p className="text-muted-foreground mb-8" data-oid="9xp1xty">
            A selection of my professional work and projects across different
            industries, focusing on process development, manufacturing
            optimization, and engineering design.
          </p>

          {/* Project Categories Navigation - Client side filtering will be added in a future version */}
          <div className="flex flex-wrap gap-2 mb-8" data-oid="mp07xv8">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 text-sm rounded-full border border-[#d1d1c7] ${
                  category.id === "all"
                    ? "bg-[#0f0f0f] text-white"
                    : "hover:bg-[#f4f4f0]"
                }`}
                data-oid="qqll2kr"
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
        data-oid="zm_ev.."
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="work-item border-r border-b border-[#d1d1c7] p-6 flex flex-col"
            data-testid="work-item"
            data-oid="92um.bl"
          >
            <div
              className={`${project.image} w-full aspect-video flex items-center justify-center mb-6`}
              data-oid="q7-gci_"
            >
              <span className="text-lg font-medium" data-oid="22i3kmt">
                {project.title.substring(0, 2)}
              </span>
            </div>
            <h3 className="text-xl font-medium mb-2" data-oid=".l.3_l9">
              {project.title}
            </h3>
            <div
              className="flex justify-between mb-4 text-sm text-muted-foreground"
              data-oid="voq.1yx"
            >
              <span data-oid="75y05x-">{project.company}</span>
              <span data-oid="exuja3c">{project.year}</span>
            </div>
            <p
              className="text-sm text-muted-foreground mb-6 flex-grow"
              data-oid="aq:pzi4"
            >
              {project.description}
            </p>
            <div data-oid="q:ac4hi">
              <Button
                variant="outline"
                className="text-sm w-full"
                data-oid="j:3ojlh"
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
        data-oid="wrzdsdt"
      >
        <div
          className="col-span-1 p-8 border-r border-[#d1d1c7]"
          data-oid="yli0gbx"
        >
          <div className="flex items-center mb-6" data-oid="dp3-v6.">
            <span className="mr-2 text-sm" data-oid="rjw:.tf">
              +
            </span>
            <h3 className="text-sm" data-oid="a0apmm5">
              Resume
            </h3>
          </div>
        </div>
        <div className="col-span-2 p-8 md:p-12" data-oid="v7mz.:a">
          <h2 className="text-3xl md:text-4xl mb-6" data-oid="e1atr0s">
            My Resume
          </h2>
          <p className="text-muted-foreground mb-8" data-oid="v_8c_x4">
            Download my full resume to learn more about my professional
            experience, skills, and educational background.
          </p>
          <a
            href="/uploads/Mohamed-adil-resume-PSE.pdf"
            download
            data-oid="d5jier1"
          >
            <Button className="main-button rounded-full" data-oid="hoe7tkb">
              Download Resume (PDF)
            </Button>
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section
        className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]"
        data-oid="mvsrsiw"
      >
        <div
          className="col-span-1 p-8 border-r border-[#d1d1c7]"
          data-oid="a2::6fn"
        >
          <div className="flex items-center mb-6" data-oid="u:8kmx2">
            <span className="mr-2 text-sm" data-oid="17z--4b">
              +
            </span>
            <h3 className="text-sm" data-oid="we8:6vo">
              Skills
            </h3>
          </div>
        </div>
        <div className="col-span-2 p-8 md:p-12" data-oid="zl7yar1">
          <h2 className="text-3xl md:text-4xl mb-6" data-oid="5h9lflv">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground mb-8" data-oid="mk4vyd6">
            My core technical skills and competencies that I bring to every
            project.
          </p>

          <div className="grid grid-cols-1 gap-8" data-oid="nsdd8rf">
            <div data-oid="aufm-.u">
              <h3 className="text-xl font-medium mb-4" data-oid="0sxfw2s">
                Engineering
              </h3>
              <div className="flex flex-wrap gap-2" data-oid=".66y0lz">
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
                    data-oid="nv8y:y4"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div data-oid="fk.39z0">
              <h3 className="text-xl font-medium mb-4" data-oid="1:a0r6e">
                Data & Programming
              </h3>
              <div className="flex flex-wrap gap-2" data-oid="sbb-4l-">
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
                    data-oid="_n-b35s"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div data-oid="o:_7ogr">
              <h3 className="text-xl font-medium mb-4" data-oid="0c0:jr0">
                Management
              </h3>
              <div className="flex flex-wrap gap-2" data-oid="0na8lri">
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
                    data-oid="judb3rc"
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
