import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import VehicleCheckInCard from './Pages/Checkin/Checkin';
import Checkout from './Pages/Checkout/Checkout';
import Login from './Pages/Login/Login';
import StudentGetInfo from './Pages/Studentgetinfo/Studentinfo';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

  const handleCheckIn = (vehicleNumber) => {
    // Logic to handle vehicle check-in
    console.log(`Checking in vehicle with number: ${vehicleNumber}`);
  };

  const handleCheckout = (vehicleNumber) => {
    // Here, you would perform the deletion of data from the database based on the provided vehicle number
    console.log(`Deleting data for vehicle number: ${vehicleNumber}`);
  };



  return (

    <div className="App">

   <BrowserRouter>
      <Header/>
      <Routes>
        <Route  path='/'            element ={<VehicleCheckInCard onCheckIn={handleCheckIn} />}/>
        <Route  path='/checkout'    element ={<Checkout onCheckout={handleCheckout} />}/>
        <Route  path='/studentinfo' element ={<StudentGetInfo/>}/> 
      </Routes>
      </BrowserRouter>
      <Footer/>



      
   

      
    </div>
  );
}

export default App;
