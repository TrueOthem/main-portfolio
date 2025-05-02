import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ClientBody from "./ClientBody";
import {
  ScrollReveal,
  FadeIn,
  RevealText,
  StaggerContainer,
  StaggerItem,
  HoverScale,
} from "@/components/ui/motion";
import {
  ParallaxImage,
  ParallaxScroll,
  ParallaxRotate,
} from "@/components/ui/parallax";
import {
  TiltCard,
  RippleButton,
  MagneticElement,
} from "@/components/ui/interactive-motion";

// Define logo data with unique IDs and image paths
const logoData = [
  {
    id: "logo1",
    company: "Electric Hydrogen",
    imgSrc: "/uploads/ehydrogen-logo2.png",
  },
  {
    id: "logo2",
    company: "Advanced Power Conversion",
    imgSrc: "/uploads/Apc-logo.png",
  },
  { id: "logo3", company: "CU Boulder", imgSrc: "/uploads/cuboulderlogo.png" },
  {
    id: "logo4",
    company: "NIST",
    imgSrc: "/uploads/NIST-Logo-Brand-White.png",
  },
  {
    id: "logo5",
    company: "University of Pennsylvania",
    imgSrc: "/uploads/UniversityofPennsylvania_FullLogo_RGB-4_0.png",
  },
];

// Define skill icons
const skillIcons = [
  { skill: "Python", icon: "/uploads/python-logo-only.png" },
  { skill: "SQL", icon: "/uploads/SQL.webp" },
];

