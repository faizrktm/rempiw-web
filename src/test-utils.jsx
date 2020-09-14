/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import MyThemeProvider from 'components/foundations/Theme/MyThemeProvider';

const AllTheProviders = ({ children }) => (
  <MyThemeProvider>
    {children}
  </MyThemeProvider>
);

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
