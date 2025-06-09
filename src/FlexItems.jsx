import './FlexItem.css'

const FlexItems = ()=>{
    return(
        <>
        <h1>Flex Item</h1>
        <p>Four Flex Items contained in a Flex Container</p>
        <header style={{backgroundColor:"orangered",padding:'20px'}}>
            <div style={{paddingLeft:'100px',paddingRight:'100px',display:'flex',justifyContent:'space-between',color:'white',fontSize:'.8125rem'}}>
                <div> Seller Center | Mulai Berjualan </div>
                <div> Daftar Login</div>
            </div>
            </header>
        </>
    );
}
export default FlexItems