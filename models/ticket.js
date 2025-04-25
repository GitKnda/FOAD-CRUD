const { Model, DataTypes } = require('sequelize'); 
// on declare la const model et dataTypes pour utiliser les types de données 
const sequelize = require('../config/sequelize'); 
// on importe la config de sequelize 
const Participant = require('./participant');
class Ticket extends Model {} 
// on declare la class stagiaires qui herite de model 
Ticket.init( // on initialise le model 
    { 
        id_ticket: { // on declare les champs de la table 
            type: DataTypes.INTEGER, // on declare le type de données 
            primaryKey: true, // on declare la clé primaire 
            autoIncrement: true, // on declare l'auto increment 
        }, 
        type: { 
            type: DataTypes.STRING(255), 
            allowNull: false, 
        }, 
        prix: { 
            type: DataTypes.STRING(255), 
            allowNull: false, 
        },
        numero: { 
            type: DataTypes.STRING(255), 
            allowNull: false, 
        }, 
        id_participant: {
            type: DataTypes.INTEGER,
            references: {
              model: Participant,
              key: "id_participant",
            },
          }, 
    }, 
    { 
        sequelize, // on declare la config de sequelize 
        modelName: 'Ticket', // on declare le nom du model 
        tableName: 'ticket', // on declare le nom de la table 
        timestamps: false, // on declare les timestamps 
    } 
); 
module.exports = Ticket; 
// on exporte le model stagiaires 