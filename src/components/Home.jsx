import React from 'react';
import Carousel from "./Carousel";
import {Container} from "@material-ui/core";
import KnowledgeAndApplicationSection from "./KnowledgeAndApplicationSection";
import NewProductInfoSection from "./NewProductInfoSection";
import NewsReleaseSection from "./NewsReleaseSection";
import SubscribeNews from "./SubsCribeNews";

const Home = () => {
  return (
    <>
      <Carousel/>
      <Container maxWidth="xl">

        <KnowledgeAndApplicationSection/>

        <NewProductInfoSection/>

        <NewsReleaseSection/>

        <SubscribeNews/>

      </Container>
    </>
  );
};

export default Home;