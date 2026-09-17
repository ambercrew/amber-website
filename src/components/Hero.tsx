import { Badge, Button, Group, Stack, Text, Title } from "@mantine/core";
import { DownloadSimple } from "@phosphor-icons/react";
import { DOWNLOAD_HREF, DISCORD_HREF } from "../constants";
import { DiscordIcon } from "./icons/DiscordIcon";
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
        Distraction-free, minimalist yet{" "}
        <span className={classes.accent}>powerful</span> incremental learning
      </Title>

      <Text c="dimmed" className={classes.subtitle}>
        The easiest way to start incremental reading and master your
        knowledge.
      </Text>

      <Group gap="md" mt={6} justify="center">
        <Button
          component="a"
          href={DOWNLOAD_HREF}
          size="md"
          radius="md"
          leftSection={<DownloadSimple size={18} weight="bold" />}
        >
          Download Amber
        </Button>
        <Button
          component="a"
          href={DISCORD_HREF}
          variant="default"
          size="md"
          radius="md"
          leftSection={<DiscordIcon size={17} />}
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
        <span>iOS</span>
        <span>·</span>
        <span>Android</span>
      </Group>
    </Stack>
  );
}
