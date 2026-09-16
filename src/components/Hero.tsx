import { Badge, Button, Group, Stack, Text, Title } from "@mantine/core";
import { DOWNLOAD_HREF, DISCORD_HREF } from "../constants";
import classes from "./Hero.module.css";

export function Hero() {
  return (
    <Stack align="center" gap="lg" className={classes.hero} ta="center">
      <Badge
        variant="light"
        color="amber"
        size="lg"
        radius="xl"
        tt="uppercase"
        fw={500}
      >
        Free and open source
      </Badge>

      <Title order={1} className={classes.title}>
        Read once. Remember for good.
      </Title>

      <Text c="dimmed" className={classes.subtitle}>
        Amber is distraction-free, minimalist yet powerful incremental
        learning. Import your material, extract what matters, turn extracts
        into cards, and let the priority queue decide what you see next.
      </Text>

      <Group gap="md" mt={6} justify="center">
        <Button component="a" href={DOWNLOAD_HREF} size="md" radius="md">
          Download Amber
        </Button>
        <Button
          component="a"
          href={DISCORD_HREF}
          variant="default"
          size="md"
          radius="md"
        >
          Join the Discord
        </Button>
      </Group>

      <Group gap={14} c="dimmed" fz="sm" justify="center">
        <span>Linux</span>
        <span>·</span>
        <span>Windows</span>
        <span>·</span>
        <span>macOS</span>
        <span>·</span>
        <span>Android</span>
      </Group>
    </Stack>
  );
}
