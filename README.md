# TP03 - Mini-bibliothèque

## Théroie

## Les configurations

**Installer Express

* npm init (construit le fichier de base)
    * npm install express

**Plug : moteurs de modèles (view engine) page web dynamique

Pour qu' Express puisse utiliser le rendu, nous devons définir deux paramètre

* app.set('views', path.join(__dirname,'views'));
* app.set('view engine', 'pug');

**Ensuite, installez le package
* npm install pug

**Modules de middleware Express :
* body-parser
  * const bodyParser = require('body-parser');
* morgan
    * const logger = require('morgan');
