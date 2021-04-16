import React from 'react';
import Navbar from './components/Navbar.js';
// Be sure to uncomment these components and the data before you use them!
import SchoolCard from './components/SchoolCard.js';
import data from './nycSchoolEnrollmentData.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <div className="row">
     <SchoolCard school  = {data[0].ENTITY_NAME} year={data[0].YEAR} enrollmentdata={data[0].NUM_ELL}  numberfemale={data[0].NUM_FEMALE}  schooldata={data[0].NUM_ECDIS}/>
     <SchoolCard school = {data[1].ENTITY_NAME}  year={data[1].YEAR} enrollmentdata={data[1].NUM_ELL}  numberfemale={data[1].NUM_FEMALE}  schooldata={data[1].NUM_ECDIS}/>
     <SchoolCard school = {data[2].ENTITY_NAME}  year={data[2].YEAR} enrollmentdata={data[2].NUM_ELL}  numberfemale={data[2].NUM_FEMALE}  schooldata={data[2 ].NUM_ECDIS}/>
     

        </div>
      </div>
    </div>
  );
}

export default App;
