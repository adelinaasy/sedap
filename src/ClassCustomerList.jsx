import React, {Component} from "react";
import CustomerCard from "./CustomerCard";

class ClassCustomerList extends Component {
    constructor(props){
        super(props);
        this.state = {
            customers : [
                {id : 1, name : "Adelina Syafitri", email : "adelina@gmail.com"},
                {id : 2, name : "Anjani", email : "anjani@gmail.com"}
            ]
        };
    }


    render() {
        return (
            <div>
            <h2> Customer List (Class Component) </h2>
            {this.state.customers.map(customer => (
            <CustomerCard key = {customer.id} customer={customer}/>
            ))}
            </div>
        )
    }
}

export default ClassCustomerList;