import { Badge, Box, List, Paper, SimpleGrid, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { Check, X } from "@phosphor-icons/react";
import classes from "./WhyAmber.module.css";

const usual = [
  "Overwhelming stats and dashboards",
  "Cluttered windows and bloated menus",
  "Hours spent learning the software itself",
  "One rigid way to study",
  "Simpler apps that give up real power",
];

const amber = [
  "A calm interface built around your reading",
  "Only what you need, when you need it",
  "Open it and start learning in minutes",
  "Keeps your study habits and grows with you",
  "Full incremental reading power, no compromises",
];

export function WhyAmber() {
  return (
    <Box component="section" id="why" className={classes.section}>
      <Stack align="center" gap="md" ta="center">
        <Badge variant="light" color="amber" size="lg" radius="xl" fw={600}>
          Why Amber
        </Badge>
        <Title order={2} className={classes.heading}>
          You shouldn't have to study the study app.
        </Title>
        <Text c="dimmed" className={classes.subheading}>
          Incremental reading is one of the most effective ways to learn, but
          traditional tools bury it under friction. Amber is built for
          beginners and experienced incremental learners alike, with a clean,
          simple design that never trades away the power you need.
        </Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg" className={classes.grid}>
        <Paper p="xl" radius="md" className={classes.usual}>
          <Text fw={600} fz="sm" tt="uppercase" c="dimmed" mb="md" className={classes.label}>
            Traditional software
          </Text>
          <List
            spacing="md"
            icon={
              <ThemeIcon size={24} radius="xl" color="gray" variant="light">
                <X size={13} weight="bold" />
              </ThemeIcon>
            }
          >
            {usual.map((item) => (
              <List.Item key={item}>
                <Text c="dimmed">{item}</Text>
              </List.Item>
            ))}
          </List>
        </Paper>

        <Paper p="xl" radius="md" className={classes.amber}>
          <Text fw={600} fz="sm" tt="uppercase" c="amber.8" mb="md" className={classes.label}>
            Amber
          </Text>
          <List
            spacing="md"
            icon={
              <ThemeIcon size={24} radius="xl" color="amber">
                <Check size={13} weight="bold" />
              </ThemeIcon>
            }
          >
            {amber.map((item) => (
              <List.Item key={item}>
                <Text fw={500}>{item}</Text>
              </List.Item>
            ))}
          </List>
        </Paper>
      </SimpleGrid>
    </Box>
  );
}
