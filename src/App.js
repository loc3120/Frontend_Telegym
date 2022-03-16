import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Membership from './components/MembershipPage/Membership';
import Coach from './components/CoachPage/Coach';
import TryingPractice from './components/TryingPracticePage/TryingPractice';
import Candidate from './components/CandidatePage/Candidate';
import Contact from './components/ContactPage/Contact';
import HomePage from './components/HomePage/HomePage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      {/* <div className='login'>
        
      </div> */}
      <div className='App'>
        <ScrollToTop></ScrollToTop>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Membership" element={<Membership />} />
          <Route path="/Coach" element={<Coach />} />
          <Route path="/TryingPractice" element={<TryingPractice />} />
          <Route path="/Candidate" element={<Candidate />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
export default App;
