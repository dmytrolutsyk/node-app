## Exercice v3.1
# Cloner le projet:
```
$ git clone https://github.com/dmytrolutsyk/node-app.git
```
# Installer le projet:
```
$ npx express-generator --hogan --git
$ npm install
```
# Déployer le projet:
```
$ heroku create nodedl
$ git push heroku master
```
# Vérifier le déploiement
```
$ heroku ps:scale web=1
$ heroku open
```