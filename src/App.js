import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Confrimation from './pages/confirmation/Confrimation';
import Homepage from './pages/home/Homepage';
import BookingPage from './pages/reservation/bookingPage/BookingPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/book' element={<BookingPage />} />
        <Route path='/confirmation' element={<Confrimation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
