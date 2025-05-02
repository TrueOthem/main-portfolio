"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ClientBody from "../ClientBody";
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

// Define the component props
interface HomeClientProps {
  locale: string;
}

export default function HomeClient({ locale }: HomeClientProps) {
  // Simple translation function
  const t = (key: string) => {
    // Simple translations for home page
    const translations: Record<string, Record<string, string>> = {
      en: {
        "navigation.home": "Home",
        "navigation.about": "About",
        "navigation.works": "Works",
        "hero.name": "Mohamed Adil",
        "hero.surname": "Al Sabri",
        "about.section": "About",
        "about.title": "About Me",
        "about.description":
          "Process Development Engineer with expertise in green hydrogen production and manufacturing processes.",
        "about.experience": "Years Experience",
        "about.projects": "Projects",
        "about.companies": "Companies",
        "skills.section": "Skills",
        "skills.title": "My Expertise",
        "skills.description":
          "Specialized in process development, data analysis, and manufacturing systems.",
        "skills.processDevelopment.title": "Process Development",
        "skills.processDevelopment.description":
          "Expertise in developing and optimizing manufacturing processes for green hydrogen production.",
        "skills.dataAnalysis.title": "Data Analysis",
        "skills.dataAnalysis.description":
          "Proficient in analyzing complex datasets to drive process improvements and efficiency.",
        "skills.manufacturingSystems.title": "Manufacturing Systems",
        "skills.manufacturingSystems.description":
          "Experience with implementing and optimizing manufacturing systems and workflows.",
        "skills.cadDesign.title": "CAD Design",
        "skills.cadDesign.description":
          "Skilled in computer-aided design for manufacturing applications and prototyping.",
        "skills.technicalSkills.title": "Technical Skills",
        "skills.technicalSkills.description":
          "Proficient in various technical tools and programming languages.",
        "works.section": "Works",
        "works.title": "My Creative Works",
        "works.description":
          "A selection of my professional work and projects across different industries, focusing on process development, manufacturing optimization, and engineering design.",
        "resume.section": "Resume",
        "resume.title": "My Resume",
        "resume.description":
          "Download my full resume to learn more about my professional experience, skills, and educational background.",
        "blog.section": "Blog",
        "blog.title": "Explore Design",
        "blog.description":
          "Articles about engineering challenges, process development, and technical insights from my experience in manufacturing and renewable energy production.",
        "newsletter.section": "Stay Updated",
        "newsletter.title": "Subscribe to My Newsletter",
        "newsletter.description":
          "Receive updates on the latest engineering advancements, process development techniques, and technical insights directly to your inbox.",
        "experience.section": "Experience",
        "experience.title": "Professional Experience",
        "education.section": "Education",
        "education.title": "Academic Background",
      },
      ar: {
        "navigation.home": "الرئيسية",
        "navigation.about": "عني",
        "navigation.works": "أعمالي",
        "hero.name": "محمد عادل",
        "hero.surname": "السابري",
        "about.section": "عني",
        "about.title": "نبذة عني",
        "about.description":
          "مهندس تطوير عمليات متخصص في إنتاج الهيدروجين الأخضر وعمليات التصنيع.",
        "about.experience": "سنوات الخبرة",
        "about.projects": "المشاريع",
        "about.companies": "الشركات",
        "skills.section": "المهارات",
        "skills.title": "خبراتي",
        "skills.description":
          "متخصص في تطوير العمليات وتحليل البيانات وأنظمة التصنيع.",
        "skills.processDevelopment.title": "تطوير العمليات",
        "skills.processDevelopment.description":
          "خبرة في تطوير وتحسين عمليات التصنيع لإنتاج الهيدروجين الأخضر.",
        "skills.dataAnalysis.title": "تحليل البيانات",
        "skills.dataAnalysis.description":
          "متمكن في تحليل مجموعات البيانات المعقدة لدفع تحسينات العمليات والكفاءة.",
        "skills.manufacturingSystems.title": "أنظمة التصنيع",
        "skills.manufacturingSystems.description":
          "خبرة في تنفيذ وتحسين أنظمة وسير عمل التصنيع.",
        "skills.cadDesign.title": "تصميم CAD",
        "skills.cadDesign.description":
          "ماهر في التصميم بمساعدة الكمبيوتر لتطبيقات التصنيع والنماذج الأولية.",
        "skills.technicalSkills.title": "المهارات التقنية",
        "skills.technicalSkills.description":
          "متمكن في مختلف الأدوات التقنية ولغات البرمجة.",
        "works.section": "أعمالي",
        "works.title": "أعمالي الإبداعية",
        "works.description":
          "مجموعة من أعمالي المهنية والمشاريع عبر مختلف الصناعات، مع التركيز على تطوير العمليات وتحسين التصنيع والتصميم الهندسي.",
        "resume.section": "السيرة الذاتية",
        "resume.title": "سيرتي الذاتية",
        "resume.description":
          "قم بتنزيل سيرتي الذاتية الكاملة لمعرفة المزيد عن خبرتي المهنية ومهاراتي وخلفيتي التعليمية.",
        "blog.section": "المدونة",
        "blog.title": "استكشاف التصميم",
        "blog.description":
          "مقالات حول التحديات الهندسية وتطوير العمليات والرؤى التقنية من خبرتي في التصنيع وإنتاج الطاقة المتجددة.",
        "newsletter.section": "ابق على اطلاع",
        "newsletter.title": "اشترك في نشرتي الإخبارية",
        "newsletter.description":
          "احصل على تحديثات حول أحدث التطورات الهندسية وتقنيات تطوير العمليات والرؤى التقنية مباشرة إلى بريدك الإلكتروني.",
        "experience.section": "الخبرة",
        "experience.title": "الخبرة المهنية",
        "education.section": "التعليم",
        "education.title": "الخلفية الأكاديمية",
      },
    };

    return translations[locale]?.[key] || key;
  };

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
    {
      id: "logo3",
      company: "CU Boulder",
      imgSrc: "/uploads/cuboulderlogo.png",
    },
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

  // Define project categories
  const projectCategories = [
    { id: "all", label: "All" },
    { id: "processDevelopment", label: "Process Development" },
    { id: "manufacturing", label: "Manufacturing" },
    { id: "designEngineering", label: "Design Engineering" },
    { id: "dataArchitecture", label: "Data Architecture" },
    { id: "rdEngineering", label: "R&D Engineering" },
  ];

  // Define blog post data
  const blogPosts = [
    {
      id: "post1",
      title: "Scaling Green Hydrogen Production: Challenges and Solutions",
      category: "processDevelopment",
      date: "January 15, 2024",
      summary:
        "An examination of the key challenges in scaling green hydrogen production and potential solutions through advanced manufacturing techniques and process optimization.",
      readTime: "8 min read",
    },
    {
      id: "post2",
      title: "Data-Driven Manufacturing: Transforming Production Efficiency",
      category: "dataSystems",
      date: "December 3, 2023",
      summary:
        "How implementing robust data architectures and analytics can lead to significant improvements in manufacturing efficiency and decision-making processes.",
      readTime: "6 min read",
    },
    {
      id: "post3",
      title: "The Future of Renewable Energy Manufacturing",
      category: "sustainability",
      date: "October 22, 2023",
      summary:
        "Exploring how advanced manufacturing techniques are shaping the future of renewable energy production and the role of process engineers in this transformation.",
      readTime: "10 min read",
    },
    {
      id: "post4",
      title: "Quality Control Systems in High-Tech Manufacturing",
      category: "qualityAssurance",
      date: "September 5, 2023",
      summary:
        "A deep dive into implementing effective quality control systems in high-tech manufacturing environments, with case studies from the power conversion industry.",
      readTime: "7 min read",
    },
  ];

  // Define blog categories
  const blogCategories = [
    { id: "all", label: "All" },
    { id: "processDevelopment", label: "Process Development" },
    { id: "dataSystems", label: "Data Systems" },
    { id: "engineering", label: "Engineering" },
    { id: "qualityAssurance", label: "Quality Assurance" },
    { id: "sustainability", label: "Sustainability" },
  ];

  // Define professional experience data
  const professionalExperience = [
    {
      id: "exp1",
      title: "Process Development Engineer",
      company: "Electric Hydrogen",
      location: "Boston, MA",
      period: "January 2023 - Present",
      achievements: [
        "Enhanced process capability by 20% for green hydrogen production by developing scalable manufacturing processes.",
        "Integrated cutting-edge technology into production processes by working with suppliers and vendors.",
        "Improved decision-making and stakeholder communication by providing actionable recommendations.",
        "Developed robust data architectures for real-time data storage and visualization.",
      ],

      logo: "/uploads/ehydrogen-logo2.png",
    },
    {
      id: "exp2",
      title: "Manufacturing Engineer",
      company: "Advanced Power Conversion",
      location: "Colorado, USA",
      period: "January 2022 - December 2023",
      achievements: [
        "Enhanced product lifecycle management by 20% utilizing hands-on machining and efficient feedback mechanisms.",
        "Reduced development iterations by 30% through collaboration with the R&D team.",
        "Achieved 95% quality control compliance by analyzing production units against standards.",
        "Facilitated cross-functional transformation in manufacturing processes.",
      ],

      logo: "/uploads/Apc-logo.png",
    },
  ];

  // Define education data
  const education = [
    {
      id: "edu1",
      institution: "University of Colorado - Boulder",
      degree: "Bachelor's, Mechanical Engineering",
      period: "August 2016 - May 2021",
      logo: "/uploads/cuboulderlogo.png",
    },
    {
      id: "edu2",
      institution: "University of Pennsylvania",
      degree: "Certification, Mechanical Engineering",
      period: "January 2015 - December 2016",
      logo: "/uploads/UniversityofPennsylvania_FullLogo_RGB-4_0.png",
    },
  ];

  return (
    <ClientBody data-oid="-601ax1">
      {/* Hero Section with Parallax */}
      <section
        id="hero-section"
        className="section-container hero-section relative w-full"
        data-testid="hero-section"
        data-oid="wf7temw"
      >
        <div
          className="col-span-1 md:border-r border-[#d1d1c7] flex items-center justify-center p-0 md:p-0 lg:p-0 relative overflow-visible"
          data-oid="a.axpnc"
        >
          <div className="profile-image-container" data-oid="g_nz8bu">
            <Image
              src="/uploads/profile-photo.jpg"
              alt="Mohamed Adil Al Sabri"
              width={500}
              height={500}
              className="profile-image rounded-[370px]"
              priority
              data-oid="2oy7lfi"
            />
          </div>
        </div>
        <div
          className="col-span-2 flex items-center p-1 md:p-1 lg:p-1 relative w-full"
          data-oid="qgcd2lu"
        >
          <ParallaxScroll speed={0.1} direction="up" data-oid="kirzjr4">
            <RevealText data-oid="zb.5r41">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-medium md:p-10 lg:p-10 p-12"
                data-oid="p7:qi57"
              >
                {t("hero.name")}
                <br data-oid="ze21d-e" />
                {t("hero.surname")}
              </h1>
            </RevealText>
          </ParallaxScroll>

          {/* Abstract decorative elements with parallax */}
          <div
            className="absolute top-10 right-20 w-10 h-10 opacity-10"
            data-oid="_m-y8ri"
          >
            <ParallaxScroll speed={0.4} direction="right" data-oid="bc3tpvm">
              <div
                className="w-full h-full bg-primary rounded-full"
                data-oid="a2q8q1g"
              ></div>
            </ParallaxScroll>
          </div>
        </div>
      </section>

      {/* About Section */}
      <ScrollReveal data-oid="5feh3ag">
        <section
          id="about-section"
          className="section-container"
          data-oid="oruh4x0"
        >
          <div className="section-sidebar" data-oid="cw9nw6-">
            <div className="section-header" data-oid="w6esap.">
              <span className="mr-2 text-sm" data-oid="4hggwf2">
                +
              </span>
              <h3 className="text-sm" data-oid="qm9_.q0">
                {t("about.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="4xto4m2">
            <FadeIn direction="up" data-oid="ekh6r.d">
              <h2 className="section-title" data-oid="-8wb6p3">
                {t("about.title")}
              </h2>
              <p className="section-description" data-oid=".2wj-ox">
                {t("about.description")}
              </p>
              <div className="stats-container" data-oid="n70j:ii">
                <StaggerContainer
                  staggerChildren={0.1}
                  className="stats-container"
                  data-oid="l64fpz-"
                >
                  <StaggerItem data-oid="kw6qqqf">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid="-rt0ykf"
                    >
                      <div className="stat-item" data-oid="l_37pa8">
                        <h3 className="stat-value" data-oid="oeofwz3">
                          5+
                        </h3>
                        <p className="stat-label" data-oid="df2s2cg">
                          {t("about.experience")}
                        </p>
                      </div>
                    </MagneticElement>
                  </StaggerItem>
                  <StaggerItem data-oid="mkdp8kd">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid="ck286.-"
                    >
                      <div className="stat-item" data-oid="swvnbb5">
                        <h3 className="stat-value" data-oid="ahdtboy">
                          20+
                        </h3>
                        <p className="stat-label" data-oid="6ggax_t">
                          {t("about.projects")}
                        </p>
                      </div>
                    </MagneticElement>
                  </StaggerItem>
                  <StaggerItem data-oid="349lgvr">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid="8o_wben"
                    >
                      <div className="stat-item" data-oid="_npe0kl">
                        <h3 className="stat-value" data-oid="k2uktag">
                          4+
                        </h3>
                        <p className="stat-label" data-oid="8wdu3sx">
                          {t("about.companies")}
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
      <ScrollReveal data-oid="mmmx01j">
        <section
          className="col-span-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 py-8 border-b border-[#d1d1c7] overflow-hidden"
          data-oid="053zv6i"
        >
          <StaggerContainer
            staggerChildren={0.1}
            className="logo-grid"
            data-oid="bjfrrxk"
          >
            {logoData.map((logo) => (
              <StaggerItem key={logo.id} data-oid="zog6lg5">
                <div className="logo-container" data-oid="i58633-">
                  <MagneticElement
                    distanceThreshold={100}
                    magnetStrength={0.2}
                    data-oid="u5n72h4"
                  >
                    <div className="logo-item" data-oid="3nwq-n-">
                      {logo.imgSrc ? (
                        <div
                          className="logo-image-container"
                          data-oid="xgtoas:"
                        >
                          <Image
                            src={logo.imgSrc}
                            alt={logo.company}
                            priority
                            width={200}
                            height={100}
                            className="logo-image"
                            data-oid="k9q7b_3"
                          />
                        </div>
                      ) : (
                        <div className="logo-placeholder" data-oid="gt2coyd">
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
      <ScrollReveal data-oid="3aig8yl">
        <section className="section-container" data-oid="lqil-md">
          <div className="section-sidebar" data-oid=".c9e9fz">
            <div className="section-header" data-oid="qxtplpc">
              <span className="mr-2 text-sm" data-oid="91hk-l6">
                +
              </span>
              <h3 className="text-sm" data-oid="29m54un">
                {t("skills.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="yebmqfd">
            <FadeIn direction="up" data-oid="vpaios2">
              <h2 className="section-subtitle" data-oid="z15te_j">
                {t("skills.title")}
              </h2>
              <p className="section-description mb-12" data-oid="s_mmu0s">
                {t("skills.description")}
              </p>

              <StaggerContainer
                staggerChildren={0.1}
                className="skills-grid"
                data-oid="-u39990"
              >
                <StaggerItem data-oid="o8qvh1c">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="wv59s9_"
                  >
                    <div className="content-card" data-oid="ad09q3a">
                      <h3 className="card-title" data-oid="d.ml9eo">
                        {t("skills.processDevelopment.title")}
                      </h3>
                      <p className="card-text" data-oid="73:18fv">
                        {t("skills.processDevelopment.description")}
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid="p17wj:s">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="kopi4ly"
                  >
                    <div className="content-card" data-oid="ifzgve0">
                      <h3 className="card-title" data-oid="1j.3g7e">
                        {t("skills.dataAnalysis.title")}
                      </h3>
                      <p className="card-text" data-oid="g4f11rn">
                        {t("skills.dataAnalysis.description")}
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid="avmgvw0">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="ri::qzo"
                  >
                    <div className="content-card" data-oid="7q-xpnp">
                      <h3 className="card-title" data-oid="w4_efi.">
                        {t("skills.manufacturingSystems.title")}
                      </h3>
                      <p className="card-text" data-oid="3dqrbim">
                        {t("skills.manufacturingSystems.description")}
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid="d2sakae">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="w8qurxn"
                  >
                    <div className="content-card" data-oid="xu:qyby">
                      <h3 className="card-title" data-oid="ang2clz">
                        {t("skills.cadDesign.title")}
                      </h3>
                      <p className="card-text" data-oid="oz4y3hf">
                        {t("skills.cadDesign.description")}
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem className="md:col-span-2" data-oid="yc01yyt">
                  <TiltCard
                    glareEffect={true}
                    tiltFactor={5}
                    className="h-full"
                    data-oid="dgscs3o"
                  >
                    <div className="content-card" data-oid="-wng305">
                      <h3
                        className="card-title"
                        data-oid="v7smnu7"
                        key="olk-XS7y"
                      >
                        {t("skills.technicalSkills.title")}
                      </h3>
                      <p
                        className="card-text mb-4 rounded-none"
                        data-oid="2-.fc.v"
                        key="olk-kjFP"
                      >
                        Python, SQL, LabVIEW, C++, CAD, SolidWorks, Adobe
                        Programs, Office Suites
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
              </StaggerContainer>
            </FadeIn>
          </div>
        </section>
      </ScrollReveal>

      {/* Works Section */}
      <ScrollReveal data-oid="c.bri5-"></ScrollReveal>

      {/* Projects Grid */}
      <ScrollReveal data-oid="01abgt_"></ScrollReveal>

      {/* Professional Experience Section */}
      <ScrollReveal data-oid="ye6wr..">
        <section
          id="experience-section"
          className="section-container"
          data-oid="g:evw6h"
        >
          <div className="section-sidebar" data-oid="gv8hdoe">
            <div className="section-header" data-oid="pv61xnn">
              <span className="mr-2 text-sm" data-oid="gpspzn:">
                +
              </span>
              <h3 className="text-sm" data-oid="-6ou9dk">
                {t("experience.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="6pyj_d3">
            <FadeIn direction="up" data-oid="b8j3ge9">
              <h2 className="section-title" data-oid="07y61_u">
                {t("experience.title")}
              </h2>

              <div className="space-y-8 mt-8" data-oid="oxh_ran">
                {professionalExperience.map((exp) => (
                  <div
                    key={exp.id}
                    className="rounded-lg p-6 border border-[#d1d1c7] bg-[#00000000]"
                    data-oid="okvcvny"
                  >
                    <div
                      className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4"
                      data-oid="bgts-_o"
                    >
                      <div data-oid="ylijk8a">
                        <h3 className="text-xl font-medium" data-oid="17tgi1p">
                          {exp.title}
                        </h3>
                        <p className="text-muted-foreground" data-oid="_bfuj.8">
                          {exp.company} · {exp.location}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-oid="28qz41g"
                        >
                          {exp.period}
                        </p>
                      </div>
                      {exp.logo && (
                        <div className="mt-4 md:mt-0" data-oid="icy__49">
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            width={120}
                            height={60}
                            className="object-contain"
                            data-oid="fn-d8.0"
                          />
                        </div>
                      )}
                    </div>
                    <ul className="list-disc pl-5 space-y-2" data-oid="f8slj2f">
                      {exp.achievements.map((achievement, index) => (
                        <li key={index} className="text-sm" data-oid="k.opfnp">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      </ScrollReveal>

      {/* Education Section */}
      <ScrollReveal data-oid="8rc9s2.">
        <section
          id="education-section"
          className="section-container"
          data-oid="lt01oa7"
        >
          <div className="section-sidebar" data-oid="dnpnypc">
            <div className="section-header" data-oid="a0tn3z:">
              <span className="mr-2 text-sm" data-oid="_0r69.m">
                +
              </span>
              <h3 className="text-sm" data-oid="qukd3xn">
                {t("education.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="ylm.dv3">
            <FadeIn direction="up" data-oid="t4ley2n">
              <h2 className="section-title" data-oid="f7d9:jh">
                {t("education.title")}
              </h2>

              <div className="space-y-6 mt-8" data-oid="1dxh0hs">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="rounded-lg p-6 border border-[#d1d1c7] bg-[#00000000]"
                    data-oid="nuy1ood"
                  >
                    <div
                      className="flex flex-col md:flex-row justify-between items-start md:items-center"
                      data-oid="05t.qw_"
                    >
                      <div data-oid="qb4_8j.">
                        <h3 className="text-xl font-medium" data-oid="uq_8jpx">
                          {edu.institution}
                        </h3>
                        <p className="text-muted-foreground" data-oid="pf99esy">
                          {edu.degree}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-oid="ivuuiez"
                        >
                          {edu.period}
                        </p>
                      </div>
                      {edu.logo && (
                        <div className="mt-4 md:mt-0" data-oid="0s85opc">
                          <Image
                            src={edu.logo}
                            alt={edu.institution}
                            width={120}
                            height={60}
                            className="object-contain"
                            data-oid="58:qizl"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      </ScrollReveal>

      {/* Resume Download Section */}
      <ScrollReveal data-oid="tsnuc0k">
        <section
          id="resume-section"
          className="section-container"
          data-oid="i1ntpdc"
        >
          <div className="section-sidebar" data-oid="qhzyvgv">
            <div className="section-header" data-oid="p2r.q7o">
              <span className="mr-2 text-sm" data-oid=":uhd5-v">
                +
              </span>
              <h3 className="text-sm" data-oid="l1p-t3y">
                {t("resume.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="y2o8chn">
            <FadeIn direction="up" data-oid=":i.3poq">
              <h2 className="section-title" data-oid="zlky404">
                {t("resume.title")}
              </h2>
              <p className="section-description mb-8" data-oid="n.sr-1w">
                {t("resume.description")}
              </p>
              <a
                href="/uploads/Mohamed-adil-resume-PSE.pdf"
                download
                data-oid="m-_15fz"
              >
                <Button className="main-button rounded-full" data-oid="zg7_fve">
                  Download Resume (PDF)
                </Button>
              </a>
            </FadeIn>
          </div>
        </section>
      </ScrollReveal>

      {/* Technical Skills Section */}
      <ScrollReveal data-oid="0r-qzij">
        <section className="section-container" data-oid="7yng.4g">
          <div className="section-sidebar" data-oid="swot.yz">
            <div className="section-header" data-oid="d_gvcuw">
              <span className="mr-2 text-sm" data-oid="n2ngdxw">
                +
              </span>
              <h3 className="text-sm" data-oid="mg49sqf">
                Technical Skills
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="ujc.g2_">
            <FadeIn direction="up" data-oid="3bd2dz.">
              <h2 className="section-subtitle" data-oid="bepyggl">
                Technical Expertise
              </h2>
              <p className="section-description mb-8" data-oid="wkvb7ny">
                My core technical skills and competencies that I bring to every
                project.
              </p>

              <div className="grid grid-cols-1 gap-8" data-oid="hu7z:bs">
                <div data-oid="2x9pb.9">
                  <h3 className="text-xl font-medium mb-4" data-oid="ib0norn">
                    Engineering
                  </h3>
                  <div className="flex flex-wrap gap-2" data-oid="-nejgm1">
                    {[
                      "CAD & SolidWorks",
                      "Operations Research",
                      "Process Development",
                      "Manufacturing Systems",
                      "Product Design",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="inline-block px-4 py-2 rounded-full text-sm bg-[#00000000] border"
                        data-oid="y0wbksg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div data-oid="wm0i92_">
                  <h3 className="text-xl font-medium mb-4" data-oid="d1m-d1y">
                    Data & Programming
                  </h3>
                  <div className="flex flex-wrap gap-2" data-oid="10ggqqh">
                    {[
                      "SQL & Database Design",
                      "Python Development",
                      "Data Analysis & Visualization",
                      "C/C++ Programming",
                      "Machine Learning",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="inline-block px-4 py-2 rounded-full text-sm bg-[#00000000] border"
                        data-oid="jol9f6w"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div data-oid=":3r4hqq">
                  <h3 className="text-xl font-medium mb-4" data-oid="uyt-1g-">
                    Management
                  </h3>
                  <div className="flex flex-wrap gap-2" data-oid=":ffcvfe">
                    {[
                      "Project Management",
                      "SCRUM & Agile Methodologies",
                      "Risk Management",
                      "Team Leadership",
                      "Cross-functional Collaboration",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="inline-block px-4 py-2 rounded-full text-sm bg-[#00000000] border"
                        data-oid="ur123q0"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </ScrollReveal>

      {/* Blog Section */}
      <ScrollReveal data-oid="ud71lpd">
        <section
          id="blog-section"
          className="section-container"
          data-oid="9p:p6w9"
        >
          <div className="section-sidebar" data-oid="vu8qn-3">
            <div className="section-header" data-oid="fgll4zp">
              <span className="mr-2 text-sm" data-oid="7n.q:5y">
                +
              </span>
              <h3 className="text-sm" data-oid=":4h3l0z">
                {t("blog.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="ua90.6o">
            <FadeIn direction="up" data-oid="q.9a5kk">
              <h2 className="section-title" data-oid="q7e73hw">
                {t("blog.title")}
              </h2>
              <p className="section-description mb-8" data-oid="95zm4ls">
                {t("blog.description")}
              </p>

              {/* Blog Categories Navigation */}
              <div className="flex flex-wrap gap-2 mb-8" data-oid="mdeh:9l">
                {blogCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 text-sm rounded-full border border-[#d1d1c7] ${
                      category.id === "all"
                        ? "bg-[#0f0f0f] text-white"
                        : "hover:bg-[#f4f4f0]"
                    }`}
                    data-oid="8:61qm9"
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      </ScrollReveal>

      {/* Blog Posts Grid */}
      <ScrollReveal data-oid="gh45dob"></ScrollReveal>

      {/* Newsletter Section */}
      <ScrollReveal data-oid="m72ra41"></ScrollReveal>
    </ClientBody>
  );
}
