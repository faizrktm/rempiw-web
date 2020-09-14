import MyThemeProvider from '../src/components/foundations/Theme/MyThemeProvider';
import GlobalStyles from '../src/components/foundations/Theme/GlobalStyles';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const withThemeProvider=(Story,context)=>{
  return (
    <MyThemeProvider>
      <GlobalStyles />
      <Story {...context} />
    </MyThemeProvider>
  )
}
export const decorators = [withThemeProvider];
