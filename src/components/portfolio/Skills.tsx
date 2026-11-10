"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const bgWebRef = useRef<HTMLImageElement>(null);
  const spydyHangRef = useRef<HTMLDivElement>(null);

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
          ".matrix-item",
          { y: 30, opacity: 0, x: -15 },
          { y: 0, opacity: 1, x: 0, duration: 0.5, stagger: 0.04, ease: "back.out(1.5)" },
          "-=0.3"
        );

      if (bgWebRef.current) {
        gsap.to(bgWebRef.current, {
          scale: 1.05,
          opacity: 0.06,
          repeat: -1,
          yoyo: true,
          duration: 5,
          ease: "sine.inOut",
        });
      }

      if (spydyHangRef.current) {
        gsap.to(spydyHangRef.current, {
          rotation: 5,
          transformOrigin: "top center",
          repeat: -1,
          yoyo: true,
          duration: 3.2,
          ease: "sine.inOut",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    { name: "Java", category: "Languages", level: "Advanced" },
    { name: "SQL (Oracle)", category: "Languages", level: "Advanced" },
    { name: "MATLAB", category: "Languages", level: "Proficient" },
    { name: "JavaScript", category: "Languages", level: "Advanced" },
    { name: "HTML & CSS", category: "Frontend", level: "Advanced" },
    { name: "React.js", category: "Frontend", level: "Advanced" },
    { name: "MySQL", category: "Databases", level: "Advanced" },
    { name: "MongoDB", category: "Databases", level: "Proficient" },
    { name: "Oracle SQL", category: "Databases", level: "Proficient" },
    { name: "Node.js & Express.js", category: "Backend / Projects", level: "Proficient" },
    { name: "Spring Boot", category: "Backend / Projects", level: "Proficient" },
    { name: "ESP32 & IoT", category: "Hardware / Projects", level: "Proficient" },
    { name: "Socket.IO & Monaco Editor", category: "Projects", level: "Proficient" },
    { name: "Blockchain", category: "Projects", level: "Proficient" },
    { name: "Git & GitHub", category: "Tools", level: "Advanced" },
    { name: "VS Code & Eclipse", category: "Tools", level: "Advanced" },
    { name: "Simulink", category: "Tools", level: "Proficient" },
    { name: "Windows PowerShell", category: "Tools", level: "Proficient" },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full bg-white text-gray-900 py-16 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-gray-100 scroll-mt-16"
    >
      {/* Background Web Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
        <img
          ref={bgWebRef}
          src="/assets/web1-770H2sSx.png"
          alt="Background Web"
          className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] object-contain opacity-[0.04] mix-blend-multiply"
        />
      </div>

      {/* Hanging Spider-Man Decoration */}
      <div
        ref={spydyHangRef}
        className="absolute top-0 right-8 md:right-16 z-30 pointer-events-none flex flex-col items-center origin-top"
      >
        <div className="w-[2px] h-16 md:h-24 bg-gradient-to-b from-transparent to-gray-400 opacity-60" />
        <img
          src="/assets/spydy_hang-Cac1gK30.png"
          alt="Hanging Spider-Man"
          className="w-28 md:w-40 h-auto object-contain drop-shadow-lg -mt-2"
        />
      </div>

      {/* Title */}
      <div ref={titleRef} className="flex flex-col items-center text-center mb-10 z-10">
        <span className="text-[#a31515] font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] mb-2">
          Arsenal &amp; Expertise
        </span>
        <h2
          className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-gray-900"
          style={{ textShadow: "2px 2px 0px #fca5a5" }}
        >
          TECHNICAL SKILLS.
        </h2>
        <div className="w-12 h-1 bg-[#a31515] mt-2 rounded-full" />
      </div>

      {/* Skills Matrix Grid */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4 z-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="matrix-item group relative bg-gray-50/90 backdrop-blur-sm border border-gray-200 hover:border-[#a31515] px-5 py-3.5 rounded-xl transition-all duration-300 flex items-center justify-between cursor-pointer overflow-hidden shadow-sm hover:shadow-[0_8px_20px_rgba(163,21,21,0.15)] transform hover:-translate-y-0.5"
          >
            {/* Red slide-in fill on hover */}
            <div className="absolute inset-0 bg-[#a31515] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out z-0" />

            <div className="relative z-10 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#a31515] group-hover:bg-white transition-colors duration-300 shadow-[0_0_8px_rgba(163,21,21,0.6)]" />
              <div className="flex flex-col">
                <span className="text-sm md:text-base font-black uppercase tracking-tight text-gray-900 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
                <span className="text-[10px] font-semibold text-gray-400 group-hover:text-gray-200 transition-colors duration-300 uppercase tracking-widest">
                  {skill.category}
                </span>
              </div>
            </div>

            <div className="relative z-10">
              <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-white text-gray-700 group-hover:bg-black group-hover:text-white rounded-full transition-colors duration-300 shadow-sm">
                {skill.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
