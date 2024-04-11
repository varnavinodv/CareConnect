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
import Vwsponsadm from './Admin/Vwsponshistoryadm';
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
import Vwreportsorg from './Organization/Vwreportsorg';
import Addreportorg from './Organization/Addreportorg';
import Vwcartproductdtlorg from './Organization/Vwcartproductdtlorg';
import Vwrevieworg from './Organization/Vwrevieworg';
import Vworphorg from './Organization/Vworphorg';
import Vworphdtlorg from './Organization/Vworphdtlorg';
import Navorph from './Orphanage/Navorph';
import Homeorph from './Orphanage/Homeorph';
import Vieworgorph from './Orphanage/Vieworgorph';
import Vworgdtlorph from './Orphanage/Vworgdtlorph';
import Addrevieworph from './Orphanage/Addrevieworph';
import Vwdonatnrequestorph from './Orphanage/Vwdonatnrequestorph';
import Addrequest from './Orphanage/Addrequest';
import Viewdonatnorph from './Orphanage/Viewdonatnorph';
import Vwcontriorph from './Orphanage/Vwcontriorph';
import Vweventorph from './Orphanage/Vweventorph';
import Addeventorph from './Orphanage/Addeventorph';
import Updateeventorph from './Orphanage/Updateeventorph';
import Vwsponsorph from './Orphanage/Vwsponsorph';
import Homedeliveryb from './Delivery boy/Homedeliveryb';
import Navdeliveryb from './Delivery boy/Navdeliveryb';
import Vwdonatndboy from './Delivery boy/Vwdonatndboy';
import Userreg from './Userreg';
import Orgreg from './Orgreg';
import Orphreg from './Orphreg';
import Adddeliveryboy from './Organization/Adddeliveryboy';
import Vwordersdboy from './Delivery boy/Vwordersdboy'
import Editprofiledeliveryb from './Delivery boy/Editprofiledeliveryb';
import Editprofileorph from './Orphanage/Editprofileorph';
import Editprofileorg from './Organization/Editprofileorg';
import Editprofileuser from './User/Editprofileuser';
import Vwdelboys from './Organization/Vwdelboys';
import Editreportorg from './Organization/Editreportorg';
import Vwsponsorg from './Organization/Vwsponsorg';
import Editeventorph from './Orphanage/Editeventorph';
import Sponshistoryorph from './Orphanage/Sponshistoryorph';
import ContriRequest from './Orphanage/contriRequest';
import 'react-toastify/dist/ReactToastify.css';
import Viewcontridetailsorph from './Orphanage/Viewcontridetailsorph';
import Vwcontridetailsadm from './Admin/Vwcontridetailsadm';
import Vwreports from './Orphanage/Vwreports';
import Addreports from './Orphanage/Addreports';
import Editreportorph from './Orphanage/Editreportorph';
import Vwsponshistoryadm from './Admin/Vwsponshistoryadm';
import Viewsponsadm from './Admin/Viewsponsadm';
import Addpurpose from './Orphanage/Addpurpose';
import Viewpurposeupdate from './Orphanage/Viewpurposeupdate';
import Orderhistory from './Organization/Orderhistory';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
         <Route index element={<Landing/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/reguser' element={<Userreg/>}/>
         <Route path='/regorg' element={<Orgreg/>}/>
         <Route path='/regorph' element={<Orphreg/>}/>
         
      </Route>


      <Route path='/admin' element={<Navadm/>}>
        <Route index element={<Home/>}/>
        <Route path='viewuser' element={<Vwuseradm/>}/>
        <Route path='viewproduct' element={<Vwproductadm/>}/>         
        <Route path='vieworganization' element={<Vworgadm/>}/> 
        <Route path='viewdonation' element={<Vwdonatnadm/>}/>
        <Route path='viewcontribution' element={<Vwcontriadm/>}/>
        <Route path='viewcontridetailsadm/:id' element={<Vwcontridetailsadm/>}/> 
        <Route path='vieworphanage' element={<Vworphadm/>}/>
        <Route path='viewdeliveryboy' element={<Vwdeliveryboyadm/>}/>
        <Route path='viewevent' element={<Vweventadm/>}/>   
        <Route path='viewsponsorshiphistory' element={<Vwsponshistoryadm/>}/> 
        <Route path='viewsponsadm/:id' element={<Viewsponsadm/>}/>
        <Route path='viewreport' element={<Vwreportsadm/>}/>
        <Route path='vieworder' element={<Vworderadm/>}/>   
        <Route path='viewreview' element={<Vwreviewadm/>}/>

      </Route>
      <Route path='/user' element={<Navuser/>}>
        <Route index element={<Homeuser/>}/>
        <Route path='editprofileuser' element={<Editprofileuser/>}/>
        <Route path='viewproductuser' element={<Vwproductuser/>}/>
        <Route path='vieworguser' element={<Vworguser/>}/>
        <Route path='viewcontributionuser' element={<Vwcontriuser/>}/>
        <Route path='vieworphuser' element={<Vworphuser/>}/>
        <Route path='vieworderuser' element={<Vworderuser/>}/>
        <Route path='addproduct' element={<Addproductuser/>}/>
        <Route path='updateproduct/:id' element={<Updateproductuser/>}/>
        <Route path='vieworgdtluser/:id' element={<Vworgdtluser/>}/>
        <Route path='vieworphdtluser/:id' element={<Viewoprhdtluser/>}/>
        <Route path='contributionuser/:cid' element={<Contriuser/>}/>
      </Route> 



      <Route path='/organization' element={<Navorg/>}>
        <Route index element={<Homeorg/>}/>
        <Route path='editprofileorg' element={<Editprofileorg/>}/>
        <Route path='viewproductorg' element={<Viewproductorg/>}/>
        <Route path='vieworphorg' element={<Vworphorg/>}/>
        <Route path='viewdeliveryboyorg' element={<Vwdelboys/>}/>
        <Route path='donationrequestorg' element={<Donatnreqorg/>}/>
        <Route path='vieweventorg' element={<Vweventorg/>}/>
        <Route path='viewcartorg'element={<Vwcartorg/>}/>
        <Route path='viewreportsorg' element={<Vwreportsorg/>}/>
        <Route path='vieworderorg' element={<Vwordersorg/>}/>
        <Route path='viewrevieworg' element={<Vwrevieworg/>}/>
        <Route path='viewdonationorg' element={<Vwdonatnorg/>}/>
        <Route path='viewproductdtlorg/:pid' element={<Vwproductdtlorg/>}/>
        <Route path='vieworphdtlorg/:id' element={<Vworphdtlorg/>}/>
        <Route path='assigndeliveryboyorg/:did' element={<Assigndeliveryboy/>}/>
        <Route path='viewcartproductdtlorg/:pid' element={<Vwcartproductdtlorg/>}/>
        <Route path='sponsorshiporg/:eid' element={<Sponsorshiporg/>}/>
        <Route path='addreportorg' element={<Addreportorg/>}/>
        <Route path='adddeliveryboy' element={<Adddeliveryboy/>}/>
        <Route path='editreportorg/:id' element={<Editreportorg/>}/>
        <Route path='vwsponsorg' element={<Vwsponsorg/>}/>
        <Route path='orderhistory' element={<Orderhistory/>}/>
      </Route>




      <Route path='/orphanage' element={<Navorph/>}>
      <Route index element={<Homeorph/>}/>
      <Route path='vieworgorph' element={<Vieworgorph/>}/>
      <Route path='vieworgdtlorph/:id' element={<Vworgdtlorph/>}/>
      <Route path='addrevieworph/:oid' element={<Addrevieworph/>}/>
      <Route path='viewdonatnreqstorph' element={<Vwdonatnrequestorph/>}/>
      <Route path='addrequestorph' element={<Addrequest/>}/>
      <Route path='viewdonatnorph' element={<Viewdonatnorph/>}/>
      <Route path='viewcontributnorph' element={<Vwcontriorph/>}/>
      <Route path='vieweventorph' element={<Vweventorph/>}/>
      <Route path='addeventorph' element={<Addeventorph/>}/>
      <Route path='updateeventorph' element={<Updateeventorph/>}/>
      <Route path='viewsponsorshiporph/:id' element={<Vwsponsorph/>}/>
      <Route path='editprofileorph' element={<Editprofileorph/>}/>
      <Route path='editeventorph/:id' element={<Editeventorph/>}/>
      <Route path='sponshistory' element={<Sponshistoryorph/>}/>
      <Route path='contrirequest' element={<ContriRequest/>}/>
      <Route path='viewcontridetails/:id' element={<Viewcontridetailsorph/>}/>
      <Route path='viewreports' element={<Vwreports/>}/>
      <Route path='addreportorph' element={<Addreports/>}/>
      <Route path='editreportorph/:id' element={<Editreportorph/>}/>
      <Route path='addpurpose/:id' element={<Addpurpose/>}/>
      <Route path='viewpurpose/:id' element={<Viewpurposeupdate/>}/>
      </Route>


      <Route path='/deliveryboy' element={<Navdeliveryb/>}>
      <Route index element={<Homedeliveryb/>}/> 
      <Route path='viewdonatndeliveryb' element={<Vwdonatndboy/>}/>
      <Route path='vieworderdeliveryb' element={<Vwordersdboy/>}/>
      <Route path='editprofiledeliberyb' element={<Editprofiledeliveryb/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
