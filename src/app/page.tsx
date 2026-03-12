"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroBillboardRotatedCarousel from "@/components/sections/hero/HeroBillboardRotatedCarousel";
import TestimonialAboutCard from "@/components/sections/about/TestimonialAboutCard";
import FeatureCardSeven from "@/components/sections/feature/FeatureCardSeven";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import MetricCardEleven from "@/components/sections/metrics/MetricCardEleven";
import TestimonialCardTen from "@/components/sections/testimonial/TestimonialCardTen";
import ContactText from "@/components/sections/contact/ContactText";
import FooterCard from "@/components/sections/footer/FooterCard";
import Link from "next/link";
import { Sparkles, Award, CheckCircle, Zap, Package, TrendingUp, Facebook, Linkedin, Instagram } from "lucide-react";

export default function HomePage() {
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
            text: "Contact Us",
            href: "/contact",
          }}
        />
      </div>

      {/* Hero Section */}
      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Transform Your Ceilings, Elevate Your Space"
          description="Premium stretch ceiling systems for homes and commercial projects. Expert installation, quality materials, and complete accessories—all in one place."
          tag="Professional Solutions"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Call Now",
              href: "tel:+1234567890",
            },
            {
              text: "Send Inquiry",
              href: "#contact",
            },
          ]}
          buttonAnimation="slide-up"
          carouselItems={[
            {
              id: "carousel-1",
              imageSrc: "http://img.b2bpic.net/free-photo/construction-worker-assembly-suspended-ceiling-with-drywall-fixing-drywall-ceiling-metal-frame-with-screwdriver_166373-1913.jpg?_wi=1",
            },
            {
              id: "carousel-2",
              imageSrc: "http://img.b2bpic.net/free-photo/workers-using-hvac-manifold-indicators_482257-92534.jpg?_wi=1",
            },
            {
              id: "carousel-3",
              imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-relaxing-indoors_23-2151030661.jpg?_wi=1",
            },
            {
              id: "carousel-4",
              imageSrc: "http://img.b2bpic.net/free-photo/people-office-workday_23-2147668795.jpg?_wi=1",
            },
            {
              id: "carousel-5",
              imageSrc: "http://img.b2bpic.net/free-photo/low-angle-view-building-ceiling_1359-344.jpg?_wi=1",
            },
            {
              id: "carousel-6",
              imageSrc: "http://img.b2bpic.net/free-vector/colored-abstract-shapes-background_1115-115.jpg?_wi=1",
            },
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
          background={{ variant: "plain" }}
        />
      </div>

      {/* About Section */}
      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="About CeilingPro"
          tagIcon={Award}
          tagAnimation="blur-reveal"
          title="Over 15 Years of Ceiling Excellence"
          description="Why Choose CeilingPro"
          subdescription="Industry Leaders in Stretch Ceiling Systems"
          icon={CheckCircle}
          imageSrc="http://img.b2bpic.net/free-photo/construction-worker-assembly-suspended-ceiling-with-drywall-fixing-drywall-ceiling-metal-frame-with-screwdriver_166373-1913.jpg?_wi=2"
          imageAlt="Professional installation showcase"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      {/* Features Section */}
      <div id="features" data-section="features">
        <FeatureCardSeven
          title="Our Core Services & Capabilities"
          description="We deliver comprehensive ceiling solutions tailored to homeowners, contractors, and retailers with proven expertise and quality assurance."
          tag="What We Offer"
          tagIcon={Zap}
          tagAnimation="opacity"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="blur-reveal"
          features={[
            {
              id: 1,
              title: "Professional Installation",
              description: "Expert teams deliver flawless stretch ceiling installations with precision alignment, seamless finishes, and minimal disruption to your space.",
              imageSrc: "http://img.b2bpic.net/free-photo/workers-using-hvac-manifold-indicators_482257-92534.jpg?_wi=2",
            },
            {
              id: 2,
              title: "Premium Materials",
              description: "We source high-quality stretch fabrics from trusted suppliers, offering durability, aesthetic appeal, and compliance with building standards.",
              imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-relaxing-indoors_23-2151030661.jpg?_wi=2",
            },
            {
              id: 3,
              title: "Complete Accessories",
              description: "Full range of mounting hardware, clips, profiles, and replacement parts. Compatible with all major ceiling systems for hassle-free integration.",
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-square-endless-spiral-pattern_181624-4529.jpg?_wi=1",
            },
          ]}
        />
      </div>

      {/* Products Section */}
      <div id="products" data-section="products">
        <ProductCardOne
          title="Materials & Accessories"
          description="Browse our complete catalog of stretch ceiling systems and professional-grade components. All products backed by quality guarantees."
          tag="Product Catalog"
          tagIcon={Package}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "prod-1",
              name: "Glossy Stretch Ceiling",
              price: "€25/m²",
              imageSrc: "http://img.b2bpic.net/free-photo/people-office-workday_23-2147668795.jpg?_wi=2",
            },
            {
              id: "prod-2",
              name: "Matte Stretch Ceiling",
              price: "€22/m²",
              imageSrc: "http://img.b2bpic.net/free-photo/low-angle-view-building-ceiling_1359-344.jpg?_wi=2",
            },
            {
              id: "prod-3",
              name: "Custom Printed Ceiling",
              price: "€35/m²",
              imageSrc: "http://img.b2bpic.net/free-vector/colored-abstract-shapes-background_1115-115.jpg?_wi=2",
            },
          ]}
        />
      </div>

      {/* Metrics Section */}
      <div id="metrics" data-section="metrics">
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
              id: "metric-1",
              value: "2,500+",
              title: "Installations Completed",
              description: "Professional projects across residential and commercial sectors",
              imageSrc: "http://img.b2bpic.net/free-photo/lower-angle-portrait-young-strong-man-with-muscles-tries-close-his-suitcase-full-clothes-pressing-bag-with-effort_1258-314717.jpg?_wi=1",
            },
            {
              id: "metric-2",
              value: "98%",
              title: "Client Satisfaction Rate",
              description: "Consistent excellence recognized by customers and industry partners",
              imageSrc: "http://img.b2bpic.net/free-photo/engineering-concept-with-three-business-people_23-2147704232.jpg?_wi=1",
            },
          ]}
        />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="Trusted by Multiple Customer Segments"
          description="See how homeowners, contractors, designers, and retailers benefit from our comprehensive stretch ceiling solutions."
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "test-1",
              title: "Perfect Solution for Home Renovation",
              quote: "CeilingPro transformed our living space completely. The installation was professional, clean, and the final result exceeded our expectations.",
              name: "Maria Popescu",
              role: "Homeowner - Bucharest",
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-characterizing-painter_23-2149529892.jpg?_wi=1",
            },
            {
              id: "test-2",
              title: "Reliable Partner for Commercial Projects",
              quote: "We've partnered with CeilingPro on multiple commercial installations. Their reliability, technical knowledge, and project management are outstanding.",
              name: "Ivan Petrov",
              role: "General Contractor - Moscow",
              imageSrc: "http://img.b2bpic.net/free-photo/middle-aged-business-man-hard-hat_1303-23575.jpg?_wi=1",
            },
            {
              id: "test-3",
              title: "Quality Materials for Design Projects",
              quote: "The material selection and color options available from CeilingPro provide excellent flexibility for our design clients. Highly recommended.",
              name: "Elena Ioannidou",
              role: "Interior Designer - Bratislava",
              imageSrc: "http://img.b2bpic.net/free-photo/young-fashion-designer-working-her-workshop-alone_23-2148877352.jpg?_wi=1",
            },
            {
              id: "test-4",
              title: "Excellent Bulk Supply and Support",
              quote: "As a retailer, we appreciate CeilingPro's competitive pricing, consistent quality, and dedicated account support. They're our go-to supplier.",
              name: "Dmitri Sokolov",
              role: "Retailer & Distributor - St. Petersburg",
              imageSrc: "http://img.b2bpic.net/free-photo/confident-european-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-128975.jpg?_wi=1",
            },
          ]}
        />
      </div>

      {/* Contact Section */}
      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to transform your ceilings? Contact our expert team today for a free consultation and personalized quote."
          animationType="reveal-blur"
          buttons={[
            {
              text: "Request Free Estimate",
              href: "/contact",
            },
            {
              text: "Call: +1 (555) 123-4567",
              href: "tel:+15551234567",
            },
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