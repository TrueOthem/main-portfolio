"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState, useRef, useEffect } from 'react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Reference to the form for keyboard navigation
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Focus the name input when the component mounts
  useEffect(() => {
    // Small delay to ensure the DOM is fully rendered
    const timer = setTimeout(() => {
      if (nameInputRef.current) {
        nameInputRef.current.focus();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    // For email validation, validate on change
    if (name === 'email' && value) {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      if (!isValidEmail) {
        setErrors(prev => ({
          ...prev,
          email: 'Please enter a valid email address'
        }));
      }
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formState.project.trim()) {
      newErrors.project = 'Project title is required';
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Project description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Always validate and show errors
    const isValid = validateForm();

    // If form is not valid, just return and let the errors display
    if (!isValid) {
      // Make sure aria-invalid is set for screen readers
      const form = e.currentTarget as HTMLFormElement;
      const inputs = form.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        if (errors[input.name]) {
          input.setAttribute('aria-invalid', 'true');
        }
      });
      return;
    }

    // Form is valid, simulate submission
    setSubmitted(true);

    // Reset form after successful submission
    setFormState({
      name: '',
      email: '',
      project: '',
      message: ''
    });

    // Reset submission status after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };
  return (
    <>
      {/* Hero Section */}
      <section className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7] contact-section" data-testid="contact-section">
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

          <form className="space-y-6 max-w-2xl" onSubmit={handleSubmit}>
            {submitted && (
              <div className="text-green-600 p-3 bg-green-50 rounded mb-4">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className={`w-full border-b ${errors.name ? 'border-red-500' : 'border-[#d1d1c7]'} bg-transparent py-2 focus:outline-none focus:border-black`}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  value={formState.name}
                  onChange={handleChange}
                  ref={nameInputRef}
                  tabIndex={1}
                />
                <div className="error-message text-red-500 text-sm mt-1" data-error="true">
                  {errors.name || 'Name is required'}
                </div>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className={`w-full border-b ${errors.email ? 'border-red-500' : 'border-[#d1d1c7]'} bg-transparent py-2 focus:outline-none focus:border-black`}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  value={formState.email}
                  onChange={handleChange}
                  tabIndex={2}
                />
                <div className="error-message text-red-500 text-sm mt-1" data-error="true">
                  {errors.email || 'Please enter a valid email address'}
                </div>
              </div>
            </div>
            <div>
              <input
                type="text"
                name="project"
                placeholder="Project Title"
                className={`w-full border-b ${errors.project ? 'border-red-500' : 'border-[#d1d1c7]'} bg-transparent py-2 focus:outline-none focus:border-black`}
                required
                aria-required="true"
                aria-invalid={!!errors.project}
                value={formState.project}
                onChange={handleChange}
                tabIndex={3}
              />
              <div className="error-message text-red-500 text-sm mt-1" data-error="true">
                {errors.project || 'Project title is required'}
              </div>
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Project Description..."
                rows={5}
                className={`w-full border-b ${errors.message ? 'border-red-500' : 'border-[#d1d1c7]'} bg-transparent py-2 focus:outline-none focus:border-black`}
                required
                aria-required="true"
                aria-invalid={!!errors.message}
                value={formState.message}
                onChange={handleChange}
                tabIndex={4}
              />
              <div className="error-message text-red-500 text-sm mt-1" data-error="true">
                {errors.message || 'Project description is required'}
              </div>
            </div>
            <div>
              <Button type="submit" className="main-button rounded-full px-8 w-full md:w-auto" tabIndex={5}>Submit</Button>
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
