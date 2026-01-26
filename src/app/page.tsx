import {
  Navigation,
  Hero,
  ProblemSolution,
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
        <ProblemSolution />
        <HowItWorks />
        <Pricing />
        <About />
      </main>
      <Footer />
    </>
  );
}
