import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { currentTheme } = useTheme();

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

        <div className="flex flex-col md:flex-row gap-12">
          {/* About Me Section */}
          <div className="flex-1 text-left">
            <h3
              style={{ color: currentTheme.accent }}
              className="text-2xl font-semibold mb-4"
            >
            </h3>
            <p className="leading-relaxed">
              Hello! I'm{" "}
              <span style={{ color: currentTheme.accent }}>Jagadish</span>, a passionate Full Stack Developer with experience in React, Django, and automation tools. I enjoy building modern web applications that are functional, responsive, and visually engaging. I believe in writing clean, maintainable code and always learning new technologies to solve real-world problems.
            </p>
          </div>

          {/* Skills Section */}
          <div className="flex-1 text-left">
            <h3
              style={{ color: currentTheme.accent }}
              className="text-2xl font-semibold mb-4"
            >
              Skills
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>💻 React.js / Redux / Tailwind CSS</li>
              <li>🖥 Django / Django REST Framework</li>
              <li>🐍 Python Automation & Scripting</li>
              <li>🗄 MySQL / PostgreSQL</li>
              <li>☁ CI/CD & Docker Basics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
