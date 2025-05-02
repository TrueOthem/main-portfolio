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
    <ClientBody data-oid="oa_6.rk">
      {/* Hero Section with Parallax */}
      <section
        id="hero-section"
        className="section-container hero-section relative w-full"
        data-testid="hero-section"
        data-oid="f5k3i93"
      >
        <div
          className="col-span-1 md:border-r border-[#d1d1c7] flex items-center justify-center p-0 md:p-0 lg:p-0 relative overflow-visible"
          data-oid="5jwfkwy"
        >
          <div className="profile-image-container" data-oid="4-ok:yf">
            <Image
              src="/uploads/profile-photo.jpg"
              alt="Mohamed Adil Al Sabri"
              width={500}
              height={500}
              className="profile-image rounded-[268px]"
              priority
              data-oid="s6w4g0m"
            />
          </div>
        </div>
        <div
          className="col-span-2 flex items-center p-1 md:p-1 lg:p-1 relative w-full"
          data-oid="qakh6oi"
        >
          <ParallaxScroll speed={0.1} direction="up" data-oid="bc5u6rg">
            <RevealText data-oid="x_4l0y1">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-medium md:p-10 lg:p-10 p-12"
                data-oid="agst:_x"
              >
                Mohamed Adil
                <br data-oid="8tksyg0" />
                Al Sabri
              </h1>
            </RevealText>
          </ParallaxScroll>

          {/* Abstract decorative elements with parallax */}

          <div
            className="absolute top-10 right-20 w-10 h-10 opacity-10"
            data-oid="2-wibt7"
          >
            <ParallaxScroll speed={0.4} direction="right" data-oid="pt36hyk">
              <div
                className="w-full h-full bg-primary rounded-full"
                data-oid="b210dvt"
              ></div>
            </ParallaxScroll>
          </div>
        </div>
      </section>

      {/* About Section */}
      <ScrollReveal data-oid="kd.r6qp">
        <section className="section-container" data-oid="pjbvtgm">
          <div className="section-sidebar" data-oid="p-3ygwa">
            <div className="section-header" data-oid="roq.01e">
              <span className="mr-2 text-sm" data-oid="3izylar">
                +
              </span>
              <h3 className="text-sm" data-oid="4zic_3:">
                About
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="-a2uvrc">
            <FadeIn direction="up" data-oid="mbddko-">
              <h2 className="section-title" data-oid="6e_yi3v">
                Process Development Engineer
              </h2>
              <p className="section-description" data-oid="4-5i3b5">
                Process Development Engineer specializing in green hydrogen
                production. I enhance process capability by developing scalable
                manufacturing processes, integrating cutting-edge technology,
                and applying data analysis to optimize production efficiency.
              </p>
              <div className="stats-container" data-oid=".guu..6">
                <StaggerContainer
                  staggerChildren={0.1}
                  className="stats-container"
                  data-oid="h2k6swz"
                >
                  <StaggerItem data-oid="tp:a9tn">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid="e-dwm11"
                    >
                      <div className="stat-item" data-oid="3wjm-g6">
                        <h3 className="stat-value" data-oid="xf-z6ud">
                          5+
                        </h3>
                        <p className="stat-label" data-oid="vixo4te">
                          Years of Experience
                        </p>
                      </div>
                    </MagneticElement>
                  </StaggerItem>
                  <StaggerItem data-oid="f6dp3nr">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid="uoo0_3u"
                    >
                      <div className="stat-item" data-oid="1vfb.23">
                        <h3 className="stat-value" data-oid="5931n4_">
                          20+
                        </h3>
                        <p className="stat-label" data-oid=":cvz9wc">
                          Projects Completed
                        </p>
                      </div>
                    </MagneticElement>
                  </StaggerItem>
                  <StaggerItem data-oid="va7ig9b">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid="ypp78gd"
                    >
                      <div className="stat-item" data-oid="1bej50o">
                        <h3 className="stat-value" data-oid="j:724:l">
                          4+
                        </h3>
                        <p className="stat-label" data-oid="xgwb-7:">
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
      <ScrollReveal data-oid="zow4yz8">
        <section
          className="col-span-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 py-8 border-b border-[#d1d1c7] overflow-hidden"
          data-oid="cxtornx"
        >
          <StaggerContainer
            staggerChildren={0.1}
            className="logo-grid"
            data-oid="wp7jn04"
          >
            {logoData.map((logo) => (
              <StaggerItem key={logo.id} data-oid="elz._s5">
                <div className="logo-container" data-oid="1ksse.-">
                  <MagneticElement
                    distanceThreshold={100}
                    magnetStrength={0.2}
                    data-oid="r2bgq_w"
                  >
                    <div className="logo-item" data-oid="xciw31e">
                      {logo.imgSrc ? (
                        <div
                          className="logo-image-container"
                          data-oid="v68dbv7"
                        >
                          <Image
                            src={logo.imgSrc}
                            alt={logo.company}
                            priority
                            width={200}
                            height={100}
                            className="logo-image"
                            data-oid="ryam07p"
                          />
                        </div>
                      ) : (
                        <div className="logo-placeholder" data-oid="dwwvk19">
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
      <ScrollReveal data-oid="39va0sr">
        <section className="section-container" data-oid="ndt85s5">
          <div className="section-sidebar" data-oid="quf586d">
            <div className="section-header" data-oid=".u.fzge">
              <span className="mr-2 text-sm" data-oid="-2mm7km">
                +
              </span>
              <h3 className="text-sm" data-oid="jk33ktw">
                Skills
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="teu7e.g">
            <FadeIn direction="up" data-oid="p7x5utn">
              <h2 className="section-subtitle" data-oid="nnlpna_">
                My Technical Expertise
              </h2>
              <p className="section-description mb-12" data-oid="i.cbcel">
                With a background in Mechanical Engineering and years of
                experience in process development, I bring a diverse skill set
                that combines engineering principles with data-driven approaches
                to optimize manufacturing processes.
              </p>

              <StaggerContainer
                staggerChildren={0.1}
                className="skills-grid"
                data-oid="p260dys"
              >
                <StaggerItem data-oid="zauj3nr">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="6kw2xr4"
                  >
                    <div className="content-card" data-oid="wn1mmbc">
                      <h3 className="card-title" data-oid="7_innfo">
                        Process Development
                      </h3>
                      <p className="card-text" data-oid="hat5liy">
                        Developing scalable manufacturing processes for green
                        hydrogen production using statistical tools like DOE and
                        SPC.
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid="jk5.-3a">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="kw45ib1"
                  >
                    <div className="content-card" data-oid="h32wsb4">
                      <h3 className="card-title" data-oid=".i20sz8">
                        Data Analysis
                      </h3>
                      <p className="card-text" data-oid="njbbf7o">
                        Applying large-data analysis in SaaS environments to
                        optimize process efficiency and support continuous
                        improvement initiatives.
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid=":p9m1h9">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid=":.m2hxm"
                  >
                    <div className="content-card" data-oid="phzupg5">
                      <h3 className="card-title" data-oid="--7:ggo">
                        Manufacturing Systems
                      </h3>
                      <p className="card-text" data-oid="wuu3vqk">
                        Building robust data architectures for real-time data
                        storage and visualization to enhance project management
                        capabilities.
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid="hy5:l8-">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="pavwo3c"
                  >
                    <div className="content-card" data-oid="sk0th5n">
                      <h3 className="card-title" data-oid="ckwdtru">
                        CAD & Engineering Design
                      </h3>
                      <p className="card-text" data-oid="5mkb2bv">
                        Generating structured CAD designs and quality-focused
                        drawings using PDM systems for improved design accuracy
                        and efficiency.
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem className="md:col-span-2" data-oid="s.whh3z">
                  <TiltCard
                    glareEffect={true}
                    tiltFactor={5}
                    className="h-full"
                    data-oid="yh-n35i"
                  >
                    <div className="content-card" data-oid="ukly4y3">
                      <h3 className="card-title" data-oid="pyg7dl3">
                        Technical Skills
                      </h3>
                      <p className="card-text mb-4" data-oid="qt0kyv1">
                        Proficient in CAD, SolidWorks, Python, SQL, Data
                        Analysis, Machine Learning, Product Design, and Project
                        Management.
                      </p>
                      <div
                        className="flex items-center space-x-4 mt-2"
                        data-oid="cpn5i5s"
                      >
                        <StaggerContainer
                          staggerChildren={0.2}
                          className="flex items-center space-x-4"
                          data-oid="r5zpfbc"
                        >
                          {skillIcons.map((skillIcon, index) => (
                            <StaggerItem key={index} data-oid="tmdbbmx">
                              <div
                                className="skill-icon-container"
                                data-oid="19-:7ga"
                              >
                                <MagneticElement
                                  distanceThreshold={80}
                                  magnetStrength={0.4}
                                  data-oid="4s6s3_4"
                                >
                                  <div
                                    className="skill-icon-wrapper"
                                    data-oid="bgzkv5z"
                                  >
                                    <Image
                                      src={skillIcon.icon}
                                      alt={skillIcon.skill}
                                      width={50}
                                      height={50}
                                      className="skill-icon"
                                      data-oid=".joz_.6"
                                    />
                                  </div>
                                </MagneticElement>
                                <span className="skill-name" data-oid="yxorvdj">
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
      <ScrollReveal data-oid="q56is0l">
        <section className="section-container" data-oid="05nq_ue">
          <div className="section-sidebar" data-oid="lfsubhe">
            <div className="section-header" data-oid="hbkfow7">
              <span className="mr-2 text-sm" data-oid="ljpi7ww">
                +
              </span>
              <h3 className="text-sm" data-oid="rlciplz">
                Experience
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="l0::v7i">
            <FadeIn direction="up" data-oid="iy3ip.d">
              <h2 className="section-subtitle" data-oid="lu1u_m5">
                Professional Experience
              </h2>

              <StaggerContainer
                staggerChildren={0.15}
                className="experience-list"
                data-oid="zv7dqx8"
              >
                <StaggerItem data-oid="8tz3xoh">
                  <TiltCard
                    tiltFactor={3}
                    glareEffect={true}
                    data-oid="46.u-ob"
                  >
                    <div className="experience-card" data-oid="c8x7v7w">
                      <div className="experience-header" data-oid="z88ntfq">
                        <div data-oid="sbmqd:5">
                          <h3 className="experience-title" data-oid="m:kn20k">
                            Process Development Engineer
                          </h3>
                          <p className="experience-company" data-oid="0.tga69">
                            Electric Hydrogen - Boston, MA
                          </p>
                          <p className="experience-date" data-oid="gmnxbc5">
                            January 2023 - Present
                          </p>
                        </div>
                        <div className="experience-logo" data-oid="04hw39f">
                          <Image
                            src="/uploads/ehydrogen-logo2.png"
                            alt="Electric Hydrogen"
                            width={120}
                            height={50}
                            className="object-contain"
                            data-oid="lret1tq"
                          />
                        </div>
                      </div>
                      <ul className="experience-details" data-oid="ld0hbnc">
                        <li data-oid="saxzki5">
                          Enhanced process capability by 20% for green hydrogen
                          production by developing scalable manufacturing
                          processes.
                        </li>
                        <li data-oid="qvaig3g">
                          Integrated cutting-edge technology into production
                          processes by working with suppliers and vendors.
                        </li>
                        <li data-oid="99557fv">
                          Improved decision-making and stakeholder communication
                          by providing actionable recommendations.
                        </li>
                        <li data-oid="lv13vmu">
                          Developed robust data architectures for real-time data
                          storage and visualization.
                        </li>
                      </ul>
                    </div>
                  </TiltCard>
                </StaggerItem>

                <StaggerItem data-oid="0wsyvap">
                  <TiltCard
                    tiltFactor={3}
                    glareEffect={true}
                    data-oid="hfcqgj0"
                  >
                    <div className="experience-card" data-oid=".w24hb2">
                      <div className="experience-header" data-oid="qw-50ae">
                        <div data-oid="rwz423w">
                          <h3 className="experience-title" data-oid="kxw_o-u">
                            Manufacturing Engineer
                          </h3>
                          <p className="experience-company" data-oid="aeptj7.">
                            Advanced Power Conversion - Colorado, USA
                          </p>
                          <p className="experience-date" data-oid="uyrlt2k">
                            January 2022 - December 2023
                          </p>
                        </div>
                        <div className="experience-logo" data-oid="66gforr">
                          <Image
                            src="/uploads/Apc-logo.png"
                            alt="Advanced Power Conversion"
                            width={120}
                            height={50}
                            className="object-contain"
                            data-oid="to7jaia"
                          />
                        </div>
                      </div>
                      <ul className="experience-details" data-oid="4jyx.zx">
                        <li data-oid="emio-je">
                          Enhanced product lifecycle management by 20% utilizing
                          hands-on machining and efficient feedback mechanisms.
                        </li>
                        <li data-oid=":i4qje7">
                          Reduced development iterations by 30% through
                          collaboration with the R&D team.
                        </li>
                        <li data-oid=":m0-0jb">
                          Achieved 95% quality control compliance by analyzing
                          production units against standards.
                        </li>
                        <li data-oid="8b10m5o">
                          Facilitated cross-functional transformation in
                          manufacturing processes.
                        </li>
                      </ul>
                    </div>
                  </TiltCard>
                </StaggerItem>
              </StaggerContainer>

              <div className="flex justify-end mt-8" data-oid="usxguge">
                <Link href="/about" data-oid="2jp:2l5">
                  <RippleButton className="secondary-button" data-oid="1_w-ms7">
                    <span data-oid="fatpwzm">View Full Experience</span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-oid="1.-sz_b"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-oid="elmysnr"
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
      <ScrollReveal data-oid="z_ou_lf">
        <section className="section-container" data-oid="gzvj3.b">
          <div className="section-sidebar" data-oid="1g0xwx4">
            <div className="section-header" data-oid="9:tmmzo">
              <span className="mr-2 text-sm" data-oid="-8:tccx">
                +
              </span>
              <h3 className="text-sm" data-oid="bb3ds8d">
                Education
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="wiyzaqk">
            <FadeIn direction="up" data-oid="46zkm-.">
              <h2 className="section-subtitle" data-oid="bu3w2mg">
                Academic Background
              </h2>

              <StaggerContainer
                staggerChildren={0.15}
                className="experience-list"
                data-oid="kmos2-6"
              >
                <StaggerItem data-oid="d6gho4f">
                  <TiltCard
                    tiltFactor={3}
                    glareEffect={false}
                    data-oid="vziw.x-"
                  >
                    <div className="experience-card" data-oid="2v6rtxa">
                      <div className="experience-header" data-oid="bjhokhu">
                        <div data-oid="7io5qim">
                          <h3 className="experience-title" data-oid="67rr:8w">
                            University of Colorado - Boulder
                          </h3>
                          <p className="experience-date" data-oid="wwycr5h">
                            Bachelor's, Mechanical Engineering (August 2016 -
                            May 2021)
                          </p>
                        </div>
                        <div className="experience-logo" data-oid="zcrl537">
                          <Image
                            src="/uploads/cuboulderlogo.png"
                            alt="University of Colorado Boulder"
                            width={120}
                            height={50}
                            className="object-contain"
                            data-oid="4vx5zgu"
                          />
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </StaggerItem>

                <StaggerItem data-oid="hm_l35n">
                  <TiltCard
                    tiltFactor={3}
                    glareEffect={false}
                    data-oid="jk:z4wf"
                  >
                    <div className="experience-card" data-oid="a:gq7m8">
                      <div className="experience-header" data-oid="t8365ur">
                        <div data-oid="3s6wh86">
                          <h3 className="experience-title" data-oid="r-r6zo8">
                            University of Pennsylvania
                          </h3>
                          <p className="experience-date" data-oid="j7-w_kp">
                            Certification, Mechanical Engineering (January 2015
                            - December 2016)
                          </p>
                        </div>
                        <div className="experience-logo" data-oid="dfsl9ly">
                          <Image
                            src="/uploads/UniversityofPennsylvania_FullLogo_RGB-4_0.png"
                            alt="University of Pennsylvania"
                            width={120}
                            height={50}
                            className="object-contain"
                            data-oid="aomwva-"
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
      <ScrollReveal data-oid="jlmek-8">
        <section className="section-container" data-oid="ig92hwh">
          <div className="section-sidebar" data-oid="832-4hd">
            <div className="section-header" data-oid="vn3fao0">
              <span className="mr-2 text-sm" data-oid="p1b8x7k">
                +
              </span>
              <h3 className="text-sm" data-oid="1x07ssg">
                Contact
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="mq_kw-1">
            <FadeIn direction="up" data-oid="4uwwvuv">
              <h2 className="section-subtitle" data-oid=".z.jmrn">
                Get in Touch
              </h2>
              <p className="section-description mb-12" data-oid="21e425h">
                Interested in discussing process development, manufacturing
                efficiency, or potential opportunities? I'd love to connect.
              </p>

              <StaggerContainer
                className="contact-grid"
                staggerChildren={0.1}
                data-oid="vn_ozof"
              >
                <StaggerItem data-oid="2k7m9d4">
                  <MagneticElement data-oid="g:lquky">
                    <div className="contact-item" data-oid="cny-npj">
                      <h3 className="contact-title" data-oid="wqbi15p">
                        Email
                      </h3>
                      <a
                        href="mailto:trueothem@gmail.com"
                        className="contact-link"
                        data-oid="_285ru_"
                      >
                        trueothem@gmail.com
                      </a>
                    </div>
                  </MagneticElement>
                </StaggerItem>
                <StaggerItem data-oid="bb5ogt7">
                  <MagneticElement data-oid="1gaad_u">
                    <div className="contact-item" data-oid="-o0zkfo">
                      <h3 className="contact-title" data-oid="-1awra2">
                        Phone
                      </h3>
                      <a
                        href="tel:+16172333948"
                        className="contact-link"
                        data-oid="aaqfmho"
                      >
                        +1 (617) 233-3948
                      </a>
                    </div>
                  </MagneticElement>
                </StaggerItem>
                <StaggerItem data-oid="l4stcql">
                  <MagneticElement data-oid="cu5ww39">
                    <div className="contact-item" data-oid=":j76q_k">
                      <h3 className="contact-title" data-oid="85:n9xi">
                        Location
                      </h3>
                      <p className="text-muted-foreground" data-oid="irk025n">
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
