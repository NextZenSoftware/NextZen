import Hero from "@/components/Hero";
import Layout from "@/components/Layouts/Layout";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <main>
       
        <Hero />
        <Services />

        
      </main>
    </Layout>
  );
}
