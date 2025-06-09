import { useState } from 'react'
import React from "react"
import ClassCustomerList from "./ClassCustomerList"
import FunctionalCustomerList from "./FunctionalCustomerList"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './component/sidebar'
import Header from './component/header'
import Dashboard from './component/dashboard'
import Users from './pages/Users'
import Products from './pages/Products'
import ProductsDetail from './pages/ProductsDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserProfile from './pages/UserProfile'
import UserSettings from './pages/UserSettings'
import Login from './pages/Login'
import { Navigate } from 'react-router-dom'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import OList from './pages/OList';
import Unauthorized from './pages/Unauthorized';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/order/list" element={<OrderList />} />
              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route path="/" element={<Login />} />
          </Routes>
      </Router>
  );
}

function App() {
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState("Vite + React")
  
  let angka = 10
  angka = 20
  console.log(angka)

  const pi =3.14
  //console.log(pi)
  console.log(pi)

  let x = 10
  if(true){
    let x = 20
    console.log(x)
  }
  console.log(x)

  const customers =  [
    {id : 2, name : "Adelina Syafitri", email : "adelina@gmail.com"},
    {id : 2, name : "Anjani", email : "anjani@gmail.com"}
  ]
  customers.forEach(customer=>console.log(`Nama : ${customer.name} -Email : ${customer.email}`))

  const customer = {id : 2, name :"Adelina Syafitri",email : "adelina@gmail.com"}
  const {name, email}=customer
  console.log(`Nama : ${name} - email  : ${email}`)

  const products =[
    {id:1, name : "Laptop", stock : 10},
    {id:2, name : "Keyboard", stock : 8},

  ]

  const newproduct = {id:3, name: "Tablet", stock : 8}
  const updateProduct = [...products, newproduct]
  console.log(updateProduct)

  const createOrder = (customerName = "Guest", product = "Unknown", quantity = 1) => {
    console.log('Pesanan : ${customerName} membeli ${quantity} unit ${product}')
  }
  createOrder("nama","laptop",100)
  createOrder("nama","laptop z")
  createOrder()

  const invoice = (customer,product, quantity, price) => {
    return `
    ===========================
    INVOICE
    ===========================
    Nama Pelanggan : ${customer}
    Produk : ${product}
    Jumlah : ${quantity}
    Harga Satuan : Rp.${price}
    Total Bayar : Rp.${quantity*price}
    ============================
    `
  }
  console.log(invoice("John Due","Laptop",2,500))

  const getCustomers = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(["John Due", "Jane Smith", "Robert Brown"]);
      },2000);
    });
  };
  getCustomers().then(customers=>console.log("Pelanggan : ", customers));


  const fetchProducts = async() => {
    try {
      let response = await fetch("https://fakestoreapi.com/products")
      let data = await response.json();
      console.log("Daftar Product", data)
    } catch (error) {
      console.error("Error fetching products: ", error)
    }
  }
  fetchProducts();


  return (
    <Router>
      <div className="flex h-screen">
       <Sidebar/>
    
        <div className="flex-1 flex flex-col">
         
         <Header/>
    
          <div className="p-4">
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/" element={<Navigate to="/dashboard" />}/>
            <Route path="*" element={<NotFound />}/>
            <Route path="/users" element={<Users />}>
              <Route path="profile" element={<UserProfile />}/>
              <Route path="settings" element={<UserSettings />}/>
            </Route>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/products/:id" element={<ProductsDetail />}/>
            <Route path="/products" element={<Products />}/>
          </Routes>
          </div>
        </div>
      </div>
      </Router>
    );
}

export default App
