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
    <ClientBody data-oid="tgjvaro">
      {/* Hero Section with Parallax */}
      <section
        id="hero-section"
        className="section-container hero-section relative w-full grid grid-cols-[repeat(3,_1fr)]"
        data-testid="hero-section"
        data-oid="yqwiwjt"
      >
        <div
          className="col-span-1 md:border-r border-[#d1d1c7] flex p-0 md:p-0 lg:p-0 w-full justify-center items-center overflow-visible static top-auto right-auto bottom-auto left-auto"
          data-oid="lkk8yr:"
        >
          <div
            className="profile-image-container flex justify-center items-center w-[339px] h-[451px]"
            data-oid="2wsus:f"
          >
            <Image
              src="/uploads/profile-photo.jpg"
              alt="Mohamed Adil Al Sabri"
              width={500}
              height={500}
              className="profile-image rounded-[370px] relative top-auto right-auto bottom-auto left-auto h-full w-[539px]"
              priority
              data-oid="ca.rgq2"
            />
          </div>
        </div>
        <div
          className="col-span-2 flex items-center p-1 md:p-1 lg:p-1 relative w-full"
          data-oid="v:igczm"
        >
          <ParallaxScroll speed={0.1} direction="up" data-oid="eq0ep44">
            <RevealText data-oid="y:4ndjq">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-medium md:p-10 lg:p-10 p-12"
                data-oid="g00uowy"
              >
                {t("hero.name")}
                <br data-oid="5uej3lb" />
                {t("hero.surname")}
              </h1>
            </RevealText>
          </ParallaxScroll>

          {/* Abstract decorative elements with parallax */}
          <div
            className="absolute top-10 right-20 w-10 h-10 opacity-10"
            data-oid="v9y2n-i"
          >
            <ParallaxScroll speed={0.4} direction="right" data-oid="kkfmq_i">
              <div
                className="w-full h-full bg-primary rounded-full"
                data-oid="7veu769"
              ></div>
            </ParallaxScroll>
          </div>
        </div>
      </section>

      {/* About Section */}
      <ScrollReveal data-oid="56ylzls">
        <section
          id="about-section"
          className="section-container"
          data-oid="5nya5g9"
        >
          <div className="section-sidebar" data-oid="o2-163r">
            <div className="section-header" data-oid="hylm5p6">
              <span className="mr-2 text-sm" data-oid=":su7.:x">
                +
              </span>
              <h3 className="text-[16px]" data-oid="shyv:64">
                {t("about.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="71e61e9">
            <FadeIn direction="up" data-oid="1qt-_p:">
              <h2 className="section-title" data-oid="1eo95mx">
                {t("about.title")}
              </h2>
              <p className="section-description" data-oid="1k88ib9">
                {t("about.description")}
              </p>
              <div className="stats-container" data-oid="_ardqr1">
                <StaggerContainer
                  staggerChildren={0.1}
                  className="stats-container"
                  data-oid="rtcz9-4"
                >
                  <StaggerItem data-oid="ktrpr:4">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid="cvhu859"
                    >
                      <div className="stat-item" data-oid="8ehcxjv">
                        <h3 className="stat-value" data-oid="ou-zw52">
                          5+
                        </h3>
                        <p className="stat-label" data-oid="1:hzk:t">
                          {t("about.experience")}
                        </p>
                      </div>
                    </MagneticElement>
                  </StaggerItem>
                  <StaggerItem data-oid="rw:dtcc">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid="xmbkjph"
                    >
                      <div className="stat-item" data-oid="6u:sw6k">
                        <h3 className="stat-value" data-oid="a2wuket">
                          20+
                        </h3>
                        <p className="stat-label" data-oid="dlatoez">
                          {t("about.projects")}
                        </p>
                      </div>
                    </MagneticElement>
                  </StaggerItem>
                  <StaggerItem data-oid="w9un8h-">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid="sf9b:57"
                    >
                      <div className="stat-item" data-oid="h_20wo2">
                        <h3 className="stat-value" data-oid="rclc:gc">
                          4+
                        </h3>
                        <p className="stat-label" data-oid="639v80x">
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
      <ScrollReveal data-oid="fz6cz-u">
        <section
          className="col-span-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 py-8 border-b border-[#d1d1c7] overflow-hidden"
          data-oid=".n5etd."
        >
          <StaggerContainer
            staggerChildren={0.1}
            className="logo-grid"
            data-oid="_fr:kvs"
          >
            {logoData.map((logo) => (
              <StaggerItem key={logo.id} data-oid="2twifsi">
                <div className="logo-container" data-oid="izgp1zt">
                  <MagneticElement
                    distanceThreshold={100}
                    magnetStrength={0.2}
                    data-oid="w-6y915"
                  >
                    <div className="logo-item" data-oid="secg6il">
                      {logo.imgSrc ? (
                        <div
                          className="logo-image-container"
                          data-oid="g6njphc"
                        >
                          <Image
                            src={logo.imgSrc}
                            alt={logo.company}
                            priority
                            width={200}
                            height={100}
                            className="logo-image"
                            data-oid="67rvyhj"
                          />
                        </div>
                      ) : (
                        <div className="logo-placeholder" data-oid="qg5kbi3">
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
      <ScrollReveal data-oid="d2.v-dk">
        <section className="section-container" data-oid="bc1w6u6">
          <div className="section-sidebar" data-oid="rsjp:8s">
            <div className="section-header" data-oid="ez8wl_x">
              <span className="mr-2 text-sm" data-oid="5mtxqij">
                +
              </span>
              <h3 className="text-[16px]" data-oid="ah_q8a3">
                {t("skills.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="p5sp8vj">
            <FadeIn direction="up" data-oid="kmlp3p3">
              <h2 className="section-subtitle" data-oid="hyshblq">
                {t("skills.title")}
              </h2>
              <p className="section-description mb-12" data-oid="slw.c:z">
                {t("skills.description")}
              </p>

              <StaggerContainer
                staggerChildren={0.1}
                className="skills-grid"
                data-oid="wymwa_:"
              >
                <StaggerItem data-oid="yyn5adm">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="j8wn9gd"
                  >
                    <div className="content-card" data-oid="9hv.yr3">
                      <h3 className="card-title" data-oid="_c79.en">
                        {t("skills.processDevelopment.title")}
                      </h3>
                      <p className="card-text" data-oid="r2h6uuh">
                        {t("skills.processDevelopment.description")}
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid="05-8nze">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="f5t:j.g"
                  >
                    <div className="content-card" data-oid="kicz3la">
                      <h3 className="card-title" data-oid="v9wujc:">
                        {t("skills.dataAnalysis.title")}
                      </h3>
                      <p className="card-text" data-oid="r8zvg_o">
                        {t("skills.dataAnalysis.description")}
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid="80hzno8">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="5_dze4n"
                  >
                    <div className="content-card" data-oid="p.rj2d5">
                      <h3 className="card-title" data-oid="88gbmb:">
                        {t("skills.manufacturingSystems.title")}
                      </h3>
                      <p className="card-text" data-oid="vc7_-s8">
                        {t("skills.manufacturingSystems.description")}
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid="btwyogc">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="8_b5i66"
                  >
                    <div className="content-card" data-oid="464.9gv">
                      <h3 className="card-title" data-oid="g0lyg:k">
                        {t("skills.cadDesign.title")}
                      </h3>
                      <p className="card-text" data-oid="myui30p">
                        {t("skills.cadDesign.description")}
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem className="md:col-span-2" data-oid="z17uw:p">
                  <TiltCard
                    glareEffect={true}
                    tiltFactor={5}
                    className="h-full"
                    data-oid="8jymfv."
                  >
                    <div className="content-card" data-oid="v-s27bu">
                      <h3 className="card-title" data-oid="ytra:59">
                        {t("skills.technicalSkills.title")}
                      </h3>
                      <p
                        className="card-text mb-4 rounded-none"
                        data-oid="xids235"
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
      <ScrollReveal data-oid="bp5tp9d"></ScrollReveal>

      {/* Projects Grid */}
      <ScrollReveal data-oid="ucdkzxk"></ScrollReveal>

      {/* Professional Experience Section */}
      <ScrollReveal data-oid="r2j0-.i">
        <section
          id="experience-section"
          className="section-container"
          data-oid="39c8mr2"
        >
          <div className="section-sidebar" data-oid=".9csos5">
            <div className="section-header" data-oid="0dfbnq:">
              <span className="mr-2 text-sm" data-oid="-43wlg-">
                +
              </span>
              <h3 className="text-[16px]" data-oid="__oa2jh">
                {t("experience.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="u1j2:lg">
            <FadeIn direction="up" data-oid="uatb-jk">
              <h2 className="section-title" data-oid="hcu4c:v">
                {t("experience.title")}
              </h2>

              <div className="space-y-8 mt-8" data-oid="ivz94o6">
                {professionalExperience.map((exp) => (
                  <div
                    key={exp.id}
                    className="rounded-lg p-6 border border-[#d1d1c7] bg-[#00000000]"
                    data-oid="loyxpel"
                  >
                    <div
                      className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4"
                      data-oid="c1jbi7j"
                    >
                      <div data-oid="u:5zz_l">
                        <h3 className="text-xl font-medium" data-oid="vto4u-1">
                          {exp.title}
                        </h3>
                        <p className="text-muted-foreground" data-oid="ztn6p.m">
                          {exp.company} · {exp.location}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-oid="-s-tisa"
                        >
                          {exp.period}
                        </p>
                      </div>
                      {exp.logo && (
                        <div className="mt-4 md:mt-0" data-oid="jz_-rqy">
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            width={120}
                            height={60}
                            className="object-contain"
                            data-oid="gm4ykaz"
                          />
                        </div>
                      )}
                    </div>
                    <ul className="list-disc pl-5 space-y-2" data-oid="9n964-8">
                      {exp.achievements.map((achievement, index) => (
                        <li key={index} className="text-sm" data-oid="1475sfj">
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
      <ScrollReveal data-oid=".dj-2-y">
        <section
          id="education-section"
          className="section-container"
          data-oid="noqum3v"
        >
          <div className="section-sidebar" data-oid="8kdizpe">
            <div className="section-header" data-oid="36_llvv">
              <span className="mr-2 text-sm" data-oid="yli6p_v">
                +
              </span>
              <h3 className="text-[16px]" data-oid="410m:wx">
                {t("education.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="u_eo2:r">
            <FadeIn direction="up" data-oid="gzchos-">
              <h2 className="section-title" data-oid="_yge6e8">
                {t("education.title")}
              </h2>

              <div className="space-y-6 mt-8" data-oid="jiudobc">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="rounded-lg p-6 border border-[#d1d1c7] bg-[#00000000]"
                    data-oid="5fbm.e8"
                  >
                    <div
                      className="flex flex-col md:flex-row justify-between items-start md:items-center"
                      data-oid="a3ye_o2"
                    >
                      <div data-oid="upk8ccz">
                        <h3 className="text-xl font-medium" data-oid="f_f77y.">
                          {edu.institution}
                        </h3>
                        <p className="text-muted-foreground" data-oid="qe666ru">
                          {edu.degree}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-oid="sx3p7s5"
                        >
                          {edu.period}
                        </p>
                      </div>
                      {edu.logo && (
                        <div className="mt-4 md:mt-0" data-oid="8sj7o20">
                          <Image
                            src={edu.logo}
                            alt={edu.institution}
                            width={120}
                            height={60}
                            className="object-contain"
                            data-oid="orppr_t"
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
      <ScrollReveal data-oid="u29b0k1">
        <section
          id="resume-section"
          className="section-container"
          data-oid="xic3r-k"
        >
          <div className="section-sidebar" data-oid="bnqae43">
            <div className="section-header" data-oid="gkzb3k.">
              <span className="mr-2 text-sm" data-oid="hqpbk3i">
                +
              </span>
              <h3 className="text-[16px]" data-oid="z.cnpwq">
                {t("resume.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="7k1bi33">
            <FadeIn direction="up" data-oid="hharux6">
              <h2 className="section-title" data-oid="hsnkboi">
                {t("resume.title")}
              </h2>
              <p className="section-description mb-8" data-oid="b7naogd">
                {t("resume.description")}
              </p>
              <a
                href="/uploads/Mohamed-adil-resume-PSE.pdf"
                download
                data-oid="p2qd3od"
              >
                <Button className="main-button rounded-full" data-oid="6jz3h5r">
                  Download Resume (PDF)
                </Button>
              </a>
            </FadeIn>
          </div>
        </section>
      </ScrollReveal>

      {/* Technical Skills Section */}
      <ScrollReveal data-oid="rla40-x">
        <section className="section-container" data-oid=":_4cc_7">
          <div className="section-sidebar" data-oid="hfrrd:q">
            <div className="section-header" data-oid="p.qc9-o">
              <span className="mr-2 text-sm" data-oid="87xy40i">
                +
              </span>
              <h3 className="text-[16px]" data-oid="t19xg1l">
                Technical Skills
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="as8cx6:">
            <FadeIn direction="up" data-oid="ybo0k6:">
              <h2 className="section-subtitle" data-oid="q_ptrgc">
                Technical Expertise
              </h2>
              <p className="section-description mb-8" data-oid="f1dg861">
                My core technical skills and competencies that I bring to every
                project.
              </p>

              <div className="grid grid-cols-1 gap-8" data-oid="q8k5opu">
                <div data-oid="4-:w82d">
                  <h3 className="text-xl font-medium mb-4" data-oid="k:zdk6s">
                    Engineering
                  </h3>
                  <div className="flex flex-wrap gap-2" data-oid="38pn6m8">
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
                        data-oid="2g_52j:"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div data-oid=":cv6mrv">
                  <h3 className="text-xl font-medium mb-4" data-oid="xxc8mx9">
                    Data & Programming
                  </h3>
                  <div className="flex flex-wrap gap-2" data-oid="p-dtl17">
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
                        data-oid="ny6h2ho"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div data-oid="4c8ls7g">
                  <h3 className="text-xl font-medium mb-4" data-oid="u0pbc.s">
                    Management
                  </h3>
                  <div className="flex flex-wrap gap-2" data-oid="p2y712.">
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
                        data-oid="3su7i1p"
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
      <ScrollReveal data-oid="0cwwtq3"></ScrollReveal>

      {/* Blog Posts Grid */}
      <ScrollReveal data-oid="7do9jbg"></ScrollReveal>

      {/* Newsletter Section */}
      <ScrollReveal data-oid="av6n-7i"></ScrollReveal>
    </ClientBody>
  );
}
