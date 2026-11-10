"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formBoxRef = useRef<HTMLDivElement>(null);
  const infoCardsRef = useRef<HTMLDivElement>(null);
  const bgWebRef = useRef<HTMLImageElement>(null);
  const spydyHangRef = useRef<HTMLDivElement>(null);

  const [submitted, setSubmitted] = useState(false);

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
          infoCardsRef.current?.children ? Array.from(infoCardsRef.current.children) : [],
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.4)" },
          "-=0.3"
        )
        .fromTo(
          formBoxRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "back.out(1.4)" },
          "-=0.2"
        );

      if (bgWebRef.current) {
        gsap.to(bgWebRef.current, {
          scale: 1.15,
          opacity: 0.06,
          repeat: -1,
          yoyo: true,
          duration: 4.5,
          ease: "sine.inOut",
        });
      }

      if (spydyHangRef.current) {
        gsap.to(spydyHangRef.current, {
          rotation: 8,
          transformOrigin: "top center",
          repeat: -1,
          yoyo: true,
          duration: 2,
          ease: "sine.inOut",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const contactMethods = [
    {
      title: "Email",
      value: "ksanjai427@gmail.com",
      href: "mailto:ksanjai427@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Phone",
      value: "+91 63822 72797",
      href: "tel:+916382272797",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/sanjaikumarb",
      href: "https://linkedin.com/in/sanjaikumarb",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.46 1.46 0 1 0 0-2.92 1.46 1.46 0 0 0 0 2.92M7.86 18.5v-8.37H5.07v8.37h2.79z" />
        </svg>
      ),
    },
    {
      title: "GitHub",
      value: "github.com/Sanjai-Kumar-B",
      href: "https://github.com/Sanjai-Kumar-B",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full bg-white text-gray-900 py-16 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-gray-100 scroll-mt-16"
    >
      {/* Background Web Watermark Bottom-Left */}
      <div className="absolute bottom-0 left-0 pointer-events-none overflow-hidden z-0">
        <img
          ref={bgWebRef}
          src="/assets/web1-770H2sSx.png"
          alt="Background Web"
          className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] object-contain opacity-[0.04] mix-blend-multiply -translate-x-1/4 translate-y-1/4"
        />
      </div>

      {/* Hanging Spider-Man Top-Right */}
      <div
        ref={spydyHangRef}
        className="absolute top-0 right-8 md:right-20 z-30 pointer-events-none flex flex-col items-center origin-top"
      >
        <div className="w-[2px] h-24 md:h-36 bg-gradient-to-b from-transparent to-gray-400 opacity-60" />
        <img
          src="/assets/spydy_hang-Cac1gK30.png"
          alt="Hanging Spider-Man"
          className="w-40 md:w-60 h-auto object-contain drop-shadow-2xl -mt-2"
        />
      </div>

      {/* Title */}
      <div ref={titleRef} className="flex flex-col items-center text-center mb-10 z-10">
        <span className="text-[#a31515] font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] mb-2 flex items-center gap-1.5">
          <img src="/assets/spydy-DLbFrGCQ.png" alt="Spider" className="w-4 h-4 object-contain" />
          Get In Touch
        </span>
        <h2
          className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-gray-900"
          style={{ textShadow: "2px 2px 0px #fca5a5" }}
        >
          CONTACT.
        </h2>
        <div className="w-12 h-1 bg-[#a31515] mt-2 rounded-full" />
      </div>

      {/* Contact Info Cards */}
      <div
        ref={infoCardsRef}
        className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8 z-10"
      >
        {contactMethods.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-4 p-4 rounded-xl bg-gray-50/90 border border-gray-200 hover:border-[#a31515] hover:shadow-md transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 text-[#a31515] group-hover:bg-[#a31515] group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
              {item.icon}
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#a31515] transition-colors">
                {item.title}
              </span>
              <span className="text-xs md:text-sm font-black text-gray-800 truncate">
                {item.value}
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Contact Form Card */}
      <div
        ref={formBoxRef}
        className="w-full max-w-2xl bg-gray-50/90 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl shadow-sm relative z-10"
      >
        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#a31515] text-white rounded-full flex items-center justify-center text-xl font-black mb-4 shadow-md animate-bounce">
              ✓
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-2">
              Message Sent!
            </h3>
            <p className="text-sm text-gray-600 font-medium">
              Thanks for reaching out, Sanjai will get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Peter Parker"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#a31515] focus:ring-1 focus:ring-[#a31515] transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Your Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="peter@stark.com"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#a31515] focus:ring-1 focus:ring-[#a31515] transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="Let's build something amazing together..."
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#a31515] focus:ring-1 focus:ring-[#a31515] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#a31515] hover:bg-[#7a0f0f] text-white py-3.5 rounded-xl font-bold uppercase text-xs tracking-widest transition-all duration-300 shadow-[0_4px_15px_rgba(163,21,21,0.3)] hover:shadow-[0_6px_20px_rgba(163,21,21,0.5)] cursor-pointer mt-2"
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-xs text-gray-500 font-medium z-10 flex flex-col items-center gap-1">
        <p>© {new Date().getFullYear()} Sanjai Kumar B. All Rights Reserved.</p>
        <p className="text-[11px] text-gray-400">
          Built with Next.js, Tailwind CSS, &amp; GSAP Animations • Spider-Man Themed Portfolio
        </p>
      </footer>
    </section>
  );
}
