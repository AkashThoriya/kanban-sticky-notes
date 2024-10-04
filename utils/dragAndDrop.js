/**
 * Drag-and-Drop operations for Kanban board items.
 * Handles the setup and logic for drag and drop to ensure smooth user interaction.
 */

function enableDragAndDrop(container) {
    // Add listeners for dragstart, dragover, drop events

    container.addEventListener('dragstart', handleDragStart);
    container.addEventListener('dragover', handleDragOver);
    container.addEventListener('drop', handleDrop);

    function handleDragStart(event) {
        // Set data for dragging
        event.dataTransfer.setData('text/plain', event.target.id);
        // TODO: Add visual feedback for the drag operation (e.g., opacity)
    }

    function handleDragOver(event) {
        event.preventDefault(); // Allow dropping by preventing the default behavior
    }

    function handleDrop(event) {
        event.preventDefault();
        const id = event.dataTransfer.getData('text/plain');
        const draggableElement = document.getElementById(id);
        container.appendChild(draggableElement);
        // TODO: Update state to reflect new positions after drop
    }
}

export default { enableDragAndDrop };

// TODO: Implement snapping of notes to grid layout on drop.
