import React, { Component } from 'react';

class Task extends Component {
	constructor(props) {
    super(props);
		this.taskValue = React.createRef()
  }

	state = {
		title: props.title,
		isDone: props.isDone
	}
	
	deleteTask = (item, e) => {
		this.setState({
			tasks: this.state.tasks.filter((t) => {
				return t !== item;
			})
		})
	}
	
	render(){
		return (
			<tr>
				<td className={item.isDone ? 'task done' : 'task'} onClick={this.toggleTaskStatus.bind(this, item)}>
					{item.title}
				</td>
				<td className="btn_change">
					<button className="edit">Edit</button>
					<button className="delete" onClick={this.deleteTask.bind(this, item)}>Delete</button>
				</td>
			</tr>
		)
	}
}

export default Task;