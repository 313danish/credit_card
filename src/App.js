import './App.css';
function App() {
  return (
    <div className="App">
      <div className='Container'>
          <div className='CardShow1'>
            <div className='bigCircle'></div>
            <div className='smallCircle'></div>
            <h1>0000 0000 0000 0000</h1>
            <h2>JANE APPLESEED</h2>
            <h4>00/00</h4>
          </div> <br />

          <div className='CardShow2'>
                <div className='blackBox'></div><br />

                <div className='whiteBox'><h1>000</h1></div>
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

          <div className='cardEntry'>
          
          <div className='dataEntry'>
            <label className='labelName'>CARDHOLDER NAME</label> <br />
            <input className="entryName" type="text" placeholder='e.g Jane Appleseed' /> <br />
            <label className='LabelNumber' >CARD NUMBER</label> <br />
            <input className="entryNumber" type="text" placeholder='e.g 1234 5678 9123 0000' />  <br />
            <label className='LabelExpdate'>EXP. DATE(MM/YY)</label> <br />
            <input className=" entryMonth" type="text" placeholder='MM' /> <br />
            <input className=" entryYear" type="text" placeholder='YY' /> <br />
            <label className='LabelCvv'>CVV</label> <br />
            <input className=" entryCvv" type="text" placeholder='e.g 123' /> <br />
            <button className='submit'> <span className='text'>Confirm</span></button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;



