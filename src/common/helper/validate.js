import {REGEX, ERROR} from "../constants/index";
export const isBlank = (str) => {
   if (str === undefined || str.length === 0) {
      return false;
   }
   return true;
};
export const isEnoughLength = (str) => {
   if (str.length >= 8) {
      return true;
   }
   return false;
};

export const isPassword = (str) => {
   if (str.match(REGEX.REGEX_PASSWORD)) {
      return true;
   }
   return false;
};

export const isEmail = (str) => {
   if (str.match(REGEX.REGEX_EMAIL)) {
      return true;
   }
   return false;
};

export const isUserName = (str) => {
   if (str.match(REGEX.REGEX_USERNAME)) {
      return true;
   }
   return false;
};

export const isEqual = (password, confirm) => {
   if (password === confirm) {
      return true;
   }
   return false;
};

export const validateRegister = (value) => {
   const errorsForm = {};
   const validInput = {};

   if (!value.username) {
      errorsForm.username = `Username ${ERROR.NOT_NULL}`;
      validInput.username = false;
   } else if (!isUserName(value.username)) {
      errorsForm.username = ERROR.VALID_USERNAME;
      validInput.username = false;
   } else {
      errorsForm.username = "";
      validInput.username = true;
   }

   if (!value.email) {
      errorsForm.email = `Email ${ERROR.NOT_NULL}`;
      validInput.email = false;
   } else if (!isEmail(value.email)) {
      errorsForm.email = ERROR.VALIDE_EMAIL;
      validInput.email = false;
   } else {
      errorsForm.email = "";
      validInput.email = true;
   }

   if (!value.password) {
      errorsForm.password = `Password ${ERROR.NOT_NULL}`;
      validInput.password = false;
   } else if (!isPassword(value.password)) {
      errorsForm.password = ERROR.VALID_PASSWORD;
      validInput.password = false;
   } else {
      errorsForm.password = "";
      validInput.password = true;
   }

   if (!value.confirm) {
      errorsForm.confirm = `Confirm password ${ERROR.NOT_NULL}`;
      validInput.confirm = false;
   } else if (!isEqual(value.confirm, value.password)) {
      errorsForm.confirm = ERROR.VALID_CONFIRM;
      validInput.confirm = false;
   } else {
      errorsForm.confirm = "";
      validInput.confirm = true;
   }

   return {errorsForm, validInput};
};

export const validateLogin = (value) => {
   const errorsForm = {};
   const validInput = {};

   if (!value.username) {
      errorsForm.username = `Username ${ERROR.NOT_NULL}`;
      validInput.username = false;
   } else if (!isUserName(value.username)) {
      errorsForm.username = ERROR.VALID_USERNAME;
      validInput.username = false;
   } else {
      errorsForm.username = "";
      validInput.username = true;
   }

   if (!value.password) {
      errorsForm.password = `Password ${ERROR.NOT_NULL}`;
      validInput.password = false;
   } else if (!isPassword(value.password)) {
      errorsForm.password = ERROR.VALID_PASSWORD;
      validInput.password = false;
   } else {
      errorsForm.password = "";
      validInput.password = true;
   }

   return {errorsForm, validInput};
};
