# Multilingual To-Do List App

This is a simple yet powerful **To-Do List App** built with React. The app allows users to manage tasks, store them in local storage, and toggle between English and French using i18next for multilingual support.

## Features

- **Add Tasks**: Add new tasks to your to-do list.
- **Toggle Task Completion**: Mark tasks as completed or incomplete.
- **Delete Tasks**: Remove tasks from the list.
- **Multilingual Support**: Switch between English and French with a button click.
- **Local Storage**: Tasks are saved in the browser’s local storage, so they persist between sessions.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **i18next**: An internationalization framework for handling multiple languages.
- **LocalStorage**: Browser storage to save tasks locally.

## Prerequisites

- **Node.js** and **npm** installed on your machine.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/japneetsingh035/todo-list-app.git
cd todo-list-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the application

Start the app locally:

```bash
npm start
```

The app should now be running at `http://localhost:3000`.

## How to Use

1. **Add a Task**: Enter a task in the input box and click "Add Task."
2. **Mark Task as Completed**: Click the "Toggle" button next to the task to mark it as completed or incomplete.
3. **Delete a Task**: Click the "Delete" button next to a task to remove it from the list.
4. **Change Language**: Use the "English" or "Français" buttons to toggle the language of the app.

## Folder Structure

```plaintext
src/
  ├── App.js                   # Main React component
  ├── App.css                  # Styling for the app
  ├── locales/                 # Folder for language resources
  │   ├── en/
  │   │   └── translation.json  # English translations
  │   ├── fr/
  │   │   └── translation.json  # French translations
  └── index.js                 # React entry point
```

### Example Translations:

`locales/en/translation.json`
```json
{
  "title": "To-Do List",
  "description": "Manage your tasks easily.",
  "placeholder": "Enter a task",
  "add": "Add Task",
  "toggle": "Toggle",
  "delete": "Delete"
}
```

`locales/fr/translation.json`
```json
{
  "title": "Liste de tâches",
  "description": "Gérez vos tâches facilement.",
  "placeholder": "Entrez une tâche",
  "add": "Ajouter une tâche",
  "toggle": "Basculer",
  "delete": "Supprimer"
}
```

## Future Enhancements

- **Edit Tasks**: Add the ability to edit tasks after they’ve been added.
- **Due Dates**: Assign and display due dates for tasks.
- **Task Prioritization**: Allow users to prioritize tasks.
- **Drag-and-Drop Reordering**: Enable tasks to be reordered via drag and drop.

## License

This project is licensed under the MIT License.

---

