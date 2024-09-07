// script.js
document.getElementById('addTaskBtn').addEventListener('click', function () {
	// Get the task input value
	let taskInput = document.getElementById('taskInput');
	let taskValue = taskInput.value.trim();

	// Validate the input
	if (taskValue === '') {
		alert('Please enter a task');
		return;
	}

	// Create a new task element
	let newTask = document.createElement('li');
	newTask.textContent = taskValue;
	newTask.classList.add(
		'flex',
		'justify-between',
		'items-center',
		'mb-2',
		'bg-gray-200',
		'p-2',
		'rounded'
	);

	// Create a remove button
	let removeBtn = document.createElement('button');
	removeBtn.textContent = 'Remove';
	removeBtn.classList.add(
		'bg-red-500',
		'text-white',
		'px-2',
		'py-1',
		'rounded'
	);
	removeBtn.addEventListener('click', function () {
		document.getElementById('taskList').removeChild(newTask);
	});

	// Append the remove button to the task
	newTask.appendChild(removeBtn);

	// Append the new task to the task list
	document.getElementById('taskList').appendChild(newTask);

	// Clear the input field
	taskInput.value = '';
});

document.getElementById('clearAllBtn').addEventListener('click', function () {
	let taskList = document.getElementById('taskList');
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}
});
