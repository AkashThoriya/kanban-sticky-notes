/**
 * Theme Service to handle theme switching between light and dark modes.
 * Provides a method to switch themes and update the UI accordingly.
 */

import state from '../state.js';

function switchTheme(theme) {
    const themeStylesheet = document.getElementById('theme-stylesheet');
    
    if (theme === 'dark') {
        themeStylesheet.setAttribute('href', './assets/styles/dark-mode.css');
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        themeStylesheet.setAttribute('href', './assets/styles/light-mode.css');
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }
    
    // Update the global state with the user's theme preference
    state.updateState({ settings: { ...state.state.settings, theme } });
}

export default { switchTheme };
