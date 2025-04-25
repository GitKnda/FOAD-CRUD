const OrganizerService = require('../services/OrganizerService');
// on importe le service Organizer 
class OrganizerController {
    // on declare la classe OrganizerController 
    async getAllOrganizer(req, res) { // on declare la fonction getAllOrganizer 
        try { // on declare le try  
            const organizer = await OrganizerService.getAllOrganizer();
            // on declare la const Organizer qui va recuperer tous les Organizers 
            res.json(organizer);
            // on renvoie les Organizers au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la console 
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de la récupération des Organizers' });
            // on renvoie l'erreur au format json 
        }
    }
    async addOrganizer(req, res) { // on declare la fonction addOrganizer 
        try { // on declare le try 
            const organizer = await
                OrganizerService.addOrganizer(req.body);
            // on declare la const Organizer qui va recuperer la Organizer 
            res.status(201).json(organizer);
            // on renvoie la Organizer au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la 
            console
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de l\'ajout de la Organizer' });
            // on renvoie l'erreur au format json 
        }
    }
    async getOrganizerById(req, res) { // on declare la fonction getOrganizerById 
        try { // on declare le try 
            const organizer = await OrganizerService.getOrganizerById(req.params.id);
            // on declare la const Organizer qui va recuperer la Organizer par son id 
            if (!organizer) { // si la Organizer n'existe pas 
                return res.status(404).json({ error: 'Organizer non trouvée' });
                // on renvoie l'erreur au format json 
            }
            res.json(organizer);
            // on renvoie la Organizer au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la console 
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de la récupération de la Organizer' });
            // on renvoie l'erreur au format json 
        }
    }
    async updateOrganizer(req, res) { // on declare la fonction updateOrganizer 
        try { // on declare le try 
            const organizer = await OrganizerService.updateOrganizer(req.params.id, req.body);
            // on declare la const Organizer qui va recuperer la Organizer par son id 
            if (!organizer) { // si la Organizer n'existe pas 
                return res.status(404).json({ error: 'Organizer non trouvée' });
                // on renvoie l'erreur au format json 
            }
            res.json(organizer);
            // on renvoie la Organizer au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la console 
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de la mise à jour de la Organizer' });
            // on renvoie l'erreur au format json 
        }
    }
    async deleteOrganizer(req, res) { // on declare la fonction deleteOrganizer 
        try { // on declare le try 
            const organizer = await OrganizerService.deleteOrganizer(req.params.id);
            // on declare la const Organizer qui va recuperer la Organizer par son id 
            if (!organizer) { // si la Organizer n'existe pas 
                return res.status(404).json({ error: 'Organizer non trouvée' });
                // on renvoie l'erreur au format json 
            }
            res.json({ message: 'Organizer supprimée avec succès' });
            // on renvoie le message de succes au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la console 
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de la suppression de la Organizer' });
            // on renvoie l'erreur au format json 
        }
    }
}

module.exports = new OrganizerController();
// on exporte la classe OrganizerController