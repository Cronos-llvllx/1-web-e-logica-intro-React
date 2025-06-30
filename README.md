# 1-web-e-logica-intro-React
Es un master en Frontend impartido por la escuela Dev.f , donde aprenderemos este Modulo React.

----------------------------------------
Hector Daniel Gomez Medina
----------------------------------------
```
/src
├── assets/
├── components/           # (Opcional, para componentes muy pequeños y reutilizables)
├── hooks/                # (Opcional, para hooks personalizados)
├── pages/                # (Opcional, para componentes de página completa)
│
├── AuthContext.jsx       # (Taller 8) Define el contexto de autenticación
├── AuthProvider.jsx      # (Taller 8) Componente que provee el estado de auth
├── useAuth.jsx           # (Taller 8) Hook para consumir el contexto de auth
│
├── HomePage.jsx          # (Taller 7) Página de inicio
├── LoginPage.jsx         # (Taller 8) Página de login
├── DashboardPage.jsx     # (Taller 8) Página protegida
├── ProtectedRoute.jsx    # (Taller 8) Componente para proteger rutas
├── RootLayout.jsx        # (Taller 7) Layout principal con la navegación
│
├── BusinessCard.jsx      # (Taller 1)
├── ShoppingList.jsx      # (Taller 2)
├── TaskTimer.jsx         # (Taller 3)
├── SpaceExplorer.jsx     # (Taller 4)
├── GuessTheNumberGame.jsx# (Taller 5)
├── FeedbackMessage.jsx   # (Taller 5)
├── GuessForm.jsx         # (Taller 5)
├── InventoryManager.jsx  # (Taller 6)
├── WorkshopsPage.jsx     # (Taller 7) Página que agrupa los talleres 1-6
│
├── main.jsx              # Punto de entrada, configura el router
└── index.css             # Estilos globales
```

--------------------
# Master en Frontend: Proyecto Final de Introducción a React

Este repositorio es el resultado de una serie de talleres diseñados para enseñar los fundamentos y conceptos avanzados de React. Cada taller se basa en el anterior, culminando en una aplicación de una sola página (SPA) completamente funcional con enrutamiento y un sistema de autenticación simulado.

La aplicación fue construida utilizando **Vite + React**.

## 🚀 Estructura y Tecnologías del Proyecto

* **Framework**: React 19
* **Herramienta de Build**: Vite
* **Enrutamiento**: `react-router-dom`
* **Manejo de Estado Global**: React Context API
* **Hooks Fundamentales**: `useState`, `useEffect`
* **Hooks Avanzados**: `useMemo`, `useReducer`, `useRef`, `useCallback`
* **Estilos**: CSS-in-JS (objetos de estilo en componentes) y CSS global.

---

## Talleres Implementados

A continuación se detalla cada uno de los 8 talleres que componen este proyecto final.

### 1. Intro a React: Tarjeta de Presentación

El primer paso en el viaje de React. Este taller se enfocó en la creación de un componente funcional estático, entendiendo la sintaxis JSX y cómo renderizar información en la interfaz.

* **Conceptos Clave**: Componentes Funcionales, JSX, Props (implícitas).
* **Archivos**: `src/BusinessCard.jsx`

