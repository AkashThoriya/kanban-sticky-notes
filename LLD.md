
# Low-Level Design (LLD) for Kanban Sticky Note Web App

This document outlines the Low-Level Design (LLD) of the **Kanban Sticky Note Web App**. The LLD includes the folder structure, key components, classes, methods, and data flows within the application. It serves as a guide for developers to implement the features of the application effectively.

## Table of Contents
1. [Overview](#overview)
2. [Folder Structure](#folder-structure)
3. [Components and Files](#components-and-files)
4. [Services and Utilities](#services-and-utilities)
5. [Classes and Functions Overview](#classes-and-functions-overview)
6. [State Management](#state-management)
7. [To-Do and Future Enhancements](#to-do-and-future-enhancements)

## Overview

The **Kanban Sticky Note Web App** is a modern web application for managing tasks using sticky notes in a Kanban board style. It allows users to add, edit, remove, drag, and drop notes, and features both light and dark mode themes. The app is built using **HTML**, **CSS**, and **JavaScript** (ES6).

## Folder Structure

The project is organized to ensure modularity, maintainability, and separation of concerns:

```
minimal-kanban-app/
├── index.html
├── assets/
│   ├── icons/                # SVGs, icons, other images
│   ├── fonts/                # Fonts used in the application
│   ├── styles/
│   │   ├── main.css          # Main stylesheet combining all components
│   │   ├── reset.css         # CSS reset for consistent styling across browsers
│   │   ├── variables.css     # CSS variables for colors, spacing, fonts
│   │   ├── dark-mode.css     # Dark mode-specific styles
│   │   ├── light-mode.css    # Light mode-specific styles
│   │   └── components/       # Styles for individual components
│   └── scripts/
│       ├── main.js           # Main JavaScript file for app initialization
│       ├── state.js          # State management and data persistence
│       ├── services/         # Service files for various features
│       └── components/       # JavaScript files for each component
├── components/               # HTML templates for reusable components
├── data/                     # Mock data and configuration files
└── utils/                    # Utility functions (e.g., debounce, drag-and-drop)
```

## Components and Files

### 1. **HTML Templates (`components/`)**
- **navbar.html**: Template for the top navigation bar.
- **sticky-note.html**: Template for a sticky note card.
- **kanban-board.html**: Layout for the Kanban columns.
- **modal.html**: Template for the guided tutorial modal.

### 2. **JavaScript Components (`assets/scripts/components/`)**
- **navbar.js**: Handles rendering and interactivity of the navigation bar, including theme toggling and adding/removing sticky notes.
- **stickyNote.js**: Manages sticky note creation, rendering, and interaction.
- **kanbanBoard.js**: Responsible for managing and rendering the Kanban board, placing sticky notes, and managing their positions.
- **modal.js**: Implements the guided tutorial to help new users understand the features.

### 3. **JavaScript Services (`assets/scripts/services/`)**
- **storageService.js**: Handles data persistence using `localStorage`. This helps in saving user preferences and notes.
- **themeService.js**: Manages theme switching logic (light/dark mode).
- **notificationService.js**: Displays toast notifications to give feedback to the user on actions (e.g., "Note added").
- **accessibilityService.js**: Handles ARIA roles and makes sure all elements are accessible via keyboard.

### 4. **Utility Functions (`utils/`)**
- **helpers.js**: Contains common functions like `debounce()` to limit event firing, and `createElementWithAttributes()` to simplify creating HTML elements.
- **dragAndDrop.js**: Manages drag-and-drop interactions for moving sticky notes across the Kanban board.

## Classes and Functions Overview

### 1. **`Navbar` Component (`navbar.js`)**
- **Methods**:
  - `init()`: Initializes the navbar and adds event listeners.
  - `addEventListeners()`: Handles user interactions like toggling theme and adding new notes.

### 2. **`StickyNote` Component (`stickyNote.js`)**
- **Methods**:
  - `createNote()`: Creates a new sticky note DOM element based on the note data.
  - `addEventListeners(noteElement, note)`: Adds event listeners to each sticky note for interaction (e.g., lock/unlock).

### 3. **`KanbanBoard` Component (`kanbanBoard.js`)**
- **Methods**:
  - `init()`: Initializes the Kanban board and populates it with sticky notes.
  - `renderBoard()`: Renders all notes by looping through the current state.

### 4. **State Management (`state.js`)**
- **State Object**: Keeps track of `notes` and `settings` like theme.
- **Functions**:
  - `updateState(updates)`: Merges updates into the current state and triggers the `render` function.
  - `saveState()`: Uses `storageService` to persist state to `localStorage`.
  - `getState()`: Returns the current state of the app.

## Services and Utilities

### 1. **Storage Service (`storageService.js`)**
- **`saveState(state)`**: Stores the application state in `localStorage`.
- **`loadState()`**: Loads the saved state from `localStorage`.

### 2. **Theme Service (`themeService.js`)**
- **`switchTheme(theme)`**: Switches between light and dark mode by toggling CSS classes on the `<body>` element.

### 3. **Notification Service (`notificationService.js`)**
- **`showNotification(message)`**: Displays a toast notification with the provided message.

### 4. **Accessibility Service (`accessibilityService.js`)**
- **Purpose**: Enhances the app’s accessibility by adding proper ARIA attributes dynamically to components.

## State Management

The app's state is managed using a global state object (`state.js`). The main state attributes are:
- **notes**: An array of note objects, each with properties like `title`, `description`, `color`, `locked`.
- **settings**: Stores user preferences such as `theme` (light or dark).

### **State Flow**
1. **Initialization**: When the app loads, the persisted state (if available) is loaded from `localStorage` to initialize the state.
2. **Updating State**: Whenever an action occurs (e.g., adding a note), `updateState()` is called to change the state and re-render the affected parts of the UI.
3. **Persistence**: After every state change, `saveState()` persists the updated state to `localStorage`.


## Conclusion

This **LLD** is designed to guide the developers through building the Kanban Sticky Note Web App step by step, ensuring modularity, maintainability, and ease of collaboration. Each component, service, and utility function has a specific responsibility, contributing to the overall functionality and user experience.