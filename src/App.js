import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {Originals,action,Adventure,Animation,Drama,Horror,Thriller,comedy,crime} from './urls'


function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost  url={Originals} title='Popular'/>
      <RowPost  url={action} title='Action' small  />
      <RowPost  url={Adventure} title='Adventure' small  />
      <RowPost  url={Animation} title='Animation' small  />
      <RowPost  url={comedy} title='Comedy' small  />
      <RowPost  url={Drama} title='Drama' small  />
      <RowPost  url={crime} title='Crime' small  />
      <RowPost  url={Horror} title='Horror' small  />
      <RowPost  url={Thriller} title='Thriller' small  />
      
    </div>
   
  );
}

export default App;
