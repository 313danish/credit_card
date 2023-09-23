import React from 'react'
import './card.css';
import './App.js';
function formatCard(cardNumber){
  if(cardNumber && cardNumber.length === 16){
    return cardNumber.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/ , '$1 $2 $3 $4');
  }
  return cardNumber
};
function card(props) {
  console.log("props",props);
  return (
    <div>
         <div className='CardShow1'>
            <div className='bigCircle'></div>
            <div className='smallCircle'></div>
            <h1>{formatCard(props.cardNumber)}</h1>
            <h2>{props.name}</h2>
            <h4>{props.expMonth}/{props.expYear}</h4>
          </div> <br />
          <div className='CardShow2'>
                <div className='blackBox'></div><br />
                <div className='whiteBox'><h1>{props.cvv}</h1></div>
                <div className='dotsOne'> </div>
                <div className='dotsTwo'> </div>
                <div className='dotsThree'> </div>
                <div className='dotsFour'> </div>
                <div className='dotsFive'> </div>
                <div className='dotsSix'> </div>
                <div className='dotsSeven'> </div>
                <div className='dotsEight'> </div>
                <div className='dotsNine'> </div>
                <div className='dotsTen'> </div>
                <div className='dotsEleven'> </div>
                <div className='dotsTwelev'> </div>
          </div> <br />
    </div>
  )
};

export default card

