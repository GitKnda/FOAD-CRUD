const express = require('express'); 
// on importe express 
const router = express.Router(); 
// on declare le router 
const OrganizerController = require('../controllers/OrganizerControllers'); 
// on importe le controller Organizer

router.get("/", (req, res) => { // on declare la route get 
OrganizerController.getAllOrganizer(req, res); // on declare la fonction getAllOrganizer 
});

router.post("/", (req, res) => { 
    OrganizerController.addOrganizer(req, res); 
});

router.get("/:id", (req, res) => { 
    OrganizerController.getOrganizerById(req, res); 
});

router.put("/:id", (req, res) => { 
    OrganizerController.updateOrganizer(req, res); 
});

router.delete("/:id", (req, res) => { 
    OrganizerController.deleteOrganizer(req, res); 
});

module.exports = router; 
// on exporte le router