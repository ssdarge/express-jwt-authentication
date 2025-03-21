import CustomAPIError from "../errors/custom-error.js";

const login = async (req, res) => {
  const { username, password } = req.body;

  // mongoose validation
  // Joi
  // check in the controller

  if (!username || !password) {
    throw new CustomAPIError("Please provide email and passowrd", 400);
  }

  res.send("Fake Login/Register/Signup Route");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    message: `Hello, John Doe`,
    secret: `here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

export { login, dashboard };
