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
    <ClientBody data-oid="gg.zcz2">
      {/* Hero Section with Parallax */}
      <section
        id="hero-section"
        className="section-container hero-section relative w-full"
        data-testid="hero-section"
        data-oid="s6y-lyi"
      >
        <div
          className="col-span-1 md:border-r border-[#d1d1c7] flex items-center justify-center p-0 md:p-0 lg:p-0 relative overflow-visible"
          data-oid="htrospk"
        >
          <div className="profile-image-container" data-oid="_n0kg-v">
            <Image
              src="/uploads/profile-photo.jpg"
              alt="Mohamed Adil Al Sabri"
              width={500}
              height={500}
              className="profile-image rounded-[370px]"
              priority
              data-oid="t63_fu1"
            />
          </div>
        </div>
        <div
          className="col-span-2 flex items-center p-1 md:p-1 lg:p-1 relative w-full"
          data-oid="wj14g_0"
        >
          <ParallaxScroll speed={0.1} direction="up" data-oid="0jao1i4">
            <RevealText data-oid=":.b2r0:">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-medium md:p-10 lg:p-10 p-12"
                data-oid=":7h60z1"
              >
                {t("hero.name")}
                <br data-oid="qo3.ax0" />
                {t("hero.surname")}
              </h1>
            </RevealText>
          </ParallaxScroll>

          {/* Abstract decorative elements with parallax */}
          <div
            className="absolute top-10 right-20 w-10 h-10 opacity-10"
            data-oid="4t63ku8"
          >
            <ParallaxScroll speed={0.4} direction="right" data-oid="d4i_jqk">
              <div
                className="w-full h-full bg-primary rounded-full"
                data-oid="2_dp-h5"
              ></div>
            </ParallaxScroll>
          </div>
        </div>
      </section>

      {/* About Section */}
      <ScrollReveal data-oid="q8vkty9">
        <section
          id="about-section"
          className="section-container"
          data-oid="yr3fl_p"
        >
          <div className="section-sidebar" data-oid="2m7bd6m">
            <div className="section-header" data-oid="1kg_hwd">
              <span className="mr-2 text-sm" data-oid="xr6arlg">
                +
              </span>
              <h3 className="text-sm" data-oid="q5kcaq6">
                {t("about.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="x_6:o39">
            <FadeIn direction="up" data-oid="ygp_lkr">
              <h2 className="section-title" data-oid="gdxxfpi">
                {t("about.title")}
              </h2>
              <p className="section-description" data-oid="a99d8xt">
                {t("about.description")}
              </p>
              <div className="stats-container" data-oid="tv_t5x6">
                <StaggerContainer
                  staggerChildren={0.1}
                  className="stats-container"
                  data-oid="pyago4k"
                >
                  <StaggerItem data-oid=".rj:u_r">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid="8za9wod"
                    >
                      <div className="stat-item" data-oid="qz2k27v">
                        <h3 className="stat-value" data-oid="h079gj_">
                          5+
                        </h3>
                        <p className="stat-label" data-oid="7ll7v69">
                          {t("about.experience")}
                        </p>
                      </div>
                    </MagneticElement>
                  </StaggerItem>
                  <StaggerItem data-oid="1eaor2e">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid="27:s79g"
                    >
                      <div className="stat-item" data-oid="xwnk4va">
                        <h3 className="stat-value" data-oid="adkv2--">
                          20+
                        </h3>
                        <p className="stat-label" data-oid="l78mscd">
                          {t("about.projects")}
                        </p>
                      </div>
                    </MagneticElement>
                  </StaggerItem>
                  <StaggerItem data-oid="2qi6f7e">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid="7zz3fp-"
                    >
                      <div className="stat-item" data-oid="hlwmxrz">
                        <h3 className="stat-value" data-oid="-brsid7">
                          4+
                        </h3>
                        <p className="stat-label" data-oid="-znx3ro">
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
      <ScrollReveal data-oid="czyp6p1">
        <section
          className="col-span-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 py-8 border-b border-[#d1d1c7] overflow-hidden"
          data-oid="kl_u14y"
        >
          <StaggerContainer
            staggerChildren={0.1}
            className="logo-grid"
            data-oid="oov:oj3"
          >
            {logoData.map((logo) => (
              <StaggerItem key={logo.id} data-oid="j2r:ftx">
                <div className="logo-container" data-oid="6k5kd1o">
                  <MagneticElement
                    distanceThreshold={100}
                    magnetStrength={0.2}
                    data-oid="nx4zele"
                  >
                    <div className="logo-item" data-oid="_7j0zfu">
                      {logo.imgSrc ? (
                        <div
                          className="logo-image-container"
                          data-oid="y__lh9c"
                        >
                          <Image
                            src={logo.imgSrc}
                            alt={logo.company}
                            priority
                            width={200}
                            height={100}
                            className="logo-image"
                            data-oid="v.v396c"
                          />
                        </div>
                      ) : (
                        <div className="logo-placeholder" data-oid="ibmt3x3">
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
      <ScrollReveal data-oid="imthurg">
        <section className="section-container" data-oid=".7t67e5">
          <div className="section-sidebar" data-oid="693:38e">
            <div className="section-header" data-oid="tl.8o92">
              <span className="mr-2 text-sm" data-oid="gg4-o2.">
                +
              </span>
              <h3 className="text-sm" data-oid="138l:o7">
                {t("skills.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="frz2s9:">
            <FadeIn direction="up" data-oid="-595x.z">
              <h2 className="section-subtitle" data-oid="l..606o">
                {t("skills.title")}
              </h2>
              <p className="section-description mb-12" data-oid="3l2luen">
                {t("skills.description")}
              </p>

              <StaggerContainer
                staggerChildren={0.1}
                className="skills-grid"
                data-oid="r6nws6l"
              >
                <StaggerItem data-oid="rlz5x7b">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="xgeitd9"
                  >
                    <div className="content-card" data-oid="5gh7jn1">
                      <h3 className="card-title" data-oid="gl1t2m1">
                        {t("skills.processDevelopment.title")}
                      </h3>
                      <p className="card-text" data-oid="78nxfu2">
                        {t("skills.processDevelopment.description")}
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid="j.eqdl7">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="jb6nh::"
                  >
                    <div className="content-card" data-oid="ohextin">
                      <h3 className="card-title" data-oid="asl1p.6">
                        {t("skills.dataAnalysis.title")}
                      </h3>
                      <p className="card-text" data-oid="yz_k1rw">
                        {t("skills.dataAnalysis.description")}
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid="wz9_ph2">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="c-svahu"
                  >
                    <div className="content-card" data-oid="2z7lzaq">
                      <h3 className="card-title" data-oid="ikw1ou.">
                        {t("skills.manufacturingSystems.title")}
                      </h3>
                      <p className="card-text" data-oid="2:g7j59">
                        {t("skills.manufacturingSystems.description")}
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid="3z81xbc">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="vfd5do2"
                  >
                    <div className="content-card" data-oid="cl9_2rf">
                      <h3 className="card-title" data-oid="i_:7eyy">
                        {t("skills.cadDesign.title")}
                      </h3>
                      <p className="card-text" data-oid="k6m9bto">
                        {t("skills.cadDesign.description")}
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem className="md:col-span-2" data-oid="8eoau_d">
                  <TiltCard
                    glareEffect={true}
                    tiltFactor={5}
                    className="h-full"
                    data-oid="x.5o:gv"
                  >
                    <div className="content-card" data-oid="fv5uasm">
                      <h3 className="card-title" data-oid="ejb7w1h">
                        {t("skills.technicalSkills.title")}
                      </h3>
                      <p
                        className="card-text mb-4 rounded-none"
                        data-oid="6p32gr9"
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
      <ScrollReveal data-oid="84041rm"></ScrollReveal>

      {/* Projects Grid */}
      <ScrollReveal data-oid="i9fcsjm"></ScrollReveal>

      {/* Professional Experience Section */}
      <ScrollReveal data-oid="o4sw3r7">
        <section
          id="experience-section"
          className="section-container"
          data-oid="zz3zg-b"
        >
          <div className="section-sidebar" data-oid="0wm2yhs">
            <div className="section-header" data-oid="q79rl64">
              <span className="mr-2 text-sm" data-oid="8n:z8f0">
                +
              </span>
              <h3 className="text-sm" data-oid="5ui-h.g">
                {t("experience.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="2x04qn6">
            <FadeIn direction="up" data-oid="_.7_11f">
              <h2 className="section-title" data-oid="unw.orh">
                {t("experience.title")}
              </h2>

              <div className="space-y-8 mt-8" data-oid=".9l2z.9">
                {professionalExperience.map((exp) => (
                  <div
                    key={exp.id}
                    className="rounded-lg p-6 border border-[#d1d1c7] bg-[#00000000]"
                    data-oid="dnd-6.0"
                  >
                    <div
                      className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4"
                      data-oid="4hwv8da"
                    >
                      <div data-oid="q-s1fp8">
                        <h3 className="text-xl font-medium" data-oid="5ed5:61">
                          {exp.title}
                        </h3>
                        <p className="text-muted-foreground" data-oid="d2gpxni">
                          {exp.company} · {exp.location}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-oid="6_w6s19"
                        >
                          {exp.period}
                        </p>
                      </div>
                      {exp.logo && (
                        <div className="mt-4 md:mt-0" data-oid="57qv-6l">
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            width={120}
                            height={60}
                            className="object-contain"
                            data-oid="lse56h:"
                          />
                        </div>
                      )}
                    </div>
                    <ul className="list-disc pl-5 space-y-2" data-oid="4q0muac">
                      {exp.achievements.map((achievement, index) => (
                        <li key={index} className="text-sm" data-oid="x.0sbzt">
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
      <ScrollReveal data-oid="937ezqn">
        <section
          id="education-section"
          className="section-container"
          data-oid="0n1e4j."
        >
          <div className="section-sidebar" data-oid="mcam6ao">
            <div className="section-header" data-oid="rj138w7">
              <span className="mr-2 text-sm" data-oid="-6x4pz-">
                +
              </span>
              <h3 className="text-sm" data-oid="5.j-vn1">
                {t("education.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="bzth6:_">
            <FadeIn direction="up" data-oid="9er8q.g">
              <h2 className="section-title" data-oid="at0x8ln">
                {t("education.title")}
              </h2>

              <div className="space-y-6 mt-8" data-oid="elqmgd4">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="rounded-lg p-6 border border-[#d1d1c7] bg-[#00000000]"
                    data-oid="jvuh27u"
                  >
                    <div
                      className="flex flex-col md:flex-row justify-between items-start md:items-center"
                      data-oid="..so3lg"
                    >
                      <div data-oid="m61xqhk">
                        <h3 className="text-xl font-medium" data-oid="tgk1vmn">
                          {edu.institution}
                        </h3>
                        <p className="text-muted-foreground" data-oid="f9cd1u5">
                          {edu.degree}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-oid="qc:zcw7"
                        >
                          {edu.period}
                        </p>
                      </div>
                      {edu.logo && (
                        <div className="mt-4 md:mt-0" data-oid="h_za87e">
                          <Image
                            src={edu.logo}
                            alt={edu.institution}
                            width={120}
                            height={60}
                            className="object-contain"
                            data-oid="e1mo1y4"
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
      <ScrollReveal data-oid="_q61fbs">
        <section
          id="resume-section"
          className="section-container"
          data-oid="ckf-k-b"
        >
          <div className="section-sidebar" data-oid=".92f4x9">
            <div className="section-header" data-oid="sl5pwno">
              <span className="mr-2 text-sm" data-oid="scly-.n">
                +
              </span>
              <h3 className="text-sm" data-oid=":48a677">
                {t("resume.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="7_45rq1">
            <FadeIn direction="up" data-oid="rdjwuim">
              <h2 className="section-title" data-oid=":z:f-h:">
                {t("resume.title")}
              </h2>
              <p className="section-description mb-8" data-oid="10rdmkh">
                {t("resume.description")}
              </p>
              <a
                href="/uploads/Mohamed-adil-resume-PSE.pdf"
                download
                data-oid="71-javi"
              >
                <Button className="main-button rounded-full" data-oid="tj7vsd0">
                  Download Resume (PDF)
                </Button>
              </a>
            </FadeIn>
          </div>
        </section>
      </ScrollReveal>

      {/* Technical Skills Section */}
      <ScrollReveal data-oid="h0ws-em">
        <section className="section-container" data-oid="2k72iks">
          <div className="section-sidebar" data-oid="82da7f2">
            <div className="section-header" data-oid="7pkdw7m">
              <span className="mr-2 text-sm" data-oid="ogwkwi-">
                +
              </span>
              <h3 className="text-sm" data-oid="8_3yhhf">
                Technical Skills
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="t-irbu_">
            <FadeIn direction="up" data-oid="36zwutp">
              <h2 className="section-subtitle" data-oid="waa95ee">
                Technical Expertise
              </h2>
              <p className="section-description mb-8" data-oid="3_q3p1y">
                My core technical skills and competencies that I bring to every
                project.
              </p>

              <div className="grid grid-cols-1 gap-8" data-oid="b1ok.-c">
                <div data-oid="emga29x">
                  <h3 className="text-xl font-medium mb-4" data-oid="x2ria:1">
                    Engineering
                  </h3>
                  <div className="flex flex-wrap gap-2" data-oid="ls.mjf7">
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
                        data-oid="rg91317"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div data-oid="-a.9a9t">
                  <h3 className="text-xl font-medium mb-4" data-oid="wbjpv0j">
                    Data & Programming
                  </h3>
                  <div className="flex flex-wrap gap-2" data-oid="sr11u6r">
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
                        data-oid="38-.ccu"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div data-oid="1-ukq.7">
                  <h3 className="text-xl font-medium mb-4" data-oid="q3jiw1y">
                    Management
                  </h3>
                  <div className="flex flex-wrap gap-2" data-oid="dx70ck0">
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
                        data-oid="mkikvn0"
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
      <ScrollReveal data-oid="7vdcyw2">
        <section
          id="blog-section"
          className="section-container"
          data-oid="3da6it:"
        >
          <div className="section-sidebar" data-oid="xlqef4.">
            <div className="section-header" data-oid="ejhgxkd">
              <span className="mr-2 text-sm" data-oid="wphp8xr">
                +
              </span>
              <h3 className="text-sm" data-oid="szzqaun">
                {t("blog.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="1iv-azv">
            <FadeIn direction="up" data-oid="w18:xnm">
              <h2 className="section-title" data-oid="vnprc.k">
                {t("blog.title")}
              </h2>
              <p className="section-description mb-8" data-oid="8mwdccv">
                {t("blog.description")}
              </p>

              {/* Blog Categories Navigation */}
              <div className="flex flex-wrap gap-2 mb-8" data-oid="lmk.rfd">
                {blogCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 text-sm rounded-full border border-[#d1d1c7] ${
                      category.id === "all"
                        ? "bg-[#0f0f0f] text-white"
                        : "hover:bg-[#f4f4f0]"
                    }`}
                    data-oid="07..dis"
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
      <ScrollReveal data-oid="qaq782f"></ScrollReveal>

      {/* Newsletter Section */}
      <ScrollReveal data-oid="2odbr1r"></ScrollReveal>
    </ClientBody>
  );
}
