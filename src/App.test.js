import { fireEvent, render, screen } from '@testing-library/react';
import Homepage from './pages/home/Homepage';
import BookingPage from './pages/reservation/bookingPage/BookingPage';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  initializeTimes,
  updateTimes,
} from './pages/reservation/bookingPage/reducer';

test('renders Little Lemon on Homepage', () => {
  render(
    <Router>
      <Homepage />
    </Router>
  );
  const linkElement = screen.getByText(/Little Lemon/);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the BookingForm heading', () => {
  render(
    <Router>
      <BookingPage />
    </Router>
  );
  const headingElement = screen.getByText('Book Now');
  expect(headingElement).toBeInTheDocument();
});

test('initializeTimes return a list of times', () => {
  const result = initializeTimes();
  expect(result).not.toBe(null);
});

test('updateTimes return a list of times', () => {
  const today = new Date().toISOString().split('T')[0];
  const result = updateTimes({}, { type: 'SETTIMES', payload: today });
  expect(result).not.toBe(null);
});

test('make your reservation button disable when form is invalid', async () => {
  render(
    <Router>
      <BookingPage />
    </Router>
  );
  const guests = await screen.findByLabelText('Number of guests', {
    selector: 'input',
  });
  const submitButton = await screen.findByText('Make Your reservation');
  fireEvent.change(guests, { target: { value: '-5' } });
  expect(submitButton).toBeDisabled();
});
