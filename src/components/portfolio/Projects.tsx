"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const bgWebRef = useRef<HTMLImageElement>(null);
  const spydyStandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
        .fromTo(
          titleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
        )
        .fromTo(
          ".project-item",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.4)" },
          "-=0.3"
        )
        .fromTo(
          spydyStandRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.4"
        );

      if (bgWebRef.current) {
        gsap.set(bgWebRef.current, { transformOrigin: "top right" });
        gsap.to(bgWebRef.current, {
          rotation: 8,
          repeat: -1,
          yoyo: true,
          duration: 6,
          ease: "sine.inOut",
        });
        gsap.to(bgWebRef.current, {
          scale: 1.1,
          opacity: 0.07,
          repeat: -1,
          yoyo: true,
          duration: 4,
          ease: "sine.inOut",
        });
      }

      if (spydyStandRef.current) {
        gsap.to(spydyStandRef.current, {
          y: -10,
          repeat: -1,
          yoyo: true,
          duration: 2.5,
          ease: "sine.inOut",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "Resume Ranker",
      subtitle: "AI-Powered ATS Analysis Platform",
      description:
        "AI-powered resume screening and ranking platform featuring a React frontend and Flask backend for ATS-style resume analysis, keyword extraction, and automated candidate evaluation.",
      tags: ["React.js", "Flask", "AI/ML", "Python", "NLP"],
      link: "https://github.com/Sanjai-Kumar-B",
    },
    {
      title: "Fake Website Detector",
      subtitle: "Phishing Detection Machine Learning System",
      description:
        "Robust cybersecurity system detecting phishing and fraudulent websites using trained ML classifiers. Features real-time URL heuristic analysis and an intuitive user interface.",
      tags: ["Python", "Flask", "Machine Learning", "Scikit-Learn"],
      link: "https://github.com/Sanjai-Kumar-B",
    },
    {
      title: "AI Eye Tracking System",
      subtitle: "Computer Vision Gaze Detection",
      description:
        "High-precision computer vision application for real-time gaze detection and pupil tracking, engineered specifically for accessibility and hands-free interaction applications.",
      tags: ["Python", "OpenCV", "Computer Vision", "AI"],
      link: "https://github.com/Sanjai-Kumar-B",
    },
    {
      title: "Datathon CIT",
      subtitle: "Real-World Analytical Reporting",
      description:
        "End-to-end dataset preprocessing, statistical visualization, and analytical reporting on complex datasets, delivering predictive insights for data-driven strategic decisions.",
      tags: ["Python", "Data Analytics", "Pandas", "Matplotlib"],
      link: "https://github.com/Sanjai-Kumar-B",
    },
    {
      title: "SAIL Java Management System",
      subtitle: "Enterprise CRUD & Database Management",
      description:
        "Java-based management system featuring full CRUD operations, transactional MySQL database integration, and an extensible OOP-based backend architecture.",
      tags: ["Java", "MySQL", "OOP", "Database Design"],
      link: "https://github.com/Sanjai-Kumar-B",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full bg-white text-gray-900 py-16 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-gray-100 scroll-mt-16"
    >
      {/* Background Web Watermark Top-Right */}
      <div className="absolute top-0 right-0 pointer-events-none overflow-hidden z-0">
        <img
          ref={bgWebRef}
          src="/assets/web1-770H2sSx.png"
          alt="Background Web"
          className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] object-contain opacity-[0.04] mix-blend-multiply translate-x-1/4 -translate-y-1/4"
        />
      </div>

      {/* Standing Spider-Man Bottom-Left */}
      <div
        ref={spydyStandRef}
        className="absolute bottom-0 left-4 md:left-12 z-30 pointer-events-none"
      >
        <img
          src="/assets/spydy_stand-BwBM-zCr.png"
          alt="Standing Spider-Man"
          className="w-32 md:w-48 h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Title */}
      <div ref={titleRef} className="flex flex-col items-center text-center mb-10 z-10">
        <span className="text-[#a31515] font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] mb-2">
          Featured Works
        </span>
        <h2
          className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-gray-900"
          style={{ textShadow: "2px 2px 0px #fca5a5" }}
        >
          PROJECTS.
        </h2>
        <div className="w-12 h-1 bg-[#a31515] mt-2 rounded-full" />
      </div>

      {/* Projects Grid */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 z-10">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-item group relative bg-gray-50/90 backdrop-blur-sm border border-gray-200 hover:border-[#a31515] p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden shadow-sm hover:shadow-[0_10px_25px_rgba(163,21,21,0.15)] transform hover:-translate-y-1 block ${
              index === 4 ? "sm:col-span-2" : ""
            }`}
          >
            {/* Top red border accent line animated on hover */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#a31515] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="text-lg font-black uppercase tracking-tight text-gray-900 group-hover:text-[#a31515] transition-colors duration-300">
                  {project.title}
                </h3>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-[#a31515] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>

              <span className="text-[11px] font-bold text-[#a31515] uppercase tracking-wider block mb-3">
                {project.subtitle}
              </span>

              <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium mb-6">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200/60">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-white border border-gray-200 text-gray-600 group-hover:border-[#a31515]/30 group-hover:text-[#a31515] rounded-md transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
