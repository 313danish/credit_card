import { useState } from 'react';
import './App.css';
function App() {
  const [name,setName]=useState('')
  const [cardNumber,setcardNumber]=useState('')
  const [cvv,setCvv]=useState('')
  const [error,setError]=useState(false)
  const handleChangeCardNumber = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setcardNumber(e.target.value);
    }
  };
  const handleChangeCvv = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setCvv(e.target.value);
    }
  };
  const handleSubmit =(e)=>{
    e.preventDefault();
    const numericRegex = /^[0-9]+$/;
    if(cardNumber.length ===0 || name.length === 0 || !numericRegex.test(cvv)){
      setError(true);
    }
    else{
    console.log('name',name,'number',cardNumber,'cvv',cvv)
    }
  };
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
            <input onChange={e=>setName(e.target.value)} className="entryName" type="text" placeholder='e.g Jane Appleseed'  /> <br />
            {error&&name.length<=0 ?
            <label className='errors'>Cardholder name required</label>: " "} <br />
            <label className='LabelNumber' >CARD NUMBER</label> <br />
            <input onChange={handleChangeCardNumber} className="entryNumber" type="text" placeholder='e.g 1234 5678 9123 0000' />  <br />
            {error&&cardNumber.length!==16?
            <label className='errorsNumber'>Card number required</label>:""} <br />
            <label className='LabelExpdate'>EXP. DATE(MM/YY)</label> <br />
            <input className=" entryMonth" type="text" placeholder='MM' /> <br />
            <input className=" entryYear" type="text" placeholder='YY' /> <br />
            <label className='LabelCvv'>CVV</label> <br />
            <input onChange={handleChangeCvv} className=" entryCvv" type="text" placeholder='e.g 123' /> <br />
            {error&&cvv.length !==3?
            <label className='errorsCvv'>CVC must be numeric</label>:" "}  <br />
            <button onClick={handleSubmit} className='submit'> <span className='text'>Confirm</span></button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;



