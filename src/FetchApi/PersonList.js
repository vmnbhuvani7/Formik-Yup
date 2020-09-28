import Axios from 'axios'
import React, { Component } from 'react'

import axios from 'axios'
export class PersonList extends Component {

    state = {
        persons: []
    }

    // componentDidMount() {
    //     axios.get(`https://jsonplaceholder.typicode.com/users`)
    //         .then(res => {
    //             // console.log(data);
    //             this.setState({ persons: res.data })
    //         })
    //         .catch(error => {
    //             console.log("get data error", error);
    //         })
    // }

    handleSubmit = event => {
        event.preventDefault();
        const user = {
            name: this.state.name
        }
        // console.log(user);
        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                // console.log(res);
                // console.log(this.state.persons);
                console.log(res.data.user);
                this.setState({
                    // ...this.state,
                    persons: res.data.user,
                    // persons: [...this.state.persons, { name: res.data.user}]
                })
            })
    }

    handleChange = event => {
        this.setState({ name: event.target.value })
    }

    render() {
        // console.log(this.state.persons);
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    Name:
                <input type="text" onChange={this.handleChange} />
                    <button type="submit" >Add</button>
                </form>

                <ul>
                    {this.state.persons.name}
                </ul>
                {/* <ul>
                    {this.state.persons.map(person => <li key={person.id}>{person.name}</li>
                    )}
                </ul> */}
            </>
        )
    }
}

export default PersonList
