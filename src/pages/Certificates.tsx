import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import AwsImg from "../assets/Images/aws.jpg";
import WebDevImg from "../assets/Images/stop.jpg";
import OopsImg from "../assets/Images/oops.jpg";
import pythonImg from "../assets/Images/pythonImage.png";

const Certificates = () => {
  const { currentTheme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const certs = [
    {
      title: "Python full Stack Development",
      provider: "Codegan Destination",
      desc: "Comprehensive training on Python, Django and deployment.",
      img: pythonImg,
    },
    {
      title: "AWS for Beginners",
      provider: "Great Learning",
      desc: "Introduction to cloud computing using AWS services.",
      img: AwsImg,
    },
    {
      title: "Web Development Front-end",
      provider: "1Stop Solutions",
      desc: "Intensive internship in HTML, CSS, JS, and React.",
      img: WebDevImg,
    },
    {
      title: "Python OOP Mastery",
      provider: "Great Learning",
      desc: "Advanced OOP concepts with practical Python projects.",
      img: OopsImg,
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
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                backgroundColor: currentTheme.cardBg,
                borderColor: currentTheme.border,
              }}
              className="relative p-6 rounded-xl border shadow transition cursor-pointer"
            >
              {/* Text always visible */}
              <h3 className="font-bold text-lg mb-1">{c.title}</h3>
              <p
                style={{ color: currentTheme.accent }}
                className="text-sm font-semibold mb-2"
              >
                {c.provider}
              </p>
              <p style={{ color: currentTheme.textSecondary }}>{c.desc}</p>

              {/* Image overlay on hover */}
              {hoveredIndex === i && (
                <div
                  className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center rounded-xl p-4 text-white z-10"
                >
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-3/4 h-auto rounded-md mb-4 shadow-lg"
                  />
                  <div className="text-center">
                    <h3 className="font-bold text-lg">{c.title}</h3>
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
