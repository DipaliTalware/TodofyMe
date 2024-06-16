import { useState } from 'react';

const AddTaskForm = ({ onSubmit }) => {
	const [addTask, setAddTask] = useState({
		taskName: '',
		deadline: '',
		priority: '',
	});

	function taskInput(e) {
		const { name, value } = e.target;
		setAddTask({ ...addTask, [name]: value });
	}

	const formSubmit = (event) => {
		event.preventDefault();
		onSubmit(addTask);
		setAddTask({ taskName: '', deadline: '', priority: '' });
	};

	return (
		<div>
			<h1 className='text-white text-center text-3xl mt-10'>ToDo List</h1>
			<form
				action=''
				className='flex justify-center mt-4'
				onSubmit={formSubmit}
			>
				<div className=''>
					<input
						type='text'
						name='taskName'
						value={addTask.taskName}
						placeholder='Add new task'
						className='border-2 px-4 py-3 mt-5 mr-4 w-80 h-11 border-teal-500 bg-grey-200 text-black'
						onChange={taskInput}
					/>
				</div>
				<div>
					<input
						type='Date'
						name='deadline'
						value={addTask.deadline}
						className='text-gray-400 px-4 py-3 mt-5 border-2 border-teal-500 h-11'
						onChange={taskInput}
					/>
				</div>
				<div className='flex flex-col px-10'>
					<select
						name='priority'
						value={addTask.priority}
						className='h-11 mt-5 border-2 border-teal-500'
						onChange={taskInput}
					>
						<option disabled value=''>
							Select priority
						</option>
						<option value='priority: low'>Low</option>
						<option value='priority: medium'>Medium</option>
						<option value='priority: high'>High</option>
					</select>
				</div>
				<div>
					<button className='bg-teal-500 hover:bg-teal-600 text-white font-bold px-4 py-2 mt-5 rounded w-20'>
						Add
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddTaskForm;
