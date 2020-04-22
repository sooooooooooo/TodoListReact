import React from "react";

const List = props => {
	const {tasks, setTasks} = props;
	console.log(tasks);

	const handleDelete = (e, i) => {
		e.preventDefault();
		console.log(e.target);
		console.log(tasks[i]);
		setTasks(
			tasks.filter((task, index) => (index !== i))
		)
		console.log(tasks);
	}

	const handleCheckbox = (e, i) => {
		// e.preventDefault();
		console.log(e.target.checked);
		console.log(tasks[i]);
		setTasks(
			tasks.filter((task, index, arr) => {
				if (index === i) {task.completed = e.target.checked}
				return arr;
			})
		)
		console.log(tasks);
	}

	return(
		<div className="container mt-5">
			<div className="row justify-content-md-center">
				<div className="col-md-7">
					<h3>Todo List</h3>
					{tasks.map((task, i) => {
						return(
							<li key={i}>
								<label htmlFor="inputCK" className={task.completed ? "line_through form-check-label" : "form-check-label"}>{task.content}</label>
								<input type="checkbox" checked={task.completed} onChange={e=>handleCheckbox(e, i)} className="form-check-input ml-1 mt-2" id="inputCK" />
								<button className="btn btn-outline-danger ml-5" onClick={e=>handleDelete(e, i)}>Delete</button>
							</li>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default List;