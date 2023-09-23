import { useState } from 'react';
import './App.css';
import Card from './card.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [name,setName]=useState('')
  const [cardNumber,setcardNumber]=useState('')
  const [cvv,setCvv]=useState('')
  const [expMonth ,setMonth]=useState('')
  const [expYear ,setYear]=useState('')
  const [userData,setUserData] = useState({
    name: 'JANE APPLESEED',
    cardNumber :'0000 0000 0000 0000',
    expMonth:'00',
    expYear:'00',
    cvv:'123'
  })
  const [error,setError]=useState(false)
  const handleChangeCardNumber = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setcardNumber(e.target.value);
    }
  };
  const handleChangeMonth = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setMonth(e.target.value);
    }
  };
  const handleChangeYear = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setYear(e.target.value);
    }
  };
  const handleChangeCvv = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setCvv(e.target.value);
    }
  };
  const notify= ()=>{
    toast.success('Success!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    const numericRegex = /^[0-9]+$/;
    if(cardNumber.length ===0 || name.length === 0 || !numericRegex.test(cvv) ||!numericRegex.test(expMonth) ||!numericRegex.test(expYear) ){
      setError(true); 
    }
    else{
      setUserData({
        name,
        cardNumber,
        expMonth,
        expYear,
        cvv,
      })
      notify() 
    }
  };
  return (
    <div className="App">
      <div className='Container'>
         
         <Card 
         cardNumber={userData.cardNumber} 
         name={userData.name}
         expMonth={userData.expMonth}
         expYear={userData.expYear}
         cvv={userData.cvv}
         />      
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
            <input onChange={handleChangeMonth} className=" entryMonth" type="text" placeholder='MM' /> <br />
            <input onChange={handleChangeYear} className=" entryYear" type="text" placeholder='YY' /> <br />
            <label className='LabelCvv'>CVV</label> <br />
            <input onChange={handleChangeCvv} className=" entryCvv" type="text" placeholder='e.g 123' /> <br />
            {error&&cvv.length !==3?
            <label className='errorsCvv'>CVC must be numeric</label>:" "}  <br />
            {error&&expMonth.length !==2 &&expYear.length!==2?
            <label className='errorsYear'>invalid year or onth</label>:" "}  <br />
            <button onClick={handleSubmit} className='submit'> <span className='text'>Confirm</span></button>
          </div>
        </div>
      </div>
      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
    </div>
  );
}
export default App;



