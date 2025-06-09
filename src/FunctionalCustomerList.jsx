import React, {useState, useEffect } from "react";
import CustomerCard from "./CustomerCard";

const FunctionalCustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        setCustomers([
            {id : 1, name : "Adelina Syafitri", email : "adelina@gmail.com"},
            {id : 2, name : "Anjani", email : "anjani@gmail.com"},
            {id : 3, name : "Adelina Syafitri", email : "adelina@gmail.com"},
            {id : 4, name : "Anjani", email : "anjani@gmail.com"}
        ]);
}, []);

return (
    <div>
    <h2> Customer List (Functional Component) </h2>
    {customers.map(customer => {
        const warna = customer.id % 2 === 0 ? "red" : "white";
    <CustomerCard key = {customer.id} customer = {customer} warna ={warna} />
})}
    </div>
) 
};

export default FunctionalCustomerList;