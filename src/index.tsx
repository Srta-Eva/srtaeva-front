import PrivateRoutes from '@routes';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { StrictMode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import NavBarLayout from './layouts/NavBarLayout';
import '@styles/index.scss';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <RecoilRoot>
      <ChakraProvider resetCSS>
        <Router>
          <NavBarLayout>
            <PrivateRoutes />
          </NavBarLayout>
        </Router>
      </ChakraProvider>
    </RecoilRoot>
  </StrictMode>,
);
