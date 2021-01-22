import * as React from 'react';
import {CssBaseline} from '@material-ui/core';
import {ThemeProvider} from "@material-ui/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import '../src/App.scss'
import theme from '../src/ui/Theme'
import MainLayouts from '../src/layouts/MainLayouts'
import Home from "./components/Home";
import NewsReleaseListPage from "./components/NewsReleaseListPage";
import LatestNewsPage from "./components/LatestNewsPage";


export default function App() {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <MainLayouts>
            <Switch>
              <Route path="/" exact component={Home}/>

              <Route path="/about"/>

              <Route path="/users"/>

              <Route path="/latest-news" exact component={NewsReleaseListPage}/>

              <Route path="/latest-news/:id" component={LatestNewsPage}/>


            </Switch>
          </MainLayouts>
        </ThemeProvider>
      </Router>
    </>
  )
}


function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
