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
    <ClientBody data-oid="bkyt651">
      {/* Hero Section with Parallax */}
      <section
        id="hero-section"
        className="section-container hero-section relative w-full"
        data-testid="hero-section"
        data-oid="-ci4lou"
      >
        <div
          className="col-span-1 md:border-r border-[#d1d1c7] flex items-center justify-center p-0 md:p-0 lg:p-0 relative overflow-visible"
          data-oid="pzdq78b"
        >
          <div className="profile-image-container" data-oid="573muut">
            <Image
              src="/uploads/profile-photo.jpg"
              alt="Mohamed Adil Al Sabri"
              width={500}
              height={500}
              className="profile-image rounded-[470px]"
              priority
              data-oid="np3nimx"
            />
          </div>
        </div>
        <div
          className="col-span-2 flex items-center p-1 md:p-1 lg:p-1 relative w-full"
          data-oid="wq00lrt"
        >
          <ParallaxScroll speed={0.1} direction="up" data-oid="d7r2qi1">
            <RevealText data-oid="1g3ga6o">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-medium md:p-10 lg:p-10 p-12"
                data-oid="0q7..x:"
              >
                Mohamed Adil
                <br data-oid="fm.80f2" />
                Al Sabri
              </h1>
            </RevealText>
          </ParallaxScroll>

          {/* Abstract decorative elements with parallax */}

          <div
            className="absolute top-10 right-20 w-10 h-10 opacity-10"
            data-oid="yx74igw"
          >
            <ParallaxScroll speed={0.4} direction="right" data-oid="viigxqm">
              <div
                className="w-full h-full bg-primary rounded-full"
                data-oid="xco4i:f"
              ></div>
            </ParallaxScroll>
          </div>
        </div>
      </section>

      {/* About Section */}
      <ScrollReveal data-oid=":33yww7">
        <section className="section-container" data-oid="12d6qdd">
          <div className="section-sidebar" data-oid="at08u8e">
            <div className="section-header" data-oid="nemb7ze">
              <span className="mr-2 text-sm" data-oid="yxmmem-">
                +
              </span>
              <h3 className="text-sm" data-oid="xja4ta4">
                About
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="vee8e9d">
            <FadeIn direction="up" data-oid="cj-_1t3">
              <h2 className="section-title" data-oid="cb:27fm">
                Process Development Engineer
              </h2>
              <p className="section-description" data-oid="y3lw94y">
                Process Development Engineer specializing in green hydrogen
                production. I enhance process capability by developing scalable
                manufacturing processes, integrating cutting-edge technology,
                and applying data analysis to optimize production efficiency.
              </p>
              <div className="stats-container" data-oid="5_h8k86">
                <StaggerContainer
                  staggerChildren={0.1}
                  className="stats-container"
                  data-oid="i1tyo3:"
                >
                  <StaggerItem data-oid="iemhonz">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid=".7_.e.a"
                    >
                      <div className="stat-item" data-oid="ar-fk9t">
                        <h3 className="stat-value" data-oid="tv5oar4">
                          5+
                        </h3>
                        <p className="stat-label" data-oid="vtn5iih">
                          Years of Experience
                        </p>
                      </div>
                    </MagneticElement>
                  </StaggerItem>
                  <StaggerItem data-oid="hug2hgh">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid="u40.uq_"
                    >
                      <div className="stat-item" data-oid="st.3hc4">
                        <h3 className="stat-value" data-oid="bxxept3">
                          20+
                        </h3>
                        <p className="stat-label" data-oid="_h34l8k">
                          Projects Completed
                        </p>
                      </div>
                    </MagneticElement>
                  </StaggerItem>
                  <StaggerItem data-oid="aj:rjs.">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid="xse1ds8"
                    >
                      <div className="stat-item" data-oid="kvkg7-3">
                        <h3 className="stat-value" data-oid="fus3e5s">
                          4+
                        </h3>
                        <p className="stat-label" data-oid="21tmkok">
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
      <ScrollReveal data-oid="eywwax5">
        <section
          className="col-span-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 py-8 border-b border-[#d1d1c7] overflow-hidden"
          data-oid=".6dquab"
        >
          <StaggerContainer
            staggerChildren={0.1}
            className="logo-grid"
            data-oid="m-r:_ch"
          >
            {logoData.map((logo) => (
              <StaggerItem key={logo.id} data-oid="t3zy901">
                <div className="logo-container" data-oid=":lyd.:b">
                  <MagneticElement
                    distanceThreshold={100}
                    magnetStrength={0.2}
                    data-oid="0m-hwaq"
                  >
                    <div className="logo-item" data-oid="a7u48fu">
                      {logo.imgSrc ? (
                        <div
                          className="logo-image-container"
                          data-oid="3w1gb0k"
                        >
                          <Image
                            src={logo.imgSrc}
                            alt={logo.company}
                            priority
                            width={200}
                            height={100}
                            className="logo-image"
                            data-oid="etdmgl7"
                          />
                        </div>
                      ) : (
                        <div className="logo-placeholder" data-oid="xwln9o8">
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
      <ScrollReveal data-oid="qn9h7ot">
        <section className="section-container" data-oid="__30o6w">
          <div className="section-sidebar" data-oid="_69z_:4">
            <div className="section-header" data-oid="jp-lqcm">
              <span className="mr-2 text-sm" data-oid="eo1f2rs">
                +
              </span>
              <h3 className="text-sm" data-oid="mdsud15">
                Skills
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="t1qxk-f">
            <FadeIn direction="up" data-oid=".g0xcjc">
              <h2 className="section-subtitle" data-oid="l784208">
                My Technical Expertise
              </h2>
              <p className="section-description mb-12" data-oid="_vv.7ey">
                With a background in Mechanical Engineering and years of
                experience in process development, I bring a diverse skill set
                that combines engineering principles with data-driven approaches
                to optimize manufacturing processes.
              </p>

              <StaggerContainer
                staggerChildren={0.1}
                className="skills-grid"
                data-oid="912fv5s"
              >
                <StaggerItem data-oid="8wy85fu">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="pof_nzi"
                  >
                    <div className="content-card" data-oid="u7mu03w">
                      <h3 className="card-title" data-oid="by4oo5y">
                        Process Development
                      </h3>
                      <p className="card-text" data-oid="2x7pkoi">
                        Developing scalable manufacturing processes for green
                        hydrogen production using statistical tools like DOE and
                        SPC.
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid="ppssb1o">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="anxik4f"
                  >
                    <div className="content-card" data-oid="1kq8zni">
                      <h3 className="card-title" data-oid="4hir.:f">
                        Data Analysis
                      </h3>
                      <p className="card-text" data-oid="3u1phsc">
                        Applying large-data analysis in SaaS environments to
                        optimize process efficiency and support continuous
                        improvement initiatives.
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid=":dw93mo">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="bt5u5t4"
                  >
                    <div className="content-card" data-oid="ybgctt9">
                      <h3 className="card-title" data-oid="s4jctpj">
                        Manufacturing Systems
                      </h3>
                      <p className="card-text" data-oid="t_3dtw5">
                        Building robust data architectures for real-time data
                        storage and visualization to enhance project management
                        capabilities.
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid="1szx691">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="69l2zvn"
                  >
                    <div className="content-card" data-oid="kgtxfub">
                      <h3 className="card-title" data-oid="kcd2:uh">
                        CAD & Engineering Design
                      </h3>
                      <p className="card-text" data-oid="cwt-76i">
                        Generating structured CAD designs and quality-focused
                        drawings using PDM systems for improved design accuracy
                        and efficiency.
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem className="md:col-span-2" data-oid="can9sm2">
                  <TiltCard
                    glareEffect={true}
                    tiltFactor={5}
                    className="h-full"
                    data-oid="qm:agx_"
                  >
                    <div className="content-card" data-oid="nax4xzg">
                      <h3 className="card-title" data-oid="17u67go">
                        Technical Skills
                      </h3>
                      <p className="card-text mb-4" data-oid="qwgu:b7">
                        Proficient in CAD, SolidWorks, Python, SQL, Data
                        Analysis, Machine Learning, Product Design, and Project
                        Management.
                      </p>
                      <div
                        className="flex items-center space-x-4 mt-2"
                        data-oid="csef4do"
                      >
                        <StaggerContainer
                          staggerChildren={0.2}
                          className="flex items-center space-x-4"
                          data-oid="qksi1at"
                        >
                          {skillIcons.map((skillIcon, index) => (
                            <StaggerItem key={index} data-oid="2d2a0o1">
                              <div
                                className="skill-icon-container"
                                data-oid="4_q.:5n"
                              >
                                <MagneticElement
                                  distanceThreshold={80}
                                  magnetStrength={0.4}
                                  data-oid="l6q.euc"
                                >
                                  <div
                                    className="skill-icon-wrapper"
                                    data-oid="_btlnew"
                                  >
                                    <Image
                                      src={skillIcon.icon}
                                      alt={skillIcon.skill}
                                      width={50}
                                      height={50}
                                      className="skill-icon"
                                      data-oid="9tdymd9"
                                    />
                                  </div>
                                </MagneticElement>
                                <span className="skill-name" data-oid="p_x3tl-">
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
      <ScrollReveal data-oid="esiz_va">
        <section className="section-container" data-oid="fqvrd6h">
          <div className="section-sidebar" data-oid="sbm_la9">
            <div className="section-header" data-oid="5tmutzk">
              <span className="mr-2 text-sm" data-oid="vx4r16o">
                +
              </span>
              <h3 className="text-sm" data-oid="gq56695">
                Experience
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="5h2x6e7">
            <FadeIn direction="up" data-oid="r4ed.99">
              <h2 className="section-subtitle" data-oid="zqbd6pm">
                Professional Experience
              </h2>

              <StaggerContainer
                staggerChildren={0.15}
                className="experience-list"
                data-oid="rz7mz7o"
              >
                <StaggerItem data-oid="vlwfj54">
                  <TiltCard
                    tiltFactor={3}
                    glareEffect={true}
                    data-oid="yblf-v_"
                  >
                    <div className="experience-card" data-oid="at0ct84">
                      <div className="experience-header" data-oid="x9bzk4m">
                        <div data-oid="r2wpgk0">
                          <h3 className="experience-title" data-oid="pkqaq4e">
                            Process Development Engineer
                          </h3>
                          <p className="experience-company" data-oid="afdeukp">
                            Electric Hydrogen - Boston, MA
                          </p>
                          <p className="experience-date" data-oid="78yecls">
                            January 2023 - Present
                          </p>
                        </div>
                        <div className="experience-logo" data-oid="4vdqd:4">
                          <Image
                            src="/uploads/ehydrogen-logo2.png"
                            alt="Electric Hydrogen"
                            width={120}
                            height={50}
                            className="object-contain"
                            data-oid=":6zdkwp"
                          />
                        </div>
                      </div>
                      <ul className="experience-details" data-oid="fym9p0.">
                        <li data-oid="l14m5tz">
                          Enhanced process capability by 20% for green hydrogen
                          production by developing scalable manufacturing
                          processes.
                        </li>
                        <li data-oid="9iidpzf">
                          Integrated cutting-edge technology into production
                          processes by working with suppliers and vendors.
                        </li>
                        <li data-oid="82:u_--">
                          Improved decision-making and stakeholder communication
                          by providing actionable recommendations.
                        </li>
                        <li data-oid="j6ckk_w">
                          Developed robust data architectures for real-time data
                          storage and visualization.
                        </li>
                      </ul>
                    </div>
                  </TiltCard>
                </StaggerItem>

                <StaggerItem data-oid="hs719lg">
                  <TiltCard
                    tiltFactor={3}
                    glareEffect={true}
                    data-oid="7nq-qhq"
                  >
                    <div className="experience-card" data-oid="t.ix2dg">
                      <div className="experience-header" data-oid="ph3-y:4">
                        <div data-oid="9.23q6n">
                          <h3 className="experience-title" data-oid="mrnvcs9">
                            Manufacturing Engineer
                          </h3>
                          <p className="experience-company" data-oid="c7ww0vn">
                            Advanced Power Conversion - Colorado, USA
                          </p>
                          <p className="experience-date" data-oid="h.3d0nn">
                            January 2022 - December 2023
                          </p>
                        </div>
                        <div className="experience-logo" data-oid=".1w51ws">
                          <Image
                            src="/uploads/Apc-logo.png"
                            alt="Advanced Power Conversion"
                            width={120}
                            height={50}
                            className="object-contain"
                            data-oid="nt.b31d"
                          />
                        </div>
                      </div>
                      <ul className="experience-details" data-oid="1eq0hrx">
                        <li data-oid="8vyxp8h">
                          Enhanced product lifecycle management by 20% utilizing
                          hands-on machining and efficient feedback mechanisms.
                        </li>
                        <li data-oid="fk9.4a:">
                          Reduced development iterations by 30% through
                          collaboration with the R&D team.
                        </li>
                        <li data-oid=":blehj2">
                          Achieved 95% quality control compliance by analyzing
                          production units against standards.
                        </li>
                        <li data-oid="y5fpblk">
                          Facilitated cross-functional transformation in
                          manufacturing processes.
                        </li>
                      </ul>
                    </div>
                  </TiltCard>
                </StaggerItem>
              </StaggerContainer>

              <div className="flex justify-end mt-8" data-oid="lxp3iqq">
                <Link href="/about" data-oid="covi08f">
                  <RippleButton className="secondary-button" data-oid="63:bkqr">
                    <span data-oid=":3o3_us">View Full Experience</span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-oid="z_.eses"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-oid="7o-d1b."
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
      <ScrollReveal data-oid="t9:wjkp">
        <section className="section-container" data-oid="6mdnxwi">
          <div className="section-sidebar" data-oid="u48893r">
            <div className="section-header" data-oid="fh0be:t">
              <span className="mr-2 text-sm" data-oid="64rt8ll">
                +
              </span>
              <h3 className="text-sm" data-oid=":ncr_i3">
                Education
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="arl:mqe">
            <FadeIn direction="up" data-oid="qe_udjf">
              <h2 className="section-subtitle" data-oid=".hp9k4r">
                Academic Background
              </h2>

              <StaggerContainer
                staggerChildren={0.15}
                className="experience-list"
                data-oid="4s-a4v8"
              >
                <StaggerItem data-oid="tr9fw8x">
                  <TiltCard
                    tiltFactor={3}
                    glareEffect={false}
                    data-oid="u5g9ty1"
                  >
                    <div className="experience-card" data-oid="ofdfckt">
                      <div className="experience-header" data-oid="ty7qc.t">
                        <div data-oid="-juras0">
                          <h3 className="experience-title" data-oid="ohj3a7p">
                            University of Colorado - Boulder
                          </h3>
                          <p className="experience-date" data-oid="k4qrr.8">
                            Bachelor's, Mechanical Engineering (August 2016 -
                            May 2021)
                          </p>
                        </div>
                        <div className="experience-logo" data-oid="qpxg7r1">
                          <Image
                            src="/uploads/cuboulderlogo.png"
                            alt="University of Colorado Boulder"
                            width={120}
                            height={50}
                            className="object-contain"
                            data-oid="m5b5__3"
                          />
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </StaggerItem>

                <StaggerItem data-oid="uf:gp49">
                  <TiltCard
                    tiltFactor={3}
                    glareEffect={false}
                    data-oid="gdwz48o"
                  >
                    <div className="experience-card" data-oid="pogov9b">
                      <div className="experience-header" data-oid="z0a:t47">
                        <div data-oid="et1269p">
                          <h3 className="experience-title" data-oid="avpd.ec">
                            University of Pennsylvania
                          </h3>
                          <p className="experience-date" data-oid="x4.fp8o">
                            Certification, Mechanical Engineering (January 2015
                            - December 2016)
                          </p>
                        </div>
                        <div className="experience-logo" data-oid="_000iev">
                          <Image
                            src="/uploads/UniversityofPennsylvania_FullLogo_RGB-4_0.png"
                            alt="University of Pennsylvania"
                            width={120}
                            height={50}
                            className="object-contain"
                            data-oid="avc8qwj"
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
      <ScrollReveal data-oid="iqv8uj5">
        <section className="section-container" data-oid="00a9s7p">
          <div className="section-sidebar" data-oid="d8xqjl1" key="olk-tZwJ">
            <div className="section-header" data-oid="69wwzqk">
              <span className="mr-2 text-sm" data-oid="4n:i7vz">
                +
              </span>
              <h3 className="text-sm" data-oid="7p93xyu">
                Contact
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="r.mc-oj" key="olk-jrIK">
            <FadeIn direction="up" data-oid="s2znk38">
              <h2 className="section-subtitle" data-oid="d8hu53m">
                Get in Touch
              </h2>
              <p className="section-description mb-12" data-oid="uu8p:73">
                Interested in discussing process development, manufacturing
                efficiency, or potential opportunities? I'd love to connect.
              </p>

              <StaggerContainer
                className="contact-grid"
                staggerChildren={0.1}
                data-oid="21a7epa"
              >
                <StaggerItem data-oid="mfz1peo">
                  <MagneticElement data-oid="i.6is0e">
                    <div className="contact-item" data-oid="kf:6nx4">
                      <h3 className="contact-title" data-oid="74.onrh">
                        Email
                      </h3>
                      <a
                        href="mailto:trueothem@gmail.com"
                        className="contact-link"
                        data-oid="98bt0lt"
                      >
                        trueothem@gmail.com
                      </a>
                    </div>
                  </MagneticElement>
                </StaggerItem>
                <StaggerItem data-oid="vqcsg..">
                  <MagneticElement data-oid="0uh.m4x">
                    <div className="contact-item" data-oid="9u.joj6">
                      <h3 className="contact-title" data-oid="3t3y4t1">
                        Phone
                      </h3>
                      <a
                        href="tel:+16172333948"
                        className="contact-link"
                        data-oid="cbpwb4n"
                      >
                        +1 (617) 233-3948
                      </a>
                    </div>
                  </MagneticElement>
                </StaggerItem>
                <StaggerItem data-oid="1xc24yj">
                  <MagneticElement data-oid=":ujb8ve">
                    <div className="contact-item" data-oid="jnlzw_k">
                      <h3 className="contact-title" data-oid="8vrb9o-">
                        Location
                      </h3>
                      <p className="text-muted-foreground" data-oid="ihtt0lt">
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
