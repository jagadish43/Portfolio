import { useTheme } from "../context/ThemeContext";
import { Mail, Phone, Linkedin, Github, Code, Download } from "lucide-react";
import resume from "../assets/Jagadish.pdf";

const Contact = () => {
  const { currentTheme } = useTheme();

  const socials = [
    { icon: <Linkedin />, link: "https://linkedin.com/in/gjagadish77", label: "LinkedIn" },
    { icon: <Github />, link: "https://github.com/jagadish43", label: "GitHub" },
    { icon: <Code />, link: "https://leetcode.com/jagadish2012", label: "LeetCode" },
  ];

  return (
    <section
      id="contact"
      style={{
        backgroundColor: currentTheme.cardBg,
        color: currentTheme.textPrimary,
        transition: "background-color 0.4s, color 0.4s",
      }}
      className="py-20"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h2
          style={{ color: currentTheme.heading }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          Let's Connect
        </h2>

        <p
          style={{ color: currentTheme.textSecondary }}
          className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Ready to collaborate or discuss your next project? I’d love to hear from you.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div
            style={{
              backgroundColor: currentTheme.background,
              borderColor: currentTheme.border,
            }}
            className="p-8 rounded-xl border shadow hover:shadow-lg transition"
          >
            <Mail size={32} color={currentTheme.accent} className="mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <a
              href="mailto:ganaparthyjagadeesh@gmail.com"
              style={{ color: currentTheme.textSecondary }}
              className="hover:text-orange-500 transition"
            >
              ganaparthyjagadeesh@gmail.com
            </a>
          </div>

          <div
            style={{
              backgroundColor: currentTheme.background,
              borderColor: currentTheme.border,
            }}
            className="p-8 rounded-xl border shadow hover:shadow-lg transition"
          >
            <Phone size={32} color={currentTheme.accent} className="mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Phone</h3>
            <a
              href="tel:+919063664963"
              style={{ color: currentTheme.textSecondary }}
              className="block hover:text-orange-500 transition"
            >
              +91 90636 64963
            </a>
            <a
              href="tel:+919107772929"
              style={{ color: currentTheme.textSecondary }}
              className="block hover:text-orange-500 transition"
            >
              +91 91077 72929
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: currentTheme.textSecondary,
                borderColor: currentTheme.border,
              }}
              className="p-3 border rounded-full hover:text-orange-500 hover:border-orange-500 transition"
              title={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Download Resume Button */}
        <a
          href={ resume }
          download
          style={{
            backgroundColor: currentTheme.accent,
            color: "#fff",
          }}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all"
        >
          <Download size={20} />
          <span>Download Resume</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
