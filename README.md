# Arkade

Angular Verson 12
Node Version 14.17


Install the Angular CLI
```npm install -g @angular/cli```

Create a workspace and initial application
```ng new my-app```

In the App folder:
npm install bootstrap --save
npm install jquery --save
npm install popper.js --save

In angular.json:
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
"scripts": [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js"
]

In src/style.css:

@import "~bootstrap/dist/css/bootstrap.css";
