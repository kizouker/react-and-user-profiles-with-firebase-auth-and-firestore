import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

/**
 * ============================================
 *  React Application Entry Point (main.jsx)
 * ============================================
 *
 * This file is the ONLY place where we call:
 * 
 *    ReactDOM.createRoot(...).render(<App />)
 *
 * Why?
 * ----
 *        -   React can only have ONE root renderer.
 *        -   All providers (Firebase, Auth, Router, etc.)
 *            must wrap <App /> at this top level.
 * 
 * 
 *        -   Components like App.jsx must *not* call render()
 *        —   they must only return JSX.
 *
 *        Visual architecture (Mermaid):
 *
 *        ```mermaid
 *        graph TD
 *        A["index.html<br>#root"] --> B["main.jsx"]
 *        B --> C["<FirebaseProvider>"]
 *        C --> D["<AuthProvider>"]
 *        D --> E["<App />"]
 *        E --> F["Your Components / Routes / UI"]
 *
 *        C -->|provides: { app, auth, db }| D
 *        D -->|provides: { user, role, login, logout }| E
 *        ```
 *
 *      Summary:
 *      --------
 *      main.jsx handles mounting the React app.
 *      App.jsx only returns UI. 
 *      ΩProviders wrap the app ONE time here.
 */



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

