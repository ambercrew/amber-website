import { Badge, Box, Paper, Stack, Text, Title, ThemeIcon } from "@mantine/core";
import {
  LockOpen,
  FileArrowDown,
  Devices,
  CloudArrowUp,
  type Icon,
} from "@phosphor-icons/react";
import treeDetail from "../assets/screenshots/tree-detail.webp";
import classes from "./Features.module.css";

type Feature = { icon: Icon; color: string; title: string; body: string };

const core = {
  title: "Incremental reading, without the learning curve",
  body: "Reading, extracts and flashcards live in one prioritized queue, so you always work on what matters most. Keep your existing study habits and move into true incremental reading at your own pace.",
};

const features: Feature[] = [
  {
    icon: LockOpen,
    color: "orange",
    title: "100% free & open source",
    body: "Free in cost and in freedom (MIT licensed). You own your data and can export it anytime.",
  },
  {
    icon: FileArrowDown,
    color: "amber",
    title: "Effortless importing",
    body: "Import PDFs, ePubs, web content and more straight from your device in seconds.",
  },
  {
    icon: Devices,
    color: "orange",
    title: "Multiplatform ready",
    body: "Runs on your phone, tablet or computer: Linux, Windows, macOS, iOS and Android.",
  },
  {
    icon: CloudArrowUp,
    color: "amber",
    title: "Cloud sync",
    body: "Back up your library and sync progress, extracts and cards across devices.",
  },
];

export function Features() {
  return (
    <Box component="section" id="features" className={classes.section}>
      <Box className={classes.inner}>
        <Stack align="flex-start" gap="md">
          <Badge variant="light" color="amber" size="lg" radius="xl" fw={600}>
            Features
          </Badge>
          <Title order={2} className={classes.heading}>
            Everything you need. Nothing in your way.
          </Title>
          <Text c="dimmed" className={classes.subheading}>
            Whether you're importing massive PDFs, creating flashcards, or just
            building better study habits, Amber adapts to you.
          </Text>
        </Stack>

        <div className={classes.grid}>
          <Paper p="xl" radius="md" className={`${classes.card} ${classes.core}`}>
            <Stack gap="md">
              <Text fw={650} className={classes.coreTitle}>
                {core.title}
              </Text>
              <Text c="dimmed" lh={1.6}>
                {core.body}
              </Text>
            </Stack>
            <div className={classes.coreShot}>
              <img
                src={treeDetail}
                alt="Amber's element tree: a source with its extracts and a flashcard nested underneath"
                width={316}
                height={196}
                loading="lazy"
              />
            </div>
          </Paper>

          {features.map((feature) => (
            <Paper key={feature.title} p="lg" radius="md" className={classes.card}>
              <Stack gap={12}>
                <ThemeIcon size={38} radius="md" variant="light" color={feature.color}>
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
        </div>
      </Box>
    </Box>
  );
}
