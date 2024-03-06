
# Documentation de déploiement de l'application My-folio
## 1. Introduction
Cette documentation décrit les étapes nécessaires au déploiement de l'application My-folio dans différents environnements. L'objectif de cette application est de présenter un échantillon de l'environnement de développement et de présenter les applications développées.

## 2. Prérequis
Avant de commencer le déploiement, assurez-vous d'avoir les éléments suivants :

Outils de déploiement : Vercel
Aucun paramètre de configuration nécessaire pour chaque environnement.

## 3. Déploiement
### 3.1 Déploiement local (pour le développement)
Pour déployer l'application localement pour le développement, suivez les étapes suivantes :

- Cloner le dépôt Git de l'application.
- Installer les dépendances en exécutant `npm install`.
- Exécuter la commande `npm run dev`.

### 3.2 Déploiement en environnement de production
Pour déployer l'application en production, suivez les étapes suivantes :

- Push les changements sur le repository GitHub sur la branch `main`.

Aucune configuration spécifique n'est nécessaire pour l'environnement de production.
Le déploiement en production est géré automatiquement par Vercel, relié au repository GitHub.

## 4. Maintenance
Une fois l'application déployée, assurez-vous de mettre en place des processus de maintenance réguliers, notamment :

- Mise à jour des packages et des projets.
Les mises à jour de l'application sont gérées en effectuant un nouveau `push` sur la branche main.
La performance de l'application est surveillée en insérant Speed Insights dans le code JavaScript, et un dashboard est disponible sur Vercel.

## 5. Problèmes courants et résolutions
En cas de problèmes courants lors du déploiement ou de l'utilisation de l'application, suivez ces étapes :

Problème courant : Erreur lors de la construction du projet.
Solution recommandée : Tester le code en local en amont.