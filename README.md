# FOAD-CRUD

## Capture d'écran du MCD et MLD dans le dossier "mlc_mld"

## SCRIPT SQL

CREATE TABLE organizer(
   id_organizer INT,
   nom VARCHAR(255),
   prenom VARCHAR(255),
   age VARCHAR(255),
   PRIMARY KEY(id_organizer)
);

CREATE TABLE participant(
   id_participant INT,
   nom VARCHAR(255),
   prenom VARCHAR(255),
   age VARCHAR(255),
   PRIMARY KEY(id_participant)
);

CREATE TABLE ticket(
   id_ticket INT,
   type VARCHAR(255),
   prix VARCHAR(255),
   numero VARCHAR(255),
   id_participant INT NOT NULL,
   PRIMARY KEY(id_ticket),
   UNIQUE(id_participant),
   FOREIGN KEY(id_participant) REFERENCES participant(id_participant)
);

CREATE TABLE evenement(
   id_evenement INT,
   nom VARCHAR(255),
   dateEvent DATETIME,
   id_organizer INT NOT NULL,
   PRIMARY KEY(id_evenement),
   FOREIGN KEY(id_organizer) REFERENCES organizer(id_organizer)
);

CREATE TABLE assister(
   id_evenement INT,
   id_participant INT,
   PRIMARY KEY(id_evenement, id_participant),
   FOREIGN KEY(id_evenement) REFERENCES evenement(id_evenement),
   FOREIGN KEY(id_participant) REFERENCES participant(id_participant)
);

