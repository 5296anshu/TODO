import React, { Component } from 'react';

class UserList extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
// https://jsonplaceholder.typicode.com/todo
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
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
                <h1>UserList</h1>
                <table className='' id='customers'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>User Name</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.data.slice(0,100).map((item,index)=><tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.username}</td>
                        <td>website</td>
                    </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default UserList;