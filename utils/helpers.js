/**
 * Utility functions for reusable operations across the application.
 */

function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * Creates an HTML element with specified attributes.
 * @param {string} tagName - The tag name of the element to be created.
 * @param {Object} attributes - Key-value pairs of attributes to be added to the element.
 * @returns {HTMLElement} - The newly created DOM element.
 */
function createElementWithAttributes(tagName, attributes = {}) {
    const element = document.createElement(tagName);
    Object.keys(attributes).forEach(key => {
        element.setAttribute(key, attributes[key]);
    });
    return element;
}

export default { debounce, createElementWithAttributes };

// TODO: Add a utility function to sanitize user input to prevent XSS attacks.
