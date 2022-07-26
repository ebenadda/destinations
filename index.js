import express from "express";
const server = express(); // This server is deaf
import Cors from "cors";
import { filterDestinations } from "./helpers.js";

server.use(Cors());

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port:${PORT}`);
});

const destinationsDB = {
  123456: {
    destination: "Eiffel Tower",
    location: "Paris",
    photo:
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  234567: {
    destination: "Big Ben",
    location: "London",
    photo:
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
  },
};

server.get("/destinations", (req, res) => {
  //console.log(req.query);
  // check for a city query parameter
  const city = req.query.city;
  filterDestinations({ city, destinationsDB, res });
});

// GET /destinations/city/:myCity
//localhost:3000/destinations/city/Durham
server.get("/destinations/city/:myCity", (req, res) => {
  //log the city passed in the url as a named route parameter
  const city = req.params.myCity;
  filterDestinations({ city, destinationsDB, res });
});
