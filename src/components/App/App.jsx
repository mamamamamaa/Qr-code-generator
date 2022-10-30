import QRCode from 'react-qr-code';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import {
  AppContainer,
  Arrow,
  Box,
  Code,
  CodeDescription,
  Container,
  Form,
  Input,
  StyledBtn,
} from './Apps.styled';
import { Header } from '../Header/Header';
import downloadImage from '../../utils/DownloadImage';

const toastFallOptions = {
  duration: 4000,
  position: 'top-center',

  // Styling
  style: {},
  className: '',

  // Custom Icon
  icon: '❌',

  // Change colors of success/error/loading icon
  iconTheme: {
    primary: '#000',
    secondary: '#fff',
  },

  // Aria
  ariaProps: {
    role: 'status',
    'aria-live': 'polite',
  },
};
const toastSuccessOptions = {
  ...toastFallOptions,
  icon: '✅',
};

export const App = () => {
  const [query, setQuery] = useState('https://t.me/mamamaama');
  const regexp = new RegExp('^http(s)?://([\\w-]+.)+[\\w-]+(/[\\w- ./?%&=])?$');

  const onSubmit = e => {
    e.preventDefault();
    const data = e.target.elements.query.value;
    if (!regexp.test(data)) {
      toast.error("It's not a URL string!!!", toastFallOptions);
      return;
    }
    toast.success('Success!!!', toastSuccessOptions);
    setQuery(e.target.elements.query.value);
    e.target.elements.query.value = '';
  };

  return (
    <>
      <Header />
      <AppContainer>
        <Toaster position="top-center" reverseOrder={false} />

        <Container>
          <Box>
            <Form onSubmit={onSubmit}>
              <Input
                type="text"
                name="query"
                title="You should enter a URL!"
                placeholder="Enter a URL..."
              />

              <StyledBtn type="submit">Generate</StyledBtn>
            </Form>
          </Box>
          <Box>
            <Code>
              <QRCode
                id="QRCode"
                size={256}
                style={{
                  height: 'auto',
                  maxWidth: '100%',
                  borderRadius: '10px',
                  width: '100%',
                  cursor: 'pointer',
                }}
                value={query}
                viewBox={`0 0 256 256`}
                onClick={downloadImage}
              />
            </Code>
            <CodeDescription>
              <span>
                <Arrow size={25} />
                Click on QR-code to download
              </span>
            </CodeDescription>
          </Box>
        </Container>
      </AppContainer>
    </>
  );
};
