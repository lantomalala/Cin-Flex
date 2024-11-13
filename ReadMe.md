# Site CinéFlex

CinéFlex est une plateforme dédiée à la gestion de la location de films, conçue pour offrir une expérience fluide et agréable à ses utilisateurs. Inspiré par la structure robuste de notre base de données et des entités qui la composent, notre projet semble s'orienter autour d'un système de gestion complet pour une entreprise de location de films. Que ce soit pour une vidéothèque traditionnelle ou un service de streaming moderne, CinéFlex facilite la gestion des films, des abonnements et des transactions. Notre objectif est de rendre la location de films simple, rapide et accessible à tous.

# Voici les principales entités et leurs attributs :

**I**. **Film** (film)

1. film_id (clé primaire)
2. title (titre)
3. description
4. release_year (année de sortie)
5. rental_duration (durée de location)
6. rental_rate (tarif de location)
7. length (durée)
8. replacement_cost (coût de remplacement)
9. rating (classification)
10. special_features (caractéristiques spéciales)
11. fulltext (texte complet)
12. last_update (dernière mise à jour)



**II**. **Customer** (client)

1. customer_id (clé primaire)
2. store_id (magasin)
3. first_name (prénom)
4. last_name (nom)
5. email
6. address_id (adresse)
7. activebool (statut actif)
8. create_date (date de création)
9. last_update (dernière mise à jour)
10. active (actif)



**III**. **Rental** (location)

1. rental_id (clé primaire)
2. rental_date (date de location)
3. inventory_id (inventaire)
4. customer_id (client)
5. return_date (date de retour)
6. staff_id (employé)
7. last_update (dernière mise à jour)



**IV**. **Payment** (paiement)

1. payment_id (clé primaire)
2. customer_id (client)
3. staff_id (employé)
4. rental_id (location)
5. amount (montant)
6. payment_date (date de paiement)



**V**. **Staff** (employé)

1. staff_id (clé primaire)
2. first_name (prénom)
3. last_name (nom)
4. address_id (adresse)
5. email
6. store_id (magasin)
7. active (actif)
8. username (nom d'utilisateur)
9. password (mot de passe)
10. last_update (dernière mise à jour)
11. picture (photo)





Les relations principales sont :

- Un film peut avoir plusieurs catégories (film_category)
- Un film peut avoir plusieurs acteurs (film_actor)
- Un film peut avoir plusieurs copies dans l'inventaire
- Une location concerne un client, un employé et un article de l'inventaire
- Un paiement est lié à une location, un client et un employé
- Chaque entité possède un attribut last_update pour le suivi des modifications


Cette structure permet de gérer efficacement un système de location de films avec le suivi des stocks, des clients, des locations et des paiements.


