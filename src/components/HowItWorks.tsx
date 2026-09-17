import { Box, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import classes from "./HowItWorks.module.css";

const steps = [
  {
    n: "01",
    title: "Import",
    body: "Bring in PDFs, ePubs or web content straight from your device.",
  },
  {
    n: "02",
    title: "Extract",
    body: "Highlight the passage that matters. It becomes its own extract, linked to where it came from.",
  },
  {
    n: "03",
    title: "Make cards",
    body: "Turn extracts into cloze deletions with a single tap, or let AI create cards for you.",
  },
  {
    n: "04",
    title: "Let it compound",
    body: "The priority queue decides what you see next, so your knowledge grows naturally over time.",
  },
];

export function HowItWorks() {
  return (
    <Box component="section" id="how" className={classes.section}>
      <Box className={classes.inner}>
        <Title order={2} className={classes.heading}>
          How incremental learning works in Amber
        </Title>
        <Text c="dimmed" className={classes.subheading}>
          Start simple. Four steps, a few minutes a day, nothing to configure.
        </Text>

        <SimpleGrid
          cols={{ base: 1, xs: 2, md: 4 }}
          spacing={{ base: "xl", md: 40 }}
          verticalSpacing={40}
        >
          {steps.map((step) => (
            <Stack key={step.n} gap={12} className={classes.step}>
              <Text className={classes.number}>{step.n}</Text>
              <Text className={classes.title}>{step.title}</Text>
              <Text c="dimmed" className={classes.body}>
                {step.body}
              </Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
