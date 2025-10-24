import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { currentTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<"skills" | "education">("skills");

  const tabStyle = (tabName: "skills" | "education") => ({
    color: activeTab === tabName ? currentTheme.accent : currentTheme.textSecondary,
    borderBottom: activeTab === tabName ? `2px solid ${currentTheme.accent}` : "2px solid transparent",
  });

  const tabContent = {
    skills: (
      <div className="pt-4 space-y-4">
        {/* Technical Skills */}
        <div className="mb-4">
          <div className="text-lg space-y-2">
            <p>
              <span className="font-semibold" style={{ color: currentTheme.accent }}>Programming:</span> 
              {' '}Python, JavaScript, PHP, App Script
            </p>

            <p>
              <span className="font-semibold" style={{ color: currentTheme.accent }}>Frameworks & Libraries:</span> 
              {' '}Django, React, React Native, Laravel, Blade, Tkinter, OpenCV
            </p>

            <p>
              <span className="font-semibold" style={{ color: currentTheme.accent }}>Databases:</span> 
              {' '}MySQL, Firebase
            </p>

            <p>
              <span className="font-semibold" style={{ color: currentTheme.accent }}>Frontend & Styling:</span> 
              {' '}Tailwind CSS, Bootstrap
            </p>

            <p>
              <span className="font-semibold" style={{ color: currentTheme.accent }}>APIs & Automation:</span> 
              {' '}REST APIs, API Integration, Automation Tools
            </p>

            <p>
              <span className="font-semibold" style={{ color: currentTheme.accent }}>Soft Skills:</span> 
              {' '}Problem Solving, Adaptability, Continuous Learning, Collaboration
            </p>
          </div>
        </div>
      </div>
    ),
    education: (
      <div className="pt-4 space-y-4">
        <p className="text-lg">
            B.Tech in Computer Science and Engineering — Viswam Engineering College (2020 – 2024)
            <br />
            Intermediate (MPC) — Krishna Reddy Junior College (2018 – 2020)
            <br />
            Secondary School — Hope E.M. School (2014 – 2018)        
        </p>
      </div>
    ),
  };

  return (
    <section
      id="about"
      style={{
        backgroundColor: currentTheme.background,
        color: currentTheme.textPrimary,
        transition: "background-color 0.5s, color 0.5s",
      }}
      className="py-20"
    >
      <div className="container mx-auto px-6">
        {/* Main Heading */}
        <h2
          style={{ color: currentTheme.accent }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          About Me
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Main Introduction Paragraph */}
         <p className="leading-relaxed mb-8 text-lg">
          I’m a Full Stack Developer with 
           1+ years of experience in building 
           SaaS web applications, 
           automation tools, and 
           mobile apps. 
          I’m passionate about solving real-world problems through clean, efficient, and scalable code. 
          My strengths include a strong foundation in Data Structures and Algorithms (DSA) and hands-on experience with  modern development frameworks. <br />
          Currently, I’m upskilling in  Flutter and exploring 
          AI-powered automation to enhance productivity and streamline daily workflows.
        </p>


          {/* Tab Navigation (Skills & Education) */}
          <div className="flex space-x-8 border-b-2" style={{ borderColor: currentTheme.border }}>
            <button
              onClick={() => setActiveTab("skills")}
              style={tabStyle("skills")}
              className="py-2 px-1 text-xl font-semibold transition-colors duration-300 capitalize hover:opacity-80 focus:outline-none"
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab("education")}
              style={tabStyle("education")}
              className="py-2 px-1 text-xl font-semibold transition-colors duration-300 capitalize hover:opacity-80 focus:outline-none"
            >
              Education
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: currentTheme.cardBg }}>
            {activeTab === "skills" ? tabContent.skills : tabContent.education}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;