import { ThemeProvider } from 'styled-components';
import theme from '../src/config/theme';
import '../src/normalize.css';
import '../src/styles.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const withThemeProvider=(Story,context)=>{
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider];
