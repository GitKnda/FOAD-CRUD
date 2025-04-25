const express = require('express');
// on importe express

require('dotenv').config();
// on importe le fichier .env

const app = express();
// on declare l'application express

app.use(express.json());
// on declare le middleware pour parser le json

require("./models/Association");

app.get('/', (req, res) => {
    res.send('Hello World!');
});
// on declare la route racine

const evenementRoute = require('./routes/EvenementRoute');
app.use('/evenement', evenementRoute);

const organizerRoute = require('./routes/OrganizerRoute');
app.use('/organizer', organizerRoute);

const participantRoute = require('./routes/ParticipantRoute');
app.use('/participant', participantRoute);

const ticketRoute = require('./routes/TicketRoute');
app.use('/ticket', ticketRoute);

app.use((req, res) => {
    res.status(404).json({ message: 'Route non trouvé' });
});

app.listen(process.env.PORT, () => {
    console.log(`Votre serveur est lancé sur http://127.0.0.1:${process.env.PORT}`);
});