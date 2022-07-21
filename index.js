const express = require("express");
const server = express(); // This server is deaf

const PORT = process.env.PORT || 8000;
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
  res.send(destinationsDB);
});
// CREATE (OPTIONAL)

// READ => DO THIS
// GET /destinations => send back the whole db

// UPDATE (OPTIONAL)

// DELETE (OPTIONAL)
