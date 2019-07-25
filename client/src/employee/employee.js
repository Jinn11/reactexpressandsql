import React, { Component } from 'react'
import axios from 'axios';

class Employee extends Component {
    constructor() {
        super();
        this.state = {
            Employee: [],
            Name :"",
            EmpCode:0,
            Salary:0,

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


    handleChange = (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })

    }

addEmployee =async(event)=>{
    event.preventDefault();
    const {Name,EmpCode,Salary}=this.state
    try {
        await axios.post('/employee',{Name,EmpCode,Salary})
        alert('emp Sucfuly added')
      const  res= await axios.get('/employee')
      this.setState({
          Employee:res.data
      })
    } catch (error) {
        console.log(error)
    }
}

deleteEmployee= async(id)=>{
    try {
        await axios.delete(`/employee/${id}`);
       this.refresh();

    } catch (error) {
        console.log(error)
    }
}
refresh=async()=>{
    try {
        const res = await axios.get("/employee")
        this.setState({
            Employee:res.data
        })
    } catch (error) {
        
    }
}

    render() {
        if (this.state.Employee.length) {
            return (
                <div>
                    <ul>
                        {this.state.Employee.map(el => {
                            return <li key={el.EmpID}>Name:{el.Name} EmpCode: {el.EmpCode} Salary: {el.Salary}
                            <button type ="button" onclick ={()=>this.deleteEmployee(el.EmpID)}>DELETE
                                </button></li>
                        
                        })}
                    </ul>
                    <form>
<input name ="Name" Placeholder ="enter employee name :)" onChange={this.handleChange} />
                    </form>
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