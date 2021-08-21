const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const controller = require('../Controllers/authC'); 


router.post('/signup', [
    body("name").trim().notEmpty().withMessage("Invalid Name"),
    body("email")
      .trim()
      .notEmpty()
      .isEmail()
      .withMessage("Invalid Email"),
    body("password")
      .trim()
      .notEmpty()
      .isLength({ min: 8 })
      .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_.-])(?=.{8,})")
      .withMessage(
        "Password should not be empty, minimum eight characters , at least one capital letter, one letter, one number and one special character eg (!@#$%^&*_.-)"
      ),
    body("confirmPassword")
      .trim()
      .notEmpty()
      .custom((val, { req }) => {
        if (req.body.password !== val) {
          return Promise.reject("Passwords do not match.");
        } else {
          return true;
        }
      }),
] ,controller.signup )



router.post(
  "/login",
  [
    body("email").trim().notEmpty().isEmail().withMessage("Invalid Email"),
    body("password")
      .trim()
      .notEmpty()
      .isLength({ min: 8 })
      .withMessage("Invalid Password"),
  ],
  controller.login
);


router.post(
  "/reset",
  [
    body("password")
      .trim()
      .notEmpty()
      .isLength({ min: 8 })
      .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_.-])(?=.{8,})")
      .withMessage(
        "Password should not be empty, minimum eight characters , at least one capital letter, one number and one special character eg (!@#$%^&*_.-)"
      ),
    body("confirmPassword")
      .trim()
      .notEmpty()
      .custom((val, { req }) => {
        if (req.body.password !== val) {
          return Promise.reject("Passwords do not match.");
        } else {
          return true;
        }
      }),
  ],
  controller.reset
);



module.exports =router