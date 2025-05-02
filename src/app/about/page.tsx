import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7] about-section"
        data-testid="about-section"
        data-oid="n2oezei"
      >
        <div
          className="col-span-1 border-r border-[#d1d1c7] flex flex-col justify-center p-8"
          data-oid="1dar54b"
        >
          <h3 className="text-lg mb-2" data-oid="x3f6vqp">
            About Me
          </h3>
          <h1
            className="text-3xl md:text-4xl font-medium mb-6"
            data-oid="-oakji9"
          >
            Mohamed Adil Al Sabri
          </h1>
          <p className="text-lg mb-8" data-oid="6mqengr">
            Process Development Engineer
          </p>

          <Link href="/contact" data-oid=".6joj3:">
            <Button className="main-button rounded-full" data-oid="aro:aus">
              Get in Touch
            </Button>
          </Link>
        </div>
        <div className="col-span-2 p-8 md:p-12" data-oid="4xnog00">
          <p className="text-lg mb-6" data-oid="-c1t9nu">
            I'm a passionate Process Development Engineer with expertise in
            green hydrogen production and manufacturing optimization. My journey
            in engineering combines technical knowledge, hands-on experience,
            and data-driven problem-solving to create efficient, scalable
            manufacturing processes.
          </p>
          <p className="text-lg mb-6" data-oid="nz-7lsi">
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
        data-oid="sijksz4"
      >
        <div
          className="col-span-1 p-8 border-r border-[#d1d1c7]"
          data-oid="3qi-6uk"
        >
          <div className="flex items-center mb-6" data-oid="037y1uq">
            <span className="mr-2 text-sm" data-oid="_yp2gwr">
              +
            </span>
            <h3 className="text-sm" data-oid="xiqus.n">
              Work Experience
            </h3>
          </div>
        </div>
        <div className="col-span-2 p-8" data-oid="w8r11g0">
          <h2 className="text-3xl md:text-4xl mb-6" data-oid="659fydr">
            My Career Path
          </h2>
          <p className="text-muted-foreground mb-12" data-oid="neg64fy">
            With experience spanning multiple companies and roles, I've
            developed expertise in process development, manufacturing
            engineering, and project management across various industries.
          </p>

          <div className="space-y-12" data-oid="www:chy">
            <div
              className="border-l-4 border-[#d1d1c7] pl-6 relative"
              data-oid="v7ok51s"
            >
              <div
                className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"
                data-oid="3icc3bh"
              ></div>
              <h3 className="text-xl font-medium mb-1" data-oid="nrfu945">
                Process Development Engineer
              </h3>
              <p
                className="text-sm text-muted-foreground mb-1"
                data-oid="ayprbko"
              >
                Electric Hydrogen - Boston, MA, USA
              </p>
              <p
                className="text-sm text-muted-foreground mb-4"
                data-oid="w15tsh7"
              >
                January 2023 - Present
              </p>
              <ul
                className="text-sm mb-6 list-disc pl-5 space-y-2"
                data-oid=":06e0h0"
              >
                <li data-oid="dlzu.zk">
                  Led the development of scalable manufacturing processes for
                  next-generation green hydrogen production technologies.
                </li>
                <li data-oid="pzm39kq">
                  Enhanced process capability by 20% through statistical
                  analysis and optimization of key production parameters.
                </li>
                <li data-oid="ak2curh">
                  Integrated cutting-edge technology into production processes
                  by collaborating with suppliers and vendors.
                </li>
                <li data-oid="letwu0r">
                  Improved decision-making and stakeholder communication through
                  detailed data analysis and actionable recommendations.
                </li>
                <li data-oid="jeudeyl">
                  Developed robust data architectures for real-time data storage
                  and visualization to enhance project tracking.
                </li>
                <li data-oid="w_n-3lr">
                  Increased production efficiency by 15% through implementing
                  continuous improvement methodologies.
                </li>
              </ul>
            </div>

            <div
              className="border-l-4 border-[#d1d1c7] pl-6 relative"
              data-oid="g9mosq:"
            >
              <div
                className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"
                data-oid="d.svem:"
              ></div>
              <h3 className="text-xl font-medium mb-1" data-oid="nd2zp0h">
                Manufacturing Engineer
              </h3>
              <p
                className="text-sm text-muted-foreground mb-1"
                data-oid="lk:y_ks"
              >
                Advanced Power Conversion - Colorado, USA
              </p>
              <p
                className="text-sm text-muted-foreground mb-4"
                data-oid="s1sgezc"
              >
                January 2022 - December 2023
              </p>
              <ul
                className="text-sm mb-6 list-disc pl-5 space-y-2"
                data-oid="fm0xyb:"
              >
                <li data-oid="0:iq1hp">
                  Enhanced product lifecycle management by 20% utilizing
                  hands-on machining and efficient feedback mechanisms.
                </li>
                <li data-oid="0k:h.fg">
                  Reduced development iterations by 30% through collaboration
                  with the R&D team on design improvements.
                </li>
                <li data-oid="_yxz.q9">
                  Achieved 95% quality control compliance by analyzing
                  production units against established standards.
                </li>
                <li data-oid="rt8wn6m">
                  Facilitated cross-functional transformation in manufacturing
                  processes to increase team efficiency.
                </li>
                <li data-oid=":s7-qme">
                  Managed diverse engineering projects from conception to
                  production, ensuring alignment with business goals.
                </li>
              </ul>
            </div>

            <div
              className="border-l-4 border-[#d1d1c7] pl-6 relative"
              data-oid="i9mpz4u"
            >
              <div
                className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"
                data-oid="-xtbk.t"
              ></div>
              <h3 className="text-xl font-medium mb-1" data-oid="md8ujb:">
                Application Engineer
              </h3>
              <p
                className="text-sm text-muted-foreground mb-1"
                data-oid="w2d_sl7"
              >
                Advanced Power Conversion - Barre, VT, USA
              </p>
              <p
                className="text-sm text-muted-foreground mb-4"
                data-oid="v7y-jt."
              >
                June 2021 - December 2021
              </p>
              <ul
                className="text-sm mb-6 list-disc pl-5 space-y-2"
                data-oid="3e77sma"
              >
                <li data-oid="5fe71-w">
                  Provided engineering support for customer applications,
                  resolving technical issues and enhancing product performance.
                </li>
                <li data-oid=":oklk12">
                  Conducted field testing and validation of new products in
                  real-world environments.
                </li>
                <li data-oid="xksd1fl">
                  Collaborated with sales teams to communicate technical
                  specifications to customers.
                </li>
                <li data-oid="s3fqqm9">
                  Documented application requirements and created user manuals
                  for new product releases.
                </li>
              </ul>
            </div>

            <div
              className="border-l-4 border-[#d1d1c7] pl-6 relative"
              data-oid=":46gtkg"
            >
              <div
                className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"
                data-oid="i54--2g"
              ></div>
              <h3 className="text-xl font-medium mb-1" data-oid="ik9m4gy">
                Engineering Staff
              </h3>
              <p
                className="text-sm text-muted-foreground mb-1"
                data-oid="56e0xk9"
              >
                CU BOULDER - Boulder, CO, USA
              </p>
              <p
                className="text-sm text-muted-foreground mb-4"
                data-oid="5f:guv6"
              >
                January 2020 - May 2021
              </p>
              <ul
                className="text-sm mb-6 list-disc pl-5 space-y-2"
                data-oid="2pkpuqw"
              >
                <li data-oid="88ciykk">
                  Assisted faculty with research projects focused on renewable
                  energy technologies.
                </li>
                <li data-oid="nc:7-xf">
                  Developed lab procedures for engineering students and provided
                  technical guidance.
                </li>
                <li data-oid=":noyogs">
                  Maintained laboratory equipment and ensured safety protocols
                  were followed.
                </li>
              </ul>
            </div>

            <div
              className="border-l-4 border-[#d1d1c7] pl-6 relative"
              data-oid="2srbm77"
            >
              <div
                className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"
                data-oid="h0gq5i9"
              ></div>
              <h3 className="text-xl font-medium mb-1" data-oid="zhthads">
                R&D Engineering Intern
              </h3>
              <p
                className="text-sm text-muted-foreground mb-1"
                data-oid="sq5bqdn"
              >
                NIST - Boulder, CO, USA
              </p>
              <p
                className="text-sm text-muted-foreground mb-4"
                data-oid="0pi:g8b"
              >
                May 2019 - August 2019
              </p>
              <ul
                className="text-sm mb-6 list-disc pl-5 space-y-2"
                data-oid="wcm6mqk"
              >
                <li data-oid="_xli:no">
                  Participated in research projects focused on materials testing
                  for renewable energy applications.
                </li>
                <li data-oid="wczmvic">
                  Conducted laboratory experiments and collected data for
                  analysis.
                </li>
                <li data-oid="yxp.6fv">
                  Assisted senior engineers with documentation and reporting of
                  research findings.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12" data-oid="tvtv7mw">
            <Link href="/contact" data-oid="7_t98vi">
              <Button className="main-button rounded-full" data-oid="gzennyn">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]"
        data-oid="754o58."
      >
        <div
          className="col-span-1 p-8 border-r border-[#d1d1c7]"
          data-oid="ox_w3gz"
        >
          <div className="flex items-center mb-6" data-oid="vtkkwoe">
            <span className="mr-2 text-sm" data-oid="th.ttua">
              +
            </span>
            <h3 className="text-sm" data-oid="mdhs7fj">
              Skills
            </h3>
          </div>
        </div>
        <div className="col-span-2 p-8" data-oid="1v:b:to">
          <h2 className="text-3xl md:text-4xl mb-12" data-oid="ieiekpg">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 gap-12" data-oid="78e75pd">
            <div data-oid="ehjbr2:">
              <h3
                className="text-xl font-medium mb-6 pb-2 border-b border-[#d1d1c7]"
                data-oid="l856md8"
              >
                Engineering
              </h3>
              <div className="flex flex-wrap gap-3" data-oid="h7bi4rp">
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
                    data-oid="5uxv8g."
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div data-oid=":8d1.85">
              <h3
                className="text-xl font-medium mb-6 pb-2 border-b border-[#d1d1c7]"
                data-oid="u6-z7-m"
              >
                Data & Technology
              </h3>
              <div className="flex flex-wrap gap-3" data-oid="xao1ehs">
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
                    data-oid="ys:v9g0"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div data-oid="p4gzfuu">
              <h3
                className="text-xl font-medium mb-6 pb-2 border-b border-[#d1d1c7]"
                data-oid="zu30zv9"
              >
                Project Management
              </h3>
              <div className="flex flex-wrap gap-3" data-oid="098o2ek">
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
                    data-oid="hf-tkwc"
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
