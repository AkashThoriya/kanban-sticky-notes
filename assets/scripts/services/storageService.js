/**
 * Storage Service to manage local persistence (using localStorage).
 * Provides methods to save and load the application state.
 */

const STORAGE_KEY = 'kanbanNotesApp';

// Save state to localStorage with proper error handling
function saveState(state) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
        console.error("Error saving state to localStorage", error);
    }
}

// Load state from localStorage with error handling
function loadState() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null;
    } catch (error) {
        console.error("Error loading state from localStorage", error);
        return null;
    }
}

export default { saveState, loadState };

// TODO: Add data versioning to manage future updates to data schema.
