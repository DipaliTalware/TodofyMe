import AddTaskForm from './components/AddTaskForm';
import { useState } from 'react';
import TaskList from './components/TaskList';
import { useEffect } from 'react';

function App() {
	const [tasks, setTasks] = useState([]);

	function addTask(newTask) {
		if (
			newTask.taskName === '' ||
			newTask.deadline === '' ||
			newTask.priority === ''
		) {
			return alert('please fill all fields');
		}
		if (newTask.taskName === tasks.taskName) {
			return alert('This task already exist in tasklist');
		}
		setTasks((tasks) => {
			const updateTask = [...tasks, newTask];
			localStorage.setItem('key', JSON.stringify(updateTask));
			return updateTask;
		});
	}

	function removeTask(indexToRemove) {
		const updatedTasks = tasks.filter((prev, index) => index !== indexToRemove);
		localStorage.setItem('key', JSON.stringify(updatedTasks));
		setTasks(updatedTasks);
	}

	function editTask(index, newName) {
		setTasks((prev) => {
			const newTask = [...prev];
			newTask[index].taskName = newName;
			localStorage.setItem('key', JSON.stringify(newTask));
			return newTask;
		});
	}

	function editDate(index, newDate) {
		setTasks((prev) => {
			const newTask = [...prev];
			newTask[index].deadline = newDate;
			localStorage.setItem('key', JSON.stringify(newTask));
			return newTask;
		});
	}

	useEffect(() => {
		const value = localStorage.getItem('key') || '[]';
		setTasks(JSON.parse(value));
		console.log(value);
	}, []);

	return (
		<div>
			<AddTaskForm onSubmit={addTask} />
			{tasks.map((task, index) => (
				<TaskList
					onRename={(newName, newDate) => editTask(index, newName, newDate)}
					onEditDate={(newDate) => editDate(index, newDate)}
					onTrash={() => removeTask(index)}
					key={index}
					taskName={task.taskName}
					deadline={task.deadline}
					priority={task.priority}
				/>
			))}
		</div>
	);
}

export default App;
