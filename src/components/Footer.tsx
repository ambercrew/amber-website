import { Anchor, Group, Text } from "@mantine/core";
import { DownloadSimple } from "@phosphor-icons/react";
import { GithubIcon } from "./icons/GithubIcon";
import { DOWNLOAD_HREF, DISCORD_HREF, GITHUB_HREF } from "../constants";
import { DiscordIcon } from "./icons/DiscordIcon";
import icon from "../assets/icon.svg";
import classes from "./Footer.module.css";

const links = [
  { href: DOWNLOAD_HREF, label: "Download", icon: <DownloadSimple size={16} weight="bold" /> },
  { href: DISCORD_HREF, label: "Discord", icon: <DiscordIcon size={16} /> },
  { href: GITHUB_HREF, label: "GitHub", icon: <GithubIcon size={16} /> },
];

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Group gap={10}>
        <img src={icon} alt="" width={22} height={22} />
        <Text fz="sm" c="dimmed">
          Amber - MIT licensed
        </Text>
      </Group>

      <Group component="nav" gap="lg" aria-label="Footer">
        {links.map((link) => (
          <Anchor key={link.label} href={link.href} underline="never" className={classes.link}>
            <Group gap={6} wrap="nowrap">
              {link.icon}
              {link.label}
            </Group>
          </Anchor>
        ))}
      </Group>
    </footer>
  );
}
