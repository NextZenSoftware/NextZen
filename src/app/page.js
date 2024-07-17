import ChooseUs from "@/components/ChooseUs";
import Hero from "@/components/Hero";
import Layout from "@/components/Layouts/Layout";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testorimonial from "@/components/Testorimonial";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <main>
       
        <Hero />
        <Services />
        <Projects />
        <Testorimonial />
        <ChooseUs/>
        
      </main>
    </Layout>
  );
}
