"use client";

import React from "react";
import { CaseStudyCard } from "@/ui/components/CaseStudyCard";
import { Footer } from "@/ui/components/Footer";
import { LinkButton } from "@/ui/components/LinkButton";
import { NavigationHeader } from "@/ui/components/NavigationHeader";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { FeatherMenu } from "@subframe/core";
import { FeatherLinkedin } from "@subframe/core";
import { FeatherInstagram } from "@subframe/core";
import { FeatherSend } from "@subframe/core";
import Link from "next/link";

import { useEffect, useState } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const sections = [
    {
      id: 0,
      title: "What sets me apart?",
      content: "Whether I'm exploring nature, experimenting with new creative tools, or collaborating on design projects, I bring the same curiosity, dedication, and love for meaningful experiences that define both my personal and professional journey.",
      image: "https://res.cloudinary.com/subframe/image/upload/v1756173618/uploads/20526/giykhbrcvevi1fnttdi6.jpg"
    },
    {
      id: 1,
      title: "I'm resourceful",
      content: "My experience as a Designer for more than 10 years has also allowed me to gain knowledge and understanding in many disciplines such as User Research, Search Engine Optimization, and Digital Marketing, coding HTML and CSS, AR, 3d and artificial intelligence tools.",
      image: "https://res.cloudinary.com/subframe/image/upload/v1756178229/uploads/20526/thzrykbkdarteddmafoz.jpg"
    },
    {
      id: 2,
      title: "I'm eager to experiment",
      content: "Not every project is equal, to create solutions for different problems, many times shifting from my comfort zone and applying new ideas, methodologies, or processes in order to see which work for better or worse. I can adapt, I'm always evolving",
      image: "https://res.cloudinary.com/subframe/image/upload/v1756178574/uploads/20526/qxsrv8qsvhvl1zhocrdi.png"
    },
    {
      id: 3,
      title: "I'm always learning",
      content: "Because UI/UX field is always expanding, there are many things to be learned; tools, technologies, trends, methodologies, or processes. I can be considered as a T - shaped Designer maybe generalist.",
      image: "https://res.cloudinary.com/subframe/image/upload/v1756233719/uploads/20526/bjmhblysoiu8mhvtodtl.jpg"
    },
    {
      id: 4,
      title: "I'm empathetic",
      content: "Users' perspective is a key to understand the pain points users have when using a product or service. Also, being empathic as a habit improves the quality of our own lives.",
      image: "https://res.cloudinary.com/subframe/image/upload/v1756180179/uploads/20526/smxmph45zagrbetdlh5d.jpg"
    }
  ];

  const images = [
    "https://res.cloudinary.com/subframe/image/upload/v1756173928/uploads/20526/yypeb07pkssolmvs6bgg.jpg",
    "https://res.cloudinary.com/subframe/image/upload/v1756173894/uploads/20526/rruqnipgugz43bytqrd5.jpg",
    "https://res.cloudinary.com/subframe/image/upload/v1756234158/uploads/20526/aqshgjyzcqrisgcblewg.jpg",
    "https://res.cloudinary.com/subframe/image/upload/v1756178574/uploads/20526/qxsrv8qsvhvl1zhocrdi.png",
    "https://res.cloudinary.com/subframe/image/upload/v1756178937/uploads/20526/iahgnwizz6h7o1ikfpjq.jpg",
    "https://res.cloudinary.com/subframe/image/upload/v1756233719/uploads/20526/bjmhblysoiu8mhvtodtl.jpg",
    "https://res.cloudinary.com/subframe/image/upload/v1756173618/uploads/20526/giykhbrcvevi1fnttdi6.jpg",
    "https://res.cloudinary.com/subframe/image/upload/v1756174265/uploads/20526/sjukxo8taigev9wnicad.jpg"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
      
      // Calculate which section should be active based on scroll position
      const sectionHeight = window.innerHeight;
      const currentSection = Math.floor(scrollPosition / sectionHeight);
      const clampedSection = Math.max(0, Math.min(sections.length - 1, currentSection));
      setActiveSection(clampedSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections.length]);

  return (
    <div className="relative">
      {/* Fixed Images Column - Left Side */}
      <div className="fixed left-8 top-0 w-80 h-screen overflow-hidden hidden lg:block">
        <div 
          className="flex flex-col gap-4 transition-transform duration-300 ease-out"
          style={{
            transform: `translateY(${-scrollY * 0.3}px)` // Parallax effect
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Portfolio image ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>

      {/* Content Area - Right Side */}
      <div className="ml-0 lg:ml-96 min-h-screen">
        {/* Spacer to create scroll height */}
        <div style={{ height: `${sections.length * 100}vh` }}>
          {/* Fixed Content Container */}
          <div className="fixed inset-0 lg:left-96 flex items-center justify-center p-8">
            <div className="max-w-2xl mx-auto">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-in-out ${
                    index === activeSection
                      ? 'opacity-100 translate-y-0'
                      : index < activeSection
                      ? 'opacity-0 -translate-y-8'
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  {/* Mobile Image */}
                  <div className="lg:hidden mb-8">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-48 h-48 object-cover rounded-lg mx-auto shadow-lg"
                    />
                  </div>
                  
                  <h1 className="text-heading-1 font-heading-1 text-brand-primary">
                    {section.title}
                  </h1>
                  
                  <p className="whitespace-pre-wrap text-caption-bold font-caption-bold text-subtext-color">
                    {section.content}
                  </p>
                  
                  {/* Progress Indicator */}
                  <div className="flex gap-2 mt-8">
                    {sections.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                          i === activeSection ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="fixed bottom-8 right-8 text-muted-foreground text-sm">
        <div className="flex flex-col items-center gap-2">
          <span>Scroll to explore</span>
          <div className="w-px h-16 bg-muted animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;