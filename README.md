# Product Management System

A full-featured Node.js application for managing products with admin and client interfaces. This application allows you to create, edit, view, and manage products with various attributes like price, discount, stock, etc.

## Features

### Admin Panel
- **Dashboard**: Overview of the system
- **Product Management**:
  - Create, read, update, and delete products
  - Change product status (active/inactive)
  - Bulk actions (activate, deactivate, delete multiple products)
  - Search functionality
  - Pagination
  - Image upload for product thumbnails
  - Form validation

### Client Area
- Home page with featured products
- Product listing page with details like price, discount, and stock
- Product detail pages with complete information
- Responsive design

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **Pug** - Template engine
- **Multer** - File upload handling
- **Express-flash** - Flash messages
- **Method-override** - HTTP method override for RESTful routes
- **Bootstrap** - Front-end framework

## Project Structure

```
├── config/             # Configuration files
├── controllers/        # Route controllers
│   ├── admin/          # Admin controllers
│   └── client/         # Client controllers
├── helpers/            # Helper functions
├── models/             # Database models
├── public/             # Static files
│   ├── admin/          # Admin assets
│   ├── css/            # CSS files
│   ├── images/         # Image files
│   ├── js/             # JavaScript files
│   └── uploads/        # Uploaded files
├── routers/            # Route definitions
│   ├── admin/          # Admin routes
│   └── client/         # Client routes
├── validates/          # Validation logic
├── views/              # View templates
│   ├── admin/          # Admin views
│   └── client/         # Client views
├── .env                # Environment variables
├── .gitignore          # Git ignore file
├── index.js            # Application entry point
└── package.json        # Project dependencies
```

## Installation

1. Clone the repository:
   ```
   git clone <https://github.com/Zung752003/productmanager.git>
   cd product-management
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   PORT = 3000
   MONGO_URL = <mongodb+srv://chungtawf:qXlwK7gO9Ma8ztrm@chungtawf.qyif2vb.mongodb.net/product-managerment>
   ```

4. Start the application:
   ```
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

### Admin Panel

Access the admin panel at:
```
http://localhost:3000/admin/dashboard
```

From here you can:
- Manage products
- Change product status
- Upload product images
- Perform bulk actions

### Client Area

Access the client area at:
```
http://localhost:3000
```

Here you can:
- Browse products
- View product details
- See pricing and discounts

## Database Schema

### Product Model

```javascript
{
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  stock: Number,
  thumbnail: String,
  status: String,
  position: String,
  slug: String,
  deleted: Boolean
}
```

## Features Implementation

### Image Upload

The application uses Multer to handle image uploads. Images are stored in the `/public/uploads/` directory.

### Flash Messages

Express-flash is used to display success and error messages to the user.

### Pagination

The product list includes pagination to handle large datasets efficiently.

### Search Functionality

The admin panel includes a search feature to quickly find products by title.

### Status Filtering

Products can be filtered by status (active/inactive) in the admin panel.
