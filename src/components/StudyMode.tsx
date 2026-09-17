import { Badge, Box, Group, Image, SimpleGrid, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { Brain, HandTap, TrendUp } from "@phosphor-icons/react";
import studyDetail from "../assets/screenshots/study-detail.webp";
import classes from "./StudyMode.module.css";

const points = [
  {
    icon: TrendUp,
    title: "Modern scheduling",
    body: "A smarter successor to the decades-old SM-2 algorithm.",
  },
  {
    icon: Brain,
    title: "Built around your memory",
    body: "Intervals adapt to how well you actually remember each card.",
  },
  {
    icon: HandTap,
    title: "Four simple grades",
    body: "Again, Hard, Good, Easy. That's all you ever press.",
  },
];

export function StudyMode() {
  return (
    <Box component="section" className={classes.section}>
      <Box className={classes.inner}>
        <div className={classes.pair}>
          <Box className={classes.frame}>
            <Image
              src={studyDetail}
              alt="A cloze card in Amber study mode with the Again, Hard, Good and Easy grades"
              width={780}
              height={305}
              h="auto"
              loading="lazy"
            />
          </Box>
          <Stack gap="lg" justify="center" align="flex-start">
            <Badge variant="light" color="amber" size="lg" radius="xl" fw={600}>
              Powered by FSRS
            </Badge>
            <Title order={2} className={classes.heading}>
              Review less. Remember more.
            </Title>
            <Text c="dimmed" fz="lg" lh={1.6}>
              Amber schedules your cards with FSRS, the modern open-source spaced
              repetition algorithm. Each card comes back right before you'd forget
              it, so you spend fewer reviews for the same retention.
            </Text>
          </Stack>
        </div>

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl" className={classes.points}>
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
        </SimpleGrid>
      </Box>
    </Box>
  );
}
