import { useEffect, useState } from "react";
import { ActionIcon, Anchor, Box, Burger, Button, Divider, Drawer, Group, Stack } from "@mantine/core";
import { useDisclosure, useHeadroom } from "@mantine/hooks";
import { DownloadSimple } from "@phosphor-icons/react";
import { GithubIcon } from "./icons/GithubIcon";
import { DiscordIcon } from "./icons/DiscordIcon";
import { DISCORD_HREF, DOWNLOAD_HREF, GITHUB_HREF } from "../constants";
import icon from "../assets/icon.svg";
import classes from "./Header.module.css";

const sections = [
  { id: "why", label: "Why Amber" },
  { id: "how", label: "How it works" },
  { id: "features", label: "Features" },
  { id: "philosophy", label: "Philosophy" },
];

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      // A section is active once its top passes a line just below the header.
      const line = 120;
      let current: string | null = null;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
      setActive(atBottom ? sections[sections.length - 1].id : current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return active;
}

export function Header() {
  const [opened, { close, toggle }] = useDisclosure(false);
  const active = useActiveSection();
  // Hide on scroll down, reveal on scroll up; always shown near the top.
  const { pinned } = useHeadroom({ fixedAt: 120 });

  return (
    <Box
      component="header"
      className={classes.header}
      data-hidden={(!pinned && !opened) || undefined}
    >
      <Anchor href="#" underline="never" c="inherit">
        <Group gap={10}>
          <img src={icon} alt="" width={26} height={26} />
          <span className={classes.logo}>Amber</span>
        </Group>
      </Anchor>

      <Group gap="lg" visibleFrom="md" className={classes.nav}>
        {sections.map((section) => (
          <Anchor
            key={section.id}
            href={`#${section.id}`}
            underline="never"
            className={classes.link}
            data-active={active === section.id || undefined}
          >
            {section.label}
          </Anchor>
        ))}
        <Group gap={4}>
          <ActionIcon
            component="a"
            href={GITHUB_HREF}
            variant="subtle"
            color="gray"
            size="lg"
            radius="md"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href={DISCORD_HREF}
            variant="subtle"
            color="gray"
            size="lg"
            radius="md"
            aria-label="Discord"
          >
            <DiscordIcon size={18} />
          </ActionIcon>
        </Group>
        <Button
          component="a"
          href={DOWNLOAD_HREF}
          radius="md"
          leftSection={<DownloadSimple size={16} weight="bold" />}
        >
          Download
        </Button>
      </Group>

      <Burger opened={opened} onClick={toggle} hiddenFrom="md" aria-label="Toggle navigation" />

      <Drawer
        opened={opened}
        onClose={close}
        hiddenFrom="md"
        position="right"
        size="xs"
        padding="lg"
        title={
          <Group gap={10}>
            <img src={icon} alt="" width={22} height={22} />
            <span className={classes.logo}>Amber</span>
          </Group>
        }
      >
        <Stack gap="lg">
          <Stack gap="md">
            {sections.map((section) => (
              <Anchor
                key={section.id}
                href={`#${section.id}`}
                onClick={close}
                underline="never"
                fw={500}
                fz="lg"
                className={classes.drawerLink}
                data-active={active === section.id || undefined}
              >
                {section.label}
              </Anchor>
            ))}
          </Stack>

          <Divider />

          <Stack gap="sm">
            <Button
              component="a"
              href={GITHUB_HREF}
              onClick={close}
              variant="default"
              radius="md"
              leftSection={<GithubIcon size={16} />}
            >
              GitHub
            </Button>
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
            <Button
              component="a"
              href={DOWNLOAD_HREF}
              onClick={close}
              radius="md"
              leftSection={<DownloadSimple size={16} weight="bold" />}
            >
              Download
            </Button>
          </Stack>
        </Stack>
      </Drawer>
    </Box>
  );
}
