/**
 * Sticky Note Component - Represents individual sticky notes.
 * Contains methods for creating, rendering, and handling sticky note behavior.
 */

const StickyNote = {
    /**
     * Create a sticky note element based on the given note data.
     * @param {Object} note - Note data containing title, description, etc.
     * @returns {HTMLElement} - The DOM element for the sticky note.
     */
    createNote: function (note) {
        const noteElement = document.createElement('div');
        noteElement.classList.add('sticky-note');
        noteElement.setAttribute('role', 'listitem');
        noteElement.setAttribute('aria-label', `Note titled ${note.title}`);
        noteElement.setAttribute('id', note.id); // Unique ID for drag-and-drop identification

        noteElement.innerHTML = `
            <h3 contenteditable="true" aria-label="Note Title">${note.title}</h3>
            <p contenteditable="true" aria-label="Note Description">${note.description}</p>
            <button class="lock-btn" aria-label="Lock Note">Lock</button>
        `;

        this.addEventListeners(noteElement, note);

        return noteElement;
    },

    /**
     * Adds event listeners to the note for interactivity.
     * @param {HTMLElement} noteElement - The sticky note DOM element.
     * @param {Object} note - The note data.
     */
    addEventListeners: function (noteElement, note) {
        // Lock/unlock button handler
        noteElement.querySelector('.lock-btn').addEventListener('click', () => {
            const isLocked = note.locked;
            note.locked = !isLocked;
            noteElement.querySelector('.lock-btn').textContent = isLocked ? 'Lock' : 'Unlock';
            // TODO: Update state to reflect locked status change
        });

        // TODO: Add drag-and-drop listeners to the sticky note for repositioning
    }
};

export default StickyNote;

// TODO: Implement autosave when editing a note title or description.
