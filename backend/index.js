const express = require("express");
const app = express();
const port = 5000;
const ticket=require("./../backend/routes/ticket.route");
app.use(ticket);
const cors = require("cors");
app.use(cors());
app.use(express.json());    
   
app.listen(port, () => {
  console.log("Server is running on port 5000");
});