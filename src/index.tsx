import PrivateRoutes from '@routes';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { StrictMode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <RecoilRoot>
      <ChakraProvider>
        <Router>
          <PrivateRoutes />
        </Router>
      </ChakraProvider>
    </RecoilRoot>
  </StrictMode>,
);
