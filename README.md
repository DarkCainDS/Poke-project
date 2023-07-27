Pokémon App
Este es un proyecto Angular que utiliza la PokeAPI para buscar y mostrar información sobre Pokémon. También utiliza Firebase para el hosting y NgRx para el manejo del estado de la aplicación.

Características
Lista de todos los Pokémon con paginación.
Búsqueda de Pokémon por nombre.
Visualización de los detalles de un Pokémon específico.
Capacidad para marcar un Pokémon como favorito.
Cómo iniciar
Para iniciar la aplicación en tu entorno local:

Clona este repositorio.
Ve al directorio del proyecto y ejecuta npm install para instalar todas las dependencias.
Ejecuta ng serve para iniciar la aplicación. Navega a http://localhost:4200/. La aplicación se recargará automáticamente si cambias alguno de los archivos de origen.
Despliegue en Firebase
Para desplegar la aplicación en Firebase:

Instala Firebase CLI con npm install -g firebase-tools.
Inicia sesión en Firebase con firebase login.
Inicializa tu proyecto Firebase con firebase init.
Construye tu aplicación Angular con ng build --prod o ng build --configuration production.
Despliega tu aplicación en Firebase con firebase deploy.
Estructura de los componentes
El componente principal es HomeComponent, que incluye las siguientes funciones:

ngOnInit(): Carga los nombres de todos los Pokémon al inicio.
_filter(value: string): Filtra los nombres de los Pokémon en función del valor de entrada.
loadAllPokemonNames(): Carga los nombres de todos los Pokémon desde la PokeAPI.
getPokemonDetails(name: string): Obtiene los detalles de un Pokémon específico.
loadPokemonNames(page: number): Carga los nombres de los Pokémon para una página específica.
nextPage(), previousPage(): Funciones para navegar entre las páginas de Pokémon.
searchPokemon(): Función para buscar Pokémon por nombre.
setAsFavourite(), clearFavourite(): Funciones para manejar el estado de los Pokémon favoritos.
handleImgError(event: Event, defaultImgUrl: string): Función para manejar los errores de las imágenes de los Pokémon.
Contribuciones
Las contribuciones son bienvenidas. Para cualquier cambio importante, por favor abre un issue primero para discutir lo que te gustaría cambiar.