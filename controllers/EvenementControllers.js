const EvenementService = require('../services/EvenementService');
// on importe le service Evenement 
class EvenementController {
    // on declare la classe EvenementController 
    async getAllEvenement(req, res) { // on declare la fonction getAllEvenement 
        try { // on declare le try  
            const evenement = await EvenementService.getAllEvenement();
            // on declare la const Evenement qui va recuperer tous les Evenements 
            res.json(evenement);
            // on renvoie les Evenements au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la console 
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de la récupération des Evenements' });
            // on renvoie l'erreur au format json 
        }
    }
    async addEvenement(req, res) { // on declare la fonction addEvenement 
        try { // on declare le try 
            const evenement = await
                EvenementService.addEvenement(req.body);
            // on declare la const Evenement qui va recuperer la Evenement 
            res.status(201).json(evenement);
            // on renvoie la Evenement au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la 
            console
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de l\'ajout de la Evenement' });
            // on renvoie l'erreur au format json 
        }
    }
    async getEvenementById(req, res) { // on declare la fonction getEvenementById 
        try { // on declare le try 
            const evenement = await EvenementService.getEvenementById(req.params.id);
            // on declare la const Evenement qui va recuperer la Evenement par son id 
            if (!evenement) { // si la Evenement n'existe pas 
                return res.status(404).json({ error: 'Evenement non trouvée' });
                // on renvoie l'erreur au format json 
            }
            res.json(evenement);
            // on renvoie la Evenement au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la console 
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de la récupération de la Evenement' });
            // on renvoie l'erreur au format json 
        }
    }
    async updateEvenement(req, res) { // on declare la fonction updateEvenement 
        try { // on declare le try 
            const evenement = await EvenementService.updateEvenement(req.params.id, req.body);
            // on declare la const Evenement qui va recuperer la Evenement par son id 
            if (!evenement) { // si la Evenement n'existe pas 
                return res.status(404).json({ error: 'Evenement non trouvée' });
                // on renvoie l'erreur au format json 
            }
            res.json(evenement);
            // on renvoie la Evenement au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la console 
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de la mise à jour de la Evenement' });
            // on renvoie l'erreur au format json 
        }
    }
    async deleteEvenement(req, res) { // on declare la fonction deleteEvenement 
        try { // on declare le try 
            const evenement = await EvenementService.deleteEvenement(req.params.id);
            // on declare la const Evenement qui va recuperer la Evenement par son id 
            if (!evenement) { // si la Evenement n'existe pas 
                return res.status(404).json({ error: 'Evenement non trouvée' });
                // on renvoie l'erreur au format json 
            }
            res.json({ message: 'Evenement supprimée avec succès' });
            // on renvoie le message de succes au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la console 
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de la suppression de la Evenement' });
            // on renvoie l'erreur au format json 
        }
    }
}

module.exports = new EvenementController();
// on exporte la classe EvenementController