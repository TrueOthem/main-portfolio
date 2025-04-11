import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7] about-section" data-testid="about-section">
        <div className="col-span-1 border-r border-[#d1d1c7] flex flex-col justify-center p-8">
          <h3 className="text-lg mb-2">About Me</h3>
          <h1 className="text-3xl md:text-4xl font-medium mb-6">Mohamed Adil Al Sabri</h1>
          <p className="text-lg mb-8">Process Development Engineer</p>

          <Link href="/contact">
            <Button className="main-button rounded-full">Get in Touch</Button>
          </Link>
        </div>
        <div className="col-span-2 p-8 md:p-12">
          <p className="text-lg mb-6">
            I'm a passionate Process Development Engineer with expertise in green hydrogen production and manufacturing optimization.
            My journey in engineering combines technical knowledge, hands-on experience, and data-driven problem-solving to create
            efficient, scalable manufacturing processes.
          </p>
          <p className="text-lg mb-6">
            With a background in Mechanical Engineering and experience across multiple industries, I focus on enhancing
            process capabilities through statistical tools and innovative approaches. My goal is to bridge the gap between
            engineering theory and practical applications to create sustainable, efficient production systems.
          </p>
        </div>
      </section>

      {/* Career Path Section */}
      <section className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]">
        <div className="col-span-1 p-8 border-r border-[#d1d1c7]">
          <div className="flex items-center mb-6">
            <span className="mr-2 text-sm">+</span>
            <h3 className="text-sm">Work Experience</h3>
          </div>
        </div>
        <div className="col-span-2 p-8">
          <h2 className="text-3xl md:text-4xl mb-6">My Career Path</h2>
          <p className="text-muted-foreground mb-12">
            With experience spanning multiple companies and roles, I've developed expertise in process development,
            manufacturing engineering, and project management across various industries.
          </p>

          <div className="space-y-12">
            <div className="border-l-4 border-[#d1d1c7] pl-6 relative">
              <div className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"></div>
              <h3 className="text-xl font-medium mb-1">Process Development Engineer</h3>
              <p className="text-sm text-muted-foreground mb-1">Electric Hydrogen - Boston, MA, USA</p>
              <p className="text-sm text-muted-foreground mb-4">January 2023 - Present</p>
              <ul className="text-sm mb-6 list-disc pl-5 space-y-2">
                <li>Led the development of scalable manufacturing processes for next-generation green hydrogen production technologies.</li>
                <li>Enhanced process capability by 20% through statistical analysis and optimization of key production parameters.</li>
                <li>Integrated cutting-edge technology into production processes by collaborating with suppliers and vendors.</li>
                <li>Improved decision-making and stakeholder communication through detailed data analysis and actionable recommendations.</li>
                <li>Developed robust data architectures for real-time data storage and visualization to enhance project tracking.</li>
                <li>Increased production efficiency by 15% through implementing continuous improvement methodologies.</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#d1d1c7] pl-6 relative">
              <div className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"></div>
              <h3 className="text-xl font-medium mb-1">Manufacturing Engineer</h3>
              <p className="text-sm text-muted-foreground mb-1">Advanced Power Conversion - Colorado, USA</p>
              <p className="text-sm text-muted-foreground mb-4">January 2022 - December 2023</p>
              <ul className="text-sm mb-6 list-disc pl-5 space-y-2">
                <li>Enhanced product lifecycle management by 20% utilizing hands-on machining and efficient feedback mechanisms.</li>
                <li>Reduced development iterations by 30% through collaboration with the R&D team on design improvements.</li>
                <li>Achieved 95% quality control compliance by analyzing production units against established standards.</li>
                <li>Facilitated cross-functional transformation in manufacturing processes to increase team efficiency.</li>
                <li>Managed diverse engineering projects from conception to production, ensuring alignment with business goals.</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#d1d1c7] pl-6 relative">
              <div className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"></div>
              <h3 className="text-xl font-medium mb-1">Application Engineer</h3>
              <p className="text-sm text-muted-foreground mb-1">Advanced Power Conversion - Barre, VT, USA</p>
              <p className="text-sm text-muted-foreground mb-4">June 2021 - December 2021</p>
              <ul className="text-sm mb-6 list-disc pl-5 space-y-2">
                <li>Provided engineering support for customer applications, resolving technical issues and enhancing product performance.</li>
                <li>Conducted field testing and validation of new products in real-world environments.</li>
                <li>Collaborated with sales teams to communicate technical specifications to customers.</li>
                <li>Documented application requirements and created user manuals for new product releases.</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#d1d1c7] pl-6 relative">
              <div className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"></div>
              <h3 className="text-xl font-medium mb-1">Engineering Staff</h3>
              <p className="text-sm text-muted-foreground mb-1">CU BOULDER - Boulder, CO, USA</p>
              <p className="text-sm text-muted-foreground mb-4">January 2020 - May 2021</p>
              <ul className="text-sm mb-6 list-disc pl-5 space-y-2">
                <li>Assisted faculty with research projects focused on renewable energy technologies.</li>
                <li>Developed lab procedures for engineering students and provided technical guidance.</li>
                <li>Maintained laboratory equipment and ensured safety protocols were followed.</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#d1d1c7] pl-6 relative">
              <div className="absolute top-0 left-[-10px] w-4 h-4 rounded-full bg-[#0f0f0f]"></div>
              <h3 className="text-xl font-medium mb-1">R&D Engineering Intern</h3>
              <p className="text-sm text-muted-foreground mb-1">NIST - Boulder, CO, USA</p>
              <p className="text-sm text-muted-foreground mb-4">May 2019 - August 2019</p>
              <ul className="text-sm mb-6 list-disc pl-5 space-y-2">
                <li>Participated in research projects focused on materials testing for renewable energy applications.</li>
                <li>Conducted laboratory experiments and collected data for analysis.</li>
                <li>Assisted senior engineers with documentation and reporting of research findings.</li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/contact">
              <Button className="main-button rounded-full">Contact Me</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]">
        <div className="col-span-1 p-8 border-r border-[#d1d1c7]">
          <div className="flex items-center mb-6">
            <span className="mr-2 text-sm">+</span>
            <h3 className="text-sm">Skills</h3>
          </div>
        </div>
        <div className="col-span-2 p-8">
          <h2 className="text-3xl md:text-4xl mb-12">Technical Skills</h2>

          <div className="grid grid-cols-1 gap-12">
            <div>
              <h3 className="text-xl font-medium mb-6 pb-2 border-b border-[#d1d1c7]">Engineering</h3>
              <div className="flex flex-wrap gap-3">
                {['CAD', 'SolidWorks', 'Product Design', 'Operations Research', 'Process Development'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-[#f4f4f0] rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-6 pb-2 border-b border-[#d1d1c7]">Data & Technology</h3>
              <div className="flex flex-wrap gap-3">
                {['SQL', 'Python', 'Data Analysis', 'Data Science', 'Machine Learning'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-[#f4f4f0] rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-6 pb-2 border-b border-[#d1d1c7]">Project Management</h3>
              <div className="flex flex-wrap gap-3">
                {['SCRUM', 'JIRA', 'Risk Management', 'Communication', 'Problem Solving'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-[#f4f4f0] rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
