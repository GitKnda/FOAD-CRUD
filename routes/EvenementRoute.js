const express = require('express'); 
// on importe express 
const router = express.Router(); 
// on declare le router 
const EvenementController = require('../controllers/EvenementControllers'); 
// on importe le controller Evenement

router.get("/", (req, res) => { // on declare la route get 
EvenementController.getAllEvenement(req, res); // on declare la fonction getAllEvenement 
});

router.post("/", (req, res) => { 
    EvenementController.addEvenement(req, res); 
});

router.get("/:id", (req, res) => { 
    EvenementController.getEvenementById(req, res); 
});

router.put("/:id", (req, res) => { 
    EvenementController.updateEvenement(req, res); 
});

router.delete("/:id", (req, res) => { 
    EvenementController.deleteEvenement(req, res); 
});

module.exports = router; 
// on exporte le router