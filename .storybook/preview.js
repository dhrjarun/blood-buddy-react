import theme from "@blood-buddy/theme";
import { MainProvider } from "@blood-buddy/system";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withThemeProvider = (Story, context) => {
  return (
    <MainProvider theme={theme}>
      <Story {...context} />
    </MainProvider>
  );
};

export const decorators = [withThemeProvider];
