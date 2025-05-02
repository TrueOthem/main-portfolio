import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
  {
    id: "post5",
    title: "CAD Design Optimization for Manufacturing Efficiency",
    category: "engineering",
    date: "August 17, 2023",
    summary:
      "How to optimize CAD designs for improved manufacturing processes, focusing on design for manufacturability (DFM) principles and practical applications.",
    readTime: "5 min read",
  },
  {
    id: "post6",
    title: "Leading Cross-Functional Teams in Engineering Projects",
    category: "leadership",
    date: "July 28, 2023",
    summary:
      "Strategies for effective leadership of diverse, cross-functional teams in complex engineering projects, with insights from personal experience.",
    readTime: "9 min read",
  },
];

// Define categories
const categories = [
  { id: "all", label: "All" },
  { id: "processDevelopment", label: "Process Development" },
  { id: "dataSystems", label: "Data Systems" },
  { id: "engineering", label: "Engineering" },
  { id: "qualityAssurance", label: "Quality Assurance" },
  { id: "sustainability", label: "Sustainability" },
  { id: "leadership", label: "Leadership" },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]"
        data-oid="sj756x8"
      >
        <div
          className="col-span-1 p-8 border-r border-[#d1d1c7]"
          data-oid="3prxw8r"
        >
          <div className="flex items-center mb-6" data-oid="n1ee75z">
            <span className="mr-2 text-sm" data-oid="vc4j-ov">
              +
            </span>
            <h3 className="text-sm" data-oid="n0a2n2s">
              Technical Articles
            </h3>
          </div>
        </div>
        <div className="col-span-2 p-8 md:p-12" data-oid="j8xnpss">
          <h1
            className="text-3xl md:text-5xl font-medium mb-6"
            data-oid="_o-x.l_"
          >
            Explore Design
          </h1>
          <p className="text-muted-foreground mb-8" data-oid="gk:-w8k">
            Articles about engineering challenges, process development, and
            technical insights from my experience in manufacturing and renewable
            energy production.
          </p>

          {/* Blog Categories Navigation - Client side filtering will be added in a future version */}
          <div className="flex flex-wrap gap-2 mb-8" data-oid="9.7::7i">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 text-sm rounded-full border border-[#d1d1c7] ${
                  category.id === "all"
                    ? "bg-[#0f0f0f] text-white"
                    : "hover:bg-[#f4f4f0]"
                }`}
                data-oid="rq1mhhu"
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section
        className="col-span-3 grid grid-cols-1 md:grid-cols-2 border-b border-[#d1d1c7]"
        data-oid="rkr.1qx"
      >
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="border-b border-r border-[#d1d1c7] p-8"
            data-oid="b2dodze"
          >
            <span className="text-sm text-muted-foreground" data-oid="g:_2xxu">
              {post.date} · {post.readTime}
            </span>
            <h2
              className="text-xl md:text-2xl font-medium mt-2 mb-4"
              data-oid="bwvwq.z"
            >
              {post.title}
            </h2>
            <p className="text-muted-foreground mb-6" data-oid="snbew7q">
              {post.summary}
            </p>
            <Button
              variant="outline"
              className="rounded-full text-sm"
              data-oid="kf0oe1v"
            >
              Read More
            </Button>
          </article>
        ))}
      </section>

      {/* Newsletter Section */}
      <section
        className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-b border-[#d1d1c7]"
        data-oid="ad_sa3g"
      >
        <div
          className="col-span-1 p-8 border-r border-[#d1d1c7]"
          data-oid="okgac9-"
        >
          <div className="flex items-center mb-6" data-oid="lys6g.e">
            <span className="mr-2 text-sm" data-oid="l7jll58">
              +
            </span>
            <h3 className="text-sm" data-oid=".0zuulq">
              Stay Updated
            </h3>
          </div>
        </div>
        <div className="col-span-2 p-8 md:p-12" data-oid="pco6qfd">
          <h2 className="text-3xl md:text-4xl mb-6" data-oid="bq8grep">
            Subscribe to My Newsletter
          </h2>
          <p className="text-muted-foreground mb-8" data-oid="jxv.9j7">
            Receive updates on the latest engineering advancements, process
            development techniques, and technical insights directly to your
            inbox.
          </p>

          <form
            className="flex flex-col md:flex-row gap-4 max-w-2xl"
            data-oid="0yhr1h6"
          >
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-grow border border-[#d1d1c7] bg-transparent px-4 py-3 rounded-full focus:outline-none focus:border-black"
              data-oid="qna16uf"
            />

            <Button className="main-button rounded-full" data-oid="mhxg--7">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
