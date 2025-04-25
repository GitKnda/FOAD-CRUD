const { } = require("sequelize"); 
// on importe sequelize 
const Organizer = require('../models/organizer'); 
const Evenement = require("../models/evenement");
// on importe le model Organizer 
class OrganizerService { 
async getAllOrganizer() { // on declare la fonction getAllOrganizer 
return await Organizer.findAll({
    include: [
        {
            model: Evenement,
            as: "evenement",
        },
    ],
}); // on renvoie tous les Organizer 
}
async addOrganizer(organizer) { // on declare la fonction addOrganizer 
    return await Organizer.create(organizer); // on renvoie la Organizer 
}
async getOrganizerById(id) { // on declare la fonction getOrganizerById 
    return await Organizer.findByPk(id); // on renvoie la Organizer par son id 
}
async updateOrganizer(id, organizer) { // on declare la fonction updateOrganizer 
    return await Organizer.update(organizer, { where: { id_organizer: id } }); // on renvoie la Organizer mise à jour 
}
async deleteOrganizer(id) { // on declare la fonction deleteOrganizer 
    return await Organizer.destroy({ where: { id_organizer: id } }); // on renvoie la Organizer supprimée 
}
}

module.exports = new OrganizerService(); 
// on exporte le service Organizer 