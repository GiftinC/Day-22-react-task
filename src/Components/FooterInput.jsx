const FooterInput = () => {
    return (
        <div style={{ display: "block", textAlign: "center" , padding:100 , backgroundColor:"darkblue"}}>
            <h2 style={{color:"white"}}>Ready to get started? Sign up now!
            </h2>
            <div style={{ display: "flex", paddingLeft: "450px" }}>
                <input type="email" name="Email" id="Email" placeholder="Email Address" style={{ borderRadius: 5, fontSize: "50px" }} />
                <button type="button" style={{ color: "white", backgroundColor: "blue", borderRadius: 5, fontSize: "20px", padding: "20px", marginLeft: "20px" }}>Submit</button>
            </div>
        </div>
    )
}

export default FooterInput