![Imagen del Taller 1](https://github.com/Cronos-llvllx/1-web-e-logica-intro-React/blob/main/tarjeta-presentacion-react/public/1.png)

---

### 2. Manejo de Estado: Lista de Compras

Introducción al hook `useState` para manejar datos que cambian con el tiempo. Se construyó una lista de compras interactiva donde los usuarios pueden añadir y eliminar elementos, viendo los cambios reflejados en tiempo real.

* **Conceptos Clave**: Hook `useState`, manejo de eventos, actualización de arreglos en el estado (inmutabilidad).
* **Archivos**: `src/ShoppingList.jsx`

![Imagen del Taller 1](https://github.com/Cronos-llvllx/1-web-e-logica-intro-React/blob/main/tarjeta-presentacion-react/public/1.png)


---

### 3. Hooks `useEffect` y `useMemo`: Contador de Tareas

Se exploraron los efectos secundarios y la optimización. `useEffect` se usó para crear un reloj en tiempo real, y `useMemo` para optimizar un cálculo costoso (suma de horas), evitando que se ejecute en cada render.

* **Conceptos Clave**: Hook `useEffect` para efectos secundarios, `useMemo` para memorización y optimización de cálculos.
* **Archivos**: `src/TaskTimer.jsx`
![Imagen del Taller 2](https://github.com/Cronos-llvllx/1-web-e-logica-intro-React/blob/main/tarjeta-presentacion-react/public/2.png)


---

### 4. Ciclo de vida de Componentes: Explorador Espacial

Este taller profundizó en `useEffect` para simular las fases del ciclo de vida de un componente: montaje, actualización y desmontaje. La función de limpieza de `useEffect` fue crucial para prevenir fugas de memoria (detener un `setInterval`).

* **Conceptos Clave**: Montaje (`useEffect` con `[]`), Actualización (`useEffect` con dependencias), Desmontaje (función de retorno en `useEffect`).
* **Archivos**: `src/SpaceExplorer.jsx`
![Imagen del Taller 3](https://github.com/Cronos-llvllx/1-web-e-logica-intro-React/blob/main/tarjeta-presentacion-react/public/3.png)
![Imagen del Taller 4](https://github.com/Cronos-llvllx/1-web-e-logica-intro-React/blob/main/tarjeta-presentacion-react/public/4.png)

---

### 5. Renderizado Condicional y Composición: Adivina el Número

Se construyó un juego interactivo aplicando dos conceptos centrales de React. La **composición** se usó para dividir la UI en componentes pequeños y reutilizables (`GuessForm`, `FeedbackMessage`). El **renderizado condicional** se usó para mostrar diferentes mensajes y elementos de la UI según el estado del juego.

* **Conceptos Clave**: Renderizado condicional (operador `&&`, ternarios), composición de componentes, levantamiento de estado (lifting state up).
* **Archivos**: `src/GuessTheNumberGame.jsx`, `src/GuessForm.jsx`, `src/FeedbackMessage.jsx`

![Imagen del Taller 5](https://github.com/Cronos-llvllx/1-web-e-logica-intro-React/blob/main/tarjeta-presentacion-react/public/5.png)

---

### 6. Hooks Avanzados: Gestor de Inventario

Introducción a hooks para manejar lógica y estado más complejos. `useReducer` centralizó la lógica de actualización del inventario, `useRef` permitió interactuar directamente con un elemento del DOM (`.focus()`), y `useCallback` optimizó la creación de funciones.

* **Conceptos Clave**: `useReducer` para estados complejos, `useRef` para referencias al DOM, `useCallback` para memorización de funciones.
* **Archivos**: `src/InventoryManager.jsx`

![Imagen del Taller 5](https://github.com/Cronos-llvllx/1-web-e-logica-intro-React/blob/main/tarjeta-presentacion-react/public/5.png)

---

### 7. Manejo de Rutas: Plataforma de Citas

La aplicación se transformó en una Single Page Application (SPA) con múltiples vistas utilizando `react-router-dom`. Se crearon rutas estáticas (`/citas`) y dinámicas (`/citas/:id`) para una experiencia de navegación fluida sin recargar la página.

* **Conceptos Clave**: `createBrowserRouter`, `RouterProvider`, `<Link>`, `<Outlet>`, `useParams`.
* **Archivos**: `src/main.jsx` (configuración del router), `src/RootLayout.jsx`, `src/HomePage.jsx`, `src/AppointmentsPage.jsx`, `src/AppointmentDetailPage.jsx`.

![Imagen del Taller 7](https://github.com/Cronos-llvllx/1-web-e-logica-intro-React/blob/main/tarjeta-presentacion-react/public/6.png)

---

### 8. Proyecto Final: Autenticación y Rutas Protegidas

El proyecto culminante. Se implementó un sistema de autenticación simulado utilizando el **Context API** (`createContext`, `useContext`) para gestionar el estado del usuario globalmente. Se creó un componente `<ProtectedRoute />` que actúa como "guardia", restringiendo el acceso a ciertas rutas solo para usuarios autenticados.

* **Conceptos Clave**: React Context API para manejo de estado global, rutas protegidas, redirección (`<Navigate>`), composición de rutas.
* **Archivos**: `src/AuthContext.jsx`, `src/AuthProvider.jsx`, `src/useAuth.jsx`, `src/ProtectedRoute.jsx`, `src/LoginPage.jsx`, `src/DashboardPage.jsx`.

![Imagen del Taller 8](https://github.com/Cronos-llvllx/1-web-e-logica-intro-React/blob/main/tarjeta-presentacion-react/public/7.png)
