"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import FeatureCardSeven from "@/components/sections/feature/FeatureCardSeven";
import MetricCardEleven from "@/components/sections/metrics/MetricCardEleven";
import ContactText from "@/components/sections/contact/ContactText";
import FooterCard from "@/components/sections/footer/FooterCard";
import Link from "next/link";
import { Zap, TrendingUp, Facebook, Linkedin, Instagram } from "lucide-react";

export default function ServicesPage() {
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
      {/* Navbar */}
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
            text: "Contact Us",            href: "/contact"}}
        />
      </div>

      {/* Services Features */}
      <div id="services-features" data-section="services-features">
        <FeatureCardSeven
          title="Professional Installation Services"
          description="Comprehensive stretch ceiling installation and support services designed for residential, commercial, and industrial applications. Our certified teams bring expertise, precision, and reliability to every project."
          tag="Installation & Support"
          tagIcon={Zap}
          tagAnimation="opacity"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="blur-reveal"
          features={[
            {
              id: 1,
              title: "Residential Installation",              description: "Transform homes with expert stretch ceiling installations. We handle kitchens, bathrooms, living areas, and bedrooms with precision and care. Minimal disruption, maximum results.",              imageSrc: "http://img.b2bpic.net/free-photo/construction-worker-assembly-suspended-ceiling-with-drywall-fixing-drywall-ceiling-metal-frame-with-screwdriver_166373-1913.jpg?_wi=3"},
            {
              id: 2,
              title: "Commercial Projects",              description: "Large-scale installations for offices, retail, hospitality, and healthcare facilities. We manage complex layouts, maintain schedules, and ensure compliance with all commercial standards.",              imageSrc: "http://img.b2bpic.net/free-photo/people-office-workday_23-2147668795.jpg?_wi=3"},
            {
              id: 3,
              title: "Maintenance & Repair",              description: "Ongoing support, repairs, and replacements for existing systems. We quickly diagnose issues, source compatible parts, and restore ceilings to optimal condition.",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-square-endless-spiral-pattern_181624-4529.jpg?_wi=2"},
          ]}
        />
      </div>

      {/* Services Metrics */}
      <div id="services-metrics" data-section="services-metrics">
        <MetricCardEleven
          title="Service Delivery Excellence"
          description="Our installation services are backed by years of experience, rigorous training, and customer-centric practices. See what we deliver."
          tag="Service Quality"
          tagIcon={TrendingUp}
          tagAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          metrics={[
            {
              id: "service-1",              value: "500+",              title: "Annual Installations",              description: "Consistent project delivery across diverse applications",              imageSrc: "http://img.b2bpic.net/free-photo/lower-angle-portrait-young-strong-man-with-muscles-tries-close-his-suitcase-full-clothes-pressing-bag-with-effort_1258-314717.jpg?_wi=2"},
            {
              id: "service-2",              value: "48hrs",              title: "Average Turnaround",              description: "Quick installation timelines for most residential projects",              imageSrc: "http://img.b2bpic.net/free-photo/engineering-concept-with-three-business-people_23-2147704232.jpg?_wi=2"},
          ]}
        />
      </div>

      {/* Services Contact CTA */}
      <div id="services-contact" data-section="services-contact">
        <ContactText
          text="Need professional installation? Schedule your free site assessment and get a detailed quote from our expert team."
          animationType="reveal-blur"
          buttons={[
            {
              text: "Schedule Assessment",              href: "/contact"},
            {
              text: "Get Quote",              href: "tel:+15551234567"},
          ]}
          background={{ variant: "animated-grid" }}
          useInvertedBackground={false}
        />
      </div>

      {/* Footer */}
      <div id="footer" data-section="footer">
        <FooterCard
          logoText="CeilingPro"
          copyrightText="© 2025 CeilingPro Systems. All rights reserved. Premium stretch ceiling solutions for residential and commercial projects."
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com/ceilingpro",              ariaLabel: "Follow us on Facebook"},
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/ceilingpro",              ariaLabel: "Connect on LinkedIn"},
            {
              icon: Instagram,
              href: "https://instagram.com/ceilingpro",              ariaLabel: "Follow us on Instagram"},
          ]}
        />
      </div>
    </ThemeProvider>
  );
}