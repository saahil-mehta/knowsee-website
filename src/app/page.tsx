import {
  Navigation,
  Hero,
  BrandLogos,
  ProblemSolution,
  DemoSection,
  HowItWorks,
  Pricing,
  About,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <BrandLogos />
        <ProblemSolution />
        <DemoSection />
        <HowItWorks />
        <Pricing />
        <About />
      </main>
      <Footer />
    </>
  );
}
