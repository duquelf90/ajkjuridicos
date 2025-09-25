import Layout from "@/components/layouts";
import Contact from "@/sections/contact";
import Features from "@/sections/features";
import Hero from "@/sections/hero";
import Services from "@/sections/services";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Features />
      <Contact />
    </Layout>

  );
}
