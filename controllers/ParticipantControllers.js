const ParticipantService = require('../services/ParticipantService');
// on importe le service Participant 
class ParticipantController {
    // on declare la classe ParticipantController 
    async getAllParticipant(req, res) { // on declare la fonction getAllParticipant 
        try { // on declare le try  
            const participant = await ParticipantService.getAllParticipant();
            // on declare la const Participant qui va recuperer tous les Participants 
            res.json(participant);
            // on renvoie les Participants au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la console 
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de la récupération des Participants' });
            // on renvoie l'erreur au format json 
        }
    }
    async addParticipant(req, res) { // on declare la fonction addParticipant 
        try { // on declare le try 
            const participant = await
                ParticipantService.addParticipant(req.body);
            // on declare la const Participant qui va recuperer la Participant 
            res.status(201).json(participant);
            // on renvoie la Participant au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la 
            console
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de l\'ajout de la Participant' });
            // on renvoie l'erreur au format json 
        }
    }
    async getParticipantById(req, res) { // on declare la fonction getParticipantById 
        try { // on declare le try 
            const participant = await ParticipantService.getParticipantById(req.params.id);
            // on declare la const Participant qui va recuperer la Participant par son id 
            if (!participant) { // si la Participant n'existe pas 
                return res.status(404).json({ error: 'Participant non trouvée' });
                // on renvoie l'erreur au format json 
            }
            res.json(participant);
            // on renvoie la Participant au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la console 
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de la récupération de la Participant' });
            // on renvoie l'erreur au format json 
        }
    }
    async updateParticipant(req, res) { // on declare la fonction updateParticipant 
        try { // on declare le try 
            const participant = await ParticipantService.updateParticipant(req.params.id, req.body);
            // on declare la const Participant qui va recuperer la Participant par son id 
            if (!participant) { // si la Participant n'existe pas 
                return res.status(404).json({ error: 'Participant non trouvée' });
                // on renvoie l'erreur au format json 
            }
            res.json(participant);
            // on renvoie la Participant au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la console 
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de la mise à jour de la Participant' });
            // on renvoie l'erreur au format json 
        }
    }
    async deleteParticipant(req, res) { // on declare la fonction deleteParticipant 
        try { // on declare le try 
            const participant = await ParticipantService.deleteParticipant(req.params.id);
            // on declare la const Participant qui va recuperer la Participant par son id 
            if (!participant) { // si la Participant n'existe pas 
                return res.status(404).json({ error: 'Participant non trouvée' });
                // on renvoie l'erreur au format json 
            }
            res.json({ message: 'Participant supprimée avec succès' });
            // on renvoie le message de succes au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la console 
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de la suppression de la Participant' });
            // on renvoie l'erreur au format json 
        }
    }
}

module.exports = new ParticipantController();
// on exporte la classe ParticipantController