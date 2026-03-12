"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import MetricCardEleven from "@/components/sections/metrics/MetricCardEleven";
import TestimonialCardTen from "@/components/sections/testimonial/TestimonialCardTen";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Facebook, Linkedin, Instagram, TrendingUp } from "lucide-react";

export default function GalleryPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Services", id: "/services" },
    { name: "Products", id: "/products" },
    { name: "Gallery", id: "/gallery" },
    { name: "About", id: "/about" },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="small"
      sizing="largeSmall"
      background="none"
      cardStyle="solid"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="CeilingPro"
          navItems={navItems}
          button={{
            text: "Contact Us",            href: "/contact"
          }}
        />
      </div>

      <div id="metrics" data-section="metrics" className="mx-auto px-4 md:px-6">
        <MetricCardEleven
          title="Our Proven Track Record"
          description="Thousands of satisfied customers trust CeilingPro for quality, reliability, and exceptional service in stretch ceiling solutions."
          tag="Performance Metrics"
          tagIcon={TrendingUp}
          tagAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          metrics={[
            {
              id: "metric-1",              value: "2,500+",              title: "Installations Completed",              description: "Professional projects across residential and commercial sectors",              imageSrc: "http://img.b2bpic.net/free-photo/lower-angle-portrait-young-strong-man-with-muscles-tries-close-his-suitcase-full-clothes-pressing-bag-with-effort_1258-314717.jpg",              imageAlt: "completed ceiling installation project showcase"
            },
            {
              id: "metric-2",              value: "98%",              title: "Client Satisfaction Rate",              description: "Consistent excellence recognized by customers and industry partners",              imageSrc: "http://img.b2bpic.net/free-photo/engineering-concept-with-three-business-people_23-2147704232.jpg",              imageAlt: "satisfied customer home renovation showcase"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials" className="mx-auto px-4 md:px-6">
        <TestimonialCardTen
          title="Trusted by Multiple Customer Segments"
          description="See how homeowners, contractors, designers, and retailers benefit from our comprehensive stretch ceiling solutions."
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "test-1",              title: "Perfect Solution for Home Renovation",              quote: "CeilingPro transformed our living space completely. The installation was professional, clean, and the final result exceeded our expectations.",              name: "Maria Popescu",              role: "Homeowner - Bucharest",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-characterizing-painter_23-2149529892.jpg",              imageAlt: "homeowner portrait professional headshot"
            },
            {
              id: "test-2",              title: "Reliable Partner for Commercial Projects",              quote: "We've partnered with CeilingPro on multiple commercial installations. Their reliability, technical knowledge, and project management are outstanding.",              name: "Ivan Petrov",              role: "General Contractor - Moscow",              imageSrc: "http://img.b2bpic.net/free-photo/middle-aged-business-man-hard-hat_1303-23575.jpg",              imageAlt: "contractor professional portrait headshot"
            },
            {
              id: "test-3",              title: "Quality Materials for Design Projects",              quote: "The material selection and color options available from CeilingPro provide excellent flexibility for our design clients. Highly recommended.",              name: "Elena Ioannidou",              role: "Interior Designer - Bratislava",              imageSrc: "http://img.b2bpic.net/free-photo/young-fashion-designer-working-her-workshop-alone_23-2148877352.jpg",              imageAlt: "interior designer professional portrait"
            },
            {
              id: "test-4",              title: "Excellent Bulk Supply and Support",              quote: "As a retailer, we appreciate CeilingPro's competitive pricing, consistent quality, and dedicated account support. They're our go-to supplier.",              name: "Dmitri Sokolov",              role: "Retailer & Distributor - St. Petersburg",              imageSrc: "http://img.b2bpic.net/free-photo/confident-european-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-128975.jpg",              imageAlt: "business owner retailer professional portrait"
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="CeilingPro"
          copyrightText="© 2025 CeilingPro Systems. All rights reserved. Premium stretch ceiling solutions for residential and commercial projects."
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com/ceilingpro",              ariaLabel: "Follow us on Facebook"
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/ceilingpro",              ariaLabel: "Connect on LinkedIn"
            },
            {
              icon: Instagram,
              href: "https://instagram.com/ceilingpro",              ariaLabel: "Follow us on Instagram"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}