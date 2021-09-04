# projects-from-scratch-step-by-step
Proyectos para ir explicando las diferentes funcionalidades de los mapas

Para trabajar con los proyectos individualmente entraremos en sus directorios y siempre tenemos que tener dos ficheros:
* **index.html** Donde dibujamos el mapa y añadimos la información deseada.
* **index.ts** Configuramos todo lo relacionado en lo mapas para mostrarlo en el div "map".

Una vez que ya hemos desarrollado la funcionalidad deseada, para ejecutar en el navegador en modo desarrollo, lo haremos de esta manera:
```
npx parcel index.html --open
```
Se abre la instancia del servidor y se abre automáticamente la página.

Si queremos compilar debemos de ejecutar el siguiente comando:
```
npx parcel build index.html --public-url '.'
```

Proyecto interesante para trabajar con desniveles:

https://bitbucket.org/amugika/gpxreaderandstats/src/master/
