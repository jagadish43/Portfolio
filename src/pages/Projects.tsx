import { useTheme } from "../context/ThemeContext";
import { Code } from "lucide-react";

const Projects = () => {
  const { currentTheme } = useTheme();

  const projects = [
    {
      title: "Student Profile Analysis with XAI",
      desc: "Applied Explainable AI to categorize students into performance tiers.",
      tech: ["Python", "Machine Learning", "XAI"],
    },
    {
      title: "Interactive To-Do Application",
      desc: "Built a responsive task manager with React and Bootstrap.",
      tech: ["React", "JavaScript", "Bootstrap"],
    },
  ];

  return (
    <section
      id="projects"
      style={{
        backgroundColor: currentTheme.cardBg,
        color: currentTheme.textPrimary,
      }}
      className="py-20"
    >
      <div className="container mx-auto px-6">
        <h2
          style={{ color: currentTheme.heading }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              style={{
                backgroundColor: currentTheme.background,
                borderColor: currentTheme.border,
              }}
              className="rounded-xl border p-6 shadow hover:shadow-lg transition"
            >
              <div
                className="mb-4 flex items-center gap-2 font-semibold"
                style={{ color: currentTheme.accent }}
              >
                <Code size={20} />
                {p.title}
              </div>
              <p style={{ color: currentTheme.textSecondary }}>{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      backgroundColor: currentTheme.accent,
                      color: "#fff",
                    }}
                    className="px-3 py-1 text-sm rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
