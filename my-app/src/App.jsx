import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  faArrowRight,
  faEnvelope,
  faDownload,
  faUser,
  faGraduationCap,
  faCode,
  faPhone,
  faMapPin,
  faPenToSquare,
  faCommentDots,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";


export default function App() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/services")
      .then((res) => setServices(res.data.services))
      .catch((err) => console.error("Failed to fetch services", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div
      className="min-h-screen bg-[#0A1628]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D1B2A]/90 backdrop-blur-md border-b border-[#2DD4BF]/10 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div
            className="flex items-center gap-2"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <div className="w-8 h-8 bg-[#2DD4BF] rounded-lg flex items-center justify-center">
              <span className="text-[#0A1628] font-black text-sm">A</span>
            </div>
            <h1 className="text-white font-bold text-lg tracking-wide">
              ABDIRAHMAN<span className="text-[#2DD4BF]">.DEV</span>
            </h1>
          </div>

          <nav
            className="flex items-center gap-1"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <a
              href="#home"
              className="text-[#2DD4BF] bg-[#2DD4BF]/10 border border-[#2DD4BF]/40 px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[#94a3b8] hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition text-sm"
            >
              About
            </a>
            <a
              href="#services"
              className="text-[#94a3b8] hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition text-sm"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-[#94a3b8] hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition text-sm"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-[#94a3b8] hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition text-sm"
            >
              Contact
            </a>
          </nav>

          <div
            className="flex gap-3"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <a
              href="/cv/abdirahman-cv.pdf"
              download
              className="flex items-center gap-2 text-[#2DD4BF] border border-[#2DD4BF]/50 px-4 py-2 rounded-lg hover:bg-[#2DD4BF]/15 hover:text-white transition font-semibold text-sm"
            >
              <FontAwesomeIcon icon={faDownload} className="text-xs" />
              CV
            </a>
            <button className="flex items-center gap-2 text-[#0A1628] px-4 py-2 rounded-lg bg-[#2DD4BF] hover:bg-[#26bfab] transition font-semibold text-sm">
              Get started
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="w-full pt-36 pb-24 px-10 border-b border-[#2DD4BF]/15 flex items-center justify-center"
      >
        <div className="flex items-center justify-between gap-[6rem] max-w-6xl w-full">
          <div className="flex flex-col gap-4 items-start">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse"></span>
              <p
                className="text-[#2DD4BF] text-sm font-medium tracking-widest uppercase"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Available For Work
              </p>
            </div>

            <h1
              className="text-white text-[50px] leading-tight"
              style={{ fontFamily: "Outfit, sans-serif", fontWeight: 400 }}
            >
              Hi, I'm{" "}
              <span className="text-[#2DD4BF] font-extrabold">Abdirahman</span>
            </h1>

            <p
              className="text-white text-[40px] font-bold border-l-4 border-[#2DD4BF] pl-4 leading-tight"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Full-Stack Developer
            </p>

            <p
              className="text-[#64748b] text-[17px] leading-relaxed max-w-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              I started coding because I love building things and making a
              difference — turning ideas into real products that people can
              actually use. Based in{" "}
              <span className="text-[#2DD4BF]">Nairobi, Kenya.</span>
            </p>

            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "JavaScript", "MySQL", "Python", "Pug"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full border border-[#2DD4BF]/20 text-[#2DD4BF] bg-[#2DD4BF]/5"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <div
              className="flex gap-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <button className="flex items-center gap-2 px-6 py-3 bg-[#2DD4BF] text-[#0A1628] font-semibold rounded-xl hover:bg-[#26bfab] transition shadow-lg shadow-[#2DD4BF]/20">
                Explore my work
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </button>
              <button className="flex items-center gap-2 px-6 py-3 border border-[#2DD4BF]/40 text-[#2DD4BF] rounded-xl hover:bg-[#2DD4BF]/15 hover:text-white transition font-semibold">
                <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
                Get in touch
              </button>
            </div>

            <div className="flex gap-8 mt-2">
              {[
                { num: "3+", label: "Years exp" },
                { num: "24", label: "Projects done" },
                { num: "19", label: "Happy clients" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="border-l-2 border-[#2DD4BF] pl-4 flex flex-col gap-1"
                >
                  <span
                    className="text-white font-extrabold text-2xl"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {s.num}
                  </span>
                  <span
                    className="text-[#64748b] text-xs uppercase tracking-wider"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0 relative flex items-center justify-center">
            <div
              className="absolute w-[340px] h-[340px] rounded-full border border-[#2DD4BF]/20 animate-spin"
              style={{ animationDuration: "12s" }}
            ></div>
            <div
              className="absolute w-[380px] h-[380px] rounded-full border border-[#2DD4BF]/8 animate-spin"
              style={{ animationDuration: "20s" }}
            ></div>
            <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#2DD4BF]"></div>
            <div className="absolute bottom-8 left-2 w-2 h-2 rounded-full bg-[#2DD4BF]/50"></div>
            <img
              className="w-80 h-80 rounded-full border-2 border-[#2DD4BF]/40 object-cover shadow-2xl shadow-[#2DD4BF]/10 relative z-10"
              src="/images/my-image.jpeg"
              alt="Abdirahman"
            />
            <div
              className="absolute -bottom-2 left-0 bg-[#0D1B2A] border border-[#2DD4BF]/30 rounded-xl px-4 py-2 flex items-center gap-2 z-20 shadow-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse"></span>
              <span className="text-white text-xs font-medium">
                Open to opportunities
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="w-full py-24 px-10 border-b border-[#2DD4BF]/15 flex justify-center"
      >
        <div className="max-w-6xl w-full">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse"></span>
            <p
              className="text-[#2DD4BF] text-xs font-medium tracking-widest uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              About Me
            </p>
          </div>
          <h2
            className="text-white text-4xl font-bold mb-6"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Who I Am
          </h2>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-[#0D1B2A] border border-[#2DD4BF]/15 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-[#2DD4BF]/10 rounded-xl flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-[#2DD4BF] text-sm"
                  />
                </div>
                <h3
                  className="text-white font-semibold text-sm"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Background
                </h3>
              </div>
              <p
                className="text-[#64748b] leading-relaxed text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                I'm <span className="text-white font-medium">Abdirahman</span> —
                a Computer Science student and self-taught developer from
                Nairobi, Kenya. I got into coding simply because I love building
                things. There's something powerful about taking an idea and
                turning it into something real that people can actually use and
                interact with. I enjoy the full process — from designing how
                something looks to solving the problems that make it work. I'm
                driven by the belief that good software can make a real
                difference, and every project I build is a step toward that.
              </p>
            </div>

            <div className="bg-[#0D1B2A] border border-[#2DD4BF]/15 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-[#2DD4BF]/10 rounded-xl flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    className="text-[#2DD4BF] text-sm"
                  />
                </div>
                <h3
                  className="text-white font-semibold text-sm"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Education
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                <p
                  className="text-white font-semibold text-sm"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  BSc Computer Science
                </p>
                <p
                  className="text-[#64748b] text-sm"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Mount Kenya University (MKU)
                </p>
                <p
                  className="text-[#374151] text-xs"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  2023 – 2026
                </p>
                <div className="flex items-center gap-2 mt-2 w-fit bg-[#2DD4BF]/8 border border-[#2DD4BF]/20 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-pulse"></span>
                  <span
                    className="text-[#2DD4BF] text-xs font-medium"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Currently enrolled
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-[#0D1B2A] border border-[#2DD4BF]/15 rounded-2xl p-6 mb-6">
            <div className="flex gap-3 items-center mb-5">
              <div className="w-9 h-9 bg-[#2DD4BF]/10 rounded-xl flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faCode}
                  className="text-[#2DD4BF] text-sm"
                />
              </div>
              <span
                className="text-white font-semibold text-sm"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Tech Stack & Skills
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  category: "Frontend",
                  skills: ["React", "HTML", "CSS", "JavaScript", "Pug"],
                },
                { category: "Backend", skills: ["Python", "Node.js", "PHP"] },
                { category: "Database", skills: ["MySQL", "MongoDB"] },
                {
                  category: "Tools",
                  skills: ["Git", "GitHub", "Figma", "VS Code"],
                },
              ].map((group) => (
                <div key={group.category}>
                  <p
                    className="text-[#2DD4BF] text-xs uppercase tracking-widest mb-3 font-semibold"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {group.category}
                  </p>
                  <div className="flex flex-col gap-2">
                    {group.skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#2DD4BF]/50"></span>
                        <span
                          className="text-[#64748b] text-sm"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-[#2DD4BF]/15 rounded-2xl p-6 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <h2
                className="text-white font-bold text-xl"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Want to work together or have a project idea?
              </h2>
              <span
                className="text-white/30 text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                I'm always open to new projects and collaborations.
              </span>
            </div>
            <div
              className="flex gap-3"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <a
                href="/cv/abdirahman-cv.pdf"
                download
                className="flex items-center gap-2 text-[#2DD4BF] border border-[#2DD4BF]/40 px-4 py-2 rounded-lg hover:bg-[#2DD4BF]/15 hover:text-white transition font-semibold text-sm"
              >
                <FontAwesomeIcon icon={faDownload} className="text-xs" />
                Download CV
              </a>
              <button className="flex items-center gap-2 bg-[#2DD4BF] text-[#0A1628] px-4 py-2 rounded-lg hover:bg-[#26bfab] transition font-semibold text-sm shadow-lg shadow-[#2DD4BF]/20">
                <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="w-full py-24 px-10 border-b border-[#2DD4BF]/15 flex justify-center"
      >
        <div className="max-w-6xl w-full">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#2DD4BF]"></span>
            <p
              className="text-[#2DD4BF] text-xs font-medium tracking-widest uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Services
            </p>
          </div>
          <h2
            className="text-white text-4xl font-bold mb-3"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Services & Packages I Offer
          </h2>
          <p
            className="text-white/40 text-sm mb-8"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Crafting modern digital experiences with clean code, responsive
            design, and attention to detail.
          </p>

          <div className="grid grid-cols-3 gap-3 items-stretch">
            {loading ? (
              [...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-full flex flex-col p-8 bg-[#0D1B2A] border border-[#2DD4BF]/15 rounded-2xl animate-pulse"
                >
                  <div className="w-9 h-9 bg-[#2DD4BF]/10 rounded-xl mb-4"></div>
                  <div className="h-5 bg-[#2DD4BF]/10 rounded w-3/4 mb-3"></div>
                  <div className="h-3 bg-[#2DD4BF]/5 rounded w-full mb-2"></div>
                  <div className="h-3 bg-[#2DD4BF]/5 rounded w-5/6 mb-6"></div>
                  <div className="h-8 bg-[#2DD4BF]/10 rounded w-1/3 mb-1"></div>
                  <div className="h-3 bg-[#2DD4BF]/5 rounded w-1/2 mb-5"></div>
                  <hr className="border-[#2DD4BF]/10 my-2" />
                  <div className="flex flex-col gap-3 mt-3">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="h-3 bg-[#2DD4BF]/5 rounded w-2/3"></div>
                    ))}
                  </div>
                </div>
              ))
            ) : services.length === 0 ? (
              <p className="text-white/40 text-sm col-span-3">
                No services found. Add some via the API.
              </p>
            ) : (
              services.map((service, index) => {
                const isPopular = index === 1;
                return (
                  <div
                    key={service._id}
                    className={`relative h-full flex flex-col p-8 bg-[#0D1B2A] rounded-2xl transition-all duration-200 hover:-translate-y-2 ${
                      isPopular
                        ? "border border-[#2DD4BF]"
                        : "border border-[#2DD4BF]/15 hover:border-[#2DD4BF]"
                    }`}
                  >
                    {isPopular && (
                      <span className="absolute top-4 right-4 text-xs bg-[#2DD4BF] text-[#0A1628] px-3 py-1 rounded-full font-bold">
                        MOST POPULAR
                      </span>
                    )}

                    <h2
                      className="text-white font-bold text-xl mt-4"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {service.title}
                    </h2>

                    <p
                      className="text-white/40 mt-2 text-sm leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {service.description}
                    </p>

                    <div className="flex flex-col mt-3">
                      <h1
                        className="text-[#2DD4BF] font-extrabold text-3xl"
                        style={{ fontFamily: "Outfit, sans-serif" }}
                      >
                        ${service.price}
                        {service.paymentType === "monthly" ? "/mo" : ""}
                      </h1>
                      <p className="text-white/40 text-sm">
                        {service.paymentType === "one-time"
                          ? "One-time Payment"
                          : service.paymentType === "monthly"
                          ? "Monthly Subscription"
                          : service.paymentType === "installment"
                          ? "Installment Plan"
                          : service.paymentType}
                      </p>
                    </div>

                    <hr className="border-[#2DD4BF]/10 my-5" />

                    <div className="flex flex-col gap-3">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs text-[#2DD4BF] flex items-center gap-2"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          <FontAwesomeIcon
                            icon={faCircleCheck}
                            className="text-xs"
                          />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="w-full py-24 px-10 border-b border-[#2DD4BF]/15 flex justify-center"
      >
        <div className="max-w-6xl w-full">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#2DD4BF]"></span>
            <p
              className="text-[#2DD4BF] text-xs font-medium tracking-widest uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              My Work
            </p>
          </div>
          <h2
            className="text-white text-4xl font-bold mb-3"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Projects I Built
          </h2>
          <p
            className="text-[#64748b] text-sm mb-10 max-w-lg leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Real-world products I designed and developed from scratch.
          </p>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-[#0D1B2A] border border-[#2DD4BF]/15 rounded-2xl overflow-hidden hover:border-[#2DD4BF] transition-all duration-200 hover:-translate-y-2">
              <div className="h-48 w-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="/images/kobciye-cover.png"
                  alt="Kobciye Foundation"
                />
              </div>
              <div className="py-6 px-4">
                <h3
                  className="text-white font-semibold mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Kobciye Foundation
                </h3>
                <p
                  className="text-[#64748b] text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  A non-profit platform connecting donors and volunteers to
                  community-driven initiatives across East Africa and the world
                  wide.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["PUG", "CSS", "JavaScript", "MongoDB"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-sm border border-[#2DD4BF]/20 text-[#2DD4BF] bg-[#2DD4BF]/5"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://kobciyefoundation.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-[#2DD4BF] border border-[#2DD4BF] p-3 w-full rounded-lg mt-1 hover:text-white hover:bg-[#2DD4BF]/15 transition text-sm font-semibold"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  View Project{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                </a>
              </div>
            </div>

            <div className="bg-[#0D1B2A] border border-[#2DD4BF]/15 rounded-2xl overflow-hidden hover:border-[#2DD4BF] transition-all duration-200 hover:-translate-y-2">
              <div className="h-48 w-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="/images/student-portal.jpeg"
                  alt="Student Portal"
                />
              </div>
              <div className="py-6 px-4">
                <h3
                  className="text-white font-semibold mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Student Portal with AI Chatbot
                </h3>
                <p
                  className="text-[#64748b] text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  An academic dashboard with grades, timetables and
                  announcements — powered by a built-in AI chatbot for instant
                  student support.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["HTML", "CSS", "JavaScript", "MySQL"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-sm border border-[#2DD4BF]/20 text-[#2DD4BF] bg-[#2DD4BF]/5"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  className="flex items-center justify-center gap-2 text-[#2DD4BF] border border-[#2DD4BF] p-3 w-full rounded-lg mt-1 hover:text-white hover:bg-[#2DD4BF]/15 transition text-sm font-semibold"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  View Project{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                </button>
              </div>
            </div>

            <div className="bg-[#0D1B2A] border border-[#2DD4BF]/15 rounded-2xl overflow-hidden hover:border-[#2DD4BF] transition-all duration-200 hover:-translate-y-2">
              <div className="h-48 w-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="/images/weather-cover.jpeg"
                  alt="Weather App"
                />
              </div>
              <div className="py-6 px-4">
                <h3
                  className="text-white font-semibold mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Modern Weather Forecast App
                </h3>
                <p
                  className="text-[#64748b] text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  A responsive weather application that provides real-time
                  forecasts, temperature updates, humidity levels, and wind
                  conditions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Tailwind", "Weather API", "JavaScript"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-sm border border-[#2DD4BF]/20 text-[#2DD4BF] bg-[#2DD4BF]/5"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
                <button
                  className="flex items-center justify-center gap-2 text-[#2DD4BF] border border-[#2DD4BF] p-3 w-full rounded-lg mt-1 hover:text-white hover:bg-[#2DD4BF]/15 transition text-sm font-semibold"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  View Project{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="w-full py-24 px-10 border-b border-[#2DD4BF]/15 flex justify-center"
      >
        <div className="max-w-6xl w-full">
          <div className="flex gap-2 items-center mb-3">
            <span className="rounded-full bg-[#2DD4BF] w-2 h-2"></span>
            <p
              className="text-[#2DD4BF] font-medium text-xs tracking-widest uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Get in Touch
            </p>
          </div>
          <h1
            className="text-white text-4xl font-bold mb-3"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Have a Project in Mind?
          </h1>
          <p
            className="text-[#64748b] text-sm mb-10 max-w-lg leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Fill in the form below and I'll get back to you within 24 hours with
            a plan and quote.
          </p>

          <form className="p-5 rounded-xl border border-[#2DD4BF]/40 bg-[#0D1B2A] grid md:grid-cols-2 gap-3 grid-cols-1">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2DD4BF] text-xs">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                type="text"
                placeholder="Your name"
                className="bg-[#0A1628] border border-[#2DD4BF]/20 rounded-lg pl-9 pr-4 py-3 text-white placeholder-white/50 outline-none focus:border-[#2DD4BF]/60 transition text-sm w-full"
                style={{ fontFamily: "Inter, sans-serif" }}
              />
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2DD4BF] text-xs">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="email"
                placeholder="Your email"
                className="bg-[#0A1628] border border-[#2DD4BF]/20 rounded-lg pl-9 pr-4 py-3 text-white placeholder-white/50 outline-none focus:border-[#2DD4BF]/60 transition text-sm w-full"
                style={{ fontFamily: "Inter, sans-serif" }}
              />
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2DD4BF] text-xs">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <input
                type="text"
                placeholder="Your phone"
                className="bg-[#0A1628] border border-[#2DD4BF]/20 rounded-lg pl-9 pr-4 py-3 text-white placeholder-white/50 outline-none focus:border-[#2DD4BF]/60 transition text-sm w-full"
                style={{ fontFamily: "Inter, sans-serif" }}
              />
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2DD4BF] text-xs">
                <FontAwesomeIcon icon={faMapPin} />
              </span>
              <input
                type="text"
                placeholder="Your location"
                className="bg-[#0A1628] border border-[#2DD4BF]/20 rounded-lg pl-9 pr-4 py-3 text-white placeholder-white/50 outline-none focus:border-[#2DD4BF]/60 transition text-sm w-full"
                style={{ fontFamily: "Inter, sans-serif" }}
              />
            </div>
            <div className="relative md:col-span-2">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2DD4BF] text-xs">
                <FontAwesomeIcon icon={faPenToSquare} />
              </span>
              <input
                type="text"
                placeholder="Subject"
                className="bg-[#0A1628] border border-[#2DD4BF]/20 rounded-lg pl-9 pr-4 py-3 text-white placeholder-white/50 outline-none focus:border-[#2DD4BF]/60 transition text-sm w-full"
                style={{ fontFamily: "Inter, sans-serif" }}
              />
            </div>
            <div className="relative md:col-span-2">
              <span className="absolute left-3 top-4 text-[#2DD4BF] text-xs">
                <FontAwesomeIcon icon={faCommentDots} />
              </span>
              <textarea
                placeholder="Tell me about your project..."
                rows={4}
                className="bg-[#0A1628] border border-[#2DD4BF]/20 rounded-lg pl-9 pr-4 py-3 text-white placeholder-white/50 outline-none focus:border-[#2DD4BF]/60 transition text-sm w-full resize-none"
                style={{ fontFamily: "Inter, sans-serif" }}
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#2DD4BF] text-[#0A1628] font-semibold py-3 rounded-lg hover:bg-[#26bfab] transition shadow-lg shadow-[#2DD4BF]/20"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Send message
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section
        id="process"
        className="w-full py-24 px-10 border-b border-[#2DD4BF]/15 flex justify-center"
      >
        <div className="max-w-6xl w-full">
          <div className="flex gap-2 items-center mb-3">
            <span className="rounded-full bg-[#2DD4BF] w-2 h-2"></span>
            <p
              className="text-[#2DD4BF] font-medium text-xs tracking-widest uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Process
            </p>
          </div>
          <h1
            className="text-white text-4xl font-bold mb-3"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            How it Works
          </h1>
          <p
            className="text-[#64748b] text-sm mb-14 max-w-lg leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            From idea to launch — a simple, transparent process so you always
            know what's happening.
          </p>

          <div className="flex items-start gap-0">
            {[
              {
                num: "01",
                title: "Free Consultation",
                desc: "We talk about your idea, goals, timeline, and budget — no strings attached.",
                icon: faCommentDots,
              },
              {
                num: "02",
                title: "Proposal & Quote",
                desc: "I send you a clear plan with scope, timeline, and a fixed price quote.",
                icon: faPenToSquare,
              },
              {
                num: "03",
                title: "Design & Build",
                desc: "I design and develop your project with regular updates along the way.",
                icon: faCode,
              },
              {
                num: "04",
                title: "Launch & Support",
                desc: "We go live together and I stay available for fixes and improvements.",
                icon: faArrowRight,
              },
            ].map((step, index, arr) => (
              <div key={step.num} className="flex items-start flex-1">
                <div className="flex flex-col gap-4 flex-1">
                  <div className="flex items-center gap-0">
                    <div className="w-12 h-12 rounded-full border border-[#2DD4BF] bg-[#2DD4BF]/10 flex items-center justify-center flex-shrink-0">
                      <span
                        className="text-[#2DD4BF] font-bold text-sm"
                        style={{ fontFamily: "Outfit, sans-serif" }}
                      >
                        {step.num}
                      </span>
                    </div>
                    {index < arr.length - 1 && (
                      <div className="flex-1 h-[1px] bg-[#2DD4BF]/30 mx-2"></div>
                    )}
                  </div>
                  <div className="w-9 h-9 bg-[#2DD4BF]/10 rounded-xl flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={step.icon}
                      className="text-[#2DD4BF] text-sm"
                    />
                  </div>
                  <div className="pr-4">
                    <h3
                      className="text-white font-semibold text-sm mb-2"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[#64748b] text-xs leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-[#0D1B2A] border border-[#2DD4BF]/15 rounded-2xl px-6 py-5 flex items-center justify-between">
            <div>
              <p
                className="text-white font-semibold text-sm mb-1"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Ready to start your project?
              </p>
              <p
                className="text-[#64748b] text-xs"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Free consultation · Reply within 24 hours · Fixed price quotes
              </p>
            </div>
            <button
              className="flex items-center gap-2 bg-[#2DD4BF] text-[#0A1628] px-5 py-3 rounded-lg hover:bg-[#26bfab] transition font-semibold text-sm shadow-lg shadow-[#2DD4BF]/20 flex-shrink-0"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Start a project
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#0D1B2A] border-t border-[#2DD4BF]/10 py-14 px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="col-span-1 flex flex-col gap-4">
              <div
                className="flex items-center gap-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <div className="w-8 h-8 bg-[#2DD4BF] rounded-lg flex items-center justify-center">
                  <span className="text-[#0A1628] font-black text-sm">A</span>
                </div>
                <span className="text-white font-bold text-lg tracking-wide">
                  ABDIRAHMAN<span className="text-[#2DD4BF]">.DEV</span>
                </span>
              </div>
              <p
                className="text-[#64748b] text-sm leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                A Computer Science student and self-taught developer from
                Nairobi, Kenya — building things that make a difference.
              </p>
              <div className="flex gap-3 mt-2">
                {[
                  {
                    href: "https://github.com/Abdurahman-Developer",
                    label: "GitHub",
                    icon: faGithub,
                  },
                  {
                    href: "https://www.linkedin.com/in/abdurahman-mohmud-317508408/",
                    label: "LinkedIn",
                    icon: faLinkedin,
                  },
                  {
                    href: "https://twitter.com",
                    label: "Twitter",
                    icon: faXTwitter,
                  },
                  {
                    href: "https://wa.me/+254141466057",
                    label: "WhatsApp",
                    icon: faWhatsapp,
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#2DD4BF]/20 text-[#64748b] hover:text-[#2DD4BF] hover:border-[#2DD4BF]/50 hover:bg-[#2DD4BF]/5 transition"
                  >
                    <FontAwesomeIcon icon={s.icon} className="text-sm" />
                  </a>
                ))}
              </div>
            </div>

            {/* Pages */}
            <div className="flex flex-col gap-4">
              <h4
                className="text-white font-semibold text-sm"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Pages
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "Home", href: "#home" },
                  { label: "About", href: "#about" },
                  { label: "Services", href: "#services" },
                  { label: "Projects", href: "#projects" },
                  { label: "Contact", href: "#contact" },
                ].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[#64748b] text-sm hover:text-[#2DD4BF] transition"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services — dynamically from state */}
            <div className="flex flex-col gap-4">
              <h4
                className="text-white font-semibold text-sm"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Services
              </h4>
              <ul className="flex flex-col gap-3">
                {services.map((s) => (
                  <li key={s._id}>
                    <a
                      href="#services"
                      className="text-[#64748b] text-sm hover:text-[#2DD4BF] transition"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <h4
                className="text-white font-semibold text-sm"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Contact
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  { icon: faEnvelope, text: "abdi@example.com" },
                  { icon: faPhone, text: "+254 141 466 057" },
                  { icon: faMapPin, text: "Nairobi, Kenya" },
                ].map((c) => (
                  <li key={c.text} className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={c.icon}
                      className="text-[#2DD4BF] text-xs"
                    />
                    <span
                      className="text-[#64748b] text-sm"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {c.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="border-[#2DD4BF]/10 mb-6" />

          <div className="flex items-center justify-between">
            <p
              className="text-[#374151] text-xs"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              © 2026 <span className="text-[#2DD4BF]">ABDIRAHMAN.DEV</span> ·
              All rights reserved
            </p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-pulse"></span>
              <span
                className="text-[#374151] text-xs"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Available for new projects
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}