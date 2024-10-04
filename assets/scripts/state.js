/**
 * Manages the application state.
 * Includes functionality for updating, getting state, and saving it persistently.
 */

import storageService from './services/storageService.js';

const state = {
    notes: [], // List of sticky notes
    settings: {
        theme: 'light', // Default theme
        highContrast: false
    }
};

// Update the application state and persist the changes
function updateState(updates) {
    Object.assign(state, updates);
    render(); // TODO: Implement `render` to reflect changes on the UI effectively.
    saveState();
}

// Save the current state using the storage service
function saveState() {
    storageService.saveState(state);
}

// Get the current application state
function getState() {
    return state;
}

export default { state, updateState, getState };

// TODO: Add state validation logic to ensure consistency before updates.
// TODO: Add methods to handle deep cloning of state to avoid unintended mutations.
