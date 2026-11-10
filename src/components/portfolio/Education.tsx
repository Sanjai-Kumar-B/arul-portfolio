"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const bgWebRef = useRef<HTMLImageElement>(null);

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
          ".edu-item",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "back.out(1.4)" },
          "-=0.3"
        );

      if (bgWebRef.current) {
        gsap.to(bgWebRef.current, {
          scale: 1.08,
          opacity: 0.05,
          repeat: -1,
          yoyo: true,
          duration: 5,
          ease: "sine.inOut",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const education = [
    {
      institution: "Excel Engineering College (Autonomous)",
      degree: "B.Tech – Computer Science and Business Systems (CSBS)",
      duration: "2023 – 2027",
      score: "CGPA 8.0",
      detail: "Final Year (2026–2027). Core curriculum covering Data Structures, Full Stack Web Architecture, Machine Learning, and Enterprise Business Systems.",
      badge: "Undergraduate",
    },
    {
      institution: "Little Flower Matriculation HSS",
      degree: "Higher Secondary Certificate (HSC)",
      duration: "2021 – 2023",
      score: "80%",
      detail: "Salem, Tamil Nadu. Concentrated in Mathematics, Physics, Chemistry, and Computer Science.",
      badge: "High School",
    },
    {
      institution: "Sri Vidya Mandir HSS",
      degree: "Secondary School Leaving Certificate (SSLC)",
      duration: "2020 – 2021",
      score: "75%",
      detail: "Salem, Tamil Nadu. Foundational academic education with focus on Science and Mathematics.",
      badge: "Secondary",
    },
  ];

  const certifications = [
    {
      title: "Programming using Java",
      issuer: "Infosys Springboard",
      icon: "☕",
      highlight: "Core Java programming principles, OOP concepts, algorithms, and modular design.",
    },
    {
      title: "Data Structures using Java",
      issuer: "Infosys Springboard",
      icon: "⚡",
      highlight: "Linear and non-linear data structures, trees, graphs, sorting, and complexity analysis.",
    },
    {
      title: "Data Structures and Algorithms using Java",
      issuer: "NPTEL / IIT",
      icon: "📜",
      highlight: "Rigorous academic certification on algorithmic problem solving, recursion, and dynamic programming.",
    },
    {
      title: "Go for Gold L&D Program",
      issuer: "Accenture",
      icon: "🏆",
      highlight: "Corporate learning & professional software engineering development training.",
    },
    {
      title: "Software Engineering Job Simulation",
      issuer: "Forage",
      icon: "💼",
      highlight: "Practical simulation of real-world developer workflows, code reviews, and system architecture.",
    },
    {
      title: "Active DSA & Competitive Coding",
      issuer: "Interview Prep & Coding Platforms",
      icon: "🎯",
      highlight: "Consistent problem solving, algorithmic challenges, and technical interview preparation.",
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative w-full bg-gray-50 text-gray-900 py-16 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-gray-100 scroll-mt-16"
    >
      {/* Background Web Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
        <img
          ref={bgWebRef}
          src="/assets/web1-770H2sSx.png"
          alt="Background Web"
          className="w-[700px] h-[700px] object-contain opacity-[0.03] mix-blend-multiply"
        />
      </div>

      {/* Title */}
      <div ref={titleRef} className="flex flex-col items-center text-center mb-12 z-10">
        <span className="text-[#a31515] font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] mb-2">
          Academic Foundations &amp; Accreditations
        </span>
        <h2
          className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-gray-900"
          style={{ textShadow: "2px 2px 0px #fca5a5" }}
        >
          EDUCATION &amp; CERTIFICATIONS.
        </h2>
        <div className="w-12 h-1 bg-[#a31515] mt-2 rounded-full" />
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 z-10">
        {/* Education Timeline */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#a31515]" />
            <h3 className="text-base font-black uppercase tracking-wider text-gray-900">
              Education
            </h3>
          </div>

          {education.map((item, index) => (
            <div
              key={index}
              className="edu-item group relative bg-white border border-gray-200 hover:border-[#a31515] p-5 rounded-2xl shadow-sm hover:shadow-[0_8px_20px_rgba(163,21,21,0.12)] transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#a31515] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <div className="flex items-start justify-between gap-3 mb-1.5">
                <h4 className="text-sm md:text-base font-black uppercase text-gray-900 group-hover:text-[#a31515] transition-colors">
                  {item.institution}
                </h4>
                <span className="text-xs font-black text-[#a31515] shrink-0 bg-red-50 px-2 py-0.5 rounded-md border border-red-100">
                  {item.score}
                </span>
              </div>
              <p className="text-xs font-bold text-gray-700">{item.degree}</p>
              <div className="flex items-center justify-between text-[11px] font-semibold text-gray-500 mt-2 pt-2 border-t border-gray-100">
                <span>{item.duration}</span>
                <span className="uppercase tracking-widest text-[#a31515] font-bold">
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Badges */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#a31515]" />
            <h3 className="text-base font-black uppercase tracking-wider text-gray-900">
              Certifications &amp; Achievements
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="edu-item group bg-white border border-gray-200 hover:border-[#a31515] p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-3.5"
              >
                <div className="w-9 h-9 rounded-lg bg-red-50 text-base flex items-center justify-center shrink-0 border border-red-100">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h5 className="text-xs md:text-sm font-black text-gray-900 group-hover:text-[#a31515] transition-colors uppercase">
                      {cert.title}
                    </h5>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#a31515] block mt-0.5">
                    {cert.issuer}
                  </span>
                  <p className="text-[11px] text-gray-500 font-medium mt-1 leading-relaxed">
                    {cert.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

