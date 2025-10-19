import { useTheme } from "../context/ThemeContext";

const Certificates = () => {
  const { currentTheme } = useTheme();

  const certs = [
    {
      title: "AWS for Beginners",
      provider: "Great Learning",
      desc: "Introduction to cloud computing using AWS services.",
    },
    {
      title: "Web Development Front-end",
      provider: "1Stop Solutions",
      desc: "Intensive internship in HTML, CSS, JS, and React.",
    },
    {
      title: "Python OOP Mastery",
      provider: "Great Learning",
      desc: "Advanced OOP concepts with practical Python projects.",
    },
  ];

  return (
    <section
      id="certificates"
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
          Certificates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certs.map((c, i) => (
            <div
              key={i}
              style={{
                backgroundColor: currentTheme.cardBg,
                borderColor: currentTheme.border,
              }}
              className="p-6 rounded-xl border shadow hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg mb-1">{c.title}</h3>
              <p
                style={{ color: currentTheme.accent }}
                className="text-sm font-semibold mb-2"
              >
                {c.provider}
              </p>
              <p style={{ color: currentTheme.textSecondary }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
