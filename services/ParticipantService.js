const { } = require("sequelize"); 
// on importe sequelize 
const Participant = require('../models/participant'); 
const Ticket = require("../models/ticket");
// on importe le model Participant 
class ParticipantService { 
async getAllParticipant() { // on declare la fonction getAllParticipant 
return await Participant.findAll({
    include: [
        {
            model: Ticket,
            as: "ticket",
        },
    ],
}); // on renvoie tous les Participant 
}
async addParticipant(participant) { // on declare la fonction addParticipant 
    return await Participant.create(participant); // on renvoie la Participant 
}
async getParticipantById(id) { // on declare la fonction getParticipantById 
    return await Participant.findByPk(id); // on renvoie la Participant par son id 
}
async updateParticipant(id, participant) { // on declare la fonction updateParticipant 
    return await Participant.update(participant, { where: { id_participant: id } }); // on renvoie la Participant mise à jour 
}
async deleteParticipant(id) { // on declare la fonction deleteParticipant 
    return await Participant.destroy({ where: { id_participant: id } }); // on renvoie la Participant supprimée 
}
}

module.exports = new ParticipantService(); 
// on exporte le service Participant 