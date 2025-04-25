const express = require('express'); 
// on importe express 
const router = express.Router(); 
// on declare le router 
const TicketController = require('../controllers/TicketControllers'); 
// on importe le controller Ticket

router.get("/", (req, res) => { // on declare la route get 
TicketController.getAllTicket(req, res); // on declare la fonction getAllTicket 
});

router.post("/", (req, res) => { 
    TicketController.addTicket(req, res); 
});

router.get("/:id", (req, res) => { 
    TicketController.getTicketById(req, res); 
});

router.put("/:id", (req, res) => { 
    TicketController.updateTicket(req, res); 
});

router.delete("/:id", (req, res) => { 
    TicketController.deleteTicket(req, res); 
});

module.exports = router; 
// on exporte le router