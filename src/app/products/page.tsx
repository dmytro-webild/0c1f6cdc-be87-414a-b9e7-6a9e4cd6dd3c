"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Facebook, Linkedin, Instagram, Package } from "lucide-react";

export default function ProductsPage() {
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

      <div id="products" data-section="products" className="mx-auto px-4 md:px-6">
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
              id: "prod-1",              name: "Glossy Stretch Ceiling",              price: "€25/m²",              imageSrc: "http://img.b2bpic.net/free-photo/people-office-workday_23-2147668795.jpg",              imageAlt: "glossy stretch ceiling professional finish"
            },
            {
              id: "prod-2",              name: "Matte Stretch Ceiling",              price: "€22/m²",              imageSrc: "http://img.b2bpic.net/free-photo/low-angle-view-building-ceiling_1359-344.jpg",              imageAlt: "matte stretch ceiling professional finish"
            },
            {
              id: "prod-3",              name: "Custom Printed Ceiling",              price: "€35/m²",              imageSrc: "http://img.b2bpic.net/free-vector/colored-abstract-shapes-background_1115-115.jpg",              imageAlt: "custom printed ceiling design artistic"
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