import { Routes,Route } from "react-router-dom";
// import AddressForm from "./components/addressForm";
// import Article from "./components/article";
// import Header1 from "./components/header";
import Navbar from './components/navbar';
import Aboutus from "./router/aboutus/aboutus.component";
import Home from './router/home/home.component';
import RateChart from "./router/rateChart/rateChart.component";
import PrivacyPolicy from "./router/privacyPolicy/privacyPolicy.component";
import RefundPolicy from "./router/refundpolicy/refundPolicy.component";
import TermsCondition from "./router/termsConditions/termsCondition.component";
import { Order } from "./router/order/order.component";
import { CreateAccount } from "./router/createAccount/createAccount";
import { Profile } from './router/profile/profile.conponent'
import { Login } from "./router/login/login";

function App() {
  return (
    <div className="App lightMode">
      {/* <Navbar/> */}
      
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<Home/>} />
            <Route path="/ratechart" element = {<RateChart/>}/>
            <Route path="/refundpolicy" element = {<RefundPolicy />}/>
            <Route path="/aboutus" element = {<Aboutus/>}/>
            <Route path="/policy" element = {<PrivacyPolicy/>}/>
            <Route path="/sellscrape" element = {<Order/>}/>
            <Route path="/terms" element = {<TermsCondition />}/>
            <Route path="/createAccount" element = {<CreateAccount />}/>
            <Route path="/profile" element = {<Profile />}/>
            <Route path="/log" element = {<Login />}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
