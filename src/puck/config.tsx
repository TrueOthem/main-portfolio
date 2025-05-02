import type { Config } from "@measured/puck";
import { HeadingBlock } from "./components/HeadingBlock";
import { TextBlock } from "./components/TextBlock";
import { ImageBlock } from "./components/ImageBlock";
import { SkillsBlock } from "./components/SkillsBlock";
import { ExperienceBlock } from "./components/ExperienceBlock";
import { ProjectBlock } from "./components/ProjectBlock";
import { HeroSection } from "./components/HeroSection";
import { SectionContainer } from "./components/SectionContainer";

// Define the types for our components
type Props = {
  HeadingBlock: {
    title: string;
    level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    alignment: "left" | "center" | "right";
  };
  TextBlock: {
    content: string;
    alignment: "left" | "center" | "right";
  };
  ImageBlock: {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority: boolean;
  };
  SkillsBlock: {
    title: string;
    skills: string[];
    category: string;
  };
  ExperienceBlock: {
    title: string;
    company: string;
    period: string;
    description: string;
  };
  ProjectBlock: {
    title: string;
    category: string;
    company: string;
    year: string;
    description: string;
    imageClass: string;
  };
  HeroSection: {
    title: string;
    subtitle: string;
    profileImage: string;
  };
  SectionContainer: {
    title: string;
    subtitle?: string;
    description?: string;
    className?: string;
  };
};

// Create the Puck configuration
export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: {
          type: "text",
          label: "Heading Text",
          defaultValue: "Enter heading text",
        },
        level: {
          type: "select",
          label: "Heading Level",
          options: [
            { label: "H1", value: "h1" },
            { label: "H2", value: "h2" },
            { label: "H3", value: "h3" },
            { label: "H4", value: "h4" },
            { label: "H5", value: "h5" },
            { label: "H6", value: "h6" },
          ],
          defaultValue: "h2",
        },
        alignment: {
          type: "radio",
          label: "Text Alignment",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
          defaultValue: "left",
        },
      },
      defaultProps: {
        title: "Heading",
        level: "h2",
        alignment: "left",
      },
      render: HeadingBlock,
    },
    TextBlock: {
      fields: {
        content: {
          type: "textarea",
          label: "Text Content",
          defaultValue: "Enter your text here",
        },
        alignment: {
          type: "radio",
          label: "Text Alignment",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
          defaultValue: "left",
        },
      },
      defaultProps: {
        content: "Enter your text here",
        alignment: "left",
      },
      render: TextBlock,
    },
    ImageBlock: {
      fields: {
        src: {
          type: "text",
          label: "Image Source",
          defaultValue: "/uploads/profile-photo.jpg",
        },
        alt: {
          type: "text",
          label: "Alt Text",
          defaultValue: "Image",
        },
        width: {
          type: "number",
          label: "Width",
          defaultValue: 500,
        },
        height: {
          type: "number",
          label: "Height",
          defaultValue: 500,
        },
        priority: {
          type: "checkbox",
          label: "Priority Loading",
          defaultValue: false,
        },
      },
      defaultProps: {
        src: "/uploads/profile-photo.jpg",
        alt: "Image",
        width: 500,
        height: 500,
        priority: false,
      },
      render: ImageBlock,
    },
    SkillsBlock: {
      fields: {
        title: {
          type: "text",
          label: "Skills Section Title",
          defaultValue: "Skills",
        },
        category: {
          type: "text",
          label: "Category",
          defaultValue: "Engineering",
        },
        skills: {
          type: "array",
          label: "Skills",
          arrayFields: {
            type: "text",
          },
          defaultValue: ["CAD", "SolidWorks", "Product Design"],
        },
      },
      defaultProps: {
        title: "Skills",
        category: "Engineering",
        skills: ["CAD", "SolidWorks", "Product Design"],
      },
      render: SkillsBlock,
    },
    ExperienceBlock: {
      fields: {
        title: {
          type: "text",
          label: "Job Title",
          defaultValue: "Process Development Engineer",
        },
        company: {
          type: "text",
          label: "Company",
          defaultValue: "Electric Hydrogen",
        },
        period: {
          type: "text",
          label: "Period",
          defaultValue: "2022 - Present",
        },
        description: {
          type: "textarea",
          label: "Description",
          defaultValue: "Job description goes here",
        },
      },
      defaultProps: {
        title: "Process Development Engineer",
        company: "Electric Hydrogen",
        period: "2022 - Present",
        description: "Job description goes here",
      },
      render: ExperienceBlock,
    },
    ProjectBlock: {
      fields: {
        title: {
          type: "text",
          label: "Project Title",
          defaultValue: "Project Title",
        },
        category: {
          type: "text",
          label: "Category",
          defaultValue: "processDevelopment",
        },
        company: {
          type: "text",
          label: "Company",
          defaultValue: "Electric Hydrogen",
        },
        year: {
          type: "text",
          label: "Year",
          defaultValue: "2023",
        },
        description: {
          type: "textarea",
          label: "Description",
          defaultValue: "Project description goes here",
        },
        imageClass: {
          type: "text",
          label: "Image Background Class",
          defaultValue: "bg-[#f4f4f0]",
        },
      },
      defaultProps: {
        title: "Project Title",
        category: "processDevelopment",
        company: "Electric Hydrogen",
        year: "2023",
        description: "Project description goes here",
        imageClass: "bg-[#f4f4f0]",
      },
      render: ProjectBlock,
    },
    HeroSection: {
      fields: {
        title: {
          type: "text",
          label: "Hero Title",
          defaultValue: "Mohamed Adil Al Sabri",
        },
        subtitle: {
          type: "text",
          label: "Hero Subtitle",
          defaultValue: "Process Development Engineer",
        },
        profileImage: {
          type: "text",
          label: "Profile Image",
          defaultValue: "/uploads/profile-photo.jpg",
        },
      },
      defaultProps: {
        title: "Mohamed Adil Al Sabri",
        subtitle: "Process Development Engineer",
        profileImage: "/uploads/profile-photo.jpg",
      },
      render: HeroSection,
    },
    SectionContainer: {
      fields: {
        title: {
          type: "text",
          label: "Section Title",
          defaultValue: "Section Title",
        },
        subtitle: {
          type: "text",
          label: "Section Subtitle",
          defaultValue: "",
        },
        description: {
          type: "textarea",
          label: "Section Description",
          defaultValue: "",
        },
        className: {
          type: "text",
          label: "Additional CSS Classes",
          defaultValue: "",
        },
      },
      defaultProps: {
        title: "Section Title",
        subtitle: "",
        description: "",
        className: "",
      },
      render: SectionContainer,
    },
  },
  // Define the root component styling
  root: {
    render: ({ children }) => {
      return <div className="w-full">{children}</div>;
    },
  },
};

export default config;
