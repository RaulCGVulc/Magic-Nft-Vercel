import Head from 'next/head'

import styled, { ThemeProvider } from "styled-components";
import { light } from "../styles/Themes";

import { Inter } from 'next/font/google'
import GlobalStyles from "../styles/GlobalStyles"
import { useLocalStorage } from '@solana/wallet-adapter-react';



import { Navigation } from '@/components/Navigation/';
import { Home as HomeComponent } from '@/components/sections/Home';
import { About } from '@/components/sections/About';
import { Roadmap } from '@/components/sections/Roadmap';
import { Showcase } from '@/components/sections/Showcase';
import { Team } from '@/components/sections/Team';
import { Faq } from '@/components/sections/Faq';
import { Footer } from '@/components/Footer';
import { AutoConnectProvider } from '@/components/AutoConnectProvider';


const inter = Inter({ subsets: ['latin'] })


const Wrapper = styled.main`
width: 100vw;
height: 100%;
position: relative;
`
const wallets = [
];



export default function Home() {
  return (
    <>
      <Head>
        <title>$Magic Money Mages</title>
        <meta name="description" content="Magic $Money Mages" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <Wrapper>
        <GlobalStyles />
        <ThemeProvider theme={light}>
          <AutoConnectProvider>




            <Navigation />
            <HomeComponent />
            <About />
            <Roadmap />
            <Showcase />
            {/* <Team /> */}
            {/* <Faq /> */}
            <Footer />

          </AutoConnectProvider>
        </ThemeProvider>
      </Wrapper>
    </>
  )
}
