"use client";

import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import FooterCard from '@/components/sections/footer/FooterCard';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Award, CheckCircle, Zap, TrendingUp, Facebook, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="largeSmall"
      background="none"
      cardStyle="layered-gradient"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="CeilingPro"
          navItems={[
            { name: "Home", id: "/" },
            { name: "Services", id: "/services" },
            { name: "Products", id: "/products" },
            { name: "Gallery", id: "/gallery" },
            { name: "About", id: "/about" },
          ]}
          button={{
            text: "Contact Us",
            href: "/contact",
          }}
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="About CeilingPro"
          tagIcon={Award}
          tagAnimation="blur-reveal"
          title="Over 15 Years of Ceiling Excellence"
          description="Why Choose CeilingPro"
          subdescription="Industry Leaders in Stretch Ceiling Systems"
          icon={CheckCircle}
          imageSrc="http://img.b2bpic.net/free-photo/construction-worker-assembly-suspended-ceiling-with-drywall-fixing-drywall-ceiling-metal-frame-with-screwdriver_166373-1913.jpg"
          imageAlt="Professional installation showcase"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSeven
          features={[
            {
              id: 1,
              title: "Professional Installation",
              description: "Expert teams deliver flawless stretch ceiling installations with precision alignment, seamless finishes, and minimal disruption to your space.",
              imageSrc: "http://img.b2bpic.net/free-photo/workers-using-hvac-manifold-indicators_482257-92534.jpg",
            },
            {
              id: 2,
              title: "Premium Materials",
              description: "We source high-quality stretch fabrics from trusted suppliers, offering durability, aesthetic appeal, and compliance with building standards.",
              imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-relaxing-indoors_23-2151030661.jpg",
            },
            {
              id: 3,
              title: "Complete Accessories",
              description: "Full range of mounting hardware, clips, profiles, and replacement parts. Compatible with all major ceiling systems for hassle-free integration.",
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-square-endless-spiral-pattern_181624-4529.jpg",
            },
          ]}
          title="Our Core Services & Capabilities"
          description="We deliver comprehensive ceiling solutions tailored to homeowners, contractors, and retailers with proven expertise and quality assurance."
          tag="What We Offer"
          tagIcon={Zap}
          tagAnimation="opacity"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="blur-reveal"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardEleven
          metrics={[
            {
              id: "metric-1",
              value: "2,500+",
              title: "Installations Completed",
              description: "Professional projects across residential and commercial sectors",
              imageSrc: "http://img.b2bpic.net/free-photo/lower-angle-portrait-young-strong-man-with-muscles-tries-close-his-suitcase-full-clothes-pressing-bag-with-effort_1258-314717.jpg",
            },
            {
              id: "metric-2",
              value: "98%",
              title: "Client Satisfaction Rate",
              description: "Consistent excellence recognized by customers and industry partners",
              imageSrc: "http://img.b2bpic.net/free-photo/engineering-concept-with-three-business-people_23-2147704232.jpg",
            },
          ]}
          title="Our Proven Track Record"
          description="Thousands of satisfied customers trust CeilingPro for quality, reliability, and exceptional service in stretch ceiling solutions."
          tag="Performance Metrics"
          tagIcon={TrendingUp}
          tagAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="CeilingPro"
          copyrightText="© 2025 CeilingPro Systems. All rights reserved. Premium stretch ceiling solutions for residential and commercial projects."
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com/ceilingpro",
              ariaLabel: "Follow us on Facebook",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/ceilingpro",
              ariaLabel: "Connect on LinkedIn",
            },
            {
              icon: Instagram,
              href: "https://instagram.com/ceilingpro",
              ariaLabel: "Follow us on Instagram",
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}