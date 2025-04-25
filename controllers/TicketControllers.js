const TicketService = require('../services/TicketService');
// on importe le service Ticket 
class TicketController {
    // on declare la classe TicketController 
    async getAllTicket(req, res) { // on declare la fonction getAllTicket 
        try { // on declare le try  
            const ticket = await TicketService.getAllTicket();
            // on declare la const Ticket qui va recuperer tous les Tickets 
            res.json(ticket);
            // on renvoie les Tickets au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la console 
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de la récupération des Tickets' });
            // on renvoie l'erreur au format json 
        }
    }
    async addTicket(req, res) { // on declare la fonction addTicket 
        try { // on declare le try 
            const ticket = await
                TicketService.addTicket(req.body);
            // on declare la const Ticket qui va recuperer la Ticket 
            res.status(201).json(ticket);
            // on renvoie la Ticket au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la 
            console
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de l\'ajout de la Ticket' });
            // on renvoie l'erreur au format json 
        }
    }
    async getTicketById(req, res) { // on declare la fonction getTicketById 
        try { // on declare le try 
            const ticket = await TicketService.getTicketById(req.params.id);
            // on declare la const Ticket qui va recuperer la Ticket par son id 
            if (!ticket) { // si la Ticket n'existe pas 
                return res.status(404).json({ error: 'Ticket non trouvée' });
                // on renvoie l'erreur au format json 
            }
            res.json(ticket);
            // on renvoie la Ticket au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la console 
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de la récupération de la Ticket' });
            // on renvoie l'erreur au format json 
        }
    }
    async updateTicket(req, res) { // on declare la fonction updateTicket 
        try { // on declare le try 
            const ticket = await TicketService.updateTicket(req.params.id, req.body);
            // on declare la const Ticket qui va recuperer la Ticket par son id 
            if (!ticket) { // si la Ticket n'existe pas 
                return res.status(404).json({ error: 'Ticket non trouvée' });
                // on renvoie l'erreur au format json 
            }
            res.json(ticket);
            // on renvoie la Ticket au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la console 
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de la mise à jour de la Ticket' });
            // on renvoie l'erreur au format json 
        }
    }
    async deleteTicket(req, res) { // on declare la fonction deleteTicket 
        try { // on declare le try 
            const ticket = await TicketService.deleteTicket(req.params.id);
            // on declare la const Ticket qui va recuperer la Ticket par son id 
            if (!ticket) { // si la Ticket n'existe pas 
                return res.status(404).json({ error: 'Ticket non trouvée' });
                // on renvoie l'erreur au format json 
            }
            res.json({ message: 'Ticket supprimée avec succès' });
            // on renvoie le message de succes au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la console 
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de la suppression de la Ticket' });
            // on renvoie l'erreur au format json 
        }
    }
}

module.exports = new TicketController();
// on exporte la classe TicketController