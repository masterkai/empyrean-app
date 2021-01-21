import React from 'react';
import Container from '@material-ui/core/Container';
import LatestNewsTabs from './LatestNewsTabs';
import Breadcrumb from "./Breadcrumb";

const NewsReleaseListPage = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Breadcrumb/>
        <LatestNewsTabs/>
      </Container>
    </>
  );
};

export default NewsReleaseListPage;