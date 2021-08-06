/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import s from './styles/app.component.css';
import Cards from './imgcomponent.jsx';
import SearchBar from './searchBar.jsx';
import countrys from './path.jsx';

class MyComponent extends Component {
  render() {
    return (
      <div className={s.wrapper}>
        
        <SearchBar></SearchBar>
        
        <div className={s.block}>

          <div className={s.block_row}>
            <Cards card_path={countrys.Bolivia} author=' Dominik Toretto' place_liked=' 1651' place_visited=' 6525' card_place=' Salar de Uyuni, Bolivia'></Cards>
            <Cards card_path={countrys.China} author=' Jonh Lenon' place_liked=' 5335' place_visited=' 6552' card_place=' Mountains Zhangye Danxia, China'></Cards>
            <Cards card_path={countrys.Croatia} author=' Matthew McConaughey' place_liked=' 8526' place_visited=' 6545' card_place=' Plitvice Lakes National Park, Croatia'></Cards>
          </div>

          <div className={s.block_row}>
            <Cards card_path={countrys.Egypt} author=' Will Smith' place_liked=' 23512' place_visited=' 34567' card_place=' Pyramids of Giza, Egypt'></Cards>
            <Cards card_path={countrys.Italy} author=' Donald Trump' place_liked=' 423523' place_visited=' 37300' card_place=' Amalfi Coast, Italy'></Cards>
            <Cards card_path={countrys.Japan} author=' Michael Jackson' place_liked=' 16521' place_visited=' 853126' card_place=' Arashiyama bamboo forest, Japan'></Cards>
          </div>

          <div className={s.block_row}>
              <Cards card_path={countrys.MachuPicchu} author=' Ariana Grande' place_liked=' 23512' place_visited=' 3432' card_place=' Machu Picchu, Peru'></Cards>
              <Cards card_path={countrys.Myanmar} author=' Jennifer Lopez' place_liked=' 423523' place_visited=' 7256' card_place=' Bagan, Myanmar'></Cards>
              <Cards card_path={countrys.Turkey} author=' Justin Bieber' place_liked=' 16521' place_visited=' 47345' card_place=' Pamukkale, Turkey'></Cards>
          </div>

        </div>
      </div>
      
      
    
    );
  }
}


export default MyComponent;
