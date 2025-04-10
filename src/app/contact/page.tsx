import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]">
        <div className="col-span-1 p-8 border-r border-[#d1d1c7]">
          <div className="flex items-center mb-6">
            <span className="mr-2 text-sm">+</span>
            <h3 className="text-sm">Contact</h3>
          </div>
        </div>
        <div className="col-span-2 p-8 md:p-12">
          <h1 className="text-3xl md:text-5xl font-medium mb-6">
            Let's Connect
          </h1>
          <p className="text-muted-foreground mb-8">
            I'm always open to discussing process development projects, engineering challenges,
            or potential opportunities in manufacturing and renewable energy.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]">
        <div className="col-span-1 p-8 border-r border-[#d1d1c7]">
          <div className="flex flex-col space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Email</h3>
              <a href="mailto:trueothem@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                trueothem@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Phone</h3>
              <a href="tel:+16172333948" className="text-muted-foreground hover:text-foreground transition-colors">
                +1 (617) 233-3948
              </a>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Location</h3>
              <p className="text-muted-foreground">
                Cambridge, MA, USA
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 p-8 md:p-12">
          <h2 className="text-2xl font-medium mb-8">Send Me a Message</h2>

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
        </div>
      </section>

      {/* Resume Section */}
      <section className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]">
        <div className="col-span-1 p-8 border-r border-[#d1d1c7]">
          <div className="flex items-center mb-6">
            <span className="mr-2 text-sm">+</span>
            <h3 className="text-sm">My Resume</h3>
          </div>
        </div>
        <div className="col-span-2 p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl mb-6">Download My Resume</h2>
          <p className="text-muted-foreground mb-8">
            Looking for more details about my professional experience, education, and skills?
            Download my full resume.
          </p>

          <a href="/uploads/Mohamed-adil-resume-PSE.pdf" download>
            <Button className="main-button rounded-full">
              Download Resume (PDF)
            </Button>
          </a>
        </div>
      </section>

      {/* LinkedIn Section */}
      <section className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]">
        <div className="col-span-1 p-8 border-r border-[#d1d1c7]">
          <div className="flex items-center mb-6">
            <span className="mr-2 text-sm">+</span>
            <h3 className="text-sm">Connect</h3>
          </div>
        </div>
        <div className="col-span-2 p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl mb-6">Let's Connect on LinkedIn</h2>
          <p className="text-muted-foreground mb-8">
            Connect with me on LinkedIn to stay updated on my professional journey and industry insights.
          </p>

          <a href="https://linkedin.com/in/mohamed-adil-al-sabri/" target="_blank" rel="noopener noreferrer">
            <Button className="main-button rounded-full">
              LinkedIn Profile
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
