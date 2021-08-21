const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Model = require("../Models/authM");

exports.signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation Failed");
    error.statusCode = 401;
    error.data = errors.array();
    throw error;
  }

  const { name, email, password, confrimPassword } = req.body;

  Model.userExists(email)
    .then((total) => {
      if (total[0].total !== 0) {
        const error = new Error();
        error.statusCode = 401;
        error.data = [{ msg: "User already exsist" }];
        throw error;
      }

      return Model.createUser(name, email, password)
    })
    .then(user => {
      return Model.populate_calender(user.insertId)
    })
    .then(cal => {
      console.log(cal)
      res.status(200).json({
        message: "Registered succesfully",
        redirect: "/login",
      });
    })
    .catch((err) => {
      console.error(err);
      if (!err.statusCode) {
        err.statusCode = 404;
      }
      next(err);
    });
};


exports.login = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation Failed");
    error.statusCode = 401;
    error.data = errors.array();
    throw error;
  }

  const {email, password} = req.body;
  let loadedUser;
  Model.findUser(email)
  .then((user) => {
    if (user.length <= 0) {
      const error = new Error();
      error.statusCode = 401;
      error.data = [{ msg: "Invalid credentials" }];
      throw error;
    }
    loadedUser = user;
    let UserPassword = user.map((item) => item.password);
    console.log(UserPassword);
    if (!UserPassword[0]) {
      const error = new Error();
      error.statusCode = 401;
      error.data = [{ msg: "Invalid credentials" }];
      throw error;
    }
    return bcrypt.compare(password, UserPassword[0]);
  })
  .then(match => {
    if (!match) {
      const error = new Error();
      error.statusCode = 401;
      error.data = [{ msg: "Invalid credentials" }];
      throw error;
    }
    userEmail = loadedUser.map((item) => item.email);
    userId = loadedUser.map((item) => item.user_id);
    const token = jwt.sign(
      {
        email: userEmail[0],
        userId: userId[0],
      },
      "ghaithwfmTool&gradproject",
      { expiresIn: "1h" }
    );

    res.status(200).json({
      token: token,
      userId: userId[0],
    });
  })
  .catch((err) => {
    console.error(err);
    if (!err.statusCode) {
      err.statusCode = 404;
    }
    next(err);
  });

}

exports.reset =  (req, res, next) => {
  const {email, password, confirmPassword } = req.body;
 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation Failed");
    error.statusCode = 401;
    error.message = errors.array()[0].msg;
    throw error;
  }

  Model.findUser(email)
  .then(user =>{
    if (user.length <= 0) {
      const error = new Error();
      error.statusCode = 401;
      error.data = [{ msg: "Invalid credentials" }];
      throw error;
    }
    let user_id = user[0].user_id;
    return Model.updatePassword(user_id,password)

  })
  .then(update => {
    if(update.affectedRows > 0 ){
      res.status(200).json({
        message: "Password changed succesfully",
      });
    }else {
      const error = new Error();
      error.statusCode = 401;
      error.data = [{ msg: "Invalid credentials" }];
      throw error;
    }
  })
  .catch((err) => {
    console.error(err);
    if (!err.statusCode) {
      err.statusCode = 404;
    }
    next(err);
  });

}

