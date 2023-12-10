const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userDetails: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    DOB: {
      type: Number,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  addressDetails: {
    doorNo: {
      type: String,
      required: true,
    },
    address1: {
      type: String,
      required: true,
    },
    address2: {
      type: String,
      required: false,
    },
    address3: {
      type: String,
      required: false,
    },
    district: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    pinCode: {
      type: Number,
      required: true,
    },
  },
  accountDetails: {
    accountNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    IFSC: {
      type: String,
      required: true,
      unique: true,
    },
  },
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
