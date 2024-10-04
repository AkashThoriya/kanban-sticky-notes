/**
 * Main entry point for initializing the application.
 * Loads persisted state, initializes components, and ensures the page is rendered correctly.
 */

import Navbar from './components/navbar.js';
import KanbanBoard from './components/kanbanBoard.js';
import Modal from './components/modal.js';
import state from './state.js';
import storageService from './services/storageService.js';

document.addEventListener('DOMContentLoaded', () => {
    // Load persisted state if available
    const persistedState = storageService.loadState();
    if (persistedState) {
        state.updateState(persistedState);
    }

    // Initialize all components
    Navbar.init(); // Navbar setup
    KanbanBoard.init(); // Kanban board setup
    Modal.init(); // Tutorial modal setup

    // TODO: Add more initialization methods, such as adding listeners for window resize or offline mode detection.
});
