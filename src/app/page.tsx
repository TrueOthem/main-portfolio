import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Define logo data with unique IDs - these will represent companies
const logoData = [
  { id: 'logo1', logoId: 1305337390, company: 'Electric Hydrogen' },
  { id: 'logo2', logoId: 3277094777, company: 'Advanced Power Conversion' },
  { id: 'logo3', logoId: 1596526869, company: 'CU Boulder' },
  { id: 'logo4', logoId: 3073163278, company: 'NIST' },
  { id: 'logo5', logoId: 1254480995, company: 'University of Pennsylvania' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="col-span-3 grid grid-cols-3 border-b border-[#d1d1c7]">
        <div className="col-span-1 border-r border-[#d1d1c7] flex items-center justify-center p-8">
          <div className="relative w-full aspect-square max-w-xs">
            <div className="w-full h-full flex items-center justify-center bg-[#f4f4f0] text-4xl font-bold text-[#0f0f0f]">
              MAS
            </div>
          </div>
        </div>
        <div className="col-span-2 flex items-center p-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium">
            Mohamed Adil<br />Al Sabri
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="col-span-3 grid grid-cols-3 border-b border-[#d1d1c7]">
        <div className="col-span-1 p-8 border-r border-[#d1d1c7]">
          <div className="flex items-center mb-6">
            <span className="mr-2 text-sm">+</span>
            <h3 className="text-sm">About</h3>
          </div>
        </div>
        <div className="col-span-2 p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl mb-6">Process Development Engineer</h2>
          <p className="text-muted-foreground mb-6">
            Process Development Engineer specializing in green hydrogen production. I enhance process capability by developing scalable manufacturing processes, integrating cutting-edge technology, and applying data analysis to optimize production efficiency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <h3 className="text-3xl font-medium mb-2">5+</h3>
              <p className="text-sm text-muted-foreground">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-medium mb-2">20+</h3>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-medium mb-2">4+</h3>
              <p className="text-sm text-muted-foreground">Companies Worked With</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-8 border-b border-[#d1d1c7] overflow-hidden">
        {logoData.map((logo) => (
          <div key={logo.id} className="flex items-center justify-center p-4">
            <div className="opacity-60 text-center">
              <div className="h-10 w-40 border border-[#d1d1c7] flex items-center justify-center mb-2">
                {logo.company}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Expertise Section */}
      <section className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]">
        <div className="col-span-1 p-8 border-r border-[#d1d1c7]">
          <div className="flex items-center mb-6">
            <span className="mr-2 text-sm">+</span>
            <h3 className="text-sm">Skills</h3>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 p-8">
          <h2 className="text-3xl md:text-4xl mb-8">My Technical Expertise</h2>
          <p className="text-muted-foreground mb-12">
            With a background in Mechanical Engineering and years of experience in process development, I bring a diverse skill set that combines engineering principles with data-driven approaches to optimize manufacturing processes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-[#d1d1c7] p-6">
              <h3 className="text-lg font-medium mb-2">Process Development</h3>
              <p className="text-sm text-muted-foreground">
                Developing scalable manufacturing processes for green hydrogen production using statistical tools like DOE and SPC.
              </p>
            </div>
            <div className="border border-[#d1d1c7] p-6">
              <h3 className="text-lg font-medium mb-2">Data Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Applying large-data analysis in SaaS environments to optimize process efficiency and support continuous improvement initiatives.
              </p>
            </div>
            <div className="border border-[#d1d1c7] p-6">
              <h3 className="text-lg font-medium mb-2">Manufacturing Systems</h3>
              <p className="text-sm text-muted-foreground">
                Building robust data architectures for real-time data storage and visualization to enhance project management capabilities.
              </p>
            </div>
            <div className="border border-[#d1d1c7] p-6">
              <h3 className="text-lg font-medium mb-2">CAD & Engineering Design</h3>
              <p className="text-sm text-muted-foreground">
                Generating structured CAD designs and quality-focused drawings using PDM systems for improved design accuracy and efficiency.
              </p>
            </div>
            <div className="border border-[#d1d1c7] p-6">
              <h3 className="text-lg font-medium mb-2">Technical Skills</h3>
              <p className="text-sm text-muted-foreground">
                Proficient in CAD, SolidWorks, Python, SQL, Data Analysis, Machine Learning, Product Design, and Project Management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]">
        <div className="col-span-1 p-8 border-r border-[#d1d1c7]">
          <div className="flex items-center mb-6">
            <span className="mr-2 text-sm">+</span>
            <h3 className="text-sm">Experience</h3>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 p-8">
          <h2 className="text-3xl md:text-4xl mb-12">Professional Experience</h2>

          <div className="space-y-8">
            <div className="border border-[#d1d1c7] p-6 rounded-sm">
              <h3 className="text-xl font-medium mb-1">Process Development Engineer</h3>
              <p className="text-sm text-muted-foreground mb-1">Electric Hydrogen - Boston, MA</p>
              <p className="text-sm text-muted-foreground mb-4">January 2023 - Present</p>
              <ul className="text-sm mb-6 list-disc pl-5 space-y-2">
                <li>Enhanced process capability by 20% for green hydrogen production by developing scalable manufacturing processes.</li>
                <li>Integrated cutting-edge technology into production processes by working with suppliers and vendors.</li>
                <li>Improved decision-making and stakeholder communication by providing actionable recommendations.</li>
                <li>Developed robust data architectures for real-time data storage and visualization.</li>
              </ul>
            </div>

            <div className="border border-[#d1d1c7] p-6 rounded-sm">
              <h3 className="text-xl font-medium mb-1">Manufacturing Engineer</h3>
              <p className="text-sm text-muted-foreground mb-1">Advanced Power Conversion - Colorado, USA</p>
              <p className="text-sm text-muted-foreground mb-4">January 2022 - December 2023</p>
              <ul className="text-sm mb-6 list-disc pl-5 space-y-2">
                <li>Enhanced product lifecycle management by 20% utilizing hands-on machining and efficient feedback mechanisms.</li>
                <li>Reduced development iterations by 30% through collaboration with the R&D team.</li>
                <li>Achieved 95% quality control compliance by analyzing production units against standards.</li>
                <li>Facilitated cross-functional transformation in manufacturing processes.</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-end mt-8">
            <Link href="/about">
              <Button variant="outline" className="flex items-center space-x-2">
                <span>View Full Experience</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]">
        <div className="col-span-1 p-8 border-r border-[#d1d1c7]">
          <div className="flex items-center mb-6">
            <span className="mr-2 text-sm">+</span>
            <h3 className="text-sm">Education</h3>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 p-8">
          <h2 className="text-3xl md:text-4xl mb-12">Academic Background</h2>

          <div className="space-y-8">
            <div className="border border-[#d1d1c7] p-6 rounded-sm">
              <h3 className="text-xl font-medium mb-1">University of Colorado - Boulder</h3>
              <p className="text-sm text-muted-foreground mb-4">Bachelor's, Mechanical Engineering (August 2016 - May 2021)</p>
            </div>

            <div className="border border-[#d1d1c7] p-6 rounded-sm">
              <h3 className="text-xl font-medium mb-1">University of Pennsylvania</h3>
              <p className="text-sm text-muted-foreground mb-4">Certification, Mechanical Engineering (January 2015 - December 2016)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]">
        <div className="col-span-1 p-8 border-r border-[#d1d1c7]">
          <div className="flex items-center mb-6">
            <span className="mr-2 text-sm">+</span>
            <h3 className="text-sm">Contact</h3>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 p-8">
          <h2 className="text-3xl md:text-4xl mb-12">Get in Touch</h2>
          <p className="text-muted-foreground mb-12">
            Interested in discussing process development, manufacturing efficiency, or potential opportunities? I'd love to connect.
          </p>

          <form className="space-y-6 max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border-b border-[#d1d1c7] bg-transparent py-2 focus:outline-none focus:border-black"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border-b border-[#d1d1c7] bg-transparent py-2 focus:outline-none focus:border-black"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border-b border-[#d1d1c7] bg-transparent py-2 focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message..."
                rows={5}
                className="w-full border-b border-[#d1d1c7] bg-transparent py-2 focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <Button className="main-button rounded-full px-8">Submit</Button>
            </div>
          </form>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Email</h3>
              <a href="mailto:trueothem@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                trueothem@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Phone</h3>
              <a href="tel:+16172333948" className="text-muted-foreground hover:text-foreground transition-colors">
                +1 (617) 233-3948
              </a>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Location</h3>
              <p className="text-muted-foreground">
                Cambridge, MA, USA
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
