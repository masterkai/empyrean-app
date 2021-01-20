import * as React from 'react';
import {CssBaseline} from '@material-ui/core';
import {ThemeProvider} from "@material-ui/styles";
import '../src/App.scss'
import theme from '../src/ui/Theme'
import MainLayouts from '../src/layouts/MainLayouts'
import Carousel from "./components/Carousel";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <MainLayouts>
          <Carousel/>
        </MainLayouts>
      </ThemeProvider>
    </>


  )
}