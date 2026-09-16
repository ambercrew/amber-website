import { Box, Image, Text } from "@mantine/core";
import screenshot1 from "../assets/screenshots/screenshot-1.png";
import classes from "./ScreenshotShowcase.module.css";

export function ScreenshotShowcase() {
  return (
    <Box className={classes.wrap}>
      <Box className={classes.frame}>
        <Image src={screenshot1} alt="Amber main view" />
      </Box>
      <Text size="sm" c="dimmed" ta="center" className={classes.caption}>
        The main view: your tree of elements on the left, the material in the
        middle, scheduling on the right.
      </Text>
    </Box>
  );
}
