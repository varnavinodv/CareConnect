import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import Landing from './Landing';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login';
import Navadm from './Admin/Navadm';
import Navuser from './User/Navuser';
import Home from './Admin/Home';
import Vwuseradm from './Admin/Vwuseradm';
import Vwproductadm from './Admin/Vwproductadm';
import Vworgadm from './Admin/Vworgadm';
import Vworphadm from './Admin/Vworphadm';
import Vwdonatnadm from './Admin/Vwdonatnadm';
import Vwcontriadm from './Admin/Vwcontriadm';
import Vweventadm from './Admin/Vweventadm';
import Vwsponsadm from './Admin/Vwsponsadm';
import Vworderadm from './Admin/Vworderadm';
import Vwreportsadm from './Admin/Vwreportsadm';
import Vwreviewadm from './Admin/Vwreviewadm';
import Homeuser from './User/Homeuser';
import Vwproductuser from './User/Vwproductuser';
import Addproductuser from './User/Addproductuser';
import Updateproductuser from './User/Updateproductuser';
import Vworguser from './User/Vworguser';
import Vworgdtluser from './User/Vworgdtluser';
import Vworphuser from './User/Vworphuser';
import Viewoprhdtluser from './User/Viewoprhdtluser';
import Contriuser from './User/Contriuser';
import Vworderuser from './User/Vworderuser';
import Vwcontriuser from './User/Vwcontriuser';
import Navorg from './Organization/Navorg';
import Homeorg from './Organization/Homeorg';
import Donatnreqorg from './Organization/Donatnreqorg';
import Viewproductorg from './Organization/Viewproductorg';
import Vwproductdtlorg from './Organization/Vwproductdtlorg';
import Vwdonatnorg from './Organization/Vwdonatnorg';
import Vwdeliveryboyadm from './Admin/Vwdeliveryboyadm';
import Assigndeliveryboy from './Organization/Assigndeliveryboy';
import Vwordersorg from './Organization/Vwordersorg';
import Vwcartorg from './Organization/Vwcartorg';
import Vweventorg from './Organization/Vweventorg';
import Sponsorshiporg from './Organization/Sponsorshiporg';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
         <Route index element={<Landing/>}/>
         <Route path='/login' element={<Login/>}/>
         
      </Route>
      <Route path='/admin' element={<Navadm/>}>
        <Route index element={<Home/>}/>
        <Route path='viewuser' element={<Vwuseradm/>}/>
        <Route path='viewproduct' element={<Vwproductadm/>}/>         
        <Route path='vieworganization' element={<Vworgadm/>}/> 
        <Route path='vieworphanage' element={<Vworphadm/>}/>
        <Route path='viewdonation' element={<Vwdonatnadm/>}/>
        <Route path='viewcontribution' element={<Vwcontriadm/>}/> 
        <Route path='viewevent' element={<Vweventadm/>}/>   
        <Route path='viewsponsorship' element={<Vwsponsadm/>}/> 
        <Route path='vieworder' element={<Vworderadm/>}/>   
        <Route path='viewreport' element={<Vwreportsadm/>}/>
        <Route path='viewreview' element={<Vwreviewadm/>}/>
        <Route path='viewdeliveryboy' element={<Vwdeliveryboyadm/>}/>

      </Route>
      <Route path='/user' element={<Navuser/>}>
        <Route index element={<Homeuser/>}/>
        <Route path='viewproductuser' element={<Vwproductuser/>}/>
        <Route path='addproduct' element={<Addproductuser/>}/>
        <Route path='updateproduct' element={<Updateproductuser/>}/>
        <Route path='vieworguser' element={<Vworguser/>}/>
        <Route path='vieworgdtluser' element={<Vworgdtluser/>}/>
        <Route path='vieworphuser' element={<Vworphuser/>}/>
        <Route path='vieworphdtluser' element={<Viewoprhdtluser/>}/>
        <Route path='contributionuser' element={<Contriuser/>}/>
        <Route path='vieworderuser' element={<Vworderuser/>}/>
        <Route path='viewcontributionuser' element={<Vwcontriuser/>}/>
      
      </Route> 
      <Route path='/organization' element={<Navorg/>}>
        <Route index element={<Homeorg/>}/>
        <Route path='donationrequestorg' element={<Donatnreqorg/>}/>
        <Route path='viewproductorg' element={<Viewproductorg/>}/>
        <Route path='viewproductdtlorg' element={<Vwproductdtlorg/>}/>
        <Route path='viewdonationorg' element={<Vwdonatnorg/>}/>
        <Route path='assigndeliveryboyorg' element={<Assigndeliveryboy/>}/>
        <Route path='vieworderorg' element={<Vwordersorg/>}/>
        <Route path='viewcartorg'element={<Vwcartorg/>}/>
        <Route path='vieweventorg' element={<Vweventorg/>}/>
        <Route path='sponsorshiporg' element={<Sponsorshiporg/>}/>
        

      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
