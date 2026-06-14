# Customer Support Ticket System

A full-stack web application for managing customer support tickets. This system allows customers to submit support tickets and view their submitted tickets in real-time.

## Features

- ✅ Submit support tickets with customer details and issue description
- ✅ View all submitted support tickets
- ✅ Categorize tickets by issue type
- ✅ Track customer information (name, email)
- ✅ Responsive and user-friendly interface
- ✅ RESTful API backend with MySQL database

## Tech Stack

### Frontend
- **React** 19.2.6 - JavaScript library for building user interfaces
- **Vite** - Next-generation frontend build tool
- **React Router DOM** 7.17.0 - Client-side routing
- **React DOM** 19.2.6 - React package for working with the DOM

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Fast, unopinionated web framework
- **MySQL** - Relational database
- **dotenv** - Environment variable management
- **CORS** - Cross-Origin Resource Sharing middleware

## Project Structure

```
Customer-Support-Ticket-System/
├── backend/
│   ├── db.js                 # Database connection setup
│   ├── index.js              # Express server initialization
│   ├── controllers/
│   │   └── ticket.controller.js    # Business logic for ticket operations
│   └── routes/
│       └── ticket.route.js         # API route definitions
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx           # Main application component
│   │   ├── main.jsx          # React entry point
│   │   ├── index.css         # Global styles
│   │   ├── App.css           # App component styles
│   │   ├── assets/           # Static assets
│   │   └── components/
│   │       ├── Submitticket.jsx    # Form to submit new tickets
│   │       └── Viewticket.jsx      # Display all tickets
│   ├── public/               # Public static files
│   ├── package.json          # Frontend dependencies
│   ├── vite.config.js        # Vite configuration
│   ├── eslint.config.js      # ESLint configuration
│   └── index.html            # HTML entry point
│
└── README.md                 # Project documentation
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MySQL Server
- npm or yarn package manager

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory with the following variables:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_DATABASE=customer_support
DB_PORT=3306
```

4. Create the MySQL database and table:
```sql
CREATE DATABASE customer_support;

USE customer_support;

CREATE TABLE tickets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customername VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

5. Start the backend server:
```bash
npm start
```
The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173` (or the port shown in terminal)

## Usage

1. **Submit a Ticket**: 
   - Navigate to the "Submit Ticket" page
   - Fill in your name, email, select a category, and describe your issue
   - Click submit to create a new ticket

2. **View Tickets**:
   - Navigate to the "View Ticket" page
   - See all submitted support tickets with customer information

## API Endpoints

### Get All Tickets
```
GET /get-ticket
```
**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "customername": "John Doe",
      "email": "john@example.com",
      "category": "billing",
      "description": "Issue with invoice",
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "msg": "success"
}
```

### Create a Ticket
```
POST /add-ticket
```
**Request Body:**
```json
{
  "customername": "John Doe",
  "email": "john@example.com",
  "category": "technical",
  "description": "Cannot login to my account"
}
```
**Response:**
```json
{
  "data": [{"insertId": 1, "affectedRows": 1}],
  "msg": "success"
}
```

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint code analysis

### Backend
- `npm start` - Start the Express server

## Database Schema

### tickets table
| Column | Type | Constraints |
|--------|------|-------------|
| id | INT | PRIMARY KEY, AUTO_INCREMENT |
| customername | VARCHAR(255) | NOT NULL |
| email | VARCHAR(255) | NOT NULL |
| category | VARCHAR(100) | NOT NULL |
| description | TEXT | NOT NULL |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP |

## Development

### Adding New Features

1. **Backend**: Add new routes in `backend/routes/ticket.route.js` and corresponding controller functions in `backend/controllers/ticket.controller.js`
2. **Frontend**: Create new components in `frontend/src/components/` and add routes in `frontend/src/App.jsx`

### Code Quality

- Run ESLint to check code quality: `npm run lint`
- Follow React best practices and functional component patterns
- Use async/await for asynchronous operations

## Environment Variables

### Backend (.env file)
```
DB_HOST=localhost          # MySQL host
DB_USER=root              # MySQL user
DB_PASSWORD=password      # MySQL password
DB_DATABASE=customer_support  # Database name
DB_PORT=3306              # MySQL port
```

## Troubleshooting

### Database Connection Issues
- Ensure MySQL server is running
- Verify database credentials in `.env` file
- Check that the database and table exist

### CORS Errors
- Ensure CORS middleware is properly configured in backend
- Check that frontend is making requests to the correct backend URL

### Port Already in Use
- Change the port in `backend/index.js` (currently 5000)
- Or kill the process using the port: `netstat -ano | findstr :5000` (Windows)

## Future Enhancements

- [ ] User authentication and authorization
- [ ] Ticket status tracking (Open, In Progress, Closed)
- [ ] Search and filter functionality
- [ ] Ticket assignment to support agents
- [ ] Email notifications
- [ ] Ticket priority levels
- [ ] Admin dashboard
- [ ] Database pagination

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Support

For issues and questions, please open an issue on the GitHub repository.

---

**Created**: 2024  
**Last Updated**: June 2024
