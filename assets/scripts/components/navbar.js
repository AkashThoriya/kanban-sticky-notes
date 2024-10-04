/**
 * Navbar Component - Handles rendering and interactivity of the navigation bar.
 * Allows users to switch themes, add notes, and other global actions.
 */

import themeService from '../services/themeService.js';
import state from '../state.js';

const Navbar = {
    /**
     * Initialize the Navbar component.
     * Sets up event listeners for the buttons and handles user interactions.
     */
    init: function () {
        // Load navbar HTML from the HTML template
        document.getElementById('navbar-container').innerHTML = `
            <nav>
                <button id="toggle-theme" aria-label="Toggle Theme">Toggle Theme</button>
                <button id="add-note" aria-label="Add Note">+</button>
                <button id="remove-note" aria-label="Remove Note">-</button>
            </nav>
        `;
        this.addEventListeners();
    },

    /**
     * Add event listeners for interactivity.
     * Handles user actions such as switching themes and adding notes.
     */
    addEventListeners: function () {
        document.getElementById('toggle-theme').addEventListener('click', () => {
            const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
            themeService.switchTheme(newTheme);
        });

        document.getElementById('add-note').addEventListener('click', () => {
            // TODO: Implement logic for generating a unique note ID
            const newNote = { id: generateUniqueId(), title: 'New Note', description: '', color: 'yellow', locked: false };
            const notes = [...state.state.notes, newNote];
            state.updateState({ notes });
        });

        // TODO: Implement functionality for the "remove-note" button.
    }
};

function generateUniqueId() {
    // TODO: Implement proper unique ID generation (e.g., using UUID).
    return '_' + Math.random().toString(36).substr(2, 9);
}

export default Navbar;

// TODO: Add keyboard accessibility for buttons.
