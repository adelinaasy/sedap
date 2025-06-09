import {useState,useEffect} from "react"


const ProductCRUD = ()=> {
    const[products,setProducts]=useState([])
    const[title,setTitle]=useState("")
    const[price,setPrice]=useState("")
    const[category,setCategory]=useState("")
    const[image,setImage]=useState("")
    const[editIndex,setEditIndex]=useState("")

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res)=> res.json())
        .then((data)=>setProducts(data));
    },[]);

const handleAdd = ()=>{
 if (title && price && category && image){
    if (editIndex !== null){
        const updatedProducts = [...products]
        updatedProducts[editIndex] = {title,price,category,image}
        setProducts(updatedProducts)
        setEditIndex(null)
    } else { 
        setProducts([...products,{ title, price, category, image }])
    }
    setTitle("")
    setPrice("")
    setCategory("")
    setImage("")
 }
}

 const handleEdit = (index) => {
    setTitle(products[index].title)
    setPrice(products[index].price)
    setCategory(products[index].category)
    setEditIndex(index)
 }

 const handleDelete = (index) => {
    setProducts(products.filter((_, i) => i !== index))
 }

return (
    <>
    <h1 style={{ fontSize: "50px", fontWeight: "bold", textAlign: "center", marginBottom: "12px", color: "pink" }}> MANAJEMEN PRODUCT
    </h1>
    
    <div style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "5px", marginBottom: "12px" }}>
      <input
        type="text"
        placeholder="Nama Produk"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
      />
      
      <input
        type="number"
        placeholder="Harga Produk"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
      />
      
      <input
        type="text"
        placeholder="Kategori"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
      />
      
      <input
        type="text"
        placeholder="URL Gambar"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
      />
      
      <button
        onClick={handleAdd}
        style={{ width: "100%", backgroundColor: "#007bff", color: "white", padding: "10px", border: "none", cursor: "pointer" }}
      >
        {editIndex !== null ? "Update Produk" : "Tambah Produk"}
      </button>
    </div> 

    <div>
  {products.map((products, index) => (
    <div 
      key={index} 
      style={{ 
        padding: "10px", 
        border: "1px solid #ccc", 
        marginBottom: "8px", 
        borderRadius: "5px" 
      }}
    >
      <p style={{ fontWeight: "bold" }}>{products.title}</p>
      <p>Rp{products.price}</p>
      <p>{products.category}</p>
      <img 
        src={products.image} 
        alt={products.title} 
        style={{ width: "50px", height: "50px", objectFit: "cover" }} 
      />
      <div style={{ marginTop: "8px" }}>
        <button 
          onClick={() => handleEdit(index)} 
          style={{ 
            marginRight: "5px", 
            backgroundColor: "orange", 
            color: "white", 
            padding: "5px", 
            border: "none" 
          }}
        >
          Edit
        </button>
        <button 
          onClick={() => handleDelete(index)} 
          style={{ 
            backgroundColor: "red", 
            color: "white", 
            padding: "5px", 
            border: "none" 
          }}
        >
          Hapus
        </button>
      </div>
    </div>
  ))}
</div>
    </>
)
}

export default ProductCRUD