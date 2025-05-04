"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ClientBody from "../ClientBody";
import { motion } from "framer-motion";
import {
  ScrollReveal,
  FadeIn,
  RevealText,
  StaggerContainer,
  StaggerItem,
  HoverScale,
  ScaleIn,
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
    <ClientBody data-oid="1rokiz_">
      {/* Hero Section with Enhanced Animations */}
      <section
        id="hero-section"
        className="section-container hero-section w-full min-h-[80vh] md:min-h-[85vh] flex flex-col md:flex-row items-center py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden justify-between relative h-[2671px]"
        data-testid="hero-section"
        data-oid="hakiw.4"
      >
        {/* Background decorative elements */}
        <div
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
          data-oid="01..8ft"
        >
          {/* Top left circle */}
          <div
            className="absolute top-[8%] left-[5%] w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 opacity-[0.05]"
            data-oid="abfpo7_"
          >
            <ParallaxScroll speed={0.2} direction="down" data-oid="rphh8e1">
              <div
                className="w-full h-full bg-gradient-to-br from-primary to-primary/70 rounded-full"
                data-oid="cq0_:zk"
              ></div>
            </ParallaxScroll>
          </div>

          {/* Bottom right large circle */}
          <div
            className="absolute bottom-[12%] right-[5%] w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 opacity-[0.04]"
            data-oid="xqi2_cs"
          >
            <ParallaxScroll speed={0.3} direction="up" data-oid="08b9948">
              <div
                className="w-full h-full bg-gradient-to-tl from-primary to-primary/70 rounded-full"
                data-oid="kc-tlbe"
              ></div>
            </ParallaxScroll>
          </div>

          {/* Middle right small circle - hidden on mobile */}
          <div
            className="absolute top-[38%] right-[12%] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 opacity-[0.06] hidden sm:block"
            data-oid="a2ae437"
          >
            <ParallaxScroll speed={0.15} direction="left" data-oid="-cu5_hm">
              <div
                className="w-full h-full bg-gradient-to-br from-primary to-primary/70 rounded-full"
                data-oid="2c43ca2"
              ></div>
            </ParallaxScroll>
          </div>

          {/* Additional small decorative element - hidden on mobile */}
          <div
            className="absolute top-[65%] left-[18%] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 opacity-[0.04] hidden sm:block"
            data-oid="q.jcmk8"
          >
            <ParallaxScroll speed={0.25} direction="right" data-oid="py0_u05">
              <div
                className="w-full h-full bg-gradient-to-br from-primary to-primary/70 rounded-full"
                data-oid="6okov9b"
              ></div>
            </ParallaxScroll>
          </div>
        </div>

        {/* Left side - Profile Image with animations */}
        <div
          className="w-full md:w-2/5 flex justify-center items-center mb-8 md:mb-0 z-10"
          data-oid="-lxdk7t"
        >
          <div className="relative" data-oid="xoml:qn">
            {/* Outer animated ring */}
            <motion.div
              className="absolute -inset-3 sm:-inset-4 md:-inset-5 rounded-full border border-primary/10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.05, opacity: 1 }}
              transition={{
                duration: 1.8,
                ease: "easeOut",
                delay: 0.6,
              }}
              data-oid="1ybk_yb"
              key="olk-JGbZ"
            />

            {/* Inner animated ring */}
            <motion.div
              className="absolute -inset-1 sm:-inset-2 md:-inset-3 rounded-full border border-primary/20"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1.03, opacity: 1 }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
                delay: 0.4,
              }}
              data-oid="jj4wndb"
              key="olk-bUl-"
            />

            {/* Profile image with subtle hover effect */}
            <MagneticElement
              distanceThreshold={100}
              magnetStrength={0.15}
              data-oid=":euttn9"
              key="olk-uHm4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10"
                data-oid="m1cb.ka"
              >
                <div
                  className="rounded-full overflow-hidden h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] md:h-[260px] md:w-[260px] lg:h-[300px] lg:w-[300px] shadow-lg"
                  data-oid="3_-pnrv"
                >
                  <Image
                    src="/uploads/profile-photo.jpg"
                    alt="Mohamed Adil Al Sabri"
                    width={500}
                    height={500}
                    className="profile-image object-cover h-full w-full"
                    priority
                    data-oid="bhp.au0"
                  />
                </div>
              </motion.div>
            </MagneticElement>

            {/* Decorative element bottom right */}

            {/* Decorative element top left */}
          </div>
        </div>

        {/* Right side - Name and title with animations */}
        <div
          className="w-full md:w-3/5 z-10 text-center md:text-left"
          data-oid="0vu774n"
        >
          <div
            className="max-w-xl mx-auto md:mx-0 md:ml-4 lg:ml-6"
            data-oid="0fn73:q"
          >
            {/* Name with staggered reveal */}
            <div className="overflow-hidden mb-0" data-oid="3r:93t9">
              <RevealText delay={0.2} data-oid="b9-4a0h">
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]"
                  data-oid="m3zqai0"
                >
                  {t("hero.name")}
                </h1>
              </RevealText>
            </div>

            <div
              className="overflow-hidden mb-4 sm:mb-5 md:mb-6"
              data-oid="n-7pixz"
            >
              <RevealText delay={0.4} data-oid="h0d:zz-">
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]"
                  data-oid="pmeqz8h"
                >
                  {t("hero.surname")}
                </h1>
              </RevealText>
            </div>

            {/* Role/title with fade in */}
            <FadeIn direction="up" delay={0.6} data-oid="drl4o0e">
              <div
                className="h-[2px] w-16 sm:w-20 md:w-24 bg-gradient-to-r from-primary/40 to-primary/10 mb-4 mx-auto md:mx-0"
                data-oid="qbab80l"
              ></div>

              <h2
                className="text-base sm:text-lg md:text-xl text-muted-foreground mb-3 sm:mb-4 font-medium tracking-wide"
                data-oid="a2raanv"
              >
                Process Development Engineer
              </h2>

              {/* Brief intro text */}
              <p
                className="text-sm sm:text-base max-w-md text-muted-foreground mb-5 sm:mb-6 mx-auto md:mx-0 leading-relaxed"
                data-oid="v6ws063"
              >
                Specialized in renewable energy production and manufacturing
                processes optimization, with expertise in data analysis and
                system design.
              </p>

              {/* CTA buttons with ripple effect */}
              <div
                className="flex flex-col sm:flex-row items-center md:items-start gap-3 sm:gap-4"
                data-oid="vk_5ycl"
              >
                <RippleButton
                  className="px-6 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
                  data-oid="-r:k9yw"
                >
                  View My Work
                </RippleButton>

                <RippleButton
                  className="px-6 py-2.5 bg-transparent border border-primary/20 text-primary rounded-full text-sm font-medium hover:bg-primary/5 transition-colors"
                  data-oid="b2iyu3_"
                >
                  Download Resume
                </RippleButton>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center hidden sm:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
          data-oid="fkgr_xr"
        >
          <motion.div
            className="flex flex-col items-center"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            data-oid="a6lhb_b"
          >
            <div
              className="w-[1px] h-8 bg-gradient-to-b from-primary/10 to-primary/30"
              data-oid="8w96r72"
            ></div>
            <div
              className="mt-1 text-[9px] text-muted-foreground tracking-wider font-medium"
              data-oid="hm.0bx0"
            >
              SCROLL
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <ScrollReveal data-oid="zs60ke.">
        <section
          id="about-section"
          className="section-container min-h-[355px]"
          data-oid="_4769:s"
        >
          <div className="section-sidebar" data-oid="s62:avw">
            <div className="section-header" data-oid="62m1daw">
              <span className="mr-2 text-sm" data-oid="n_hhlel">
                +
              </span>
              <h3 className="text-[16px]" data-oid="o1knvq_">
                {t("about.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="fmindga">
            <FadeIn direction="up" data-oid="spxix1t">
              <h2 className="section-title" data-oid="gw75n28">
                {t("about.title")}
              </h2>
              <p className="section-description" data-oid="n.qnuz-">
                {t("about.description")}
              </p>
              <div className="stats-container" data-oid="_a3n8mn">
                <StaggerContainer
                  staggerChildren={0.1}
                  className="stats-container"
                  data-oid="iteha9d"
                >
                  <StaggerItem data-oid="siz_653">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid="_qzvyxg"
                    >
                      <div className="stat-item" data-oid="lu-:v:c">
                        <h3 className="stat-value" data-oid="ebc.v53">
                          5+
                        </h3>
                        <p className="stat-label" data-oid="or8r2qp">
                          {t("about.experience")}
                        </p>
                      </div>
                    </MagneticElement>
                  </StaggerItem>
                  <StaggerItem data-oid=".yg-hu2">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid="h6u956w"
                    >
                      <div className="stat-item" data-oid="7_7wd_a">
                        <h3 className="stat-value" data-oid="jo26rl2">
                          20+
                        </h3>
                        <p className="stat-label" data-oid="t2d5-b9">
                          {t("about.projects")}
                        </p>
                      </div>
                    </MagneticElement>
                  </StaggerItem>
                  <StaggerItem data-oid="tuavgul">
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                      data-oid="_e5a-7k"
                    >
                      <div className="stat-item" data-oid="tnm9.cq">
                        <h3 className="stat-value" data-oid="bq12fi-">
                          4+
                        </h3>
                        <p className="stat-label" data-oid="61yo6_4">
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
      <ScrollReveal data-oid="6u85cbi">
        <section
          className="col-span-3 border-b border-[#d1d1c7] overflow-hidden py-8 md:py-12 px-6 md:px-8"
          data-oid="u0k9dgw"
        >
          <StaggerContainer
            staggerChildren={0.1}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
            data-oid="7qdqn80"
          >
            {logoData.map((logo) => (
              <StaggerItem key={logo.id} data-oid="3j149.3">
                <div
                  className="flex justify-center items-center"
                  data-oid="r6_u7wx"
                >
                  <MagneticElement
                    distanceThreshold={100}
                    magnetStrength={0.2}
                    data-oid="3ur995k"
                  >
                    <div
                      className="h-20 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
                      data-oid="jpvg-te"
                    >
                      {logo.imgSrc ? (
                        <div
                          className="h-full flex items-center justify-center"
                          data-oid="80q3e-q"
                        >
                          <Image
                            src={logo.imgSrc}
                            alt={logo.company}
                            priority
                            width={120}
                            height={60}
                            className="max-h-16 object-contain"
                            data-oid="a-qy5ji"
                          />
                        </div>
                      ) : (
                        <div
                          className="h-16 w-full flex items-center justify-center text-sm text-center"
                          data-oid="o4gnkf9"
                        >
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
      <ScrollReveal data-oid="rne1phj">
        <section className="section-container" data-oid="ka1t_u6">
          <div className="section-sidebar" data-oid="8f.23gq">
            <div className="section-header" data-oid="xmcdiwr">
              <span className="mr-2 text-sm" data-oid="vf_pxjg">
                +
              </span>
              <h3 className="text-[16px]" data-oid="3pjg-fj">
                {t("skills.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="ovadlth">
            <FadeIn direction="up" data-oid="5odpdze">
              <h2 className="section-subtitle" data-oid="f5x8ghn">
                {t("skills.title")}
              </h2>
              <p className="section-description mb-12" data-oid="05bgwx0">
                {t("skills.description")}
              </p>

              <StaggerContainer
                staggerChildren={0.1}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                data-oid="qnssnyq"
              >
                <StaggerItem data-oid="93estma">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="84p50gs"
                  >
                    <div
                      className="border border-[#d1d1c7] p-6 h-full rounded-md"
                      data-oid="t-4k:1-"
                    >
                      <h3
                        className="text-lg font-medium mb-3"
                        data-oid=":6m16m-"
                      >
                        {t("skills.processDevelopment.title")}
                      </h3>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="3jss2px"
                      >
                        {t("skills.processDevelopment.description")}
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid="cpvo4w1">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="anaz5u6"
                  >
                    <div
                      className="border border-[#d1d1c7] p-6 h-full rounded-md"
                      data-oid="647ls.w"
                    >
                      <h3
                        className="text-lg font-medium mb-3"
                        data-oid="_udlwd3"
                      >
                        {t("skills.dataAnalysis.title")}
                      </h3>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="ryck4m9"
                      >
                        {t("skills.dataAnalysis.description")}
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid="1rk_sr8">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="p-zhz5."
                  >
                    <div
                      className="border border-[#d1d1c7] p-6 h-full rounded-md"
                      data-oid="9hlm3ld"
                    >
                      <h3
                        className="text-lg font-medium mb-3"
                        data-oid="e4ap2x:"
                      >
                        {t("skills.manufacturingSystems.title")}
                      </h3>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="g:ftg7m"
                      >
                        {t("skills.manufacturingSystems.description")}
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem data-oid="odry-zt">
                  <TiltCard
                    glareEffect={true}
                    className="h-full"
                    data-oid="fkhipv."
                  >
                    <div
                      className="border border-[#d1d1c7] p-6 h-full rounded-md"
                      data-oid="996fg0m"
                    >
                      <h3
                        className="text-lg font-medium mb-3"
                        data-oid="9c.-9l."
                      >
                        {t("skills.cadDesign.title")}
                      </h3>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="5o32n:_"
                      >
                        {t("skills.cadDesign.description")}
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem className="md:col-span-2" data-oid="-q.8yt2">
                  <TiltCard
                    glareEffect={true}
                    tiltFactor={5}
                    className="h-full"
                    data-oid="w-snf0x"
                  >
                    <div
                      className="border border-[#d1d1c7] p-6 h-full rounded-md"
                      data-oid="wgfxr1l"
                    >
                      <h3
                        className="text-lg font-medium mb-3"
                        data-oid="i2pjynj"
                      >
                        {t("skills.technicalSkills.title")}
                      </h3>
                      <p
                        className="text-sm text-muted-foreground"
                        data-oid="jchh6fg"
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
      <ScrollReveal data-oid="wt5di8d">
        <div className="hidden" data-oid="949amd7">
          Works section placeholder
        </div>
      </ScrollReveal>

      {/* Projects Grid */}
      <ScrollReveal data-oid="6l0jfvd">
        <div className="hidden" data-oid="nvnr3vq">
          Projects grid placeholder
        </div>
      </ScrollReveal>

      {/* Professional Experience Section */}
      <ScrollReveal data-oid="opu69p7">
        <section
          id="experience-section"
          className="section-container"
          data-oid="c:cn69o"
        >
          <div className="section-sidebar" data-oid="epz9kjj">
            <div className="section-header" data-oid="3gr5k_f">
              <span className="mr-2 text-sm" data-oid="pnt0g_r">
                +
              </span>
              <h3 className="text-[16px]" data-oid=":xv5l0i">
                {t("experience.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="c-d:kdr">
            <FadeIn direction="up" data-oid="yaq.-ye">
              <h2 className="section-title" data-oid="i92y-fg">
                {t("experience.title")}
              </h2>

              <div className="space-y-8 mt-8" data-oid="mhtg0qr">
                {professionalExperience.map((exp) => (
                  <div
                    key={exp.id}
                    className="rounded-md p-6 border border-[#d1d1c7] transition-all hover:shadow-sm"
                    data-oid="kplz35a"
                  >
                    <div
                      className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6"
                      data-oid="p-sz8r5"
                    >
                      <div data-oid="c8dzbfk">
                        <h3
                          className="text-xl font-medium mb-2"
                          data-oid="xvn:4j6"
                        >
                          {exp.title}
                        </h3>
                        <p
                          className="text-muted-foreground mb-1"
                          data-oid="hgkwyo9"
                        >
                          {exp.company} · {exp.location}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-oid="m8lz_21"
                        >
                          {exp.period}
                        </p>
                      </div>
                      {exp.logo && (
                        <div
                          className="mt-4 md:mt-0 flex-shrink-0"
                          data-oid="z4.9y4."
                        >
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            width={120}
                            height={60}
                            className="object-contain max-h-16"
                            data-oid="ct.t3wq"
                          />
                        </div>
                      )}
                    </div>
                    <ul className="list-disc pl-5 space-y-3" data-oid="k-ney6b">
                      {exp.achievements.map((achievement, index) => (
                        <li
                          key={index}
                          className="text-sm leading-relaxed"
                          data-oid="9fkygxe"
                        >
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
      <ScrollReveal data-oid="h3958o9">
        <section
          id="education-section"
          className="section-container"
          data-oid="58mdh_u"
        >
          <div className="section-sidebar" data-oid="mx64068">
            <div className="section-header" data-oid="4zg:81q">
              <span className="mr-2 text-sm" data-oid="73l0gg9">
                +
              </span>
              <h3 className="text-[16px]" data-oid="r84qy5_">
                {t("education.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="in7.:rv">
            <FadeIn direction="up" data-oid="8ymzlut">
              <h2 className="section-title" data-oid="3o70fyu">
                {t("education.title")}
              </h2>

              <div className="space-y-6 mt-8" data-oid="rxcx5s_">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="rounded-md p-6 border border-[#d1d1c7] transition-all hover:shadow-sm"
                    data-oid="z8xy9-2"
                  >
                    <div
                      className="flex flex-col md:flex-row justify-between items-start md:items-center"
                      data-oid="9.wlpk."
                    >
                      <div data-oid="1meiiu5">
                        <h3
                          className="text-xl font-medium mb-2"
                          data-oid="dza_q.4"
                        >
                          {edu.institution}
                        </h3>
                        <p
                          className="text-muted-foreground mb-1"
                          data-oid="89301d6"
                        >
                          {edu.degree}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-oid="_z1-yv2"
                        >
                          {edu.period}
                        </p>
                      </div>
                      {edu.logo && (
                        <div
                          className="mt-4 md:mt-0 flex-shrink-0"
                          data-oid="d8:gaf6"
                        >
                          <Image
                            src={edu.logo}
                            alt={edu.institution}
                            width={120}
                            height={60}
                            className="object-contain max-h-16"
                            data-oid="0sqb7j6"
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
      <ScrollReveal data-oid="z2:wyvn">
        <section
          id="resume-section"
          className="section-container"
          data-oid="-i_v2te"
        >
          <div className="section-sidebar" data-oid="c-rvly6">
            <div className="section-header" data-oid="5i-.t-3">
              <span className="mr-2 text-sm" data-oid="pj9cdjd">
                +
              </span>
              <h3 className="text-[16px]" data-oid="bjuxz1s">
                {t("resume.section")}
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="e8k54n4">
            <FadeIn direction="up" data-oid="hqfrqvd">
              <h2 className="section-title" data-oid="v415c28">
                {t("resume.title")}
              </h2>
              <p className="section-description mb-8" data-oid="lt.7bir">
                {t("resume.description")}
              </p>
              <a
                href="/uploads/Mohamed-adil-resume-PSE.pdf"
                download
                className="inline-block mt-4"
                data-oid="2irv3au"
              >
                <Button
                  className="main-button rounded-full px-8 py-6 text-base"
                  data-oid="wtx4iwd"
                >
                  Download Resume (PDF)
                </Button>
              </a>
            </FadeIn>
          </div>
        </section>
      </ScrollReveal>

      {/* Technical Skills Section */}
      <ScrollReveal data-oid="-vfa:-n">
        <section className="section-container" data-oid="xcp5knz">
          <div className="section-sidebar" data-oid="2x2i2uq">
            <div className="section-header" data-oid="1dt3b-s">
              <span className="mr-2 text-sm" data-oid="hbt00g8">
                +
              </span>
              <h3 className="text-[16px]" data-oid="dqng2qc">
                Technical Skills
              </h3>
            </div>
          </div>
          <div className="section-content" data-oid="5-48gba">
            <FadeIn direction="up" data-oid="5d9zwbp">
              <h2 className="section-subtitle" data-oid="6u02wdv">
                Technical Expertise
              </h2>
              <p className="section-description mb-8" data-oid="bdt:bdw">
                My core technical skills and competencies that I bring to every
                project.
              </p>

              <div className="grid grid-cols-1 gap-10" data-oid="ap7gbqq">
                <div data-oid="7lnqgc3">
                  <h3 className="text-xl font-medium mb-5" data-oid="60.lt-o">
                    Engineering
                  </h3>
                  <div className="flex flex-wrap gap-3" data-oid="dm-9_fq">
                    {[
                      "CAD & SolidWorks",
                      "Operations Research",
                      "Process Development",
                      "Manufacturing Systems",
                      "Product Design",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="inline-block px-5 py-2.5 rounded-full text-sm border border-[#d1d1c7] hover:bg-muted transition-colors"
                        data-oid="60rlcz2"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div data-oid="mh8ee80">
                  <h3 className="text-xl font-medium mb-5" data-oid="ixu72-i">
                    Data & Programming
                  </h3>
                  <div className="flex flex-wrap gap-3" data-oid="y5m1peh">
                    {[
                      "SQL & Database Design",
                      "Python Development",
                      "Data Analysis & Visualization",
                      "C/C++ Programming",
                      "Machine Learning",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="inline-block px-5 py-2.5 rounded-full text-sm border border-[#d1d1c7] hover:bg-muted transition-colors"
                        data-oid="hdwrzan"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div data-oid=":k7poz1">
                  <h3 className="text-xl font-medium mb-5" data-oid="hf95w7x">
                    Management
                  </h3>
                  <div className="flex flex-wrap gap-3" data-oid="sml-h.9">
                    {[
                      "Project Management",
                      "SCRUM & Agile Methodologies",
                      "Risk Management",
                      "Team Leadership",
                      "Cross-functional Collaboration",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="inline-block px-5 py-2.5 rounded-full text-sm border border-[#d1d1c7] hover:bg-muted transition-colors"
                        data-oid="u039mjg"
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
      <ScrollReveal data-oid="oqpmkdp">
        <div className="hidden" data-oid="zff.voj">
          Blog section placeholder
        </div>
      </ScrollReveal>

      {/* Blog Posts Grid */}
      <ScrollReveal data-oid="u.86o_5">
        <div className="hidden" data-oid="seq9mte">
          Blog posts grid placeholder
        </div>
      </ScrollReveal>

      {/* Newsletter Section */}
      <ScrollReveal data-oid="4p6.oix">
        <div className="hidden" data-oid="-t251wg">
          Newsletter section placeholder
        </div>
      </ScrollReveal>
    </ClientBody>
  );
}
