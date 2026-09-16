import { Box } from "@mantine/core";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ScreenshotShowcase } from "./components/ScreenshotShowcase";
import { HowItWorks } from "./components/HowItWorks";
import { Features } from "./components/Features";
import { StudyMode } from "./components/StudyMode";
import { DownloadSection } from "./components/DownloadSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <Box bg="var(--mantine-color-body)">
      <Header />
      <Hero />
      <ScreenshotShowcase />
      <HowItWorks />
      <Features />
      <StudyMode />
      <DownloadSection />
      <Footer />
    </Box>
  );
}
