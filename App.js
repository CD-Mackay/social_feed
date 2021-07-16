/* Library Imports */
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/* Component Imports */
import Home from 'pages/Home/Home'
import Header from 'templates/Header/Header'

/* Asset Imports */
import { GlobalStyle } from './GlobalStyles.js'
import StyledApp from './StyledApp.js'

const dataBase = [
    {
      title: "A tweet about tweets",
      content: "Man I hate twitter, why does anyone Tweet?",
      author: "Karl",
      date: "2020-01-01",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Karl_Marx.jpg",
      likes: 4,
      dislike: 20,
      comments: []
    },
    {
      title: "Foike Noos",
      content: "I was Kickin his bleedin legg off! There wasnt no check! GRRRRRRRRR",
      author: "Conor Mcgregor",
      date: "2021-07-10",
      img: "https://i.redd.it/qlxdqrpve7b71.jpg",
      likes: 69,
      dislike: 710,
      comments: []
    },
    {
      title: "U still there Conor?",
      content: "I'll fight you and Dee you little weasel! Poiriers Louisana Hotsauce comin all up in yo eyes!",
      author: "Jolie Poirier",
      date: "2021-07-11",
      img: "https://cdn.vox-cdn.com/thumbor/SPNLa7ZhffCsuaBKAG3EM6H4Ybk=/0x90:2487x1392/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22269374/1298061902.jpg",
      likes: 80085,
      dislike: 1,
      comments: []
    },
    {
      title: "Why put hotsauce in a beer?",
      content: "I love a good cellie, but mate what are ya thinkin",
      author: "Tai Tuivasa",
      date: "2021-07-10",
      img: "https://cdn.vox-cdn.com/thumbor/UgWtIvdepy2b0Sl9mnVUnAxpsSw=/0x0:1396x785/1200x800/filters:focal(497x365:719x587)/cdn.vox-cdn.com/uploads/chorus_image/image/60013747/tai_tuivasa_shoey_ufc_225.0.jpg",
      likes: 10000,
      dislike: 15,
      comments: []
    },
    {
      title: "Plz dont steal my icecream",
      content: "Hey DC I worked hard for this, go find the craft table Champ",
      author: "Kris Moutinho",
      date: "2021-07-10",
      img: "https://pbs.twimg.com/media/E6GtKYSWEAELO7k.jpg",
      likes: 420,
      dislike: 2,
      comments: []
    }
  ];
const App = () => {
  const [data, setData]  = useState(dataBase)
  return (
    <Router>
      <StyledApp>
          <GlobalStyle />
          <Header />
            <Switch>
              <Route exact path="/">
                <Home data={data} />
              </Route>
            </Switch>
      </StyledApp>
    </Router>
  )
};

export default App;