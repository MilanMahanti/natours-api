const { default: mongoose } = require('mongoose');

const bookingSchema = new mongoose.Schema({
  tour: {
    type: mongoose.Schema.ObjectId,
    ref: 'tour',
    required: [true, 'A booking must belong to a tour.'],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: [true, 'A booking must belong to an user.'],
  },
  price: {
    type: Number,
    required: [true, 'A booking must have a price'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  paid: {
    type: Boolean,
    default: true,
  },
});

bookingSchema.pre(/^find/, (next) => {
  this.populate('user').populate({
    path: 'tour',
    select: 'name',
  });
  next();
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
