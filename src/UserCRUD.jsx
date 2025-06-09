import { useState, useEffect } from "react";

const UserCRUD = () => {
    const [users, setUsers] = useState([]);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    const handleAdd = () => {
        if (firstname && lastname && email && username && phone) {
            if (editIndex !== null) {
                const updatedUsers = [...users];
                updatedUsers[editIndex] = { name: { firstname, lastname }, email, username, phone };
                setUsers(updatedUsers);
                setEditIndex(null);
            } else {
                setUsers([...users, { name: { firstname, lastname }, email, username, phone }]);
            }
            setFirstname("");
            setLastname("");
            setEmail("");
            setUsername("");
            setPhone("");
        }
    };

    const handleEdit = (index) => {
        setFirstname(users[index].name.firstname);
        setLastname(users[index].name.lastname);
        setEmail(users[index].email);
        setUsername(users[index].username);
        setPhone(users[index].phone);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        setUsers(users.filter((_, i) => i !== index));
    };

    return (
        <>
            <h1 style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center", marginBottom: "12px" }}>User Management</h1>
            
            <div style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "5px", marginBottom: "12px" }}>
                <input type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} style={{ width: "100%", padding: "8px", marginBottom: "8px" }} />
                <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} style={{ width: "100%", padding: "8px", marginBottom: "8px" }} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: "8px", marginBottom: "8px" }} />
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: "100%", padding: "8px", marginBottom: "8px" }} />
                <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: "100%", padding: "8px", marginBottom: "8px" }} />
                <button onClick={handleAdd} style={{ width: "100%", backgroundColor: "#007bff", color: "white", padding: "10px", border: "none", cursor: "pointer" }}>
                    {editIndex !== null ? "Update User" : "Add User"}
                </button>
            </div>
            
            <div>
                {users.map((user, index) => (
                    <div key={index} style={{ padding: "10px", border: "1px solid #ccc", marginBottom: "8px", borderRadius: "5px" }}>
                        <p style={{ fontWeight: "bold" }}>Nama: {user.name.firstname} {user.name.lastname}</p>
                        <p>Email: {user.email}</p>
                        <p>Username: {user.username}</p>
                        <p>No HP: {user.phone}</p>
                        <div style={{ marginTop: "8px" }}>
                            <button onClick={() => handleEdit(index)} style={{ marginRight: "5px", backgroundColor: "orange", color: "white", padding: "5px", border: "none" }}>Edit</button>
                            <button onClick={() => handleDelete(index)} style={{ backgroundColor: "red", color: "white", padding: "5px", border: "none" }}>Hapus</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default UserCRUD;
