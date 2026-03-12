"use client";

import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ContactText from '@/components/sections/contact/ContactText';
import FooterCard from '@/components/sections/footer/FooterCard';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
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

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to transform your ceilings? Contact our expert team today for a free consultation and personalized quote."
          animationType="reveal-blur"
          buttons={[
            {
              text: "Request Free Estimate",              href: "/contact"},
            {
              text: "Call: +1 (555) 123-4567",              href: "tel:+15551234567"},
          ]}
          background={{
            variant: "animated-grid"}}
          useInvertedBackground={false}
        />
      </div>

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