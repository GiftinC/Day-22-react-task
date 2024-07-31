const Header = () => {
    return (
        <div style={{ display: "block", textAlign: "center" , paddingTop:150 ,paddingBottom:150 ,  backgroundColor:"darkblue"}}>
            <h1 style={{margin:0 , color:"white"}}>Generate more leads with a</h1>
            <h1 style={{margin:0 , paddingBottom:35 ,color:"white"}}>professional landing page!</h1>
            <div style={{ display: "flex", paddingLeft: "500px" }}>
                <input type="email" name="Email" id="Email" placeholder="Email Address" style={{ borderRadius: 5, fontSize: "50px" }} />
                <button type="button" style={{ color: "white", backgroundColor: "blue", borderRadius: 5, fontSize: "20px", padding: "20px", marginLeft: "20px" }}>Submit</button>
            </div>
        </div>
    )
}

export default Header