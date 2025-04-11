import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ClientBody from './ClientBody';
import { ScrollReveal, FadeIn, RevealText, ScaleIn, StaggerContainer, StaggerItem, HoverScale } from '@/components/ui/motion';
import { ParallaxImage, ParallaxScroll, ParallaxRotate } from '@/components/ui/parallax';
import { TiltCard, RippleButton, MagneticElement } from '@/components/ui/interactive-motion';

// Define logo data with unique IDs and image paths
const logoData = [
  { id: 'logo1', company: 'Electric Hydrogen', imgSrc: '/uploads/ehydrogen-logo2.png' },
  { id: 'logo2', company: 'Advanced Power Conversion', imgSrc: '/uploads/Advanced-Conversion-logo-400-84px.png' },
  { id: 'logo3', company: 'CU Boulder', imgSrc: '/uploads/cuboulderlogo.png' },
  { id: 'logo4', company: 'NIST', imgSrc: '/uploads/NIST-Logo-Brand-White.png' },
  { id: 'logo5', company: 'University of Pennsylvania', imgSrc: '/uploads/UniversityofPennsylvania_FullLogo_RGB-4_0.png' },
];

// Define skill icons
const skillIcons = [
  { skill: 'Python', icon: '/uploads/python-logo-only.png' },
  { skill: 'SQL', icon: '/uploads/SQL.webp' },
];

