import { Box, SimpleGrid, Stack, Text, ThemeIcon, Title, Group } from "@mantine/core";
import { Scissors, BracketsSquare, Sparkle, TreeStructure } from "@phosphor-icons/react";
import extractDetail from "../assets/screenshots/extract-detail.webp";
import classes from "./ExtractSpotlight.module.css";

const points = [
  {
    icon: Scissors,
    title: "Instant extracts",
    body: "Highlight text and it becomes its own piece of your library.",
  },
  {
    icon: BracketsSquare,
    title: "Nested cloze deletions",
    body: "Build fill-in-the-blank flashcards with a single tap.",
  },
  {
    icon: Sparkle,
    title: "Ask AI, get cards",
    body: "Ask AI about a passage, or let it write the flashcards for you.",
  },
  {
    icon: TreeStructure,
    title: "Always linked to the source",
    body: "Every extract and card remembers where it came from.",
  },
];

export function ExtractSpotlight() {
  return (
    <Box component="section" className={classes.section}>
      <SimpleGrid
        cols={{ base: 1, md: 2 }}
        spacing={48}
        verticalSpacing="xl"
        className={classes.inner}
      >
        <Stack gap="lg" justify="center">
          <Title order={2} className={classes.heading}>
            Highlight what matters. Amber remembers the rest.
          </Title>
          <Text c="dimmed" fz="lg" lh={1.6}>
            Read in a clean, focused view. When something is worth keeping,
            pull it out and turn it into a card, right where you're reading.
          </Text>
          <Stack gap="md" mt="xs">
            {points.map((point) => (
              <Group key={point.title} gap="md" wrap="nowrap" align="flex-start">
                <ThemeIcon size={36} radius="md" variant="light" color="amber">
                  <point.icon size={18} weight="bold" />
                </ThemeIcon>
                <div>
                  <Text fw={600}>{point.title}</Text>
                  <Text fz="sm" c="dimmed">
                    {point.body}
                  </Text>
                </div>
              </Group>
            ))}
          </Stack>
        </Stack>

        <Box className={classes.frame}>
          <img
            src={extractDetail}
            alt="Reading a document in Amber with a highlighted extract"
            width={745}
            height={670}
            loading="lazy"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
