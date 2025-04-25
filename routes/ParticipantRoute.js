const express = require('express'); 
// on importe express 
const router = express.Router(); 
// on declare le router 
const ParticipantController = require('../controllers/ParticipantControllers'); 
// on importe le controller Participant

router.get("/", (req, res) => { // on declare la route get 
ParticipantController.getAllParticipant(req, res); // on declare la fonction getAllParticipant 
});

router.post("/", (req, res) => { 
    ParticipantController.addParticipant(req, res); 
});

router.get("/:id", (req, res) => { 
    ParticipantController.getParticipantById(req, res); 
});

router.put("/:id", (req, res) => { 
    ParticipantController.updateParticipant(req, res); 
});

router.delete("/:id", (req, res) => { 
    ParticipantController.deleteParticipant(req, res); 
});

module.exports = router; 
// on exporte le router