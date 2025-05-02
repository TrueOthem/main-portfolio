import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7] about-section"
        data-testid="about-section"
        data-oid="xgodc_6"
      >
        <div
          className="col-span-1 border-r border-[#d1d1c7] flex flex-col justify-center p-8"
          data-oid="bv3v0uc"
        >
          <h3 className="text-lg mb-2" data-oid="8dcfjy1">
            About Me
          </h3>
          <h1
            className="text-3xl md:text-4xl font-medium mb-6"
            data-oid="ws88sux"
          >
            Mohamed Adil Al Sabri
          </h1>
          <p className="text-lg mb-8" data-oid="i56e7ok">
            Process Development Engineer
          </p>

          <Link href="/contact" data-oid="6yfhbd9">
            <Button className="main-button rounded-full" data-oid="rt:.tlr">
              Get in Touch
            </Button>
          </Link>
        </div>
        <div className="col-span-2 p-8 md:p-12" data-oid=".p23g3t">
          <p className="text-lg mb-6" data-oid="h6o.u91">
            I'm a passionate Process Development Engineer with expertise in
            green hydrogen production and manufacturing optimization. My journey
            in engineering combines technical knowledge, hands-on experience,
            and data-driven problem-solving to create efficient, scalable
            manufacturing processes.
          </p>
          <p className="text-lg mb-6" data-oid="f-9pb6e">
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
        data-oid="s9pvrcw"
      >
        <div
          className="col-span-1 p-8 border-r border-[#d1d1c7]"
          data-oid=".zgem_1"
        >
          <div className="flex items-center mb-6" data-oid="16ehu_p">
            <span className="mr-2 text-sm" data-oid="-ax.ji:">
              +
            </span>
            <h3 className="text-sm" data-oid="b-hzfcx">
              Work Experience
            </h3>
          </div>
        </div>
        <div className="col-span-2 p-8" data-oid="6tvjwn5">
          <h2 className="text-3xl md:text-4xl mb-6" data-oid="l2i-._s">
            My Career Path
          </h2>
          <p className="text-muted-foreground mb-12" data-oid="jok8-s2">
            With experience spanning multiple companies and roles, I've
            developed expertise in process development, manufacturing
            engineering, and project management across various industries.
          </p>

          <div className="space-y-12" data-oid="ssft0sr">
            <div
              className="border-l-4 border-[#d1d1c7] pl-6 relative"
              data-oid="yk9rua:"
            >
              <div
                className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"
                data-oid="zk404u3"
              ></div>
              <h3 className="text-xl font-medium mb-1" data-oid="rup30w_">
                Process Development Engineer
              </h3>
              <p
                className="text-sm text-muted-foreground mb-1"
                data-oid=".2fu4m9"
              >
                Electric Hydrogen - Boston, MA, USA
              </p>
              <p
                className="text-sm text-muted-foreground mb-4"
                data-oid="izss-xq"
              >
                January 2023 - Present
              </p>
              <ul
                className="text-sm mb-6 list-disc pl-5 space-y-2"
                data-oid="-iqj345"
              >
                <li data-oid="yx.ne.7">
                  Led the development of scalable manufacturing processes for
                  next-generation green hydrogen production technologies.
                </li>
                <li data-oid="s46_kv3">
                  Enhanced process capability by 20% through statistical
                  analysis and optimization of key production parameters.
                </li>
                <li data-oid="q-m4i:_">
                  Integrated cutting-edge technology into production processes
                  by collaborating with suppliers and vendors.
                </li>
                <li data-oid="bxyj7u5">
                  Improved decision-making and stakeholder communication through
                  detailed data analysis and actionable recommendations.
                </li>
                <li data-oid="zgopqr2">
                  Developed robust data architectures for real-time data storage
                  and visualization to enhance project tracking.
                </li>
                <li data-oid="0lr8ram">
                  Increased production efficiency by 15% through implementing
                  continuous improvement methodologies.
                </li>
              </ul>
            </div>

            <div
              className="border-l-4 border-[#d1d1c7] pl-6 relative"
              data-oid="pku3qdw"
            >
              <div
                className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"
                data-oid="9.npfpu"
              ></div>
              <h3 className="text-xl font-medium mb-1" data-oid="xqrm5wt">
                Manufacturing Engineer
              </h3>
              <p
                className="text-sm text-muted-foreground mb-1"
                data-oid="qgmy4it"
              >
                Advanced Power Conversion - Colorado, USA
              </p>
              <p
                className="text-sm text-muted-foreground mb-4"
                data-oid="zke0lng"
              >
                January 2022 - December 2023
              </p>
              <ul
                className="text-sm mb-6 list-disc pl-5 space-y-2"
                data-oid=":wueio_"
              >
                <li data-oid="l2.bpsu">
                  Enhanced product lifecycle management by 20% utilizing
                  hands-on machining and efficient feedback mechanisms.
                </li>
                <li data-oid="fa37a:b">
                  Reduced development iterations by 30% through collaboration
                  with the R&D team on design improvements.
                </li>
                <li data-oid="glvu:8.">
                  Achieved 95% quality control compliance by analyzing
                  production units against established standards.
                </li>
                <li data-oid="s.pn0nl">
                  Facilitated cross-functional transformation in manufacturing
                  processes to increase team efficiency.
                </li>
                <li data-oid="m2y21th">
                  Managed diverse engineering projects from conception to
                  production, ensuring alignment with business goals.
                </li>
              </ul>
            </div>

            <div
              className="border-l-4 border-[#d1d1c7] pl-6 relative"
              data-oid="k_5g:.d"
            >
              <div
                className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"
                data-oid="k40evph"
              ></div>
              <h3 className="text-xl font-medium mb-1" data-oid=".fza-sw">
                Application Engineer
              </h3>
              <p
                className="text-sm text-muted-foreground mb-1"
                data-oid="s8bfl-s"
              >
                Advanced Power Conversion - Barre, VT, USA
              </p>
              <p
                className="text-sm text-muted-foreground mb-4"
                data-oid="kpyhs32"
              >
                June 2021 - December 2021
              </p>
              <ul
                className="text-sm mb-6 list-disc pl-5 space-y-2"
                data-oid="2oa292w"
              >
                <li data-oid="tq9s.05">
                  Provided engineering support for customer applications,
                  resolving technical issues and enhancing product performance.
                </li>
                <li data-oid="w0hso.j">
                  Conducted field testing and validation of new products in
                  real-world environments.
                </li>
                <li data-oid="2o9.put">
                  Collaborated with sales teams to communicate technical
                  specifications to customers.
                </li>
                <li data-oid="9h0i8xv">
                  Documented application requirements and created user manuals
                  for new product releases.
                </li>
              </ul>
            </div>

            <div
              className="border-l-4 border-[#d1d1c7] pl-6 relative"
              data-oid="_b-3zl8"
            >
              <div
                className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"
                data-oid="1o-1799"
              ></div>
              <h3 className="text-xl font-medium mb-1" data-oid="ceao9ov">
                Engineering Staff
              </h3>
              <p
                className="text-sm text-muted-foreground mb-1"
                data-oid="wcvvvt7"
              >
                CU BOULDER - Boulder, CO, USA
              </p>
              <p
                className="text-sm text-muted-foreground mb-4"
                data-oid="dljfouh"
              >
                January 2020 - May 2021
              </p>
              <ul
                className="text-sm mb-6 list-disc pl-5 space-y-2"
                data-oid="x8c-2w3"
              >
                <li data-oid="tsc-r_8">
                  Assisted faculty with research projects focused on renewable
                  energy technologies.
                </li>
                <li data-oid="fmphi9j">
                  Developed lab procedures for engineering students and provided
                  technical guidance.
                </li>
                <li data-oid="b:h_-ob">
                  Maintained laboratory equipment and ensured safety protocols
                  were followed.
                </li>
              </ul>
            </div>

            <div
              className="border-l-4 border-[#d1d1c7] pl-6 relative"
              data-oid="g6d_jvo"
            >
              <div
                className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"
                data-oid="7.mhbcf"
              ></div>
              <h3 className="text-xl font-medium mb-1" data-oid="nww20cz">
                R&D Engineering Intern
              </h3>
              <p
                className="text-sm text-muted-foreground mb-1"
                data-oid="f.uqsag"
              >
                NIST - Boulder, CO, USA
              </p>
              <p
                className="text-sm text-muted-foreground mb-4"
                data-oid="0spo7d:"
              >
                May 2019 - August 2019
              </p>
              <ul
                className="text-sm mb-6 list-disc pl-5 space-y-2"
                data-oid="6q48xsu"
              >
                <li data-oid="6_fm.7s">
                  Participated in research projects focused on materials testing
                  for renewable energy applications.
                </li>
                <li data-oid="ajkrz7l">
                  Conducted laboratory experiments and collected data for
                  analysis.
                </li>
                <li data-oid="rf-pdxr">
                  Assisted senior engineers with documentation and reporting of
                  research findings.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12" data-oid="xx.1q_v">
            <Link href="/contact" data-oid="1ga_juw">
              <Button className="main-button rounded-full" data-oid="4g:n5x2">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]"
        data-oid="qb-h2h5"
      >
        <div
          className="col-span-1 p-8 border-r border-[#d1d1c7]"
          data-oid="y7f_:wc"
        >
          <div className="flex items-center mb-6" data-oid="tb5qu1i">
            <span className="mr-2 text-sm" data-oid="vwfrmh5">
              +
            </span>
            <h3 className="text-sm" data-oid="4cbmr9y">
              Skills
            </h3>
          </div>
        </div>
        <div className="col-span-2 p-8" data-oid="x0n0_xg">
          <h2 className="text-3xl md:text-4xl mb-12" data-oid="p2yf0m_">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 gap-12" data-oid="iulf89l">
            <div data-oid="ues2xc:">
              <h3
                className="text-xl font-medium mb-6 pb-2 border-b border-[#d1d1c7]"
                data-oid="g0mo:.w"
              >
                Engineering
              </h3>
              <div className="flex flex-wrap gap-3" data-oid="w4o23mo">
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
                    data-oid="bu4t_lu"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div data-oid="ei2p35z">
              <h3
                className="text-xl font-medium mb-6 pb-2 border-b border-[#d1d1c7]"
                data-oid="wd7kzd0"
              >
                Data & Technology
              </h3>
              <div className="flex flex-wrap gap-3" data-oid=".y9a8i8">
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
                    data-oid="venk4d5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div data-oid="hjf7dcm">
              <h3
                className="text-xl font-medium mb-6 pb-2 border-b border-[#d1d1c7]"
                data-oid="21s:28f"
              >
                Project Management
              </h3>
              <div className="flex flex-wrap gap-3" data-oid="shtdi61">
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
                    data-oid="_9y87bs"
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
