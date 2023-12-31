/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51OSa9PSGm1wRyuQ7JqVhxIUEvRwLVfF5KL7HtLUNlE2QHgziBaN7EQooqMmOQbSdA797zt1C4BKJSjYDJlSqCDHk00rB6CzN7t'
);

export const bookTour = async (tourId) => {
  try {
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    await stripe.redirectToCheckout({ sessionId: session.data.session.id });
  } catch (error) {
    console.log(error);
    showAlert('error', error.message);
  }
};
