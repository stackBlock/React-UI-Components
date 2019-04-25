import React from 'react';
import './App.css';
import BorderTopBottom from './components/BorderTopBottom/BorderTopBottom';
import SquareContainer from './components/SquareComponents/SquareContainer';
import Border from './components/SquareComponents/Border';
import Square from './components/SquareComponents/Square';

class App extends React.Component {
  render() {
    return (
      <div className="chess-wrapper">
        <BorderTopBottom />
        <SquareContainer>
          <Border kind="border-side" text="" />
          <Square kind="black-square" text="K" />
          <Square kind="white-square" text="R" />
          <Square kind="black-square" text="B" />
          <Square kind="white-square" text="KI" />
          <Square kind="black-square" text="Q" />
          <Square kind="white-square" text="B" />
          <Square kind="black-square" text="R" />
          <Square kind="white-square" text="K" />
          <Border kind="border-side" text="" />          
        </SquareContainer>
        <SquareContainer>
          <Border kind="border-side" text="" />
          <Square kind="white-square" text="p" />
          <Square kind="black-square" text="p" />
          <Square kind="white-square" text="p" />
          <Square kind="black-square" text="p" />
          <Square kind="white-square" text="p" />
          <Square kind="black-square" text="p" />
          <Square kind="white-square" text="p" />
          <Square kind="black-square" text="p" />
          <Border kind="border-side" text="" />          
        </SquareContainer>

        <SquareContainer>
          <Border kind="border-side" text="" />
          <Square kind="black-square" text="" />
          <Square kind="white-square" text="" />
          <Square kind="black-square" text="" />
          <Square kind="white-square" text="" />
          <Square kind="black-square" text="" />
          <Square kind="white-square" text="" />
          <Square kind="black-square" text="" />
          <Square kind="white-square" text="" />
          <Border kind="border-side" text="" />          
        </SquareContainer>
        <SquareContainer>
          <Border kind="border-side" text="" />
          <Square kind="white-square" text="" />
          <Square kind="black-square" text="" />
          <Square kind="white-square" text="" />
          <Square kind="black-square" text="" />
          <Square kind="white-square" text="" />
          <Square kind="black-square" text="" />
          <Square kind="white-square" text="" />
          <Square kind="black-square" text="" />
          <Border kind="border-side" text="" />          
        </SquareContainer>
        <SquareContainer>
          <Border kind="border-side" text="" />
          <Square kind="black-square" text="" />
          <Square kind="white-square" text="" />
          <Square kind="black-square" text="" />
          <Square kind="white-square" text="" />
          <Square kind="black-square" text="" />
          <Square kind="white-square" text="" />
          <Square kind="black-square" text="" />
          <Square kind="white-square" text="" />
          <Border kind="border-side" text="" />          
        </SquareContainer>
        <SquareContainer>
          <Border kind="border-side" text="" />
          <Square kind="white-square" text="" />
          <Square kind="black-square" text="" />
          <Square kind="white-square" text="" />
          <Square kind="black-square" text="" />
          <Square kind="white-square" text="" />
          <Square kind="black-square" text="" />
          <Square kind="white-square" text="" />
          <Square kind="black-square" text="" />
          <Border kind="border-side" text="" />          
        </SquareContainer>
        <SquareContainer>
          <Border kind="border-side" text="" />
          <Square kind="black-square" text="p" />
          <Square kind="white-square" text="p" />
          <Square kind="black-square" text="p" />
          <Square kind="white-square" text="p" />
          <Square kind="black-square" text="p" />
          <Square kind="white-square" text="p" />
          <Square kind="black-square" text="p" />
          <Square kind="white-square" text="p" />
          <Border kind="border-side" text="" />          
        </SquareContainer>
        <SquareContainer>
          <Border kind="border-side" text="" />
          <Square kind="white-square" text="K" />
          <Square kind="black-square" text="R" />
          <Square kind="white-square" text="B" />
          <Square kind="black-square" text="KI" />
          <Square kind="white-square" text="Q" />
          <Square kind="black-square" text="B" />
          <Square kind="white-square" text="R" />
          <Square kind="black-square" text="K" />
          <Border kind="border-side" text="" />          
        </SquareContainer>                
        <BorderTopBottom />
      </div>
    );
  }
}

export default App;
