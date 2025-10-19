import { useTheme } from "../context/ThemeContext";
import LaptopMan from "../assets/laptop-looking.svg"; 

interface HomeProps {
  scrollToSection: (id: string) => void;
}

const Home = ({ scrollToSection }: HomeProps) => {
  const { currentTheme } = useTheme();

  return (
    <section
      id="home"
      style={{
        backgroundColor: currentTheme.background,
        color: currentTheme.textPrimary,
      }}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 transition-colors duration-500"
    >
      {/* Left Side: Text */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1
          style={{ color: currentTheme.heading }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          Hello, <br /> I’m{" "}
          <span style={{ color: currentTheme.accent }}>Jagadish</span>.
        </h1>

        <p
          style={{ color: currentTheme.textSecondary }}
          className="text-lg md:text-xl max-w-md mx-auto md:mx-0"
        >
          Full Stack Developer with 1+ years of experience at Pixart.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
          <button
            onClick={() => scrollToSection("about")}
            style={{
              backgroundColor: currentTheme.accent,
              color: "#fff",
            }}
            className="px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all"
          >
            Learn More
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            style={{
              borderColor: currentTheme.accent,
              color: currentTheme.accent,
            }}
            className="px-8 py-3 border rounded-full font-medium hover:bg-orange-50 transition-all"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Right Side: SVG */}
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img src={LaptopMan} alt="Laptop Man" className="w-3/4 md:w-full h-auto" />
      </div>
    </section>
  );
};

export default Home;
