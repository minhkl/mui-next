import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Typography } from '@mui/material';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box component="main">
        <Typography variant="h1" sx={{ fontSize: (theme) => theme.typography.pxToRem(32) }}>
          Hello from Next Boilerplate
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: 'soup of justice' }}>
          Let kick off your project
        </Typography>
      </Box>
    </div>
  );
};

export default Home;
