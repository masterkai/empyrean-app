import React from 'react';
import Header from "../ui/Header";
import Footer from "../ui/Footer"
const MainLayout = ({children}) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
};

export default MainLayout;