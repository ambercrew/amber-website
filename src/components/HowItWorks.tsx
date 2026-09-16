import { Box, Paper, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import classes from "./HowItWorks.module.css";

const steps = [
  {
    n: "01",
    title: "Import",
    body: "Bring in PDFs, articles and web pages. They land in your tree, not in a queue you can't see.",
  },
  {
    n: "02",
    title: "Extract",
    body: "Select the passage that matters. The extract keeps a link back to where it came from.",
  },
  {
    n: "03",
    title: "Make cards",
    body: "Turn extracts into cloze or question cards in place, without leaving the text.",
  },
  {
    n: "04",
    title: "Let the queue decide",
    body: "Priority and scheduling pick what you see next, so you just open Amber and read.",
  },
];

export function HowItWorks() {
  return (
    <Box component="section" id="how" className={classes.section}>
      <Title order={2} ta="center" className={classes.heading}>
        How incremental learning works in Amber
      </Title>
      <Text c="dimmed" ta="center" className={classes.subheading}>
        Four steps, repeated daily. Nothing else to configure.
      </Text>

      <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }} spacing="lg" className={classes.grid}>
        {steps.map((step) => (
          <Paper key={step.n} p="lg" radius="md" className={classes.card}>
            <Stack gap={10}>
              <Text fw={600} fz="sm" c="amber">
                {step.n}
              </Text>
              <Text fw={600} fz="lg">
                {step.title}
              </Text>
              <Text fz="sm" c="dimmed" lh={1.55}>
                {step.body}
              </Text>
            </Stack>
          </Paper>
        ))}
      </SimpleGrid>
    </Box>
  );
}
