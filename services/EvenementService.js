const { } = require("sequelize"); 
// on importe sequelize 
const Evenement = require('../models/evenement'); 
const Participant = require("../models/participant");
// on importe le model Evenement 
class EvenementService { 
async getAllEvenement() { // on declare la fonction getAllEvenement 
return await Evenement.findAll({
    include: [
        {
            model: Participant,
            as: "participant",
        },
    ],
}); // on renvoie tous les Evenement 
}
async addEvenement(evenement) { // on declare la fonction addEvenement 
    return await Evenement.create(evenement); // on renvoie la Evenement 
}
async getEvenementById(id) { // on declare la fonction getEvenementById 
    return await Evenement.findByPk(id); // on renvoie la Evenement par son id 
}
async updateEvenement(id, evenement) { // on declare la fonction updateEvenement 
    return await Evenement.update(evenement, { where: { id_evenement: id } }); // on renvoie la Evenement mise à jour 
}
async deleteEvenement(id) { // on declare la fonction deleteEvenement 
    return await Evenement.destroy({ where: { id_evenement: id } }); // on renvoie la Evenement supprimée 
}
}

module.exports = new EvenementService(); 
// on exporte le service Evenement 