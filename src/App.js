import * as React from 'react';
import {CssBaseline, Container} from '@material-ui/core';
import {ThemeProvider} from "@material-ui/styles";
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import '../src/App.scss'
import theme from '../src/ui/Theme'
import MainLayouts from '../src/layouts/MainLayouts'
import Carousel from "./components/Carousel";
import KnowledgeAndApplicationSection from '../src/components/KnowledgeAndApplicationSection'
import NewProductInfoSection from '../src/components/NewProductInfoSection'
import NewsReleaseSection from "./components/NewsReleaseSection";
import SubscribeNews from "./components/SubsCribeNews";
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <MainLayouts>
          <Carousel/>
          <Container maxWidth="xl">

            <KnowledgeAndApplicationSection/>

            <NewProductInfoSection/>

            <NewsReleaseSection/>

            <SubscribeNews/>

          </Container>
        </MainLayouts>
      </ThemeProvider>
    </>


  )
}