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
          "Process Development Engineer with expertise in renewable energy production and manufacturing processes.",
        "about.experience": "Years Experience",
        "about.projects": "Projects",
        "about.companies": "Companies",
        "skills.section": "Skills",
        "skills.title": "My Expertise",
        "skills.description":
          "Specialized in process development, data analysis, and manufacturing systems.",
        "skills.processDevelopment.title": "Process Development",
        "skills.processDevelopment.description":
          "Expertise in developing and optimizing manufacturing processes for renewable energy production.",
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
        "hero.surname": "الصابري",
        "about.section": "عني",
        "about.title": "نبذة عني",
        "about.description":
          "مهندس تطوير عمليات متخصص في الطاقة المتجددة وتطوير عمليات التصنيع.",
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
    <ClientBody data-oid="mb6ahyc">
      {/* Hero Section with Parallax */}
      <section
        id="hero-section"
        className="section-container hero-section relative w-full grid-cols-[repeat(3,_1fr)] grid flex-row justify-center grid-rows-[repeat(2,_1fr)]"
        data-testid="hero-section"
        data-oid="l5k326a"
      >
        <div
          className="col-span-1 md:border-r border-[#d1d1c7] flex p-0 md:p-0 lg:p-0 w-full justify-center items-center overflow-visible static top-auto right-auto bottom-auto left-auto rounded-none"
          data-oid=".bmnva8"
        >
          <div
            className="profile-image-container flex justify-center items-center w-[339px] h-[451px]"
            data-oid="0pn6-v4"
          >
            <Image
              src="/uploads/profile-photo.jpg"
              alt="Mohamed Adil Al Sabri"
              width={500}
              height={500}
              className="profile-image rounded-[370px] relative top-auto right-auto bottom-auto left-auto h-[370px] w-[272px]"
              priority
              data-oid="stqs0a1"
            />
          </div>
        </div>
        <div
          className="col-span-2 items-center p-1 md:p-1 lg:p-1 w-full relative top-auto right-auto bottom-auto left-auto flex-row grid grid-cols-[repeat(1,_1fr)] grid-rows-[repeat(1,_1fr)]"
          data-oid="2-2y.du"
        >
          <ParallaxScroll speed={0.1} direction="up" data-oid="g_1:ra-">
            <RevealText data-oid="5y65q5w">
              <h1
                className="md:text-6xl lg:text-7xl font-medium md:p-10 lg:p-10 p-12 text-[102px] h-[237px] static top-auto right-auto bottom-auto left-auto"
                data-oid="ogbb-:q"
              >
                {t("hero.name")}
                <br data-oid="j0jjp_g" />
                {t("hero.surname")}
              </h1>
            </RevealText>
          </ParallaxScroll>

          {/* Abstract decorative elements with parallax */}
          <div
            className="absolute top-10 right-20 w-10 h-10 opacity-10"
            data-oid="_okunza"
          >
            <ParallaxScroll speed={0.4} direction="right" data-oid="4d-o7f6">
              <div
                className="w-full h-full bg-primary rounded-full"
                data-oid="me4yiz4"
              ></div>
            </ParallaxScroll>
          </div>
        </div>
      </section>

      {/* About Section */}
      <ScrollReveal data-oid="3ex2w-_">
        <section
          id="about-section"
          className="section-container h-[355px]"
          data-oid="w8o2e.s"
        >
          <div className="section-sidebar w-auto h-[355px]" data-oid="_ij2k33">
            <div className="section-header" data-oid="g4qonb_">
              <span className="mr-2 text-sm" data-oid="krpu1cx">
                +
              </span>
              <h3 className="text-[16px]" data-oid="pqff.x4">
                {t("about.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="u:zit1v">
            <FadeIn direction="up" data-oid="u53tzj4">
              <h2 className="section-title" data-oid="vi3jx6h">
                {t("about.title")}
              </h2>
              <p className="section-description" data-oid="p6lkof4">
                {t("about.description")}
              </p>
              <div className="stats-container" data-oid="kfu1b:1">
                <StaggerContainer
                  staggerChildren={0.1}
                  className="stats-container"
                  data-oid="za5ilhg"
                >
                  <StaggerItem data-oid="x8f1a.t">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid="lswow0j"
                    >
                      <div className="stat-item" data-oid="jetc-rv">
                        <h3 className="stat-value" data-oid=":p0rrzz">
                          5+
                        </h3>
                        <p className="stat-label" data-oid="xtk0qgd">
                          {t("about.experience")}
                        </p>
                      </div>
                    </MagneticElement>
                  </StaggerItem>
                  <StaggerItem data-oid="4dtr9.8">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid="157h-rr"
                    >
                      <div className="stat-item" data-oid="x.n0hq-">
                        <h3 className="stat-value" data-oid="wj3ttu6">
                          20+
                        </h3>
                        <p className="stat-label" data-oid="yxa4g91">
                          {t("about.projects")}
                        </p>
                      </div>
                    </MagneticElement>
                  </StaggerItem>
                  <StaggerItem data-oid="lg_e.7g">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid="eidftk3"
                    >
                      <div className="stat-item" data-oid="w337rcx">
                        <h3 className="stat-value" data-oid="4m16_45">
                          4+
                        </h3>
                        <p className="stat-label" data-oid="ud1_5sl">
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
      <ScrollReveal data-oid="jkqvqfv">
        <section
          className="col-span-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 border-b border-[#d1d1c7] overflow-hidden p-[32px]"
          data-oid="hxjjk_u"
        >
          <StaggerContainer
            staggerChildren={0.1}
            className="logo-grid"
            data-oid="-5i92-1"
          >
            {logoData.map((logo) => (
              <StaggerItem key={logo.id} data-oid="5yzug07">
                <div className="logo-container" data-oid="pzhk096">
                  <MagneticElement
                    distanceThreshold={100}
                    magnetStrength={0.2}
                    data-oid="12bm3lv"
                  >
                    <div className="logo-item" data-oid="ho7pk1o">
                      {logo.imgSrc ? (
                        <div
                          className="logo-image-container"
                          data-oid="kwtru0i"
                        >
                          <Image
                            src={logo.imgSrc}
                            alt={logo.company}
                            priority
                            width={200}
                            height={100}
                            className="logo-image"
                            data-oid="7_0hgaa"
                          />
                        </div>
                      ) : (
                        <div className="logo-placeholder" data-oid="t.iqpih">
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
      <ScrollReveal data-oid="8thp7v3">
        <section className="section-container" data-oid="bqtmwdf">
          <div className="section-sidebar" data-oid="tz-.da5">
            <div className="section-header" data-oid=".1f6omh">
              <span className="mr-2 text-sm" data-oid="p8-.cw-">
                +
              </span>
              <h3 className="text-[16px]" data-oid="qs65i8y">
                {t("skills.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="x:zvbvc">
            <FadeIn direction="up" data-oid="xi61u0t">
              <h2 className="section-subtitle" data-oid=".j.x5ow">
                {t("skills.title")}
              </h2>
              <p className="section-description mb-12" data-oid="ooi50h-">
                {t("skills.description")}
              </p>

              <StaggerContainer
                staggerChildren={0.1}
                className="skills-grid"
                data-oid="kobn-jm"
              >
                <StaggerItem data-oid="uc7kcj3">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="arup8nt"
                  >
                    <div className="content-card" data-oid="yz_-dmx">
                      <h3 className="card-title" data-oid="r2868-y">
                        {t("skills.processDevelopment.title")}
                      </h3>
                      <p className="card-text" data-oid="5t.gqri">
                        {t("skills.processDevelopment.description")}
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid="ya3xx87">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="m5n39qd"
                  >
                    <div className="content-card" data-oid="q.c27:q">
                      <h3 className="card-title" data-oid="-p4hm55">
                        {t("skills.dataAnalysis.title")}
                      </h3>
                      <p className="card-text" data-oid="k5.pltd">
                        {t("skills.dataAnalysis.description")}
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid="gx:cyfv">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="isj2oq9"
                  >
                    <div className="content-card" data-oid="xo1de0z">
                      <h3 className="card-title" data-oid="efsbyfb">
                        {t("skills.manufacturingSystems.title")}
                      </h3>
                      <p className="card-text" data-oid=":vokspi">
                        {t("skills.manufacturingSystems.description")}
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid="0qhm3xm">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid=".bo.f.5"
                  >
                    <div className="content-card" data-oid="8ekrsdw">
                      <h3 className="card-title" data-oid="1bmn0tr">
                        {t("skills.cadDesign.title")}
                      </h3>
                      <p className="card-text" data-oid="jthafii">
                        {t("skills.cadDesign.description")}
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem className="md:col-span-2" data-oid="gn1grqp">
                  <TiltCard
                    glareEffect={true}
                    tiltFactor={5}
                    className="h-full"
                    data-oid="tdmhmi6"
                  >
                    <div className="content-card" data-oid="z1dxnav">
                      <h3 className="card-title" data-oid="wf719t:">
                        {t("skills.technicalSkills.title")}
                      </h3>
                      <p
                        className="card-text mb-4 rounded-none"
                        data-oid="l3ag2fq"
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
      <ScrollReveal data-oid="l8e_tmi"></ScrollReveal>

      {/* Projects Grid */}
      <ScrollReveal data-oid="2fjjzlv"></ScrollReveal>

      {/* Professional Experience Section */}
      <ScrollReveal data-oid="4dy.mj1">
        <section
          id="experience-section"
          className="section-container"
          data-oid="a6-5ro:"
        >
          <div className="section-sidebar" data-oid="t5bmuec">
            <div className="section-header" data-oid="al5cb5f">
              <span className="mr-2 text-sm" data-oid="nm:53k3">
                +
              </span>
              <h3 className="text-[16px]" data-oid="px-m6sy">
                {t("experience.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="f9o:0j.">
            <FadeIn direction="up" data-oid="o-etegi">
              <h2 className="section-title" data-oid="v1jg90z">
                {t("experience.title")}
              </h2>

              <div className="space-y-8 mt-8" data-oid="2:pqwzs">
                {professionalExperience.map((exp) => (
                  <div
                    key={exp.id}
                    className="rounded-lg p-6 border border-[#d1d1c7] bg-[#00000000]"
                    data-oid="t7ss..4"
                  >
                    <div
                      className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4"
                      data-oid="jplml5s"
                    >
                      <div data-oid="ke2obnr">
                        <h3 className="text-xl font-medium" data-oid="kiep0-7">
                          {exp.title}
                        </h3>
                        <p className="text-muted-foreground" data-oid="gaw_lbh">
                          {exp.company} · {exp.location}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-oid="im92081"
                        >
                          {exp.period}
                        </p>
                      </div>
                      {exp.logo && (
                        <div className="mt-4 md:mt-0" data-oid="4:7sedl">
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            width={120}
                            height={60}
                            className="object-contain"
                            data-oid="d5yqncd"
                          />
                        </div>
                      )}
                    </div>
                    <ul className="list-disc pl-5 space-y-2" data-oid="_r:8aui">
                      {exp.achievements.map((achievement, index) => (
                        <li key={index} className="text-sm" data-oid="r6h.2f4">
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
      <ScrollReveal data-oid="b9k2_r.">
        <section
          id="education-section"
          className="section-container"
          data-oid="d8-kbmn"
        >
          <div className="section-sidebar" data-oid="klkqbnz">
            <div className="section-header" data-oid=".zm_otv">
              <span className="mr-2 text-sm" data-oid="0z9ls5n">
                +
              </span>
              <h3 className="text-[16px]" data-oid="0qmgi1m">
                {t("education.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="1veoqfi">
            <FadeIn direction="up" data-oid="gbeytv5">
              <h2 className="section-title" data-oid="079s67b">
                {t("education.title")}
              </h2>

              <div className="space-y-6 mt-8" data-oid="cy-icno">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="rounded-lg p-6 border border-[#d1d1c7] bg-[#00000000]"
                    data-oid="-bszejy"
                  >
                    <div
                      className="flex flex-col md:flex-row justify-between items-start md:items-center"
                      data-oid="x_0ijvb"
                    >
                      <div data-oid="bwhpqnw">
                        <h3 className="text-xl font-medium" data-oid="i5-vnce">
                          {edu.institution}
                        </h3>
                        <p className="text-muted-foreground" data-oid="9m8n6nx">
                          {edu.degree}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-oid="tzpldgo"
                        >
                          {edu.period}
                        </p>
                      </div>
                      {edu.logo && (
                        <div className="mt-4 md:mt-0" data-oid="zzb_qp:">
                          <Image
                            src={edu.logo}
                            alt={edu.institution}
                            width={120}
                            height={60}
                            className="object-contain"
                            data-oid="u23mprh"
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
      <ScrollReveal data-oid=":ulggzq">
        <section
          id="resume-section"
          className="section-container"
          data-oid="bqea0wb"
        >
          <div className="section-sidebar" data-oid="pdlc-ev">
            <div className="section-header" data-oid="dmhvzsq">
              <span className="mr-2 text-sm" data-oid="9evgy47">
                +
              </span>
              <h3 className="text-[16px]" data-oid=":y72dzm">
                {t("resume.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="r4_5m-v">
            <FadeIn direction="up" data-oid="yln79dc">
              <h2 className="section-title" data-oid="k63pe8y">
                {t("resume.title")}
              </h2>
              <p className="section-description mb-8" data-oid="aklqpbe">
                {t("resume.description")}
              </p>
              <a
                href="/uploads/Mohamed-adil-resume-PSE.pdf"
                download
                data-oid="s_sz21g"
              >
                <Button className="main-button rounded-full" data-oid="juvmlmt">
                  Download Resume (PDF)
                </Button>
              </a>
            </FadeIn>
          </div>
        </section>
      </ScrollReveal>

      {/* Technical Skills Section */}
      <ScrollReveal data-oid="j5bt92r">
        <section className="section-container" data-oid="pz.sjpt">
          <div className="section-sidebar" data-oid="1bek5e6">
            <div className="section-header" data-oid="k36ylv0">
              <span className="mr-2 text-sm" data-oid="bomvw.7">
                +
              </span>
              <h3 className="text-[16px]" data-oid=".tw12a-">
                Technical Skills
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="fv-gn4k">
            <FadeIn direction="up" data-oid="uw9xfq.">
              <h2 className="section-subtitle" data-oid="ru7yt67">
                Technical Expertise
              </h2>
              <p className="section-description mb-8" data-oid="teqt3yq">
                My core technical skills and competencies that I bring to every
                project.
              </p>

              <div className="grid grid-cols-1 gap-8" data-oid="3tvajsd">
                <div data-oid="gn4686w">
                  <h3 className="text-xl font-medium mb-4" data-oid="h423dry">
                    Engineering
                  </h3>
                  <div className="flex flex-wrap gap-2" data-oid="p-jsjcc">
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
                        data-oid="6ha8eip"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div data-oid="r9s5yih">
                  <h3 className="text-xl font-medium mb-4" data-oid="pp_:koq">
                    Data & Programming
                  </h3>
                  <div className="flex flex-wrap gap-2" data-oid="9d6-:zb">
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
                        data-oid="nsibt4n"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div data-oid="kb7sip9">
                  <h3 className="text-xl font-medium mb-4" data-oid="y2nxuy7">
                    Management
                  </h3>
                  <div className="flex flex-wrap gap-2" data-oid=":qy0e_t">
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
                        data-oid="ryg9_8j"
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
      <ScrollReveal data-oid="vk.lkql"></ScrollReveal>

      {/* Blog Posts Grid */}
      <ScrollReveal data-oid="s_wc41p"></ScrollReveal>

      {/* Newsletter Section */}
      <ScrollReveal data-oid="e52zlz9"></ScrollReveal>
    </ClientBody>
  );
}
