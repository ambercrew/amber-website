import { MantineProvider } from "@mantine/core";
import { theme, cssVariablesResolver } from "./theme";
import App from "./App";

export function Root() {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
      <App />
    </MantineProvider>
  );
}
