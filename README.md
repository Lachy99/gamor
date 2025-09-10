# Gamor App - Prueba Técnica

## Descripción

Gamor es una aplicación web desarrollada en React con Vite que simula una plataforma para encontrar jugadores y conectarse en diferentes videojuegos. La aplicación incluye funcionalidades de autenticación, sistema de temas claro/oscuro, y una interfaz responsiva.

## Características

- Sistema de autenticación con persistencia de sesión
- Tema claro/oscuro con persistencia de preferencias
- Interfaz completamente responsiva
- Panel de búsqueda de jugadores por plataforma y juego
- Panel central con personajes temáticos
- Diseño de tarjetas de categorías
- Temporizador de cuenta regresiva

## Tecnologías Utilizadas

- React 18
- Vite
- CSS Modules
- Context API (para estado global)
- React Router
- LocalStorage (para persistencia)

## Instalación y Ejecución

1. Clonar el repositorio:

git clone <url-del-repositorio>
cd gamor-app

2. Instalar las dependencias:

npm install

3. Ejecutar el servidor de desarrollo:

npm run dev

4. Abrir navegador en:

http://localhost:5173

## Estructura del Proyecto

src/
├── components/ # Componentes de la aplicación
├── context/ # Contextos de React (Auth, Theme)
├── data/ # Datos mock y constantes
├── styles/ # Estilos globales y de tema
└── main.jsx # Punto de entrada de la aplicación

## Credenciales de Prueba

Para probar el sistema de autenticación, utilice los datos de los usuarios definidos en el moockData.js