export default function Home() {
  return (
    <ClientBody data-oid="g:wz2n8">
      {/* Hero Section with Parallax */}
      <section
        id="hero-section"
        className="section-container hero-section relative w-full"
        data-testid="hero-section"
        data-oid="5g.ldv6"
      >
        <div
          className="col-span-1 md:border-r border-[#d1d1c7] flex items-center justify-center p-0 md:p-0 lg:p-0 relative overflow-visible"
          data-oid="9yvw-qc"
        >
          <div className="profile-image-container" data-oid="rcw6qku">
            <Image
              src="/uploads/profile-photo.jpg"
              alt="Mohamed Adil Al Sabri"
              width={500}
              height={500}
              className="profile-image rounded-[470px]"
              priority
              data-oid="6w:j--9"
            />
          </div>
        </div>
        <div
          className="col-span-2 flex items-center p-1 md:p-1 lg:p-1 relative w-full"
          data-oid="b.m6w9u"
        >
          <ParallaxScroll speed={0.1} direction="up" data-oid="odm_g9g">
            <RevealText data-oid="d5p.9b-">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-medium md:p-10 lg:p-10 p-12"
                data-oid="1f_ifd0"
              >
                Mohamed Adil
                <br data-oid="-sbo96c" />
                Al Sabri
              </h1>
            </RevealText>
          </ParallaxScroll>

          {/* Abstract decorative elements with parallax */}

          <div
            className="absolute top-10 right-20 w-10 h-10 opacity-10"
            data-oid="7h0dvz."
          >
            <ParallaxScroll speed={0.4} direction="right" data-oid="_5rhvzk">
              <div
                className="w-full h-full bg-primary rounded-full"
                data-oid="0l88vpg"
              ></div>
            </ParallaxScroll>
          </div>
        </div>
      </section>

      {/* About Section */}
      <ScrollReveal data-oid="2:vgilp">
        <section className="section-container" data-oid="lgsw:zj">
          <div className="section-sidebar" data-oid="ed_e-a-">
            <div className="section-header" data-oid="1r_9qhd">
              <span className="mr-2 text-sm" data-oid="js3g4m6">
                +
              </span>
              <h3 className="text-sm" data-oid="ioz1bx3">
                About
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="5rphr.p">
            <FadeIn direction="up" data-oid="5uq331u">
              <h2 className="section-title" data-oid="m6ze:v-">
                Process Development Engineer
              </h2>
              <p className="section-description" data-oid="o-jjd15">
                Process Development Engineer specializing in green hydrogen
                production. I enhance process capability by developing scalable
                manufacturing processes, integrating cutting-edge technology,
                and applying data analysis to optimize production efficiency.
              </p>
              <div className="stats-container" data-oid="ydixld:">
                <StaggerContainer
                  staggerChildren={0.1}
                  className="stats-container"
                  data-oid="kja-kfy"
                >
                  <StaggerItem data-oid="f51x6ch">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid="0dv8.vb"
                    >
                      <div className="stat-item" data-oid="rs_.-s_">
                        <h3 className="stat-value" data-oid="t:mrnc5">
                          5+
                        </h3>
                        <p className="stat-label" data-oid="pfjd_to">
                          Years of Experience
                        </p>
                      </div>
                    </MagneticElement>
                  </StaggerItem>
                  <StaggerItem data-oid="r8.30z2">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid="x8iusg5"
                    >
                      <div className="stat-item" data-oid="yfj8dqn">
                        <h3 className="stat-value" data-oid="5x4az31">
                          20+
                        </h3>
                        <p className="stat-label" data-oid="h068es_">
                          Projects Completed
                        </p>
                      </div>
                    </MagneticElement>
                  </StaggerItem>
                  <StaggerItem data-oid="xd7m-38">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid="rgxvz:v"
                    >
                      <div className="stat-item" data-oid="nhiugb8">
                        <h3 className="stat-value" data-oid="ish_bl6">
                          4+
                        </h3>
                        <p className="stat-label" data-oid="zjsmvjn">
                          Companies Worked With
                        </p>
                      </div>
                    </MagneticElement>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </FadeIn>
          </div>
        </section>
      </ScrollReveal>

      {/* Company Logos Section */}
      <ScrollReveal data-oid="7.13de4">
        <section
          className="col-span-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 py-8 border-b border-[#d1d1c7] overflow-hidden"
          data-oid=".2itvqk"
        >
          <StaggerContainer
            staggerChildren={0.1}
            className="logo-grid"
            data-oid="z59pw8:"
          >
            {logoData.map((logo) => (
              <StaggerItem key={logo.id} data-oid="tjexaew">
                <div className="logo-container" data-oid="xd_t6u7">
                  <MagneticElement
                    distanceThreshold={100}
                    magnetStrength={0.2}
                    data-oid="ljpdaaf"
                  >
                    <div className="logo-item" data-oid="o2ud2gc">
                      {logo.imgSrc ? (
                        <div
                          className="logo-image-container"
                          data-oid="i5c7k:w"
                        >
                          <Image
                            src={logo.imgSrc}
                            alt={logo.company}
                            priority
                            width={200}
                            height={100}
                            className="logo-image"
                            data-oid="l9pp9c5"
                          />
                        </div>
                      ) : (
                        <div className="logo-placeholder" data-oid="k2.9vt7">
                          {logo.company}
                        </div>
                      )}
                    </div>
                  </MagneticElement>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </ScrollReveal>

      {/* Expertise Section */}
      <ScrollReveal data-oid="_pfb3qv">
        <section className="section-container" data-oid="3lftybq">
          <div className="section-sidebar" data-oid="ibxdpqi">
            <div className="section-header" data-oid="jgtpfrk">
              <span className="mr-2 text-sm" data-oid="2u-fp5g">
                +
              </span>
              <h3 className="text-sm" data-oid="l:y-a-a">
                Skills
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="k1ug.7b">
            <FadeIn direction="up" data-oid="28tlj31">
              <h2 className="section-subtitle" data-oid="oj4fa1p">
                My Technical Expertise
              </h2>
              <p className="section-description mb-12" data-oid="v9b4ujy">
                With a background in Mechanical Engineering and years of
                experience in process development, I bring a diverse skill set
                that combines engineering principles with data-driven approaches
                to optimize manufacturing processes.
              </p>

              <StaggerContainer
                staggerChildren={0.1}
                className="skills-grid"
                data-oid="0bomw9b"
              >
                <StaggerItem data-oid="g27m.xo">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="hg6b8j_"
                  >
                    <div className="content-card" data-oid="-zkm422">
                      <h3 className="card-title" data-oid="qptpqeu">
                        Process Development
                      </h3>
                      <p className="card-text" data-oid="f0t-l.i">
                        Developing scalable manufacturing processes for green
                        hydrogen production using statistical tools like DOE and
                        SPC.
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid="l_:uax1">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="srj.ppd"
                  >
                    <div className="content-card" data-oid="fqm.jk:">
                      <h3 className="card-title" data-oid="d9nhbdn">
                        Data Analysis
                      </h3>
                      <p className="card-text" data-oid="x23865b">
                        Applying large-data analysis in SaaS environments to
                        optimize process efficiency and support continuous
                        improvement initiatives.
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid="zs.:-7-">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="hlfpn4v"
                  >
                    <div className="content-card" data-oid="5kgbre.">
                      <h3 className="card-title" data-oid="uw-0zwc">
                        Manufacturing Systems
                      </h3>
                      <p className="card-text" data-oid="94ps3rv">
                        Building robust data architectures for real-time data
                        storage and visualization to enhance project management
                        capabilities.
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid="lgzehpx">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="a.y.we-"
                  >
                    <div className="content-card" data-oid="x229d9u">
                      <h3 className="card-title" data-oid="22w3eb0">
                        CAD & Engineering Design
                      </h3>
                      <p className="card-text" data-oid="i2t1xtt">
                        Generating structured CAD designs and quality-focused
                        drawings using PDM systems for improved design accuracy
                        and efficiency.
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem className="md:col-span-2" data-oid="cv4ef.1">
                  <TiltCard
                    glareEffect={true}
                    tiltFactor={5}
                    className="h-full"
                    data-oid="vn3ddr9"
                  >
                    <div className="content-card" data-oid="j52j2ji">
                      <h3 className="card-title" data-oid="yjgt2_3">
                        Technical Skills
                      </h3>
                      <p className="card-text mb-4" data-oid="qqctocw">
                        Proficient in CAD, SolidWorks, Python, SQL, Data
                        Analysis, Machine Learning, Product Design, and Project
                        Management.
                      </p>
                      <div
                        className="flex items-center space-x-4 mt-2"
                        data-oid="d9rzh.c"
                      >
                        <StaggerContainer
                          staggerChildren={0.2}
                          className="flex items-center space-x-4"
                          data-oid="fkzbvp-"
                        >
                          {skillIcons.map((skillIcon, index) => (
                            <StaggerItem key={index} data-oid="-aj2aji">
                              <div
                                className="skill-icon-container"
                                data-oid=":281rug"
                              >
                                <MagneticElement
                                  distanceThreshold={80}
                                  magnetStrength={0.4}
                                  data-oid="ncxc-3b"
                                >
                                  <div
                                    className="skill-icon-wrapper"
                                    data-oid="y03q2:3"
                                  >
                                    <Image
                                      src={skillIcon.icon}
                                      alt={skillIcon.skill}
                                      width={50}
                                      height={50}
                                      className="skill-icon"
                                      data-oid="tvf03_5"
                                    />
                                  </div>
                                </MagneticElement>
                                <span className="skill-name" data-oid="q7.c1po">
                                  {skillIcon.skill}
                                </span>
                              </div>
                            </StaggerItem>
                          ))}
                        </StaggerContainer>
                      </div>
                    </div>
                  </TiltCard>
                </StaggerItem>
              </StaggerContainer>
            </FadeIn>
          </div>
        </section>
      </ScrollReveal>

      {/* Experience Section */}
      <ScrollReveal data-oid="uhvggog">
        <section className="section-container" data-oid="m4.gx:7">
          <div className="section-sidebar" data-oid="dzklj88">
            <div className="section-header" data-oid="kbzg4r0">
              <span className="mr-2 text-sm" data-oid="x37eum2">
                +
              </span>
              <h3 className="text-sm" data-oid="jxuq1j.">
                Experience
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="q3.fgna">
            <FadeIn direction="up" data-oid="dlzp8y3">
              <h2 className="section-subtitle" data-oid="nj5cc9k">
                Professional Experience
              </h2>

              <StaggerContainer
                staggerChildren={0.15}
                className="experience-list"
                data-oid="lq0ov44"
              >
                <StaggerItem data-oid="17qw5yj">
                  <TiltCard
                    tiltFactor={3}
                    glareEffect={true}
                    data-oid="6vg65un"
                  >
                    <div className="experience-card" data-oid="9y0vxbd">
                      <div className="experience-header" data-oid="7748sx-">
                        <div data-oid="zbj.sa:">
                          <h3 className="experience-title" data-oid="_5r4fnv">
                            Process Development Engineer
                          </h3>
                          <p className="experience-company" data-oid="usuxb.z">
                            Electric Hydrogen - Boston, MA
                          </p>
                          <p className="experience-date" data-oid="i0nmofx">
                            January 2023 - Present
                          </p>
                        </div>
                        <div className="experience-logo" data-oid="dmmdiav">
                          <Image
                            src="/uploads/ehydrogen-logo2.png"
                            alt="Electric Hydrogen"
                            width={120}
                            height={50}
                            className="object-contain"
                            data-oid="7jt1s60"
                          />
                        </div>
                      </div>
                      <ul className="experience-details" data-oid="kqxrl.3">
                        <li data-oid="b:0.zwh">
                          Enhanced process capability by 20% for green hydrogen
                          production by developing scalable manufacturing
                          processes.
                        </li>
                        <li data-oid="6is_022">
                          Integrated cutting-edge technology into production
                          processes by working with suppliers and vendors.
                        </li>
                        <li data-oid="xfm2f69">
                          Improved decision-making and stakeholder communication
                          by providing actionable recommendations.
                        </li>
                        <li data-oid="li035wv">
                          Developed robust data architectures for real-time data
                          storage and visualization.
                        </li>
                      </ul>
                    </div>
                  </TiltCard>
                </StaggerItem>

                <StaggerItem data-oid="hlbuwi-">
                  <TiltCard
                    tiltFactor={3}
                    glareEffect={true}
                    data-oid="wx8o31v"
                  >
                    <div className="experience-card" data-oid="ayew7nv">
                      <div className="experience-header" data-oid="4y3cu2r">
                        <div data-oid="185uvhn">
                          <h3 className="experience-title" data-oid="-nto63j">
                            Manufacturing Engineer
                          </h3>
                          <p className="experience-company" data-oid="s5za0au">
                            Advanced Power Conversion - Colorado, USA
                          </p>
                          <p className="experience-date" data-oid="m9tiul9">
                            January 2022 - December 2023
                          </p>
                        </div>
                        <div className="experience-logo" data-oid="208gnrx">
                          <Image
                            src="/uploads/Apc-logo.png"
                            alt="Advanced Power Conversion"
                            width={120}
                            height={50}
                            className="object-contain"
                            data-oid="zv8ziwp"
                          />
                        </div>
                      </div>
                      <ul className="experience-details" data-oid="czd_l:r">
                        <li data-oid="ming1q5">
                          Enhanced product lifecycle management by 20% utilizing
                          hands-on machining and efficient feedback mechanisms.
                        </li>
                        <li data-oid="muubls:">
                          Reduced development iterations by 30% through
                          collaboration with the R&D team.
                        </li>
                        <li data-oid="q_w2tmi">
                          Achieved 95% quality control compliance by analyzing
                          production units against standards.
                        </li>
                        <li data-oid="9swuu3y">
                          Facilitated cross-functional transformation in
                          manufacturing processes.
                        </li>
                      </ul>
                    </div>
                  </TiltCard>
                </StaggerItem>
              </StaggerContainer>

              <div className="flex justify-end mt-8" data-oid="4p87k3o">
                <Link href="/about" data-oid="4zr5h2h">
                  <RippleButton className="secondary-button" data-oid="b.4-erd">
                    <span data-oid="1wx4wis">View Full Experience</span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-oid="jd1_-nu"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-oid="r9ag5hk"
                      />
                    </svg>
                  </RippleButton>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </ScrollReveal>

      {/* Education Section */}
      <ScrollReveal data-oid="z8hb56j">
        <section className="section-container" data-oid="-1ctc5t">
          <div className="section-sidebar" data-oid="uelzkk5">
            <div className="section-header" data-oid=":psi4oy">
              <span className="mr-2 text-sm" data-oid="ikj-sd5">
                +
              </span>
              <h3 className="text-sm" data-oid="cb4yynu">
                Education
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="mcp..xl">
            <FadeIn direction="up" data-oid="alwwtgk">
              <h2 className="section-subtitle" data-oid="3e3ty41">
                Academic Background
              </h2>

              <StaggerContainer
                staggerChildren={0.15}
                className="experience-list"
                data-oid="5-lcpwd"
              >
                <StaggerItem data-oid="1kvju3:">
                  <TiltCard
                    tiltFactor={3}
                    glareEffect={false}
                    data-oid="i001mrw"
                  >
                    <div className="experience-card" data-oid="zjpbw56">
                      <div className="experience-header" data-oid="vwa2wan">
                        <div data-oid="pl1-bjg">
                          <h3 className="experience-title" data-oid="90qkgkq">
                            University of Colorado - Boulder
                          </h3>
                          <p className="experience-date" data-oid="35gutm4">
                            Bachelor's, Mechanical Engineering (August 2016 -
                            May 2021)
                          </p>
                        </div>
                        <div className="experience-logo" data-oid="x9afnaz">
                          <Image
                            src="/uploads/cuboulderlogo.png"
                            alt="University of Colorado Boulder"
                            width={120}
                            height={50}
                            className="object-contain"
                            data-oid="nhautm7"
                          />
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </StaggerItem>

                <StaggerItem data-oid="t33sdbd">
                  <TiltCard
                    tiltFactor={3}
                    glareEffect={false}
                    data-oid="4:g0ye0"
                  >
                    <div className="experience-card" data-oid="dfswdl0">
                      <div className="experience-header" data-oid="_m5n2a.">
                        <div data-oid="ol0yhfd">
                          <h3 className="experience-title" data-oid="u69t465">
                            University of Pennsylvania
                          </h3>
                          <p className="experience-date" data-oid="sxo410z">
                            Certification, Mechanical Engineering (January 2015
                            - December 2016)
                          </p>
                        </div>
                        <div className="experience-logo" data-oid="p1lcq35">
                          <Image
                            src="/uploads/UniversityofPennsylvania_FullLogo_RGB-4_0.png"
                            alt="University of Pennsylvania"
                            width={120}
                            height={50}
                            className="object-contain"
                            data-oid="1r:0f5o"
                          />
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </StaggerItem>
              </StaggerContainer>
            </FadeIn>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact Section */}
      <ScrollReveal data-oid="n4xny82">
        <section className="section-container" data-oid="uw3-1fo">
          <div className="section-sidebar" data-oid="4cubcg.">
            <div className="section-header" data-oid="07r076x">
              <span className="mr-2 text-sm" data-oid="7550t3a">
                +
              </span>
              <h3 className="text-sm" data-oid="y6-5npl">
                Contact
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="f09:0ri">
            <FadeIn direction="up" data-oid="-ynks7s">
              <h2 className="section-subtitle" data-oid=".0is7e3">
                Get in Touch
              </h2>
              <p className="section-description mb-12" data-oid="_wm1aw:">
                Interested in discussing process development, manufacturing
                efficiency, or potential opportunities? I'd love to connect.
              </p>

              <StaggerContainer
                className="contact-grid"
                staggerChildren={0.1}
                data-oid="eki3ohc"
              >
                <StaggerItem data-oid="0.juiae">
                  <MagneticElement data-oid="wfw-239">
                    <div className="contact-item" data-oid="k.50u32">
                      <h3 className="contact-title" data-oid="c2sp8os">
                        Email
                      </h3>
                      <a
                        href="mailto:trueothem@gmail.com"
                        className="contact-link"
                        data-oid="v4wbu::"
                      >
                        trueothem@gmail.com
                      </a>
                    </div>
                  </MagneticElement>
                </StaggerItem>
                <StaggerItem data-oid="zbwkn_x">
                  <MagneticElement data-oid=":2ubbg1">
                    <div className="contact-item" data-oid="x7g:.c_">
                      <h3 className="contact-title" data-oid="uof..k9">
                        Phone
                      </h3>
                      <a
                        href="tel:+16172333948"
                        className="contact-link"
                        data-oid="zkj940f"
                      >
                        +1 (617) 233-3948
                      </a>
                    </div>
                  </MagneticElement>
                </StaggerItem>
                <StaggerItem data-oid="dr1op9z">
                  <MagneticElement data-oid="71_14hz">
                    <div className="contact-item" data-oid="qbx9h87">
                      <h3 className="contact-title" data-oid="iwdedia">
                        Location
                      </h3>
                      <p className="text-muted-foreground" data-oid="2xi:grk">
                        Cambridge, MA, USA
                      </p>
                    </div>
                  </MagneticElement>
                </StaggerItem>
              </StaggerContainer>
            </FadeIn>
          </div>
        </section>
      </ScrollReveal>
    </ClientBody>
  );
}
