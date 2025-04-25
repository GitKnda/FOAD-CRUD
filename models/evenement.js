const { Model, DataTypes } = require('sequelize'); 
// on declare la const model et dataTypes pour utiliser les types de données 
const sequelize = require('../config/sequelize'); 
const Organizer = require('./organizer');
// on importe la config de sequelize 
class Evenement extends Model {} 
// on declare la class stagiaires qui herite de model 
Evenement.init( // on initialise le model 
    { 
        id_evenement: { // on declare les champs de la table 
            type: DataTypes.INTEGER, // on declare le type de données 
            primaryKey: true, // on declare la clé primaire 
            autoIncrement: true, // on declare l'auto increment 
        }, 
        nom: { 
            type: DataTypes.STRING(255), 
            allowNull: false, 
        }, 
        dateEvent: { 
            type: DataTypes.DATE, 
            allowNull: false, 
        }, 
        id_organizer: {
            type: DataTypes.INTEGER,
            references: {
              model: Organizer,
              key: "id_organizer",
            },
          }, 
    }, 
    { 
        sequelize, // on declare la config de sequelize 
        modelName: 'Evenement', // on declare le nom du model 
        tableName: 'evenement', // on declare le nom de la table 
        timestamps: false, // on declare les timestamps 
    } 
); 
module.exports = Evenement; 
// on exporte le model stagiaires 