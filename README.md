# 🗺️ Store Locator API

A RESTful API built with **Node.js**, **Express**, and **MongoDB** for managing and locating stores. This project uses geocoding to store and retrieve physical locations, allowing for future integration with map-based frontends or proximity-based features.

## 🚀 Features

- 📦 Add new stores with geolocation
- 📋 Retrieve all stored locations
- 🧭 Store addresses converted to coordinates using a geocoding API
- 🔐 Environment-based configuration
- 🔄 CORS support for frontend integration
- 📂 Clean and modular project structure

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Geolocation**: node-geocoder (supports providers like MapQuest, Google, OpenStreetMap, etc.)
- **Others**: dotenv, CORS, body-parser, custom error handling

## 📁 Project Structure

```
project/
│
├── config/
│   ├── db.js              # MongoDB connection logic
│   └── .env               # Environment variables (PORT, DB URI, API keys, etc.)
│
├── controllers/
│   └── storeControllers.js   # Logic for GET and POST endpoints
│
├── models/
│   └── StoreModel.js      # Mongoose schema for Store
│
├── routers/
│   └── storeRouter.js     # Route definitions for store API
│
├── utils/
│   └── geocoder.js        # Geocoder config and export
│
├── public/                # Static frontend (if needed)
├── server.js              # Entry point of the app
├── package.json
└── README.md
```

## 📦 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/store-locator-api.git
cd store-locator-api
```

2. **Install dependencies**

```bash
npm install
```

3. **Setup environment variables**

Create a `.env` file inside the `config/` folder:

```env
PORT=3000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
GEOCODER_PROVIDER=openstreetmap
GEOCODER_API_KEY=your_api_key_if_required
```

> You can use providers like OpenStreetMap (free) or MapQuest/Google (API key required).

4. **Run the server**

```bash
npm run dev
```

Server will start on: `http://localhost:3000`

---

## 📡 API Endpoints

### `GET /api/v1/stores`

- Returns all stored store locations

### `POST /api/v1/stores`

- Adds a new store with geocoded location
- Accepts JSON body with fields like:
  ```json
  {
    "name": "Sample Store",
    "address": "123 Main Street, City, Country"
  }
  ```

---

## 🧪 Testing the API

You can use tools like:

- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)
- Or integrate it with any frontend app

---

## 🌍 Future Improvements

- Search stores by radius (geospatial queries)
- Display stores on interactive maps using Leaflet/Mapbox/Google Maps
- Add store categories or tags
- Authentication & user-specific stores


