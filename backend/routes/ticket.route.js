const express = require("express");
const ticket = require("./../controllers/ticket.controller");
const router = express.Router();
const cors = require("cors");
router.use(cors());
router.use(express.json());

router.get("/get-ticket", async (req, res) => {
  try {
    const data = await ticket.getAllTickets();
    res.status(200).send({
      data: data,
      msg: "succes",
    });
    console.log(data);
  } catch (error) {
    throw error;
  }
});


router.post("/add-ticket",  async (req, res) => {
  try {
    const data = await ticket.addTicket(req.body);  
    res.status(200).send({
      data: data,
      msg: "succes",
    });
    console.log(data);
  } catch (error) {
    throw error;
  } 
});
module.exports = router;