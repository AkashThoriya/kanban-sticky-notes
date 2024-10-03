# Kanban Sticky Note Web App

A modern, minimalist sticky note and Kanban-style web app focused on ease of use, functionality, and an appealing aesthetic. This project allows users to organize tasks in a Kanban board using sticky notes, featuring light and dark mode themes, drag-and-drop functionality, and more.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Folder Structure](#folder-structure)
6. [Roadmap](#roadmap)
7. [Contributing](#contributing)
8. [License](#license)

## Features

- Modern, minimalist UI with a Kanban board style.
- Light and Dark mode themes.
- Add, edit, lock/unlock, and remove sticky notes.
- Responsive layout for desktop, tablet, and mobile.
- Keyboard accessibility and ARIA support.
- Drag-and-drop functionality for easy note reordering.
- Guided tutorial for new users.

## Technologies Used

- **HTML5** for structuring the application.
- **CSS3** for styling and responsive design.
- **JavaScript (ES6)** for application logic and functionality.
- **LocalStorage** for data persistence.

## Installation

To run this project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/AkashThoriya/kanban-sticky-notes.git
    ```
2. Navigate to the project folder:
    ```bash
    cd kanban-sticky-notes
    ```
3. Open the project in VS Code or any other code editor.
4. Run the application using Live Server:
    - Open `index.html` with the Live Server extension in VS Code.

## Usage

- **Add a Sticky Note**: Click on the '+' button in the navigation bar.
- **Edit Notes**: Click on the note's title or description to edit directly.
- **Lock/Unlock Notes**: Use the lock button on each note to toggle its editing state.
- **Drag-and-Drop**: Reorder notes by dragging them to desired positions on the Kanban board.
- **Theme Toggle**: Switch between Light and Dark mode using the theme toggle button in the navbar.

## Folder Structure

```
kanban-sticky-notes/
├── index.html
├── assets/
│   ├── icons/
│   ├── fonts/
│   ├── styles/
│   │   ├── main.css
│   │   ├── reset.css
│   │   ├── variables.css
│   │   ├── dark-mode.css
│   │   ├── light-mode.css
│   │   └── components/
│   └── scripts/
│       ├── main.js
│       ├── state.js
│       ├── services/
│       └── components/
├── components/
├── data/
└── utils/
```

## Roadmap

The development of this project is divided into distinct phases, each with specific milestones to help track progress:

### Phase 1: Initial Setup & Planning
- [x] **Define the Low-Level Design (LLD)** for the project, including folder structure, classes, and functions.
- [x] **Create the project repository** and set up the initial folder structure and files.
- [x] **Add a README file** with project overview, installation steps, and usage details.

### Phase 2: Basic Implementation
- [ ] **Set up project essentials**:
  - Add a CSS reset file to ensure consistency across browsers.
  - Implement base HTML (`index.html`) and link the necessary JavaScript and CSS files.
- [ ] **Implement UI Structure**:
  - Create HTML templates for components like the navbar, sticky notes, and modal.
  - Implement basic styles for each component (using `reset.css`, `variables.css`, and component-specific CSS).
  
### Phase 3: Core Functionalities
- [ ] **State Management**:
  - Implement state handling for storing sticky notes and app settings in `state.js`.
  - Add functions for updating, saving, and retrieving state.
- [ ] **Basic CRUD Operations for Notes**:
  - Implement the ability to add, edit, lock/unlock, and remove sticky notes.
  - Link CRUD operations to the UI using event listeners.
- [ ] **Implement Theme Switching**:
  - Create light and dark themes using `themeService.js`.
  - Add buttons for theme toggling and save user preferences.

### Phase 4: Advanced Features
- [ ] **Add Drag-and-Drop Functionality**:
  - Implement drag-and-drop behavior for sticky notes using `dragAndDrop.js`.
  - Add smooth animations for drag-and-drop operations.
- [ ] **Accessibility Improvements**:
  - Add ARIA roles and labels to all interactive elements for improved accessibility.
  - Ensure keyboard navigation is possible throughout the application.
- [ ] **Local Storage Integration**:
  - Use `storageService.js` to persist notes and settings in `localStorage`.

### Phase 5: Polishing and Enhancements
- [ ] **Notification System**:
  - Implement a toast notification system for actions like "Note Added" or "Note Removed" using `notificationService.js`.
- [ ] **Guided Tutorial**:
  - Implement a guided tutorial for new users using `modal.js` to explain the features of the app.
- [ ] **Responsiveness**:
  - Ensure the layout works smoothly on different devices (desktop, tablet, mobile).
  - Add media queries for better responsiveness.

### Phase 6: Testing & Finalization
- [ ] **Testing**:
  - Manually test all features for bugs or inconsistencies.
  - Conduct cross-browser testing to ensure compatibility.
- [ ] **Code Cleanup & Optimization**:
  - Remove unnecessary `console.log()` statements and debug code.
  - Optimize CSS and JavaScript for better performance.
- [ ] **Deployment**:
  - Set up a GitHub repository and push the code.
  - Deploy the app using GitHub Pages for easy public access.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.