const db = require("./../db");
async function getalltickets(body) {
  try {
    let get = await db.query(`SELECT * FROM tickets order by id desc;`);
    console.log("Getting Tickets Succesfull", get);
    return get[0];
  } catch (error) {
    throw error;
  }
}


async function addTicket(body) {
  try {
    let add =await db.query(
  `INSERT INTO tickets (customername,email,category,description) VALUES (?, ?, ?, ?);`,
  [body.customername, body.email, body.category, body.description]
);
    console.log("Adding Tickets Succesfull", add);
    return add;
  } catch (error) {
    throw error;
  }
}
module.exports = {
    getAllTickets: getalltickets,
    addTicket:addTicket
}

