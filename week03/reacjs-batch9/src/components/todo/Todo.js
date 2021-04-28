import React, { Component } from 'react';

import { v4 as uuid_v4 } from "uuid";
import List from './List';

const listTodo = [
	{
		id: uuid_v4(),
		task: 'Learn Javascript es6',
		completed: false
	},
	{
		id: uuid_v4(),
		task: 'Learn React Fudamental',
		completed: false
	},
	{
		id: uuid_v4(),
		task: 'Learn Redux Fudamental',
		completed: false
	},
	{
		id: uuid_v4(),
		task: 'Final Project #1',
		completed: false
	}
];

class Todo extends Component {

	state = {
		task: '',
		items: [...listTodo]
	}

	componentDidMount() {
		// your code...
        const {items} = this.state;
        console.log(`current items didMount : ${items}`);
	}

	handleOnChange = e => {
		const { target: { value } } = e;
		console.log(value);

		// complete code below
		this.setState({
			task: value
		});
	}

	handleOnSubmit = e => {

        e.preventDefault();

		// your code, use spread operator to add new task
        const sub ={id : uuid_v4(),
        task : this.state.task, complete : false}
        this.setState ({
            task: "" ,
            items: [...this.state.items,sub]
        })
	}

	isCompleted = (id) => {

		// your code, find id, then use spread operator
        this.setState({
            items: [...this.state.items.map((item) => {
                if (item.id === id) {
                    item.completed = true;
                    return item;
                } else {
                    return item;
                }
            }),
        ],
        });
	};

	removeTask = id => {
        this.setState({
            items: [...this.state.items.filter((item) => item.id !== id)],
        });
		// your code, use filter to get new task list
	};

	render() {
		return (
			<div className="Todo">
				<h1>Todo List:</h1>

				<form onSubmit={this.handleOnSubmit}>
					<input value={this.state.task} onChange={this.handleOnChange} />
				</form>

				<List
					items={this.state.items}
					isCompleted={this.isCompleted}
					removeTask={this.removeTask}
				/>
			</div>
		);
	}
}

export default Todo;