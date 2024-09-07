Here’s a `README.md` file text for the "Daily Task Manager" project:

---

# Daily Task Manager

The **Daily Task Manager** is a simple web application that allows users to manage their daily tasks efficiently. Users can add, remove, and clear tasks using a clean interface built with **Tailwind CSS** and **JavaScript DOM Manipulation**. This project uses `appendChild` and `removeChild` to dynamically manage tasks in the DOM.

## Features

-   Add new tasks to the task list
-   Remove individual tasks
-   Clear all tasks at once
-   Responsive design using **Tailwind CSS**
-   Minimal and user-friendly interface

## Technologies Used

-   **HTML5**: For the structure of the application.
-   **Tailwind CSS**: For styling and layout.
-   **JavaScript**: For DOM manipulation, including adding and removing tasks.

## Installation and Setup

1. Clone the repository or download the files.

    ```bash
    git clone https://github.com/your-username/daily-task-manager.git
    ```

2. Open the `index.html` file in your preferred browser.

    ```bash
    open index.html
    ```

No additional setup is required as Tailwind CSS is loaded via CDN.

## File Structure

```bash
daily-task-manager/
│
├── index.html    # Main HTML file
├── style.css     # (Optional) Add any custom CSS here
├── script.js     # JavaScript file containing task manager logic
└── README.md     # Project documentation
```

## How It Works

1. **Add Task**: Enter a task in the input field and click the "Add Task" button. The task will be displayed in the task list below, along with a "Remove" button for each task.
2. **Remove Task**: Click the "Remove" button next to a task to delete it from the list.
3. **Clear All**: Click the "Clear All" button to remove all tasks from the list.

## JavaScript Explanation

-   **`appendChild`**: Used to add tasks to the task list dynamically.
-   **`removeChild`**: Used to remove specific tasks from the task list.
-   **Event Listeners**: Attached to buttons to handle adding, removing, and clearing tasks.

## Tailwind CSS Styling

The project utilizes **Tailwind CSS** classes for responsive and modern styling:

-   **Input field**: Styled with padding, border, and rounded corners.
-   **Buttons**: Styled with different colors for adding and clearing tasks.
-   **Task list**: Tasks are displayed with bullet points and styled to fit the design.
