import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './pages/home/Homepage';
import BookingPage from './pages/reservation/bookingPage/BookingPage';
import ConfirmedBooking from './pages/reservation/bookingPage/ConfirmedBooking';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/book' element={<BookingPage />} />
        <Route path='/confirmation' element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
