const { Model, DataTypes } = require('sequelize');
// on declare la const model et dataTypes pour utiliser les types de données 
const sequelize = require('../config/sequelize');
// on importe la config de sequelize
const Evenement = require('./evenement');
const Participant = require('./participant');

class Assister extends Model { }
// on declare la class stagiaires qui herite de model 
Assister.init( // on initialise le model 
  {
    id_evenement: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: Evenement,
          key: "id_evenement",
        },
      },
      id_participant: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: Participant,
          key: "id_participant",
        },
      },
    },
  {
    sequelize, // on declare la config de sequelize 
    modelName: 'Assister', // on declare le nom du model 
    tableName: 'assister', // on declare le nom de la table 
    timestamps: false, // on declare les timestamps 
  }
);
module.exports = Assister;
// on exporte le model stagiaires 