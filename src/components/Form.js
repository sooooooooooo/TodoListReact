import React from "react";

const Form = props => {
	const {tasks, setTasks} = props;

	const handleSubmit = e => {
		e.preventDefault();
		const form = e.target;
		const data = new FormData(form);
		console.log(data.get("newTask"));

		setTasks([
			...tasks,
			{
				content: data.get("newTask"),
				completed: false
			}
		])
		form.reset();
	}

	return(
		<div className="container mt-5">
			<div className="row justify-content-md-center">
				<form className="col-md-5" onSubmit={handleSubmit}>
					<h3>Add New Task</h3>
					<div className="form-group">
						<label className="sr-only" htmlFor="inputTask">New Task</label>
						<input type="text" className="form-control" id="inputTask" name="newTask" placeholder="New Task" />
					</div>
					<button type="submit" className="btn btn-primary">Add</button>
				</form>
			</div>
		</div>
	);
}

export default Form;