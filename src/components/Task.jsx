import React, { Component } from 'react';

class Task extends Component {
	constructor(props) {
    super(props);
		this.inputValue = React.createRef();
  }
	
	state = {
		currentValue: this.props.task
	}
	
	componentDidMount(){
		console.log(this.inputValue.current.value)
		this.setState({
			currentValue: this.inputValue.current.value
		})
	}
	
	render(){
		let { task, onToggleTaskStatus, edit, editedValue } = this.props;
		this.currentValue = this.inputValue.value;
		return (
			<React.Fragment>
				{
					edit ?
						<React.Fragment>
							<td className="task_edit" style={{display: "block"}}>
								<input className="edit_value" type="text" defaultValue={task.title} ref={this.inputValue} autofocus="true" />
							</td>

							<td className={task.isDone ? 'task done' : 'task'} onClick={onToggleTaskStatus} style={{display: "none"}}>
								{task.title}
							</td>
						</React.Fragment>
					:
						<React.Fragment>
						<td className="task_edit" style={{display: "none"}}>
							<input className="edit_value" type="text" defaultValue={task.title} ref={this.inputValue} autoFocus />
						</td>
					
						<td className={task.isDone ? 'task done' : 'task'} onClick={onToggleTaskStatus}>
							{task.title !== this.state.currentValue ? task.title : this.inputValue.current.value}
						</td>
						</React.Fragment>
				}
			</React.Fragment>
		)
	}
}

export default Task;
