import {useEffect, useState} from 'react'
const Viewticket = () => {
  const [tickets, setTickets] = useState([]);
  const fetchTickets = async () => {
    try {
      const response = await fetch("http://localhost:5000/get-ticket");
      const data = await response.json();
      setTickets(data.data);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };
  const ticketcount = tickets.length;
  useEffect(() => {
    fetchTickets();
  }, []);
  return (
    <>
      <div>View Tickets</div>
      <div>
        Search by Email Id:
        <input type="text" placeholder="Enter email to search" />
        <button>Search</button>
      </div>
      <div>
        Filter by Status:
        <select name="" id="">
          <option value="">All</option>
          <option value="open">Open</option>
          <option value="in-progress">In Progress</option>
          <option value="Resolved">Closed</option>
        </select>
      </div>
      <div> tickets count: {ticketcount}</div>
      <span> <button onClick={fetchTickets}>Refresh</button></span>
      <div>
        <table border={1} cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <th>Sr</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Category</th>
              <th>Description</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={ticket.id}>
                <td>{index + 1}</td>
                <td>{ticket.customername}</td>
                <td>{ticket.email}</td>
                <td>{ticket.category}</td>
                <td>{ticket.description}</td>
                <td>{ticket.status}</td>
                <td>{ticket.createdat}</td>
                <td>
                  <button>Update Status</button>
                
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Viewticket;
