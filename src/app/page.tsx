import {
  Navigation,
  Hero,
  ProblemSolution,
  HowItWorks,
  Pricing,
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
      </main>
      <Footer />
    </>
  );
}
