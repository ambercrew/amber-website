import { Box } from "@mantine/core";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ScreenshotShowcase } from "./components/ScreenshotShowcase";
import { WhyAmber } from "./components/WhyAmber";
import { HowItWorks } from "./components/HowItWorks";
import { ExtractSpotlight } from "./components/ExtractSpotlight";
import { Features } from "./components/Features";
import { StudyMode } from "./components/StudyMode";
import { Philosophy } from "./components/Philosophy";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <Box bg="var(--mantine-color-body)">
      <Header />
      <main>
        <Hero />
        <ScreenshotShowcase />
        <WhyAmber />
        <HowItWorks />
        <ExtractSpotlight />
        <Features />
        <StudyMode />
        <Philosophy />
      </main>
      <Footer />
    </Box>
  );
}
