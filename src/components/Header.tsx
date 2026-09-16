import { Anchor, Box, Burger, Button, Divider, Drawer, Group, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { DiscordIcon } from "./icons/DiscordIcon";
import { DISCORD_HREF, DOWNLOAD_HREF, GITHUB_HREF } from "../constants";
import classes from "./Header.module.css";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: GITHUB_HREF, label: "GitHub" },
];

export function Header() {
  const [opened, { close, toggle }] = useDisclosure(false);

  return (
    <Box component="header" className={classes.header}>
      <Group gap={10}>
        <img src="/icon.svg" alt="" width={26} height={26} />
        <span className={classes.logo}>Amber</span>
      </Group>

      <Group gap="lg" visibleFrom="sm" className={classes.nav}>
        {links.map((link) => (
          <Anchor key={link.label} href={link.href} c="dimmed" underline="never" fw={400}>
            {link.label}
          </Anchor>
        ))}
        <Button
          component="a"
          href={DISCORD_HREF}
          variant="default"
          radius="md"
          leftSection={<DiscordIcon size={16} />}
        >
          Discord
        </Button>
        <Button component="a" href={DOWNLOAD_HREF} radius="md">
          Download
        </Button>
      </Group>

      <Burger opened={opened} onClick={toggle} hiddenFrom="sm" aria-label="Toggle navigation" />

      <Drawer
        opened={opened}
        onClose={close}
        hiddenFrom="sm"
        position="right"
        size="xs"
        padding="lg"
        title={
          <Group gap={10}>
            <img src="/icon.svg" alt="" width={22} height={22} />
            <span className={classes.logo}>Amber</span>
          </Group>
        }
      >
        <Stack gap="lg">
          <Stack gap="md">
            {links.map((link) => (
              <Anchor
                key={link.label}
                href={link.href}
                onClick={close}
                c="var(--mantine-color-text)"
                underline="never"
                fw={500}
                fz="lg"
              >
                {link.label}
              </Anchor>
            ))}
          </Stack>

          <Divider />

          <Stack gap="sm">
            <Button
              component="a"
              href={DISCORD_HREF}
              onClick={close}
              variant="default"
              radius="md"
              leftSection={<DiscordIcon size={16} />}
            >
              Discord
            </Button>
            <Button component="a" href={DOWNLOAD_HREF} onClick={close} radius="md">
              Download
            </Button>
          </Stack>
        </Stack>
      </Drawer>
    </Box>
  );
}