export default function Home() {
  return (
    <ClientBody>
      {/* Hero Section with Parallax */}
      <section id="hero-section" className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7] relative hero-section w-full" data-testid="hero-section">
        <div className="col-span-1 md:border-r border-[#d1d1c7] flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
          <ParallaxScroll speed={0.2} direction="down">
            <ScaleIn duration={0.7}>
              <div className="relative w-full aspect-square max-w-xs overflow-hidden rounded-full">
                <Image
                  src="/uploads/profile-photo.jpg"
                  alt="Mohamed Adil Al Sabri"
                  width={400}
                  height={400}
                  className="object-cover"
                  priority
                />
              </div>
            </ScaleIn>
          </ParallaxScroll>
        </div>
        <div className="col-span-2 flex items-center p-4 md:p-8 lg:p-12 relative w-full">
          <ParallaxScroll speed={0.1} direction="up">
            <RevealText>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium">
                Mohamed Adil<br />Al Sabri
              </h1>
            </RevealText>
          </ParallaxScroll>

          {/* Abstract decorative elements with parallax */}
          <div className="absolute -bottom-10 right-10 w-20 h-20 opacity-10">
            <ParallaxRotate className="w-full h-full">
              <div className="w-full h-full border-4 border-primary rounded-md"></div>
            </ParallaxRotate>
          </div>
          <div className="absolute top-10 right-20 w-10 h-10 opacity-10">
            <ParallaxScroll speed={0.4} direction="right">
              <div className="w-full h-full bg-primary rounded-full"></div>
            </ParallaxScroll>
          </div>
        </div>
      </section>

      {/* About Section */}
      <ScrollReveal>
        <section className="col-span-3 grid grid-cols-3 border-b border-[#d1d1c7]">
          <div className="col-span-1 p-8 border-r border-[#d1d1c7]">
            <div className="flex items-center mb-6">
              <span className="mr-2 text-sm">+</span>
              <h3 className="text-sm">About</h3>
            </div>
          </div>
          <div className="col-span-2 p-8 md:p-12">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-4xl mb-6">Process Development Engineer</h2>
              <p className="text-muted-foreground mb-6">
                Process Development Engineer specializing in green hydrogen production. I enhance process capability by developing scalable manufacturing processes, integrating cutting-edge technology, and applying data analysis to optimize production efficiency.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <StaggerContainer staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                  <StaggerItem>
                    <MagneticElement distanceThreshold={100} magnetStrength={0.3}>
                      <div className="cursor-pointer">
                        <h3 className="text-3xl font-medium mb-2">5+</h3>
                        <p className="text-sm text-muted-foreground">Years of Experience</p>
                      </div>
                    </MagneticElement>
                  </StaggerItem>
                  <StaggerItem>
                    <MagneticElement distanceThreshold={100} magnetStrength={0.3}>
                      <div className="cursor-pointer">
                        <h3 className="text-3xl font-medium mb-2">20+</h3>
                        <p className="text-sm text-muted-foreground">Projects Completed</p>
                      </div>
                    </MagneticElement>
                  </StaggerItem>
                  <StaggerItem>
                    <MagneticElement distanceThreshold={100} magnetStrength={0.3}>
                      <div className="cursor-pointer">
                        <h3 className="text-3xl font-medium mb-2">4+</h3>
                        <p className="text-sm text-muted-foreground">Companies Worked With</p>
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
        <section className="col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-8 border-b border-[#d1d1c7] overflow-hidden">
          <StaggerContainer staggerChildren={0.1} className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {logoData.map((logo) => (
              <StaggerItem key={logo.id}>
                <div className="flex items-center justify-center p-4">
                  <MagneticElement distanceThreshold={100} magnetStrength={0.2}>
                    <div className="opacity-80 text-center h-20 cursor-pointer">
                      {logo.imgSrc ? (
                        <div className="h-full flex items-center justify-center">
                          <Image
                            src={logo.imgSrc}
                            alt={logo.company}
                            width={160}
                            height={80}
                            className="max-h-20 object-contain"
                          />
                        </div>
                      ) : (
                        <div className="h-20 w-40 border border-[#d1d1c7] flex items-center justify-center">
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
      <ScrollReveal>
        <section className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]">
          <div className="col-span-1 p-8 border-r border-[#d1d1c7]">
            <div className="flex items-center mb-6">
              <span className="mr-2 text-sm">+</span>
              <h3 className="text-sm">Skills</h3>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 p-8">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-4xl mb-8">My Technical Expertise</h2>
              <p className="text-muted-foreground mb-12">
                With a background in Mechanical Engineering and years of experience in process development, I bring a diverse skill set that combines engineering principles with data-driven approaches to optimize manufacturing processes.
              </p>

              <StaggerContainer staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <StaggerItem>
                  <TiltCard glareEffect={true} className="h-full">
                    <div className="border border-[#d1d1c7] p-6 h-full">
                      <h3 className="text-lg font-medium mb-2">Process Development</h3>
                      <p className="text-sm text-muted-foreground">
                        Developing scalable manufacturing processes for green hydrogen production using statistical tools like DOE and SPC.
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem>
                  <TiltCard glareEffect={true} className="h-full">
                    <div className="border border-[#d1d1c7] p-6 h-full">
                      <h3 className="text-lg font-medium mb-2">Data Analysis</h3>
                      <p className="text-sm text-muted-foreground">
                        Applying large-data analysis in SaaS environments to optimize process efficiency and support continuous improvement initiatives.
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem>
                  <TiltCard glareEffect={true} className="h-full">
                    <div className="border border-[#d1d1c7] p-6 h-full">
                      <h3 className="text-lg font-medium mb-2">Manufacturing Systems</h3>
                      <p className="text-sm text-muted-foreground">
                        Building robust data architectures for real-time data storage and visualization to enhance project management capabilities.
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem>
                  <TiltCard glareEffect={true} className="h-full">
                    <div className="border border-[#d1d1c7] p-6 h-full">
                      <h3 className="text-lg font-medium mb-2">CAD & Engineering Design</h3>
                      <p className="text-sm text-muted-foreground">
                        Generating structured CAD designs and quality-focused drawings using PDM systems for improved design accuracy and efficiency.
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
                <StaggerItem className="md:col-span-2">
                  <TiltCard glareEffect={true} tiltFactor={5} className="h-full">
                    <div className="border border-[#d1d1c7] p-6 h-full">
                      <h3 className="text-lg font-medium mb-2">Technical Skills</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Proficient in CAD, SolidWorks, Python, SQL, Data Analysis, Machine Learning, Product Design, and Project Management.
                      </p>
                      <div className="flex items-center space-x-4 mt-2">
                        <StaggerContainer staggerChildren={0.2} className="flex items-center space-x-4">
                          {skillIcons.map((skillIcon, index) => (
                            <StaggerItem key={index}>
                              <div className="flex flex-col items-center">
                                <MagneticElement distanceThreshold={80} magnetStrength={0.4}>
                                  <div className="w-16 h-16 flex items-center justify-center cursor-pointer">
                                    <Image
                                      src={skillIcon.icon}
                                      alt={skillIcon.skill}
                                      width={50}
                                      height={50}
                                      className="object-contain"
                                    />
                                  </div>
                                </MagneticElement>
                                <span className="text-xs text-muted-foreground mt-1">{skillIcon.skill}</span>
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
      <ScrollReveal>
        <section className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]">
          <div className="col-span-1 p-8 border-r border-[#d1d1c7]">
            <div className="flex items-center mb-6">
              <span className="mr-2 text-sm">+</span>
              <h3 className="text-sm">Experience</h3>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 p-8">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-4xl mb-12">Professional Experience</h2>

              <StaggerContainer staggerChildren={0.15} className="space-y-8">
                <StaggerItem>
                  <TiltCard tiltFactor={3} glareEffect={true}>
                    <div className="border border-[#d1d1c7] p-6 rounded-sm">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-medium mb-1">Process Development Engineer</h3>
                          <p className="text-sm text-muted-foreground mb-1">Electric Hydrogen - Boston, MA</p>
                          <p className="text-sm text-muted-foreground mb-4">January 2023 - Present</p>
                        </div>
                        <div className="mb-4 md:mb-0 mt-2 md:mt-0">
                          <Image
                            src="/uploads/ehydrogen-logo2.png"
                            alt="Electric Hydrogen"
                            width={120}
                            height={50}
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <ul className="text-sm mb-6 list-disc pl-5 space-y-2">
                        <li>Enhanced process capability by 20% for green hydrogen production by developing scalable manufacturing processes.</li>
                        <li>Integrated cutting-edge technology into production processes by working with suppliers and vendors.</li>
                        <li>Improved decision-making and stakeholder communication by providing actionable recommendations.</li>
                        <li>Developed robust data architectures for real-time data storage and visualization.</li>
                      </ul>
                    </div>
                  </TiltCard>
                </StaggerItem>

                <StaggerItem>
                  <TiltCard tiltFactor={3} glareEffect={true}>
                    <div className="border border-[#d1d1c7] p-6 rounded-sm">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-medium mb-1">Manufacturing Engineer</h3>
                          <p className="text-sm text-muted-foreground mb-1">Advanced Power Conversion - Colorado, USA</p>
                          <p className="text-sm text-muted-foreground mb-4">January 2022 - December 2023</p>
                        </div>
                      </div>
                      <ul className="text-sm mb-6 list-disc pl-5 space-y-2">
                        <li>Enhanced product lifecycle management by 20% utilizing hands-on machining and efficient feedback mechanisms.</li>
                        <li>Reduced development iterations by 30% through collaboration with the R&D team.</li>
                        <li>Achieved 95% quality control compliance by analyzing production units against standards.</li>
                        <li>Facilitated cross-functional transformation in manufacturing processes.</li>
                      </ul>
                    </div>
                  </TiltCard>
                </StaggerItem>
              </StaggerContainer>

              <div className="flex justify-end mt-8">
                <Link href="/about">
                  <RippleButton className="flex items-center space-x-2 rounded-md py-2 px-4 border border-[#d1d1c7] text-foreground hover:bg-muted/30">
                    <span>View Full Experience</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </RippleButton>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </ScrollReveal>

      {/* Education Section */}
      <ScrollReveal>
        <section className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]">
          <div className="col-span-1 p-8 border-r border-[#d1d1c7]">
            <div className="flex items-center mb-6">
              <span className="mr-2 text-sm">+</span>
              <h3 className="text-sm">Education</h3>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 p-8">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-4xl mb-12">Academic Background</h2>

              <StaggerContainer staggerChildren={0.15} className="space-y-8">
                <StaggerItem>
                  <TiltCard tiltFactor={3}>
                    <div className="border border-[#d1d1c7] p-6 rounded-sm">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-medium mb-1">University of Colorado - Boulder</h3>
                          <p className="text-sm text-muted-foreground mb-4">Bachelor's, Mechanical Engineering (August 2016 - May 2021)</p>
                        </div>
                        <div className="mb-4 md:mb-0 mt-2 md:mt-0">
                          <Image
                            src="/uploads/cuboulderlogo.png"
                            alt="University of Colorado Boulder"
                            width={120}
                            height={50}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </StaggerItem>

                <StaggerItem>
                  <TiltCard tiltFactor={3}>
                    <div className="border border-[#d1d1c7] p-6 rounded-sm">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-medium mb-1">University of Pennsylvania</h3>
                          <p className="text-sm text-muted-foreground mb-4">Certification, Mechanical Engineering (January 2015 - December 2016)</p>
                        </div>
                        <div className="mb-4 md:mb-0 mt-2 md:mt-0">
                          <Image
                            src="/uploads/UniversityofPennsylvania_FullLogo_RGB-4_0.png"
                            alt="University of Pennsylvania"
                            width={120}
                            height={50}
                            className="object-contain"
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
      <ScrollReveal>
        <section className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]">
          <div className="col-span-1 p-8 border-r border-[#d1d1c7]">
            <div className="flex items-center mb-6">
              <span className="mr-2 text-sm">+</span>
              <h3 className="text-sm">Contact</h3>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 p-8">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-4xl mb-12">Get in Touch</h2>
              <p className="text-muted-foreground mb-12">
                Interested in discussing process development, manufacturing efficiency, or potential opportunities? I'd love to connect.
              </p>

              <form className="space-y-6 max-w-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <TiltCard tiltFactor={3} scale={1.02}>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full border-b border-[#d1d1c7] bg-transparent py-2 focus:outline-none focus:border-black"
                      />
                    </TiltCard>
                  </div>
                  <div>
                    <TiltCard tiltFactor={3} scale={1.02}>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full border-b border-[#d1d1c7] bg-transparent py-2 focus:outline-none focus:border-black"
                      />
                    </TiltCard>
                  </div>
                </div>
                <div>
                  <TiltCard tiltFactor={3} scale={1.02}>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full border-b border-[#d1d1c7] bg-transparent py-2 focus:outline-none focus:border-black"
                    />
                  </TiltCard>
                </div>
                <div>
                  <TiltCard tiltFactor={3} scale={1.02}>
                    <textarea
                      placeholder="Your Message..."
                      rows={5}
                      className="w-full border-b border-[#d1d1c7] bg-transparent py-2 focus:outline-none focus:border-black"
                    />
                  </TiltCard>
                </div>
                <div>
                  <RippleButton className="main-button rounded-full px-8 py-2">
                    Submit
                  </RippleButton>
                </div>
              </form>

              <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6" staggerChildren={0.1}>
                <StaggerItem>
                  <MagneticElement>
                    <div className="cursor-pointer">
                      <h3 className="text-lg font-medium mb-2">Email</h3>
                      <a href="mailto:trueothem@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                        trueothem@gmail.com
                      </a>
                    </div>
                  </MagneticElement>
                </StaggerItem>
                <StaggerItem>
                  <MagneticElement>
                    <div className="cursor-pointer">
                      <h3 className="text-lg font-medium mb-2">Phone</h3>
                      <a href="tel:+16172333948" className="text-muted-foreground hover:text-foreground transition-colors">
                        +1 (617) 233-3948
                      </a>
                    </div>
                  </MagneticElement>
                </StaggerItem>
                <StaggerItem>
                  <MagneticElement>
                    <div className="cursor-pointer">
                      <h3 className="text-lg font-medium mb-2">Location</h3>
                      <p className="text-muted-foreground">
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
