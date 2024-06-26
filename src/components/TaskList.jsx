import { useState } from 'react';

const TaskList = ({
	taskName,
	deadline,
	priority,
	onTrash,
	onRename,
	onEditDate,
}) => {
	const [editMode, setEditMode] = useState(false);

	let taskColorClass = '';

	if (priority === 'priority: low') {
		taskColorClass = 'bg-pink-100';
	} else if (priority === 'priority: medium') {
		taskColorClass = 'bg-green-100';
	} else if (priority === 'priority: high') {
		taskColorClass = 'bg-sky-100';
	}

	function editTask() {
		setEditMode((prev) => !prev);
	}
	return (
		<div className='flex justify-center m-4'>
			{!editMode && (
				<div className={`p-4 rounded-lg shadow-md w-96 ${taskColorClass}`}>
					<p className='text-lg font-semibold'>{taskName}</p>
					<div className='grid grid-cols-2 justify-self-stretch'>
						<p className='text-sm mt-2'>Deadline: {deadline}</p>
						<button
							className='mt-2 justify-self-end'
							id='EditBtn'
							onClick={editTask}
						>
							<svg
								className='h-5'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 512 512'
							>
								<path d='M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z' />
							</svg>
						</button>
						<p className='text-sm mt-2'>{priority}</p>
						<button
							className='mt-2 justify-self-end'
							id='Deletebtn'
							onClick={onTrash}
						>
							<svg
								className='h-5'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'
							>
								<path d='M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z' />
							</svg>
						</button>
					</div>
				</div>
			)}

			{editMode && (
				<div className={`p-4 rounded-lg shadow-md w-96 ${taskColorClass}`}>
					<input
						type='text'
						value={taskName}
						className='text-lg font-semibold border-2 px-4 py-3 mt-5 mr-4 w-80 h-11 border-teal-500 bg-grey-200 text-black'
						onChange={(ev) => onRename(ev.target.value)}
					/>
					<div className='grid grid-cols-2 justify-self-stretch '>
						<input
							type='Date'
							value={deadline}
							className='justify-self-start text-gray-400 px-4 py-3 mt-5 border-2 border-teal-500 h-11'
							onChange={(ev) => onEditDate(ev.target.value)}
						/>
						<button
							className='mt-2 justify-self-end '
							id='CancelBtn'
							onClick={editTask}
						>
							<svg
								className='h-5'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 512 512'
							>
								<path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
							</svg>
							{/* <svg className="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                    </svg> */}
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default TaskList;
