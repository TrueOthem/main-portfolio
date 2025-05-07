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
    <ClientBody>
      {/* Hero Section with Enhanced Animations */}
      <section
        id="hero-section"
        className="section-container hero-section w-full flex flex-col md:flex-row items-center overflow-hidden justify-between relative"
        data-testid="hero-section"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Top left circle */}
          <div className="absolute top-[8%] left-[5%] w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 opacity-[0.05]">
            <ParallaxScroll speed={0.2} direction="down">
              <div className="w-full h-full bg-gradient-to-br from-primary to-primary/70 rounded-full"></div>
            </ParallaxScroll>
          </div>

          {/* Bottom right large circle */}
          <div className="absolute bottom-[12%] right-[5%] w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 opacity-[0.04]">
            <ParallaxScroll speed={0.3} direction="up">
              <div className="w-full h-full bg-gradient-to-tl from-primary to-primary/70 rounded-full"></div>
            </ParallaxScroll>
          </div>

          {/* Middle right small circle - hidden on mobile */}
          <div className="absolute top-[38%] right-[12%] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 opacity-[0.06] hidden sm:block">
            <ParallaxScroll speed={0.15} direction="left">
              <div className="w-full h-full bg-gradient-to-br from-primary to-primary/70 rounded-full"></div>
            </ParallaxScroll>
          </div>

          {/* Additional small decorative element - hidden on mobile */}
          <div className="absolute top-[65%] left-[18%] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 opacity-[0.04] hidden sm:block">
            <ParallaxScroll speed={0.25} direction="right">
              <div className="w-full h-full bg-gradient-to-br from-primary to-primary/70 rounded-full"></div>
            </ParallaxScroll>
          </div>
        </div>

        {/* Left side - Profile Image with animations */}
        <div className="w-full md:w-2/5 flex justify-center items-center mb-8 md:mb-0 z-10">
          <div className="relative">
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
            />

            {/* Profile image with subtle hover effect */}
            <MagneticElement distanceThreshold={100} magnetStrength={0.15}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="rounded-full overflow-hidden h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] md:h-[260px] md:w-[260px] lg:h-[300px] lg:w-[300px] shadow-lg">
                  <Image
                    src="/uploads/profile-photo.jpg"
                    alt="Mohamed Adil Al Sabri"
                    width={500}
                    height={500}
                    className="profile-image object-cover h-full w-full"
                    priority
                  />
                </div>
              </motion.div>
            </MagneticElement>

            {/* Decorative element bottom right */}

            {/* Decorative element top left */}
          </div>
        </div>

        {/* Right side - Name and title with animations */}
        <div className="w-full md:w-3/5 z-10 text-center md:text-left">
          <div className="max-w-xl mx-auto md:mx-0 md:ml-4 lg:ml-6">
            {/* Name with staggered reveal */}
            <div className="overflow-hidden mb-0">
              <RevealText delay={0.2}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
                  {t("hero.name")}
                </h1>
              </RevealText>
            </div>

            <div className="overflow-hidden mb-4 sm:mb-5 md:mb-6">
              <RevealText delay={0.4}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
                  {t("hero.surname")}
                </h1>
              </RevealText>
            </div>

            {/* Role/title with fade in */}
            <FadeIn direction="up" delay={0.6}>
              <div className="h-[2px] w-16 sm:w-20 md:w-24 bg-gradient-to-r from-primary/40 to-primary/10 mb-4 mx-auto md:mx-0"></div>

              <h2 className="text-base sm:text-lg md:text-xl text-muted-foreground mb-3 sm:mb-4 font-medium tracking-wide">
                Process Development Engineer
              </h2>

              {/* Brief intro text */}
              <p className="text-sm sm:text-base max-w-md text-muted-foreground mb-5 sm:mb-6 mx-auto md:mx-0 leading-relaxed">
                Specialized in renewable energy production and manufacturing
                processes optimization, with expertise in data analysis and
                system design.
              </p>

              {/* CTA buttons with ripple effect */}
              <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 sm:gap-4"></div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator */}
      </section>

      {/* About Section */}
      <ScrollReveal>
        <section id="about-section" className="section-container">
          <div className="section-sidebar">
            <div className="section-header">
              <span className="mr-2 text-sm">+</span>
              <h3 className="text-[16px]">{t("about.section")}</h3>
            </div>
          </div>
          <div className="section-content">
            <FadeIn direction="up">
              <h2 className="section-title">{t("about.title")}</h2>
              <p className="section-description">{t("about.description")}</p>
              <div className="stats-container">
                <StaggerContainer
                  staggerChildren={0.1}
                  className="stats-container"
                >
                  <StaggerItem>
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                    >
                      <div className="stat-item">
                        <h3 className="stat-value">5+</h3>
                        <p className="stat-label">{t("about.experience")}</p>
                      </div>
                    </MagneticElement>
                  </StaggerItem>
                  <StaggerItem>
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                    >
                      <div className="stat-item">
                        <h3 className="stat-value">20+</h3>
                        <p className="stat-label">{t("about.projects")}</p>
                      </div>
                    </MagneticElement>
                  </StaggerItem>
                  <StaggerItem>
                    <MagneticElement
                      distanceThreshold={100}
                      magnetStrength={0.3}
                    >
                      <div className="stat-item">
                        <h3 className="stat-value">4+</h3>
                        <p className="stat-label">{t("about.companies")}</p>
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
      <ScrollReveal>
        <section className="section-container">
          <div className="section-content !p-0">
            <StaggerContainer
              staggerChildren={0.1}
              className="logo-grid"
            >
              {logoData.map((logo) => (
                <StaggerItem key={logo.id}>
                  <div className="flex justify-center items-center">
                    <MagneticElement distanceThreshold={100} magnetStrength={0.2}>
                      <div className="h-20 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                        {logo.imgSrc ? (
                          <div className="h-full flex items-center justify-center">
                            <Image
                              src={logo.imgSrc}
                              alt={logo.company}
                              priority
                              width={120}
                              height={60}
                              className="max-h-16 object-contain"
                            />
                          </div>
                        ) : (
                          <div className="h-16 w-full flex items-center justify-center text-sm text-center">
                            {logo.company}
                          </div>
                        )}
                      </div>
                    </MagneticElement>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </ScrollReveal>

      {/* Expertise Section */}
      <ScrollReveal>
        <section className="section-container">
          <div className="section-sidebar">
            <div className="section-header">
              <span className="mr-2 text-sm">+</span>
              <h3 className="text-[16px]">{t("skills.section")}</h3>
            </div>
          </div>
          <div className="section-content">
            <FadeIn direction="up">
              <h2 className="section-subtitle">{t("skills.title")}</h2>
              <p className="section-description mb-12">
                {t("skills.description")}
              </p>

              <StaggerContainer
                staggerChildren={0.1}
                className="skills-grid"
              >
                <StaggerItem>
                  <TiltCard glareEffect={true} className="h-full">
                    <div className="border border-[#d1d1c7] p-6 h-full rounded-md">
                      <h3 className="text-lg font-medium mb-3">
                        {t("skills.processDevelopment.title")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t("skills.processDevelopment.description")}
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem>
                  <TiltCard glareEffect={true} className="h-full">
                    <div className="border border-[#d1d1c7] p-6 h-full rounded-md">
                      <h3 className="text-lg font-medium mb-3">
                        {t("skills.dataAnalysis.title")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t("skills.dataAnalysis.description")}
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem>
                  <TiltCard glareEffect={true} className="h-full">
                    <div className="border border-[#d1d1c7] p-6 h-full rounded-md">
                      <h3 className="text-lg font-medium mb-3">
                        {t("skills.manufacturingSystems.title")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t("skills.manufacturingSystems.description")}
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem>
                  <TiltCard glareEffect={true} className="h-full">
                    <div className="border border-[#d1d1c7] p-6 h-full rounded-md">
                      <h3 className="text-lg font-medium mb-3">
                        {t("skills.cadDesign.title")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t("skills.cadDesign.description")}
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem className="md:col-span-2">
                  <TiltCard
                    glareEffect={true}
                    tiltFactor={5}
                    className="h-full"
                  >
                    <div className="border border-[#d1d1c7] p-6 h-full rounded-md">
                      <h3 className="text-lg font-medium mb-3">
                        {t("skills.technicalSkills.title")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
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
      <ScrollReveal>
        <div className="hidden">Works section placeholder</div>
      </ScrollReveal>

      {/* Projects Grid */}
      <ScrollReveal>
        <div className="hidden">Projects grid placeholder</div>
      </ScrollReveal>

      {/* Professional Experience Section */}
      <ScrollReveal>
        <section id="experience-section" className="section-container">
          <div className="section-sidebar">
            <div className="section-header">
              <span className="mr-2 text-sm">+</span>
              <h3 className="text-[16px]">{t("experience.section")}</h3>
            </div>
          </div>
          <div className="section-content">
            <FadeIn direction="up">
              <h2 className="section-title">{t("experience.title")}</h2>

              <div className="space-y-8 mt-8">
                {professionalExperience.map((exp) => (
                  <div
                    key={exp.id}
                    className="rounded-md p-6 border border-[#d1d1c7] transition-all hover:shadow-sm"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                      <div>
                        <h3 className="text-xl font-medium mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-muted-foreground mb-1">
                          {exp.company} · {exp.location}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {exp.period}
                        </p>
                      </div>
                      {exp.logo && (
                        <div className="mt-4 md:mt-0 flex-shrink-0">
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            width={120}
                            height={60}
                            className="object-contain max-h-16"
                          />
                        </div>
                      )}
                    </div>
                    <ul className="list-disc pl-5 space-y-3">
                      {exp.achievements.map((achievement, index) => (
                        <li key={index} className="text-sm leading-relaxed">
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
      <ScrollReveal>
        <section id="education-section" className="section-container">
          <div className="section-sidebar">
            <div className="section-header">
              <span className="mr-2 text-sm">+</span>
              <h3 className="text-[16px]">{t("education.section")}</h3>
            </div>
          </div>
          <div className="section-content">
            <FadeIn direction="up">
              <h2 className="section-title">{t("education.title")}</h2>

              <div className="space-y-6 mt-8">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="rounded-md p-6 border border-[#d1d1c7] transition-all hover:shadow-sm"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                      <div>
                        <h3 className="text-xl font-medium mb-2">
                          {edu.institution}
                        </h3>
                        <p className="text-muted-foreground mb-1">
                          {edu.degree}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {edu.period}
                        </p>
                      </div>
                      {edu.logo && (
                        <div className="mt-4 md:mt-0 flex-shrink-0">
                          <Image
                            src={edu.logo}
                            alt={edu.institution}
                            width={120}
                            height={60}
                            className="object-contain max-h-16"
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
      <ScrollReveal>
        <section id="resume-section" className="section-container">
          <div className="section-sidebar">
            <div className="section-header">
              <span className="mr-2 text-sm">+</span>
              <h3 className="text-[16px]">{t("resume.section")}</h3>
            </div>
          </div>
          <div className="section-content">
            <FadeIn direction="up">
              <h2 className="section-title">{t("resume.title")}</h2>
              <p className="section-description mb-8">
                {t("resume.description")}
              </p>
              <a
                href="/uploads/Mohamed-adil-resume-PSE.pdf"
                download
                className="inline-block mt-4"
              >
                <Button className="main-button rounded-full px-8 py-6 text-base">
                  Download Resume (PDF)
                </Button>
              </a>
            </FadeIn>
          </div>
        </section>
      </ScrollReveal>

      {/* Technical Skills Section */}
      <ScrollReveal>
        <section className="section-container">
          <div className="section-sidebar">
            <div className="section-header">
              <span className="mr-2 text-sm">+</span>
              <h3 className="text-[16px]">Technical Skills</h3>
            </div>
          </div>
          <div className="section-content">
            <FadeIn direction="up">
              <h2 className="section-subtitle">Technical Expertise</h2>
              <p className="section-description mb-8">
                My core technical skills and competencies that I bring to every
                project.
              </p>

              <div className="grid grid-cols-1 gap-10">
                <div>
                  <h3 className="text-xl font-medium mb-5">Engineering</h3>
                  <div className="flex flex-wrap gap-3">
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
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-5">
                    Data & Programming
                  </h3>
                  <div className="flex flex-wrap gap-3">
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
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-5">Management</h3>
                  <div className="flex flex-wrap gap-3">
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
      <ScrollReveal>
        <div className="hidden">Blog section placeholder</div>
      </ScrollReveal>

      {/* Blog Posts Grid */}
      <ScrollReveal>
        <div className="hidden">Blog posts grid placeholder</div>
      </ScrollReveal>

      {/* Newsletter Section */}
      <ScrollReveal>
        <div className="hidden">Newsletter section placeholder</div>
      </ScrollReveal>
    </ClientBody>
  );
}
