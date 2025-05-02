import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7] about-section"
        data-testid="about-section"
        data-oid="9dhksx4"
      >
        <div
          className="col-span-1 border-r border-[#d1d1c7] flex flex-col justify-center p-8"
          data-oid="2f9ucev"
        >
          <h3 className="text-lg mb-2" data-oid="6l7.8nx">
            About Me
          </h3>
          <h1
            className="text-3xl md:text-4xl font-medium mb-6"
            data-oid="gsjd0fw"
          >
            Mohamed Adil Al Sabri
          </h1>
          <p className="text-lg mb-8" data-oid="pwk-9:t">
            Process Development Engineer
          </p>

          <Link href="/contact" data-oid="rpkrb65">
            <Button className="main-button rounded-full" data-oid="6d4-nzh">
              Get in Touch
            </Button>
          </Link>
        </div>
        <div className="col-span-2 p-8 md:p-12" data-oid="tic1sg.">
          <p className="text-lg mb-6" data-oid="8pn34qj">
            I'm a passionate Process Development Engineer with expertise in
            green hydrogen production and manufacturing optimization. My journey
            in engineering combines technical knowledge, hands-on experience,
            and data-driven problem-solving to create efficient, scalable
            manufacturing processes.
          </p>
          <p className="text-lg mb-6" data-oid="t12va6e">
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
        data-oid="atl5sq_"
      >
        <div
          className="col-span-1 p-8 border-r border-[#d1d1c7]"
          data-oid="qwx1eie"
        >
          <div className="flex items-center mb-6" data-oid=".wee-vo">
            <span className="mr-2 text-sm" data-oid="gx5zb7p">
              +
            </span>
            <h3 className="text-sm" data-oid="2qe07:3">
              Work Experience
            </h3>
          </div>
        </div>
        <div className="col-span-2 p-8" data-oid="90ijxrm">
          <h2 className="text-3xl md:text-4xl mb-6" data-oid="pzc9lrt">
            My Career Path
          </h2>
          <p className="text-muted-foreground mb-12" data-oid="2zj5mi.">
            With experience spanning multiple companies and roles, I've
            developed expertise in process development, manufacturing
            engineering, and project management across various industries.
          </p>

          <div className="space-y-12" data-oid="qznwfyh">
            <div
              className="border-l-4 border-[#d1d1c7] pl-6 relative"
              data-oid="6-u83_-"
            >
              <div
                className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"
                data-oid="y_7_26k"
              ></div>
              <h3 className="text-xl font-medium mb-1" data-oid="kjjj8x9">
                Process Development Engineer
              </h3>
              <p
                className="text-sm text-muted-foreground mb-1"
                data-oid="stamqk2"
              >
                Electric Hydrogen - Boston, MA, USA
              </p>
              <p
                className="text-sm text-muted-foreground mb-4"
                data-oid="p_0l6r4"
              >
                January 2023 - Present
              </p>
              <ul
                className="text-sm mb-6 list-disc pl-5 space-y-2"
                data-oid="x_569x6"
              >
                <li data-oid="0_o2_mh">
                  Led the development of scalable manufacturing processes for
                  next-generation green hydrogen production technologies.
                </li>
                <li data-oid=":o0m0os">
                  Enhanced process capability by 20% through statistical
                  analysis and optimization of key production parameters.
                </li>
                <li data-oid="zrd44od">
                  Integrated cutting-edge technology into production processes
                  by collaborating with suppliers and vendors.
                </li>
                <li data-oid="hto5.5_">
                  Improved decision-making and stakeholder communication through
                  detailed data analysis and actionable recommendations.
                </li>
                <li data-oid="e.ahpmn">
                  Developed robust data architectures for real-time data storage
                  and visualization to enhance project tracking.
                </li>
                <li data-oid=".z--uol">
                  Increased production efficiency by 15% through implementing
                  continuous improvement methodologies.
                </li>
              </ul>
            </div>

            <div
              className="border-l-4 border-[#d1d1c7] pl-6 relative"
              data-oid="n8y0_41"
            >
              <div
                className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"
                data-oid="erb_l3t"
              ></div>
              <h3 className="text-xl font-medium mb-1" data-oid="z46skqj">
                Manufacturing Engineer
              </h3>
              <p
                className="text-sm text-muted-foreground mb-1"
                data-oid="ej2sr5j"
              >
                Advanced Power Conversion - Colorado, USA
              </p>
              <p
                className="text-sm text-muted-foreground mb-4"
                data-oid="qtdux2q"
              >
                January 2022 - December 2023
              </p>
              <ul
                className="text-sm mb-6 list-disc pl-5 space-y-2"
                data-oid="k3kzbig"
              >
                <li data-oid=".1fqp6w">
                  Enhanced product lifecycle management by 20% utilizing
                  hands-on machining and efficient feedback mechanisms.
                </li>
                <li data-oid=":-swhx:">
                  Reduced development iterations by 30% through collaboration
                  with the R&D team on design improvements.
                </li>
                <li data-oid="19a_2m6">
                  Achieved 95% quality control compliance by analyzing
                  production units against established standards.
                </li>
                <li data-oid="e7kdden">
                  Facilitated cross-functional transformation in manufacturing
                  processes to increase team efficiency.
                </li>
                <li data-oid="o:ef.en">
                  Managed diverse engineering projects from conception to
                  production, ensuring alignment with business goals.
                </li>
              </ul>
            </div>

            <div
              className="border-l-4 border-[#d1d1c7] pl-6 relative"
              data-oid="gxcnr3w"
            >
              <div
                className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"
                data-oid="ac9ga-b"
              ></div>
              <h3 className="text-xl font-medium mb-1" data-oid="btmqzqd">
                Application Engineer
              </h3>
              <p
                className="text-sm text-muted-foreground mb-1"
                data-oid="1crq6n0"
              >
                Advanced Power Conversion - Barre, VT, USA
              </p>
              <p
                className="text-sm text-muted-foreground mb-4"
                data-oid="5zc.d5l"
              >
                June 2021 - December 2021
              </p>
              <ul
                className="text-sm mb-6 list-disc pl-5 space-y-2"
                data-oid="7rwv7uw"
              >
                <li data-oid="z4az_um">
                  Provided engineering support for customer applications,
                  resolving technical issues and enhancing product performance.
                </li>
                <li data-oid="-:mpstc">
                  Conducted field testing and validation of new products in
                  real-world environments.
                </li>
                <li data-oid="ul5k6z6">
                  Collaborated with sales teams to communicate technical
                  specifications to customers.
                </li>
                <li data-oid="m2s_max">
                  Documented application requirements and created user manuals
                  for new product releases.
                </li>
              </ul>
            </div>

            <div
              className="border-l-4 border-[#d1d1c7] pl-6 relative"
              data-oid="6nyf0ga"
            >
              <div
                className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"
                data-oid="vtzf5dt"
              ></div>
              <h3 className="text-xl font-medium mb-1" data-oid="oixhn_b">
                Engineering Staff
              </h3>
              <p
                className="text-sm text-muted-foreground mb-1"
                data-oid="6d:g.r_"
              >
                CU BOULDER - Boulder, CO, USA
              </p>
              <p
                className="text-sm text-muted-foreground mb-4"
                data-oid="98.x63g"
              >
                January 2020 - May 2021
              </p>
              <ul
                className="text-sm mb-6 list-disc pl-5 space-y-2"
                data-oid="j4.k151"
              >
                <li data-oid="qh9b1p6">
                  Assisted faculty with research projects focused on renewable
                  energy technologies.
                </li>
                <li data-oid="tz2:s5o">
                  Developed lab procedures for engineering students and provided
                  technical guidance.
                </li>
                <li data-oid="eb23st.">
                  Maintained laboratory equipment and ensured safety protocols
                  were followed.
                </li>
              </ul>
            </div>

            <div
              className="border-l-4 border-[#d1d1c7] pl-6 relative"
              data-oid="eingx.8"
            >
              <div
                className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"
                data-oid="0.v.03b"
              ></div>
              <h3 className="text-xl font-medium mb-1" data-oid="q4sf5oc">
                R&D Engineering Intern
              </h3>
              <p
                className="text-sm text-muted-foreground mb-1"
                data-oid="muagc7e"
              >
                NIST - Boulder, CO, USA
              </p>
              <p
                className="text-sm text-muted-foreground mb-4"
                data-oid="zy6vg0s"
              >
                May 2019 - August 2019
              </p>
              <ul
                className="text-sm mb-6 list-disc pl-5 space-y-2"
                data-oid="z.:68ro"
              >
                <li data-oid="ah4m7ub">
                  Participated in research projects focused on materials testing
                  for renewable energy applications.
                </li>
                <li data-oid="kindr4t">
                  Conducted laboratory experiments and collected data for
                  analysis.
                </li>
                <li data-oid=":smmwz5">
                  Assisted senior engineers with documentation and reporting of
                  research findings.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12" data-oid="3bq7:7v">
            <Link href="/contact" data-oid="tu8p2zs">
              <Button className="main-button rounded-full" data-oid="4ngrno4">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]"
        data-oid="0b89zg_"
      >
        <div
          className="col-span-1 p-8 border-r border-[#d1d1c7]"
          data-oid="itxotro"
        >
          <div className="flex items-center mb-6" data-oid="0xteiir">
            <span className="mr-2 text-sm" data-oid="82onqsx">
              +
            </span>
            <h3 className="text-sm" data-oid="p1n8fv:">
              Skills
            </h3>
          </div>
        </div>
        <div className="col-span-2 p-8" data-oid="xu62utf">
          <h2 className="text-3xl md:text-4xl mb-12" data-oid="wty4c1-">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 gap-12" data-oid="w.b07_g">
            <div data-oid="gxgjf-i">
              <h3
                className="text-xl font-medium mb-6 pb-2 border-b border-[#d1d1c7]"
                data-oid="5qppbd_"
              >
                Engineering
              </h3>
              <div className="flex flex-wrap gap-3" data-oid="ld:57y4">
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
                    data-oid="ap-yowk"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div data-oid="e3ntqie">
              <h3
                className="text-xl font-medium mb-6 pb-2 border-b border-[#d1d1c7]"
                data-oid="rl0ij.a"
              >
                Data & Technology
              </h3>
              <div className="flex flex-wrap gap-3" data-oid="e9lxwxs">
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
                    data-oid="61ju52q"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div data-oid="dp.-gzp">
              <h3
                className="text-xl font-medium mb-6 pb-2 border-b border-[#d1d1c7]"
                data-oid="uwnn3_z"
              >
                Project Management
              </h3>
              <div className="flex flex-wrap gap-3" data-oid="83d-8g.">
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
                    data-oid="4203g2q"
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
