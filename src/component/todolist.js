import React, { Component } from 'react';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            this.setState({
                data:json
            })
        })
    }
    render(){
        return(
            <div>
                <h1>TodoList</h1>
                <table className='' id='customers'>
                    <thead>
                        <tr><th>ID</th><th>Title</th><th>Status</th><th>User Id</th></tr>
                        </thead>
                    <tbody>
                    {this.state.data.map((item,index)=><tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.completed ||"False"}</td>
                        <td>{item.userId}</td>
                    </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default TodoList;