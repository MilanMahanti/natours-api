//here we pass a function in catchAsync function which will return another function and that function will only be called when the user hits the assigned route. Inside the function a promise will be returned for calling the function on that promise we can use catch to handel any error that might have occured and pass the error to the error handleing middleware.

module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
};
