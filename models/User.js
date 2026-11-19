
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
});

module.exports = mongoose.model("User", userSchema);


/*
Express = handling requests (API layer), here user is asking something
Mongoose = handling database (DB layer), here store or fetch data from DB

express is used in
server.js
routes/

because express is for Creating server, Defining routes, Handling requests/responses

mongoose is used in 
models/
config/db.js

Because Mongoose is for: Defining schema, Connecting to MongoDB, CRUD operations
*/