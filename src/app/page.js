"use client"
import ChooseUs from "@/components/ChooseUs";
import Hero from "@/components/Hero";
import Layout from "@/components/Layouts/Layout";
import LetsWorks from "@/components/LetsWorks";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testorimonial from "@/components/Testorimonial";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  return (
    <Layout>
      <main>
        <Hero />
        <Services />
        <Projects />
        <Testorimonial />
        <ChooseUs />
        <LetsWorks />
      </main>
      <ScrollToTop
        smooth
        className="pl-1   hover:bg-purple-600  transition-all duration-200"
      />
    </Layout>
  );
}
