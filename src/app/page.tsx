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
    <ClientBody data-oid="e5sink6">
      {/* Hero Section with Parallax */}
      <section
        id="hero-section"
        className="section-container hero-section relative w-full"
        data-testid="hero-section"
        data-oid="nwj.vud"
      >
        <div
          className="col-span-1 md:border-r border-[#d1d1c7] flex items-center justify-center p-0 md:p-0 lg:p-0 relative overflow-visible"
          data-oid="7tzjq11"
        >
          <div className="profile-image-container" data-oid="siv:dwu">
            <Image
              src="/uploads/profile-photo.jpg"
              alt="Mohamed Adil Al Sabri"
              width={500}
              height={500}
              className="profile-image rounded-[470px]"
              priority
              data-oid="rlf6bnk"
            />
          </div>
        </div>
        <div
          className="col-span-2 flex items-center p-1 md:p-1 lg:p-1 relative w-full"
          data-oid="vvgi841"
        >
          <ParallaxScroll speed={0.1} direction="up" data-oid="-941z8n">
            <RevealText data-oid=":ikoeht">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-medium md:p-10 lg:p-10 p-12"
                data-oid="0rgyljp"
              >
                Mohamed Adil
                <br data-oid="0he9:cu" />
                Al Sabri
              </h1>
            </RevealText>
          </ParallaxScroll>

          {/* Abstract decorative elements with parallax */}

          <div
            className="absolute top-10 right-20 w-10 h-10 opacity-10"
            data-oid="s.iypc-"
          >
            <ParallaxScroll speed={0.4} direction="right" data-oid="9uu09.u">
              <div
                className="w-full h-full bg-primary rounded-full"
                data-oid="6pyh9uz"
              ></div>
            </ParallaxScroll>
          </div>
        </div>
      </section>

      {/* About Section */}
      <ScrollReveal data-oid="edfkqum">
        <section className="section-container" data-oid="xtf1:ze">
          <div className="section-sidebar" data-oid="6n_ueu-">
            <div className="section-header" data-oid="xkz-ezw">
              <span className="mr-2 text-sm" data-oid="c5smt9g">
                +
              </span>
              <h3 className="text-sm" data-oid="k29qg20">
                About
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="r8_j_5z">
            <FadeIn direction="up" data-oid="xszg5tr">
              <h2 className="section-title" data-oid="ghsos9r">
                Process Development Engineer
              </h2>
              <p className="section-description" data-oid="s.bladz">
                Process Development Engineer specializing in green hydrogen
                production. I enhance process capability by developing scalable
                manufacturing processes, integrating cutting-edge technology,
                and applying data analysis to optimize production efficiency.
              </p>
              <div className="stats-container" data-oid="mf9-8ep">
                <StaggerContainer
                  staggerChildren={0.1}
                  className="stats-container"
                  data-oid="7zcdp84"
                >
                  <StaggerItem data-oid="uhfr8k8">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid="s-2ckij"
                    >
                      <div className="stat-item" data-oid="s.ozxn7">
                        <h3 className="stat-value" data-oid=".ddj6v8">
                          5+
                        </h3>
                        <p className="stat-label" data-oid="zmhxhau">
                          Years of Experience
                        </p>
                      </div>
                    </MagneticElement>
                  </StaggerItem>
                  <StaggerItem data-oid="kp4u:d6">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid="j4sokr6"
                    >
                      <div className="stat-item" data-oid="dfdzd50">
                        <h3 className="stat-value" data-oid="afge3i6">
                          20+
                        </h3>
                        <p className="stat-label" data-oid="7c_j9..">
                          Projects Completed
                        </p>
                      </div>
                    </MagneticElement>
                  </StaggerItem>
                  <StaggerItem data-oid="i3a2e0h">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid="ypz5meo"
                    >
                      <div className="stat-item" data-oid="h7::k.v">
                        <h3 className="stat-value" data-oid="iliq3v.">
                          4+
                        </h3>
                        <p className="stat-label" data-oid="9mbizbp">
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
      <ScrollReveal data-oid="_5_s:qa">
        <section
          className="col-span-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 py-8 border-b border-[#d1d1c7] overflow-hidden"
          data-oid="t3u9t_v"
        >
          <StaggerContainer
            staggerChildren={0.1}
            className="logo-grid"
            data-oid="_87vg.k"
          >
            {logoData.map((logo) => (
              <StaggerItem key={logo.id} data-oid="wd7nikq">
                <div className="logo-container" data-oid="2ed-vao">
                  <MagneticElement
                    distanceThreshold={100}
                    magnetStrength={0.2}
                    data-oid="3rj4o2z"
                  >
                    <div className="logo-item" data-oid="_bazj_f">
                      {logo.imgSrc ? (
                        <div
                          className="logo-image-container"
                          data-oid="uua6ysi"
                        >
                          <Image
                            src={logo.imgSrc}
                            alt={logo.company}
                            priority
                            width={200}
                            height={100}
                            className="logo-image"
                            data-oid="7.ib21x"
                          />
                        </div>
                      ) : (
                        <div className="logo-placeholder" data-oid="k2y65t3">
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
      <ScrollReveal data-oid="-6ku.lf">
        <section className="section-container" data-oid="9vt7odf">
          <div className="section-sidebar" data-oid="l0g4_zk">
            <div className="section-header" data-oid="-gg8w_u">
              <span className="mr-2 text-sm" data-oid="kq_pe8v">
                +
              </span>
              <h3 className="text-sm" data-oid="1li3zsl">
                Skills
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="zrt3-on">
            <FadeIn direction="up" data-oid="i3bfd6z">
              <h2 className="section-subtitle" data-oid="bun0i32">
                My Technical Expertise
              </h2>
              <p className="section-description mb-12" data-oid="r2r:9vt">
                With a background in Mechanical Engineering and years of
                experience in process development, I bring a diverse skill set
                that combines engineering principles with data-driven approaches
                to optimize manufacturing processes.
              </p>

              <StaggerContainer
                staggerChildren={0.1}
                className="skills-grid"
                data-oid="l34mc2m"
              >
                <StaggerItem data-oid="4w0-vmm">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="i_aufiz"
                  >
                    <div className="content-card" data-oid="l47i7d:">
                      <h3 className="card-title" data-oid="rl3l4wy">
                        Process Development
                      </h3>
                      <p className="card-text" data-oid="41zv:dm">
                        Developing scalable manufacturing processes for green
                        hydrogen production using statistical tools like DOE and
                        SPC.
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid="oavn0o3">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="0_6x.7f"
                  >
                    <div className="content-card" data-oid="w9wzw8v">
                      <h3 className="card-title" data-oid="yp_tm:g">
                        Data Analysis
                      </h3>
                      <p className="card-text" data-oid="sffunfd">
                        Applying large-data analysis in SaaS environments to
                        optimize process efficiency and support continuous
                        improvement initiatives.
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid="ezs_nb:">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="7mmoq3r"
                  >
                    <div className="content-card" data-oid="w1h5rly">
                      <h3 className="card-title" data-oid="hn0wv.n">
                        Manufacturing Systems
                      </h3>
                      <p className="card-text" data-oid="nddd54j">
                        Building robust data architectures for real-time data
                        storage and visualization to enhance project management
                        capabilities.
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid="86m8ksw">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="xafj0-6"
                  >
                    <div className="content-card" data-oid="1e9voiq">
                      <h3 className="card-title" data-oid="lutkm1t">
                        CAD & Engineering Design
                      </h3>
                      <p className="card-text" data-oid="lgltw9h">
                        Generating structured CAD designs and quality-focused
                        drawings using PDM systems for improved design accuracy
                        and efficiency.
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem className="md:col-span-2" data-oid="ytq_xns">
                  <TiltCard
                    glareEffect={true}
                    tiltFactor={5}
                    className="h-full"
                    data-oid="1ki73e7"
                  >
                    <div className="content-card" data-oid=":2w9f4p">
                      <h3 className="card-title" data-oid="cymsqwq">
                        Technical Skills
                      </h3>
                      <p className="card-text mb-4" data-oid="ze5o-5k">
                        Proficient in CAD, SolidWorks, Python, SQL, Data
                        Analysis, Machine Learning, Product Design, and Project
                        Management.
                      </p>
                      <div
                        className="flex items-center space-x-4 mt-2"
                        data-oid="nopjwi4"
                      >
                        <StaggerContainer
                          staggerChildren={0.2}
                          className="flex items-center space-x-4"
                          data-oid="guowf10"
                        >
                          {skillIcons.map((skillIcon, index) => (
                            <StaggerItem key={index} data-oid="105ttzw">
                              <div
                                className="skill-icon-container"
                                data-oid="ya7mvjy"
                              >
                                <MagneticElement
                                  distanceThreshold={80}
                                  magnetStrength={0.4}
                                  data-oid="mrd8wp:"
                                >
                                  <div
                                    className="skill-icon-wrapper"
                                    data-oid="lwwwi61"
                                  >
                                    <Image
                                      src={skillIcon.icon}
                                      alt={skillIcon.skill}
                                      width={50}
                                      height={50}
                                      className="skill-icon"
                                      data-oid="rrw2hqm"
                                    />
                                  </div>
                                </MagneticElement>
                                <span className="skill-name" data-oid="gogwpoc">
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
      <ScrollReveal data-oid="vj71-.z">
        <section className="section-container" data-oid="9wa69ei">
          <div className="section-sidebar" data-oid="36xli9.">
            <div className="section-header" data-oid="3lt.7rk">
              <span className="mr-2 text-sm" data-oid="7_j:i2a">
                +
              </span>
              <h3 className="text-sm" data-oid="8:jprjm">
                Experience
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="e.8tjgx">
            <FadeIn direction="up" data-oid="722xy9l">
              <h2 className="section-subtitle" data-oid="-dzjj:0">
                Professional Experience
              </h2>

              <StaggerContainer
                staggerChildren={0.15}
                className="experience-list"
                data-oid=".4k0c_y"
              >
                <StaggerItem data-oid="wb75ltw">
                  <TiltCard
                    tiltFactor={3}
                    glareEffect={true}
                    data-oid="nvn9lr-"
                  >
                    <div className="experience-card" data-oid="d70hpn1">
                      <div className="experience-header" data-oid="2rdhjp9">
                        <div data-oid="msp3tg1">
                          <h3 className="experience-title" data-oid="86pylcw">
                            Process Development Engineer
                          </h3>
                          <p className="experience-company" data-oid="d2ss810">
                            Electric Hydrogen - Boston, MA
                          </p>
                          <p className="experience-date" data-oid="5k4k5a_">
                            January 2023 - Present
                          </p>
                        </div>
                        <div className="experience-logo" data-oid="htnkhtt">
                          <Image
                            src="/uploads/ehydrogen-logo2.png"
                            alt="Electric Hydrogen"
                            width={120}
                            height={50}
                            className="object-contain"
                            data-oid="nh21hyt"
                          />
                        </div>
                      </div>
                      <ul className="experience-details" data-oid="e4y:xuq">
                        <li data-oid="yqjwc1f">
                          Enhanced process capability by 20% for green hydrogen
                          production by developing scalable manufacturing
                          processes.
                        </li>
                        <li data-oid="59q1c15">
                          Integrated cutting-edge technology into production
                          processes by working with suppliers and vendors.
                        </li>
                        <li data-oid="fiyv0yl">
                          Improved decision-making and stakeholder communication
                          by providing actionable recommendations.
                        </li>
                        <li data-oid="bs:zzai">
                          Developed robust data architectures for real-time data
                          storage and visualization.
                        </li>
                      </ul>
                    </div>
                  </TiltCard>
                </StaggerItem>

                <StaggerItem data-oid=".pbjm7_">
                  <TiltCard
                    tiltFactor={3}
                    glareEffect={true}
                    data-oid="utm2s7e"
                  >
                    <div className="experience-card" data-oid="qdnzu:_">
                      <div className="experience-header" data-oid=".1sjq1g">
                        <div data-oid="nvd9lyw">
                          <h3 className="experience-title" data-oid="353lzfp">
                            Manufacturing Engineer
                          </h3>
                          <p className="experience-company" data-oid="fy-:rev">
                            Advanced Power Conversion - Colorado, USA
                          </p>
                          <p className="experience-date" data-oid="4yko45-">
                            January 2022 - December 2023
                          </p>
                        </div>
                        <div className="experience-logo" data-oid="savg79m">
                          <Image
                            src="/uploads/Apc-logo.png"
                            alt="Advanced Power Conversion"
                            width={120}
                            height={50}
                            className="object-contain"
                            data-oid="2iinls5"
                          />
                        </div>
                      </div>
                      <ul className="experience-details" data-oid="3_ilabl">
                        <li data-oid="i:m5l2u">
                          Enhanced product lifecycle management by 20% utilizing
                          hands-on machining and efficient feedback mechanisms.
                        </li>
                        <li data-oid="g34l86:">
                          Reduced development iterations by 30% through
                          collaboration with the R&D team.
                        </li>
                        <li data-oid=".l4fvy7">
                          Achieved 95% quality control compliance by analyzing
                          production units against standards.
                        </li>
                        <li data-oid="g73zb81">
                          Facilitated cross-functional transformation in
                          manufacturing processes.
                        </li>
                      </ul>
                    </div>
                  </TiltCard>
                </StaggerItem>
              </StaggerContainer>

              <div className="flex justify-end mt-8" data-oid="5wm9tqm">
                <Link href="/about" data-oid="56-:j4i">
                  <RippleButton className="secondary-button" data-oid="6_nl0_5">
                    <span data-oid="rym63-z">View Full Experience</span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-oid="8t8-oe-"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-oid="gbkv4u8"
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
      <ScrollReveal data-oid="6mepg0n">
        <section className="section-container" data-oid="pujf47d">
          <div className="section-sidebar" data-oid="ym26yf8">
            <div className="section-header" data-oid="t7uc5p2">
              <span className="mr-2 text-sm" data-oid="9vt6v:y">
                +
              </span>
              <h3 className="text-sm" data-oid="ignqmb_">
                Education
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="9eeatwu">
            <FadeIn direction="up" data-oid="oy3v90w">
              <h2 className="section-subtitle" data-oid="t.j15cg">
                Academic Background
              </h2>

              <StaggerContainer
                staggerChildren={0.15}
                className="experience-list"
                data-oid="i2em3av"
              >
                <StaggerItem data-oid="p4g1491">
                  <TiltCard
                    tiltFactor={3}
                    glareEffect={false}
                    data-oid="gj3oi8q"
                  >
                    <div className="experience-card" data-oid="_9-f5r9">
                      <div className="experience-header" data-oid="z6a_gr1">
                        <div data-oid="g8k79lf">
                          <h3 className="experience-title" data-oid="tk1lqbz">
                            University of Colorado - Boulder
                          </h3>
                          <p className="experience-date" data-oid="j54z0rm">
                            Bachelor's, Mechanical Engineering (August 2016 -
                            May 2021)
                          </p>
                        </div>
                        <div className="experience-logo" data-oid="g1dgfo8">
                          <Image
                            src="/uploads/cuboulderlogo.png"
                            alt="University of Colorado Boulder"
                            width={120}
                            height={50}
                            className="object-contain"
                            data-oid="yzdz2y8"
                          />
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </StaggerItem>

                <StaggerItem data-oid="vuicz5-">
                  <TiltCard
                    tiltFactor={3}
                    glareEffect={false}
                    data-oid="onhbm:q"
                  >
                    <div className="experience-card" data-oid="izpa-:c">
                      <div className="experience-header" data-oid="n0okw:m">
                        <div data-oid="i476i.j">
                          <h3 className="experience-title" data-oid="w8_._tn">
                            University of Pennsylvania
                          </h3>
                          <p className="experience-date" data-oid="c6zr::b">
                            Certification, Mechanical Engineering (January 2015
                            - December 2016)
                          </p>
                        </div>
                        <div className="experience-logo" data-oid="wnpq8uz">
                          <Image
                            src="/uploads/UniversityofPennsylvania_FullLogo_RGB-4_0.png"
                            alt="University of Pennsylvania"
                            width={120}
                            height={50}
                            className="object-contain"
                            data-oid="rq1k1-8"
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
      <ScrollReveal data-oid="09ubvws">
        <section className="section-container" data-oid="hr.dzr8">
          <div className="section-sidebar" data-oid="u9kokuv">
            <div className="section-header" data-oid=".o_7b54">
              <span className="mr-2 text-sm" data-oid="mpp8vlf">
                +
              </span>
              <h3 className="text-sm" data-oid="xowr3zt">
                Contact
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="f6.4air">
            <FadeIn direction="up" data-oid="lik24js">
              <h2 className="section-subtitle" data-oid="t7tiibk">
                Get in Touch
              </h2>
              <p className="section-description mb-12" data-oid="eor.m6h">
                Interested in discussing process development, manufacturing
                efficiency, or potential opportunities? I'd love to connect.
              </p>

              <StaggerContainer
                className="contact-grid"
                staggerChildren={0.1}
                data-oid="oe--an8"
              >
                <StaggerItem data-oid="9jkk3r6">
                  <MagneticElement data-oid="y.36w_t">
                    <div className="contact-item" data-oid="fi90-24">
                      <h3 className="contact-title" data-oid="g7gjyhy">
                        Email
                      </h3>
                      <a
                        href="mailto:trueothem@gmail.com"
                        className="contact-link"
                        data-oid="h_7nd-6"
                      >
                        trueothem@gmail.com
                      </a>
                    </div>
                  </MagneticElement>
                </StaggerItem>
                <StaggerItem data-oid="9:16:k7">
                  <MagneticElement data-oid="vr8-s9o">
                    <div className="contact-item" data-oid="wi4d734">
                      <h3 className="contact-title" data-oid="qcjwf7i">
                        Phone
                      </h3>
                      <a
                        href="tel:+16172333948"
                        className="contact-link"
                        data-oid="tsixhp-"
                      >
                        +1 (617) 233-3948
                      </a>
                    </div>
                  </MagneticElement>
                </StaggerItem>
                <StaggerItem data-oid="rd6h5ev">
                  <MagneticElement data-oid="f4xzhh6">
                    <div className="contact-item" data-oid="ckeszb-">
                      <h3 className="contact-title" data-oid="9barqvh">
                        Location
                      </h3>
                      <p className="text-muted-foreground" data-oid="zpw_9kh">
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
