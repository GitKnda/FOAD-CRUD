const Organizer = require("./organizer");
const Evenement = require("./evenement");
const Ticket = require("./ticket");
const Participant = require("./participant");
const Assister = require("./assister");

//relation 1 à N (organizer -> evenement)
Organizer.hasMany(Evenement, {
    foreignKey: "id_organizer",
    as: "evenement",
});
Evenement.belongsTo(Organizer, {
    foreignKey: "id_organizer",
    as: "organizer",
});


//relation 1 à 1 (participant -> ticket)
Participant.hasOne(Ticket, {
    foreignKey: "id_participant",
    as: "ticket",
});
Ticket.belongsTo(Participant, {
    foreignKey: "id_participant",
    as: "participant",
});

//relation N à N (evenement -> participant)
Evenement.belongsToMany(Participant, {
    through: Assister,
    foreignKey: "id_evenement",
    as: "participant",
});
Participant.belongsToMany(Evenement, {
    through: Assister,
    foreignKey: "id_participant",
    as: "evenement",
});

module.exports = {
    Evenement,
    Participant,
    Ticket,
    Assister,
    Organizer,
}