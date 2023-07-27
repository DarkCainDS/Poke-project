
Para tu archivo README específico, aquí está el mismo texto con un poco de formato de Markdown:

```markdown
# Pokémon App (https://poke-project-826c0.web.app/)

Este es un proyecto Angular que utiliza la [PokeAPI](https://pokeapi.co/) para buscar y mostrar información sobre Pokémon. También utiliza Firebase para el hosting y NgRx para el manejo del estado de la aplicación.

## Características

- Lista de todos los Pokémon con paginación.
- Búsqueda de Pokémon por nombre.
- Visualización de los detalles de un Pokémon específico.
- Capacidad para marcar un Pokémon como favorito.

## Cómo iniciar

Para iniciar la aplicación en tu entorno local:

1. Clona este repositorio.
2. Ve al directorio del proyecto y ejecuta `npm install` para instalar todas las dependencias.
3. Ejecuta `ng serve` para iniciar la aplicación. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos de origen.

## Despliegue en Firebase

Para desplegar la aplicación en Firebase:

1. Instala Firebase CLI con `npm install -g firebase-tools`.
2. Inicia sesión en Firebase con `firebase login`.
3. Inicializa tu proyecto Firebase con `firebase init`.
4. Construye tu aplicación Angular con `ng build --prod` o `ng build --configuration production`.
5. Despliega tu aplicación en Firebase con `firebase deploy`.

## Estructura de los componentes

El componente principal es `HomeComponent`, que incluye las siguientes funciones:

- `ngOnInit()`: Carga los nombres de todos los Pokémon al inicio.
- `_filter(value: string)`: Filtra los nombres de los Pokémon en función del valor de entrada.
- `loadAllPokemonNames()`: Carga los nombres de todos los Pokémon desde la PokeAPI.
- `getPokemonDetails(name: string)`: Obtiene los detalles de un Pokémon específico.
- `loadPokemonNames(page: number)`: Carga los nombres de los Pokémon para una página específica.
- `nextPage()`, `previousPage()`: Funciones para navegar entre las páginas de Pokémon.
- `searchPokemon()`: Función para buscar Pokémon por nombre.
- `setAsFavourite()`, `clearFavourite()`: Funciones para manejar el estado de los Pokémon favoritos.
- `handleImgError(event: Event, defaultImgUrl: string)`: Función para manejar los errores de las imágenes de los Pokémon.

## Contribuciones

Las contribuciones son bienvenidas. Para cualquier cambio importante, por favor abre un issue primero para discutir lo que te gustaría cambiar.
