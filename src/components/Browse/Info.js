import Profile from '../../image/profileBig.png'
const Info = ()=>{
    const info = JSON.parse(window.localStorage.getItem("userData"))
    const genre = JSON.parse(window.localStorage.getItem("genres"))

    const textStyle = {
        fontFamily: 'Roboto, sans-serif', 
      };

      return (
        <div style={{ width: "30vw", minHeight: "40vh", background: '#5746EA', borderRadius: "12px", padding: "6px", display: "flex", gap: "12px" }}>
          <div>
            <img src={Profile} alt='' style={{ height: "32vh", width: "10vw", position: "relative", top: "2vh" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ color: 'white', fontSize: "1.5rem", ...textStyle }}>{info.name}</p>
            <p style={{ color: 'white', fontSize: "1.3rem", ...textStyle }}>{info.mail}</p>
            <p style={{ color: 'white', fontSize: "2rem", ...textStyle }}>{info.username}</p>
            <Chips categories={genre} color={"#9F94FF"} />
          </div>
        </div>
      );
    };

    const Chips = ({color,categories})=>{
        return(
            <div style={{width:"20vw"}}>
           {categories.map((category)=>(
                    <button style={{background:`${color}`, borderRadius:"12px",width:"100px", color:"white", border:"none",padding:"6px", height:"30px",flexShrink:0, margin:"10px"}}>{category} </button>
            ))}
            </div>
        )
    }

export default Info