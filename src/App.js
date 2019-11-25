
import React, { component } from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import GradientC from './components/GradientC';
import BStyle from './components/BStyle';
import BDirection from './components/BDirection';
import BColors from './components/BColors';
import BFormat from './components/BFormat';
import './App.css';



class App extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
      direccion: null,
      colorUno: null,
      colorDos: null,
      estilo: null,
     }
   }
  
  setChangeDirection = (dir) => {
    this.setState({direccion: dir});
  }  

  setChangeColorUno = (newColor) => {
    this.setState({colorUno: newColor});
  } 
  
  setChangeColorDos = (newColorDos) => {
    this.setState({colorDos: newColorDos});
  }  

  setChangeEstilo = (newEstilo) => {
    this.setState({estilo: newEstilo});
  }


  render() {
    return (
        <Main>
          <Header/>
          <div className="content">
          <Sidebar>
            <BStyle setChangeEstilo={this.setChangeEstilo}/>
            <BDirection setChangeDirection={this.setChangeDirection}/>
            <BColors setChangeColorUno={this.setChangeColorUno} setChangeColorDos={this.setChangeColorDos} />
            <BFormat/>
          </Sidebar>
          <GradientC  estilo= {this.state.estilo} colorUno={this.state.colorUno} direccion= {this.state.direccion}/>
          </div>
        </Main>
      );
    }
}

export default App;
