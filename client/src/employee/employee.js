import React, { Component } from 'react'
import axios from 'axios';

class Employee extends Component {
    constructor() {
        super();
        this.state = {
            Employee: [],
        }
    }
    //this the life cycle metthods go
    async componentDidMount() {
        try {
            const res = await axios.get('./Employee');
            this.setState({
                Employee: res.data,
            });
        } catch (error) {
            console.error(error);
        }
    }

    //below this method are going live here
deleteEmployee= async(id)=>{
    
}

    render() {
        if (this.state.Employee.length) {
            return (
                <div>
                    <ul>
                        {this.state.Employee.map(el => {
                            return <li key={el.EmpID}>Name:{el.Name} EmpCode: {el.EmpCode} Salary: {el.Salary}</li>
                        })}
                    </ul>
                </div>
            )
        } else {
        return (
            <div>There isnt any Employee to list</div>
        )
    }
}
}
export default Employee;