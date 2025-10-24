import { useTheme } from "../context/ThemeContext";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const { currentTheme, theme } = useTheme();

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Pixart Technologies",
      period: "Sep 2024 - Present",
      points: [
        "Developed SaaS web application for school management using Laravel and MySQL.",
        "Built field sales mobile app with real-time tracking and Google Sheets integration.",
        "Created video automation tool with Python, OpenCV, and MoviePy, generating 300+ videos in 1.5 hours."
      ]
    },
    {
      title: "Python Full Stack Trainee",
      company: "Codegnan",
      period: "May 2024 - Sep 2024",
      points: [
        "Learned full-stack development with Python/Django and MySQL.",
        "Built clean, scalable web applications integrating frontend and backend."
      ]
    },
    {
      title: "Frontend Developer Intern",
      company: "1Stop.ai",
      period: "Jan 2024 - Mar 2024",
      points: [
        "Developed responsive to-do list web app using HTML, CSS, JS, and Bootstrap.",
        "Enhanced skills in interactive frontend development."
      ]
    }
  ];

  // Card background colors for light/dark themes
  const cardBg =
    theme === "light"
      ? "bg-gradient-to-r from-orange-50 to-orange-100"
      : "bg-gradient-to-r from-[#2b1a00] to-[#1a1200]";

  return (
    <section
      id="experience"
      style={{
        backgroundColor: currentTheme.background,
        color: currentTheme.textPrimary,
      }}
      className="py-20"
    >
      <div className="container mx-auto px-6">
        <h2
          style={{ color: currentTheme.heading }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          My Experience
        </h2>

        <div className="flex flex-col gap-10 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`${cardBg} rounded-3xl shadow-sm hover:shadow-md transition-all duration-300`}
            >
              <div className="p-6 md:p-8 flex flex-col md:flex-row items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <Briefcase size={32} color={currentTheme.accent} />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <p
                      style={{ color: currentTheme.accent }}
                      className="font-medium"
                    >
                      {exp.company}
                    </p>
                    <p
                      style={{ color: currentTheme.textSecondary }}
                      className="text-sm"
                    >
                      {exp.period}
                    </p>
                  </div>

                  {/* Concise Points */}
                  <ul className="list-disc pl-6 space-y-2">
                    {exp.points.map((p, i) => (
                      <li
                        key={i}
                        style={{ color: currentTheme.textSecondary }}
                        className="text-base leading-relaxed"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
