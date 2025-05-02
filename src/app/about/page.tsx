import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7] about-section"
        data-testid="about-section"
        data-oid="2_ufn6c"
      >
        <div
          className="col-span-1 border-r border-[#d1d1c7] flex flex-col justify-center p-8"
          data-oid="zuazf-p"
        >
          <h3 className="text-lg mb-2" data-oid="qc0a01b">
            About Me
          </h3>
          <h1
            className="text-3xl md:text-4xl font-medium mb-6"
            data-oid="0hrpv:."
          >
            Mohamed Adil Al Sabri
          </h1>
          <p className="text-lg mb-8" data-oid="sg6xejm">
            Process Development Engineer
          </p>

          <Link href="/contact" data-oid="jvxsu23">
            <Button className="main-button rounded-full" data-oid="5avl6w4">
              Get in Touch
            </Button>
          </Link>
        </div>
        <div className="col-span-2 p-8 md:p-12" data-oid="l51vmj7">
          <p className="text-lg mb-6" data-oid="1e9y50v">
            I'm a passionate Process Development Engineer with expertise in
            green hydrogen production and manufacturing optimization. My journey
            in engineering combines technical knowledge, hands-on experience,
            and data-driven problem-solving to create efficient, scalable
            manufacturing processes.
          </p>
          <p className="text-lg mb-6" data-oid=":enw4c8">
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
        data-oid="zg:q.0_"
      >
        <div
          className="col-span-1 p-8 border-r border-[#d1d1c7]"
          data-oid="n-cyw6i"
        >
          <div className="flex items-center mb-6" data-oid="pvr6nw7">
            <span className="mr-2 text-sm" data-oid="q5.s235">
              +
            </span>
            <h3 className="text-sm" data-oid="glu4921">
              Work Experience
            </h3>
          </div>
        </div>
        <div className="col-span-2 p-8" data-oid="9qgr7x2">
          <h2 className="text-3xl md:text-4xl mb-6" data-oid="wrat06i">
            My Career Path
          </h2>
          <p className="text-muted-foreground mb-12" data-oid="_hy.lf4">
            With experience spanning multiple companies and roles, I've
            developed expertise in process development, manufacturing
            engineering, and project management across various industries.
          </p>

          <div className="space-y-12" data-oid="c9ihl07">
            <div
              className="border-l-4 border-[#d1d1c7] pl-6 relative"
              data-oid="_h171jg"
            >
              <div
                className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"
                data-oid="nepn4_e"
              ></div>
              <h3 className="text-xl font-medium mb-1" data-oid="hc18kfh">
                Process Development Engineer
              </h3>
              <p
                className="text-sm text-muted-foreground mb-1"
                data-oid="we1a:t:"
              >
                Electric Hydrogen - Boston, MA, USA
              </p>
              <p
                className="text-sm text-muted-foreground mb-4"
                data-oid="njigf0j"
              >
                January 2023 - Present
              </p>
              <ul
                className="text-sm mb-6 list-disc pl-5 space-y-2"
                data-oid="r058agn"
              >
                <li data-oid="b550bak">
                  Led the development of scalable manufacturing processes for
                  next-generation green hydrogen production technologies.
                </li>
                <li data-oid="dcc:i2_">
                  Enhanced process capability by 20% through statistical
                  analysis and optimization of key production parameters.
                </li>
                <li data-oid="orffo1q">
                  Integrated cutting-edge technology into production processes
                  by collaborating with suppliers and vendors.
                </li>
                <li data-oid="939saly">
                  Improved decision-making and stakeholder communication through
                  detailed data analysis and actionable recommendations.
                </li>
                <li data-oid="voszn8o">
                  Developed robust data architectures for real-time data storage
                  and visualization to enhance project tracking.
                </li>
                <li data-oid="93u5xc.">
                  Increased production efficiency by 15% through implementing
                  continuous improvement methodologies.
                </li>
              </ul>
            </div>

            <div
              className="border-l-4 border-[#d1d1c7] pl-6 relative"
              data-oid="ywpbbc2"
            >
              <div
                className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"
                data-oid="m6hybkn"
              ></div>
              <h3 className="text-xl font-medium mb-1" data-oid="uzxw5ve">
                Manufacturing Engineer
              </h3>
              <p
                className="text-sm text-muted-foreground mb-1"
                data-oid="x11y2ts"
              >
                Advanced Power Conversion - Colorado, USA
              </p>
              <p
                className="text-sm text-muted-foreground mb-4"
                data-oid="xryrtia"
              >
                January 2022 - December 2023
              </p>
              <ul
                className="text-sm mb-6 list-disc pl-5 space-y-2"
                data-oid="0c8rhvt"
              >
                <li data-oid="3odrt8e">
                  Enhanced product lifecycle management by 20% utilizing
                  hands-on machining and efficient feedback mechanisms.
                </li>
                <li data-oid="5al5an7">
                  Reduced development iterations by 30% through collaboration
                  with the R&D team on design improvements.
                </li>
                <li data-oid="lbxx3rj">
                  Achieved 95% quality control compliance by analyzing
                  production units against established standards.
                </li>
                <li data-oid="2:fxc6z">
                  Facilitated cross-functional transformation in manufacturing
                  processes to increase team efficiency.
                </li>
                <li data-oid="2tcurtb">
                  Managed diverse engineering projects from conception to
                  production, ensuring alignment with business goals.
                </li>
              </ul>
            </div>

            <div
              className="border-l-4 border-[#d1d1c7] pl-6 relative"
              data-oid="t:4weg:"
            >
              <div
                className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"
                data-oid="e-006sk"
              ></div>
              <h3 className="text-xl font-medium mb-1" data-oid="2._g471">
                Application Engineer
              </h3>
              <p
                className="text-sm text-muted-foreground mb-1"
                data-oid="4:w8t6x"
              >
                Advanced Power Conversion - Barre, VT, USA
              </p>
              <p
                className="text-sm text-muted-foreground mb-4"
                data-oid="gl.6w-i"
              >
                June 2021 - December 2021
              </p>
              <ul
                className="text-sm mb-6 list-disc pl-5 space-y-2"
                data-oid="x-hxg-a"
              >
                <li data-oid="l:5_yld">
                  Provided engineering support for customer applications,
                  resolving technical issues and enhancing product performance.
                </li>
                <li data-oid="raqdoy2">
                  Conducted field testing and validation of new products in
                  real-world environments.
                </li>
                <li data-oid="2v9ia_e">
                  Collaborated with sales teams to communicate technical
                  specifications to customers.
                </li>
                <li data-oid="0z8.yht">
                  Documented application requirements and created user manuals
                  for new product releases.
                </li>
              </ul>
            </div>

            <div
              className="border-l-4 border-[#d1d1c7] pl-6 relative"
              data-oid="h.py.k_"
            >
              <div
                className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"
                data-oid="ro-goy6"
              ></div>
              <h3 className="text-xl font-medium mb-1" data-oid="jx.a2ro">
                Engineering Staff
              </h3>
              <p
                className="text-sm text-muted-foreground mb-1"
                data-oid="d2h4zlu"
              >
                CU BOULDER - Boulder, CO, USA
              </p>
              <p
                className="text-sm text-muted-foreground mb-4"
                data-oid="uvqsl0s"
              >
                January 2020 - May 2021
              </p>
              <ul
                className="text-sm mb-6 list-disc pl-5 space-y-2"
                data-oid="r5ngl25"
              >
                <li data-oid="_l:blww">
                  Assisted faculty with research projects focused on renewable
                  energy technologies.
                </li>
                <li data-oid="t8lsv5x">
                  Developed lab procedures for engineering students and provided
                  technical guidance.
                </li>
                <li data-oid="siksjno">
                  Maintained laboratory equipment and ensured safety protocols
                  were followed.
                </li>
              </ul>
            </div>

            <div
              className="border-l-4 border-[#d1d1c7] pl-6 relative"
              data-oid="xo_k.yg"
            >
              <div
                className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"
                data-oid="n4hbxrm"
              ></div>
              <h3 className="text-xl font-medium mb-1" data-oid="vm9zqec">
                R&D Engineering Intern
              </h3>
              <p
                className="text-sm text-muted-foreground mb-1"
                data-oid="a-s1y:m"
              >
                NIST - Boulder, CO, USA
              </p>
              <p
                className="text-sm text-muted-foreground mb-4"
                data-oid="l8gyfk5"
              >
                May 2019 - August 2019
              </p>
              <ul
                className="text-sm mb-6 list-disc pl-5 space-y-2"
                data-oid="zeru-tk"
              >
                <li data-oid="r6x3wbf">
                  Participated in research projects focused on materials testing
                  for renewable energy applications.
                </li>
                <li data-oid="zo26jhm">
                  Conducted laboratory experiments and collected data for
                  analysis.
                </li>
                <li data-oid="1.-1uyc">
                  Assisted senior engineers with documentation and reporting of
                  research findings.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12" data-oid="gt85gow">
            <Link href="/contact" data-oid="an.d-lr">
              <Button className="main-button rounded-full" data-oid="nlc6fi9">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]"
        data-oid=":32ngg1"
      >
        <div
          className="col-span-1 p-8 border-r border-[#d1d1c7]"
          data-oid="-ivobcu"
        >
          <div className="flex items-center mb-6" data-oid="b-6jycs">
            <span className="mr-2 text-sm" data-oid="1njhic7">
              +
            </span>
            <h3 className="text-sm" data-oid="8q6uivi">
              Skills
            </h3>
          </div>
        </div>
        <div className="col-span-2 p-8" data-oid="97cigj.">
          <h2 className="text-3xl md:text-4xl mb-12" data-oid="mo9sk8p">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 gap-12" data-oid="l86lsjh">
            <div data-oid="vozp3:_">
              <h3
                className="text-xl font-medium mb-6 pb-2 border-b border-[#d1d1c7]"
                data-oid="-zu31dc"
              >
                Engineering
              </h3>
              <div className="flex flex-wrap gap-3" data-oid="q_gnqoz">
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
                    data-oid="eqo1.3c"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div data-oid="wd9fa3j">
              <h3
                className="text-xl font-medium mb-6 pb-2 border-b border-[#d1d1c7]"
                data-oid="ytvzdp4"
              >
                Data & Technology
              </h3>
              <div className="flex flex-wrap gap-3" data-oid="r-m4dm-">
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
                    data-oid="z_v24r8"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div data-oid="y32ugcz">
              <h3
                className="text-xl font-medium mb-6 pb-2 border-b border-[#d1d1c7]"
                data-oid="bfmr1zr"
              >
                Project Management
              </h3>
              <div className="flex flex-wrap gap-3" data-oid="ykzk_9s">
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
                    data-oid="6oxoai5"
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
