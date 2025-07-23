import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ConfigProvider } from 'antd';

// Custom render function that includes Ant Design's ConfigProvider
const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#7f56d9',
        },
      }}
    >
      {children}
    </ConfigProvider>
  );

  return render(ui, { wrapper: Wrapper, ...options });
};

// Re-export everything from testing-library
export * from '@testing-library/react';

// Override render method
export { customRender as render };