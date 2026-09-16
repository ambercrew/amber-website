import { Box, Button, Image, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import screenshot3 from "../assets/screenshots/screenshot-3.png";
import { DOWNLOAD_HREF } from "../constants";
import classes from "./StudyMode.module.css";

export function StudyMode() {
  return (
    <SimpleGrid
      component="section"
      cols={{ base: 1, sm: 2 }}
      spacing="xl"
      className={classes.section}
      verticalSpacing="xl"
    >
      <Box className={classes.frame}>
        <Image src={screenshot3} alt="Amber study mode" />
      </Box>
      <Stack gap="lg" justify="center">
        <Title order={2} className={classes.heading}>
          Study mode is one card and four buttons.
        </Title>
        <Text c="dimmed" fz="lg" lh={1.6}>
          Again, Hard, Good, Easy. Your grades feed the scheduler; the
          scheduler feeds the queue. There is no dashboard to tend and no
          streak to protect.
        </Text>
        <Button
          component="a"
          href={DOWNLOAD_HREF}
          radius="md"
          size="md"
          style={{ alignSelf: "flex-start" }}
        >
          Download Amber
        </Button>
      </Stack>
    </SimpleGrid>
  );
}
