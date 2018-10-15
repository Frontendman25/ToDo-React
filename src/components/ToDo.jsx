import React, { Component } from 'react';
import Task from './Task';
import Buttons from './Buttons';

class ToDo extends Component {
	constructor(props) {
    super(props);
		this.taskValue = React.createRef()
  }
	
	state = {
		tasks: [
			{
				title: 'Create application for PrivatBank', 
				isDone: true,
				edit: false
			},
			{
				title: 'Get the job',
				isDone: false,
				edit: false
			},
		],
	}
	
	createNewTask = (e) => {
		if(this.taskValue.current.value === '') return;
		
		let { tasks } = this.state;
		
		this.setState({
			tasks: [{title: this.taskValue.current.value, isDone: false}, ...tasks]
		})
		
		this.taskValue.current.value = '';
	}
	
	deleteTask = (item, e) => {
		this.setState({
			tasks: this.state.tasks.filter((t) => {
				return t !== item;
			})
		})
	}
	
	handleToggleTaskStatus = (item, e) => {
		item.isDone = !item.isDone;
		
		this.setState({
			tasks: this.state.tasks,
		})
	}
	
	handleEdit(item, e){
		item.edit = !item.edit;
		
		this.setState({
			...this.state
		})
		
//		stateEdit = this.state.edit;
	}
	
	handleEditedValue(){
		
	}

  render() {
		let {tasks} = this.state;
		
    return (
			<div className="todoList">
				<div className="formWrap">
					<input className="search" type="text" ref={this.taskValue} placeholder="What do I need to do"/>
					<button className="create" onClick={this.createNewTask}>Create</button>
				</div>
				<table className="table" style={{width: "80%"}}>
					{tasks.map((item, index) => {
						return (
							<tr key={index}>
								<Task onEditedValue={this.handleEditedValue.bind(this)} edit={item.edit} task={item} onToggleTaskStatus={this.handleToggleTaskStatus.bind(this, item)} />
								
								<Buttons edit={item.edit} onEdit={this.handleEdit.bind(this, item)} onDelete={this.deleteTask.bind(this, item)} />
							</tr>
						)
					})}
				</table>
			</div>
    );
  }
}

export default ToDo;
