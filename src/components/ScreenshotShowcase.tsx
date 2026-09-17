import { Box, Image, Text } from "@mantine/core";
import mainView from "../assets/screenshots/main-view.webp";
import classes from "./ScreenshotShowcase.module.css";

export function ScreenshotShowcase() {
  return (
    <Box className={classes.wrap}>
      <Box className={classes.frame}>
        <Image
          src={mainView}
          alt="Amber's main view: the element tree on the left, a document with highlighted extracts in the middle, and scheduling details on the right"
          width={1584}
          height={985}
          h="auto"
          fetchPriority="high"
        />
      </Box>
      <Text size="sm" c="dimmed" ta="center" className={classes.caption}>
        The main view: your tree of elements on the left, the material in the
        middle, scheduling and details on the right.
      </Text>
    </Box>
  );
}
