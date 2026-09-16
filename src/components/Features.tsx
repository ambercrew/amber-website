import { Badge, Box, Paper, SimpleGrid, Stack, Text, Title, ThemeIcon } from "@mantine/core";
import {
  AppWindow,
  Clock,
  Highlighter,
  Cards,
  FileArrowDown,
  ListNumbers,
  MagnifyingGlass,
  Globe,
  type Icon,
} from "@phosphor-icons/react";
import classes from "./Features.module.css";

const features: { icon: Icon; color: string; title: string; body: string }[] = [
  {
    icon: AppWindow,
    color: "amber",
    title: "Distraction-free interface",
    body: "Your material front and centre, everything else out of the way.",
  },
  {
    icon: Clock,
    color: "orange",
    title: "Incremental reading",
    body: "Work through long material in passes instead of one sitting.",
  },
  {
    icon: Highlighter,
    color: "amber",
    title: "Extracts, not notes",
    body: "Highlight a passage and it becomes its own element, linked to its origin.",
  },
  {
    icon: Cards,
    color: "orange",
    title: "Cards made in place",
    body: "Cloze or question cards from extracts, without leaving the text.",
  },
  {
    icon: FileArrowDown,
    color: "orange",
    title: "Import your material",
    body: "PDFs, articles and web pages, worked through at your own pace.",
  },
  {
    icon: ListNumbers,
    color: "amber",
    title: "Priority queue",
    body: "Priority and scheduling pick what you see next, so you just open and read.",
  },
  {
    icon: MagnifyingGlass,
    color: "orange",
    title: "Command palette",
    body: "Every action a keystroke away, so your hands never leave the keyboard.",
  },
  {
    icon: Globe,
    color: "amber",
    title: "Free and open source",
    body: "Runs on Linux, Windows, macOS and Android, with your data staying yours.",
  },
];

export function Features() {
  return (
    <Box component="section" id="features" className={classes.section}>
      <Stack align="center" gap="md" ta="center">
        <Badge variant="light" color="amber" size="lg" radius="xl" fw={600}>
          Our features
        </Badge>
        <Title order={2} className={classes.heading}>
          Read once. Let Amber handle the remembering.
        </Title>
        <Text c="dimmed" className={classes.subheading}>
          Import your own material, extract what matters, and let the
          priority queue decide what you see next — in an interface that
          stays out of the way.
        </Text>
      </Stack>

      <SimpleGrid
        cols={{ base: 1, xs: 2, md: 4 }}
        spacing="lg"
        className={classes.grid}
      >
        {features.map((feature) => (
          <Paper key={feature.title} p="lg" radius="md" className={classes.card}>
            <Stack gap={12}>
              <ThemeIcon
                size={38}
                radius="md"
                variant="light"
                color={feature.color}
              >
                <feature.icon size={19} weight="bold" />
              </ThemeIcon>
              <Text fw={600} fz="md">
                {feature.title}
              </Text>
              <Text fz="sm" c="dimmed" lh={1.6}>
                {feature.body}
              </Text>
            </Stack>
          </Paper>
        ))}
      </SimpleGrid>
    </Box>
  );
}
