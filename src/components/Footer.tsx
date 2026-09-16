import { Anchor, Group, Text } from "@mantine/core";
import { DISCORD_HREF, DOWNLOAD_HREF, GITHUB_HREF } from "../constants";
import classes from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Group gap={10}>
        <img src="/icon.svg" alt="" width={22} height={22} />
        <Text fz="sm" c="dimmed">
          Amber — incremental learning, free and open source.
        </Text>
      </Group>

      <Group gap={18} fz="sm" wrap="wrap">
        <Anchor href={DISCORD_HREF} c="var(--mantine-color-gray-8)" underline="never" fw={500}>
          Discord
        </Anchor>
        <Anchor href={GITHUB_HREF} c="var(--mantine-color-gray-8)" underline="never" fw={500}>
          GitHub
        </Anchor>
        <Anchor href={DOWNLOAD_HREF} c="amber" underline="never" fw={600}>
          Download
        </Anchor>
      </Group>
    </footer>
  );
}
