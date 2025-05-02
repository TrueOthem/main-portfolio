import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7] about-section"
        data-testid="about-section"
        data-oid="sws_gge"
      >
        <div
          className="col-span-1 border-r border-[#d1d1c7] flex flex-col justify-center p-8"
          data-oid="qtsy5h8"
        >
          <h3 className="text-lg mb-2" data-oid="_sdk4w_">
            About Me
          </h3>
          <h1
            className="text-3xl md:text-4xl font-medium mb-6"
            data-oid=":pnx-uy"
          >
            Mohamed Adil Al Sabri
          </h1>
          <p className="text-lg mb-8" data-oid="lf-vf6p">
            Process Development Engineer
          </p>

          <Link href="/contact" data-oid="k3bpgw4">
            <Button className="main-button rounded-full" data-oid=":q_k8te">
              Get in Touch
            </Button>
          </Link>
        </div>
        <div className="col-span-2 p-8 md:p-12" data-oid="f2ptvzu">
          <p className="text-lg mb-6" data-oid="t5mu46p">
            I'm a passionate Process Development Engineer with expertise in
            green hydrogen production and manufacturing optimization. My journey
            in engineering combines technical knowledge, hands-on experience,
            and data-driven problem-solving to create efficient, scalable
            manufacturing processes.
          </p>
          <p className="text-lg mb-6" data-oid="5ormp:5">
            With a background in Mechanical Engineering and experience across
            multiple industries, I focus on enhancing process capabilities
            through statistical tools and innovative approaches. My goal is to
            bridge the gap between engineering theory and practical applications
            to create sustainable, efficient production systems.
          </p>
        </div>
      </section>

      {/* Career Path Section */}
      <section
        className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]"
        data-oid="narwa08"
      >
        <div
          className="col-span-1 p-8 border-r border-[#d1d1c7]"
          data-oid="66g1.g3"
        >
          <div className="flex items-center mb-6" data-oid="crirl7f">
            <span className="mr-2 text-sm" data-oid="7vnm8.w">
              +
            </span>
            <h3 className="text-sm" data-oid="8gajand">
              Work Experience
            </h3>
          </div>
        </div>
        <div className="col-span-2 p-8" data-oid="c8ot192">
          <h2 className="text-3xl md:text-4xl mb-6" data-oid="2p3qhb_">
            My Career Path
          </h2>
          <p className="text-muted-foreground mb-12" data-oid="j6shbp4">
            With experience spanning multiple companies and roles, I've
            developed expertise in process development, manufacturing
            engineering, and project management across various industries.
          </p>

          <div className="space-y-12" data-oid="gn70_rf">
            <div
              className="border-l-4 border-[#d1d1c7] pl-6 relative"
              data-oid="jl-sgq8"
            >
              <div
                className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"
                data-oid="6j8n5r2"
              ></div>
              <h3 className="text-xl font-medium mb-1" data-oid="s7pv02j">
                Process Development Engineer
              </h3>
              <p
                className="text-sm text-muted-foreground mb-1"
                data-oid="rp:d1sy"
              >
                Electric Hydrogen - Boston, MA, USA
              </p>
              <p
                className="text-sm text-muted-foreground mb-4"
                data-oid="0dm-l73"
              >
                January 2023 - Present
              </p>
              <ul
                className="text-sm mb-6 list-disc pl-5 space-y-2"
                data-oid="kero6::"
              >
                <li data-oid="-9lhybs">
                  Led the development of scalable manufacturing processes for
                  next-generation green hydrogen production technologies.
                </li>
                <li data-oid="1z3zi3i">
                  Enhanced process capability by 20% through statistical
                  analysis and optimization of key production parameters.
                </li>
                <li data-oid="dlo1e2k">
                  Integrated cutting-edge technology into production processes
                  by collaborating with suppliers and vendors.
                </li>
                <li data-oid="vb9ti1d">
                  Improved decision-making and stakeholder communication through
                  detailed data analysis and actionable recommendations.
                </li>
                <li data-oid="z8z8d3f">
                  Developed robust data architectures for real-time data storage
                  and visualization to enhance project tracking.
                </li>
                <li data-oid="-bt3o3q">
                  Increased production efficiency by 15% through implementing
                  continuous improvement methodologies.
                </li>
              </ul>
            </div>

            <div
              className="border-l-4 border-[#d1d1c7] pl-6 relative"
              data-oid="3hibqgd"
            >
              <div
                className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"
                data-oid="03_ir0-"
              ></div>
              <h3 className="text-xl font-medium mb-1" data-oid="5rf9y3u">
                Manufacturing Engineer
              </h3>
              <p
                className="text-sm text-muted-foreground mb-1"
                data-oid="y0ldk6."
              >
                Advanced Power Conversion - Colorado, USA
              </p>
              <p
                className="text-sm text-muted-foreground mb-4"
                data-oid=":u.glmj"
              >
                January 2022 - December 2023
              </p>
              <ul
                className="text-sm mb-6 list-disc pl-5 space-y-2"
                data-oid="ggu9fqw"
              >
                <li data-oid="yvk1wtk">
                  Enhanced product lifecycle management by 20% utilizing
                  hands-on machining and efficient feedback mechanisms.
                </li>
                <li data-oid="-o_xhh0">
                  Reduced development iterations by 30% through collaboration
                  with the R&D team on design improvements.
                </li>
                <li data-oid="f:par03">
                  Achieved 95% quality control compliance by analyzing
                  production units against established standards.
                </li>
                <li data-oid="wj_4r83">
                  Facilitated cross-functional transformation in manufacturing
                  processes to increase team efficiency.
                </li>
                <li data-oid="cfs14s:">
                  Managed diverse engineering projects from conception to
                  production, ensuring alignment with business goals.
                </li>
              </ul>
            </div>

            <div
              className="border-l-4 border-[#d1d1c7] pl-6 relative"
              data-oid="0b0_5p0"
            >
              <div
                className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"
                data-oid="lt.52w1"
              ></div>
              <h3 className="text-xl font-medium mb-1" data-oid="76prias">
                Application Engineer
              </h3>
              <p
                className="text-sm text-muted-foreground mb-1"
                data-oid="ao:.03w"
              >
                Advanced Power Conversion - Barre, VT, USA
              </p>
              <p
                className="text-sm text-muted-foreground mb-4"
                data-oid="-i_quzd"
              >
                June 2021 - December 2021
              </p>
              <ul
                className="text-sm mb-6 list-disc pl-5 space-y-2"
                data-oid="4zrzjcs"
              >
                <li data-oid="j4k6d0_">
                  Provided engineering support for customer applications,
                  resolving technical issues and enhancing product performance.
                </li>
                <li data-oid="88ahkah">
                  Conducted field testing and validation of new products in
                  real-world environments.
                </li>
                <li data-oid="ptln4gd">
                  Collaborated with sales teams to communicate technical
                  specifications to customers.
                </li>
                <li data-oid="em:x_t7">
                  Documented application requirements and created user manuals
                  for new product releases.
                </li>
              </ul>
            </div>

            <div
              className="border-l-4 border-[#d1d1c7] pl-6 relative"
              data-oid="cia2kdr"
            >
              <div
                className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"
                data-oid="y4lsned"
              ></div>
              <h3 className="text-xl font-medium mb-1" data-oid="wzfatd8">
                Engineering Staff
              </h3>
              <p
                className="text-sm text-muted-foreground mb-1"
                data-oid="2_xj.6u"
              >
                CU BOULDER - Boulder, CO, USA
              </p>
              <p
                className="text-sm text-muted-foreground mb-4"
                data-oid="h.c6c6z"
              >
                January 2020 - May 2021
              </p>
              <ul
                className="text-sm mb-6 list-disc pl-5 space-y-2"
                data-oid="qq6o2k-"
              >
                <li data-oid="wr3z82m">
                  Assisted faculty with research projects focused on renewable
                  energy technologies.
                </li>
                <li data-oid="kbjm8t_">
                  Developed lab procedures for engineering students and provided
                  technical guidance.
                </li>
                <li data-oid="f4vqt7i">
                  Maintained laboratory equipment and ensured safety protocols
                  were followed.
                </li>
              </ul>
            </div>

            <div
              className="border-l-4 border-[#d1d1c7] pl-6 relative"
              data-oid="-sjt:.k"
            >
              <div
                className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"
                data-oid="5woo7ks"
              ></div>
              <h3 className="text-xl font-medium mb-1" data-oid="u9pu5:p">
                R&D Engineering Intern
              </h3>
              <p
                className="text-sm text-muted-foreground mb-1"
                data-oid="qfc4jb."
              >
                NIST - Boulder, CO, USA
              </p>
              <p
                className="text-sm text-muted-foreground mb-4"
                data-oid="ccnqu51"
              >
                May 2019 - August 2019
              </p>
              <ul
                className="text-sm mb-6 list-disc pl-5 space-y-2"
                data-oid="2q5g079"
              >
                <li data-oid="s6x4ddk">
                  Participated in research projects focused on materials testing
                  for renewable energy applications.
                </li>
                <li data-oid="4t371-l">
                  Conducted laboratory experiments and collected data for
                  analysis.
                </li>
                <li data-oid="od4lv3u">
                  Assisted senior engineers with documentation and reporting of
                  research findings.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12" data-oid="l68ou83">
            <Link href="/contact" data-oid="rgbby67">
              <Button className="main-button rounded-full" data-oid="mpu6a83">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]"
        data-oid="yisfzln"
      >
        <div
          className="col-span-1 p-8 border-r border-[#d1d1c7]"
          data-oid="jafwj.y"
        >
          <div className="flex items-center mb-6" data-oid="wpi31ck">
            <span className="mr-2 text-sm" data-oid="948eatb">
              +
            </span>
            <h3 className="text-sm" data-oid="5l.7wt8">
              Skills
            </h3>
          </div>
        </div>
        <div className="col-span-2 p-8" data-oid="z7zlsp0">
          <h2 className="text-3xl md:text-4xl mb-12" data-oid="6sxq3hu">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 gap-12" data-oid="ults3bd">
            <div data-oid="mqp:z5b">
              <h3
                className="text-xl font-medium mb-6 pb-2 border-b border-[#d1d1c7]"
                data-oid="ltjf_-a"
              >
                Engineering
              </h3>
              <div className="flex flex-wrap gap-3" data-oid="-8xc6.7">
                {[
                  "CAD",
                  "SolidWorks",
                  "Product Design",
                  "Operations Research",
                  "Process Development",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-[#f4f4f0] rounded-full text-sm"
                    data-oid="tg8aq:f"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div data-oid="c0782t7">
              <h3
                className="text-xl font-medium mb-6 pb-2 border-b border-[#d1d1c7]"
                data-oid="ujddkr9"
              >
                Data & Technology
              </h3>
              <div className="flex flex-wrap gap-3" data-oid="e3j0so1">
                {[
                  "SQL",
                  "Python",
                  "Data Analysis",
                  "Data Science",
                  "Machine Learning",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-[#f4f4f0] rounded-full text-sm"
                    data-oid="25gahhu"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div data-oid="33ufzv5">
              <h3
                className="text-xl font-medium mb-6 pb-2 border-b border-[#d1d1c7]"
                data-oid="q3s.0og"
              >
                Project Management
              </h3>
              <div className="flex flex-wrap gap-3" data-oid="35cc3ht">
                {[
                  "SCRUM",
                  "JIRA",
                  "Risk Management",
                  "Communication",
                  "Problem Solving",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-[#f4f4f0] rounded-full text-sm"
                    data-oid="ehctw_3"
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
