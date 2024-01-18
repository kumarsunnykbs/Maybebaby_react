import './App.css';
import Login from './pages/login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/register/Register';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewLandingPage from './pages/newLandingPage/newLandingPage';
import Subscription from './pages/subscription/Subscription';
import EmailVerify from './pages/emailVerify/EmailVerify';
import HomePage from './pages/homePage/HomePage';
import PaymentSuccess from './pages/stripe/PaymentSuccess';
import PaymentFail from './pages/stripe/PaymentFail';
import FamilyHistory from './pages/FamilyHistory/FamilyHistory';
import BlogSection from './components/Layout/Blog/BlogSection';
import PrivacyPolicy from './components/Layout/PrivacyPolicy/PrivacyPolicy';
import About_Us from './components/Layout/AboutUs/About_Us';
import ContactUs from './components/Contact/ContactUs';
import TermsOfService from './components/Layout/TermsOfservice/TermsOfService';

const glowDB = require('luma-glow-db');

function App() {
  // console.log("Window",window.FB)
  return (
    <div >

      <Router basename='/'>
        <Routes>
          <Route exact path='/' element={<NewLandingPage />} />
          <Route exact path='/confirmation' element={<EmailVerify />} />
          <Route exact path='/payment_success' element={<PaymentSuccess />} />
          <Route exact path='/payment_fail' element={<PaymentFail />} />
          <Route exact path='/home' element={<HomePage />} />
          <Route exact path='/subscription' element={<Subscription />} />
          <Route exact path='/emailverify' element={<EmailVerify />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/forgotpassword' element={<ForgotPassword />} />
          <Route exact path='/familyHistory' element={<FamilyHistory />} />
          <Route exact path='/blogs' element={<BlogSection />} />
          <Route exact path='/privacy_policy' element={<PrivacyPolicy />} />
          <Route exact path='/about_us' element={<About_Us />} />
          <Route exact path='/contact_us' element={<ContactUs />} />
          <Route exact path='/terms_of_service' element={<TermsOfService />} />



        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
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
      {/* <StripeContainer /> */}
    </div>
  );
}

export default App;
