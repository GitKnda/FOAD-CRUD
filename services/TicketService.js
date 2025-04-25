const { } = require("sequelize"); 
// on importe sequelize 
const Ticket = require('../models/ticket'); 
// on importe le model Ticket 
class TicketService { 
async getAllTicket() { // on declare la fonction getAllTicket 
return await Ticket.findAll(); // on renvoie tous les Ticket 
}
async addTicket(ticket) { // on declare la fonction addTicket 
    return await Ticket.create(ticket); // on renvoie la Ticket 
}
async getTicketById(id) { // on declare la fonction getTicketById 
    return await Ticket.findByPk(id); // on renvoie la Ticket par son id 
}
async updateTicket(id, ticket) { // on declare la fonction updateTicket 
    return await Ticket.update(ticket, { where: { id_ticket: id } }); // on renvoie la Ticket mise à jour 
}
async deleteTicket(id) { // on declare la fonction deleteTicket 
    return await Ticket.destroy({ where: { id_ticket: id } }); // on renvoie la Ticket supprimée 
}
}

module.exports = new TicketService(); 
// on exporte le service Ticket 