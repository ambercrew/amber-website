import { Box, Button, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { DOWNLOAD_HREF, DISCORD_HREF } from "../constants";
import classes from "./DownloadSection.module.css";

const platforms = [
  { name: "Linux", detail: "AppImage · deb" },
  { name: "Windows", detail: "installer" },
  { name: "macOS", detail: "dmg" },
  { name: "Android", detail: "apk" },
];

export function DownloadSection() {
  return (
    <Box component="section" id="download" className={classes.section}>
      <Stack align="center" gap="lg" ta="center">
        <Title order={2} className={classes.heading}>
          Download Amber
        </Title>
        <Text className={classes.subheading}>
          Free, open source, and available on every platform you study on.
        </Text>

        <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="sm" className={classes.grid}>
          {platforms.map((platform) => (
            <Button
              key={platform.name}
              component="a"
              href={DOWNLOAD_HREF}
              variant="white"
              color="amber"
              radius="md"
              size="md"
              className={classes.platformButton}
            >
              <Stack gap={2} align="center">
                <Text fw={600} fz="sm" c="var(--mantine-color-orange-8)">
                  {platform.name}
                </Text>
                <Text fw={400} fz="xs" c="dimmed">
                  {platform.detail}
                </Text>
              </Stack>
            </Button>
          ))}
        </SimpleGrid>

        <Button
          component="a"
          href={DISCORD_HREF}
          variant="outline"
          color="white"
          radius="xl"
          mt={8}
        >
          Questions? Join the Discord
        </Button>
      </Stack>
    </Box>
  );
}
