import { Badge, Box, Button, Group, Stack, Text, Title } from "@mantine/core";
import { DownloadSimple, Quotes } from "@phosphor-icons/react";
import { DOWNLOAD_HREF, DISCORD_HREF } from "../constants";
import { DiscordIcon } from "./icons/DiscordIcon";
import classes from "./Philosophy.module.css";

export function Philosophy() {
  return (
    <Box component="section" id="philosophy" className={classes.section}>
      <Stack align="center" gap="lg" ta="center" className={classes.inner}>
        <Badge variant="light" color="amber" size="lg" radius="xl" fw={600}>
          The philosophy
        </Badge>

        <Title order={2} className={classes.heading}>
          Built by someone who uses the method every day.
        </Title>

        <Box className={classes.quote}>
          <Quotes size={32} weight="fill" className={classes.quoteIcon} />
          <Text className={classes.quoteText}>
            The biggest barrier to knowledge retention isn't the method, it's
            software friction. Amber lets you start simple, learn efficiently,
            and let your knowledge compound over time naturally.
          </Text>
        </Box>

        <Stack gap="sm" align="center" mt="lg">
          <Title order={3} className={classes.cta}>
            Start your incremental learning journey today.
          </Title>
          <Group gap="md" justify="center" mt="xs">
            <Button
              component="a"
              href={DOWNLOAD_HREF}
              size="lg"
              radius="md"
              leftSection={<DownloadSimple size={20} weight="bold" />}
            >
              Download Amber
            </Button>
            <Button
              component="a"
              href={DISCORD_HREF}
              variant="default"
              size="lg"
              radius="md"
              leftSection={<DiscordIcon size={19} />}
            >
              Join the Discord
            </Button>
          </Group>
          <Text c="dimmed" fz="sm" mt="xs">
            See you incrementally.
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
}
