"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoFrameRef = useRef<HTMLDivElement>(null);
  const webLeftRef = useRef<HTMLDivElement>(null);
  const webRightRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const parasRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        })
        .fromTo(
          [webLeftRef.current, webRightRef.current],
          { y: -600, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.8, ease: "elastic.out(0.8, 0.4)", stagger: 0.3 }
        )
        .fromTo(
          badgeRef.current,
          { x: -50, opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
          {
            x: 0,
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            duration: 0.8,
            ease: "power3.out",
          },
          "-=1.4"
        )
        .fromTo(
          titleRef.current,
          { y: 50, opacity: 0, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
          {
            y: 0,
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            duration: 0.8,
            ease: "power3.out",
          },
          "-=1.0"
        )
        .fromTo(
          photoFrameRef.current,
          { y: -800, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.8, ease: "elastic.out(0.7, 0.4)" },
          "-=0.8"
        )
        .fromTo(
          parasRef.current?.children ? Array.from(parasRef.current.children) : [],
          { y: 40, opacity: 0, rotationX: -45 },
          { y: 0, opacity: 1, rotationX: 0, duration: 1, stagger: 0.15, ease: "back.out(1.2)" },
          "-=1.2"
        )
        .fromTo(
          pillsRef.current?.children ? Array.from(pillsRef.current.children) : [],
          { scale: 0.5, opacity: 0, y: 20 },
          { scale: 1, opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" },
          "-=0.8"
        );

      // Hanging sway animation
      if (photoFrameRef.current) {
        gsap.to(photoFrameRef.current, {
          rotation: 2.5,
          transformOrigin: "top center",
          yoyo: true,
          repeat: -1,
          duration: 3.2,
          ease: "sine.inOut",
          delay: 2,
        });
      }

      gsap.to(".bg-web-left", {
        rotation: 360,
        transformOrigin: "center center",
        repeat: -1,
        duration: 70,
        ease: "linear",
      });

      gsap.to(".bg-web-right", {
        rotation: -360,
        transformOrigin: "center center",
        repeat: -1,
        duration: 90,
        ease: "linear",
      });

      gsap.to(".glow-frame", {
        boxShadow: "0px 15px 35px rgba(163,21,21,0.25)",
        yoyo: true,
        repeat: -1,
        duration: 2,
        ease: "sine.inOut",
      });

      gsap.to(".tech-pill", {
        y: -4,
        yoyo: true,
        repeat: -1,
        duration: 1.5,
        ease: "sine.inOut",
        stagger: { each: 0.2, from: "random" },
        delay: 1.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const techStack = [
    "Java",
    "JavaScript",
    "React.js",
    "Node.js",
    "Spring Boot",
    "MongoDB",
    "MySQL",
    "ESP32 & IoT",
    "Blockchain",
    "MATLAB & Simulink",
    "Git & GitHub",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-gray-50 text-gray-900 py-24 flex items-center justify-center overflow-hidden scroll-mt-16"
    >
      {/* Background Hanging Web Left */}
      <div
        ref={webLeftRef}
        className="absolute top-[-50px] left-[-5%] md:left-[2%] flex flex-col items-center pointer-events-none z-0"
      >
        <div className="w-[1px] h-[250px] md:h-[350px] bg-gradient-to-b from-transparent to-gray-300" />
        <img
          src="/assets/web1-770H2sSx.png"
          alt="Hanging Web"
          className="bg-web-left w-64 h-64 md:w-96 md:h-96 object-contain -mt-12 opacity-[0.12] mix-blend-multiply"
        />
      </div>

      {/* Background Hanging Web Right */}
      <div
        ref={webRightRef}
        className="absolute top-[-50px] right-[-5%] md:right-[2%] flex flex-col items-center pointer-events-none z-0"
      >
        <div className="w-[1px] h-[200px] md:h-[300px] bg-gradient-to-b from-transparent to-gray-300" />
        <img
          src="/assets/web1-770H2sSx.png"
          alt="Hanging Web"
          className="bg-web-right w-56 h-56 md:w-80 md:h-80 object-contain -mt-10 opacity-[0.12] mix-blend-multiply"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12 lg:gap-20 z-10 relative">
        {/* Content Column */}
        <div className="flex-1 flex flex-col gap-6 mt-10 lg:mt-0 relative z-20">
          <div className="overflow-hidden">
            <span
              ref={badgeRef}
              className="inline-flex items-center gap-2 text-[#a31515] font-bold uppercase text-xs md:text-sm tracking-[0.2em]"
            >
              <img
                src="/assets/spydy-DLbFrGCQ.png"
                alt="Spider"
                className="w-5 h-5 object-contain drop-shadow-sm"
              />
              Behind the Mask
            </span>
          </div>

          <div className="overflow-hidden py-2">
            <h2
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase italic text-gray-900"
              style={{ textShadow: "2px 2px 0px #fca5a5" }}
            >
              Arulkumar V.
            </h2>
          </div>

          <div
            ref={parasRef}
            className="flex flex-col gap-5 text-gray-700 text-base md:text-lg leading-relaxed max-w-xl font-medium mt-1"
            style={{ perspective: "1000px" }}
          >
            <p className="origin-bottom">
              I&apos;m a final-year Electrical and Electronics Engineering student with strong
              expertise in embedded systems, software engineering, and core electrical control
              systems.
            </p>
            <p className="origin-bottom">
              I&apos;ve worked on full-stack feature development, firmware integration, and
              hardware-software diagnostics through startup developer roles and industrial
              internships. As an active IEEE Student Member, I enjoy fast-paced software
              development, analytical problem solving, and working with cross-functional teams.
            </p>
          </div>

          {/* Quick contact tags */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-gray-600 pt-1">
            <a
              href="mailto:v.arulkumar07@gmail.com"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg hover:border-[#a31515] hover:text-[#a31515] transition-colors"
            >
              <span>📧</span> v.arulkumar07@gmail.com
            </a>
            <a
              href="tel:+919564558630"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg hover:border-[#a31515] hover:text-[#a31515] transition-colors"
            >
              <span>📱</span> +91 95645 58630
            </a>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg">
              <span>📍</span> Dindigul, Tamil Nadu, India
            </span>
          </div>

          <div className="mt-4">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-5 font-bold border-b border-gray-300 pb-2 inline-block">
              Core Tech Stack
            </h3>
            <div ref={pillsRef} className="flex flex-wrap gap-2.5">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="tech-pill px-4 py-2 border border-[#a31515]/30 bg-white text-[#a31515] rounded-xl text-xs md:text-sm font-bold tracking-wider hover:bg-[#a31515] hover:text-white hover:border-[#a31515] shadow-sm hover:shadow-[0_8px_20px_rgba(163,21,21,0.3)] transition-colors duration-300 cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Avatar Column */}
        <div className="flex-1 relative flex justify-center items-start min-h-[550px] w-full pt-0">
          <div ref={photoFrameRef} className="flex flex-col items-center z-30 group">
            {/* Hanging Silk Thread */}
            <div className="w-[2px] h-[180px] md:h-[300px] bg-gradient-to-b from-transparent via-[#a31515]/60 to-[#a31515]" />
            {/* Avatar Frame with Spider-Man Theme Emblem */}
            <div className="glow-frame relative w-64 h-64 md:w-[320px] md:h-[320px] rounded-full border-[6px] border-[#a31515] p-3 bg-white shadow-2xl transition-transform duration-500 group-hover:scale-105 flex flex-col items-center justify-center text-center overflow-hidden">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-red-950 flex flex-col items-center justify-center p-6 text-white relative">
                <img
                  src="/assets/spydy-DLbFrGCQ.png"
                  alt="Spider Emblem"
                  className="w-20 h-20 object-contain drop-shadow-[0_0_15px_rgba(239,68,68,0.8)] mb-3 animate-pulse-slow"
                />
                <h4 className="text-xl font-black uppercase tracking-tight text-white">
                  ARULKUMAR V
                </h4>
                <p className="text-xs text-red-400 font-bold uppercase tracking-widest mt-1">
                  Full Stack • IoT • Blockchain
                </p>
                <div className="mt-3 flex items-center gap-2 text-[11px] text-gray-400 font-medium">
                  <span>B.E. EEE</span>
                  <span>•</span>
                  <span>CGPA 7.7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
