"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Experience() {
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
          ".exp-item",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.4)" },
          "-=0.3"
        );

      if (bgWebRef.current) {
        gsap.to(bgWebRef.current, {
          scale: 1.1,
          opacity: 0.05,
          repeat: -1,
          yoyo: true,
          duration: 6,
          ease: "sine.inOut",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      role: "Free Internship & Placement Integrated Boot Camp",
      org: "QSpiders",
      location: "Coimbatore",
      duration: "Jun – Sep 2026",
      type: "Boot Camp",
      highlights:
        "Intensive training in core Java, OOP, and software development lifecycle principles. Developed relational database schemas and optimized SQL queries. Solved 100+ algorithmic coding problems on data structures and software efficiency.",
      badge: "Completed",
    },
    {
      role: "Software Development Associate",
      org: "NXRA Insights",
      location: "Remote / Tamil Nadu",
      duration: "Mar – Dec 2025",
      type: "Internship",
      highlights:
        "Developed and maintained software components and web modules based on client requirements. Debugged, tested, and collaborated with the development team to deliver quality solutions.",
      badge: "Completed",
    },
    {
      role: "Industrial Trainee",
      org: "RealTech Systems",
      location: "Perundurai",
      duration: "Jul 2024",
      type: "Training",
      highlights:
        "Assisted in installing and testing home water level monitoring systems with dedicated sensors. Gained hands-on experience in SMD technology, PCB assembly, sensor integration, and basic electronic troubleshooting.",
      badge: "Certified",
    },
  ];

  return (
    <section
      id="experience"
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
          Career Journey &amp; Milestones
        </span>
        <h2
          className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-gray-900"
          style={{ textShadow: "2px 2px 0px #fca5a5" }}
        >
          EXPERIENCE.
        </h2>
        <div className="w-12 h-1 bg-[#a31515] mt-2 rounded-full" />
      </div>

      {/* Experience List / Cards */}
      <div className="w-full max-w-4xl flex flex-col gap-5 z-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="exp-item group relative bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-[#a31515] p-6 rounded-2xl transition-all duration-300 flex flex-col md:flex-row md:items-start justify-between gap-4 shadow-sm hover:shadow-[0_10px_25px_rgba(163,21,21,0.15)] transform hover:-translate-y-1 overflow-hidden"
          >
            {/* Top red indicator accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#a31515] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />

            <div className="flex-1 flex flex-col gap-1.5">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="text-lg font-black uppercase tracking-tight text-gray-900 group-hover:text-[#a31515] transition-colors duration-300">
                  {exp.role}
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-50 text-[#a31515] border border-red-200">
                  {exp.type}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-gray-500">
                <span className="text-gray-800 font-bold">{exp.org}</span>
                <span>•</span>
                <span>{exp.location}</span>
              </div>

              <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium mt-2">
                {exp.highlights}
              </p>
            </div>

            <div className="flex md:flex-col items-center md:items-end justify-between gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-gray-100">
              <span className="text-xs font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-lg">
                {exp.duration}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                {exp.badge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
