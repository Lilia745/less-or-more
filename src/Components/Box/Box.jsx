import { useState } from "react";

function Box() {
    const [showText,setShowText] = useState(true)
    const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi vel asperiores quos culpa quasi placeat molestias.
                  Animi sit commodi illo rem aliquam!
                  Culpa reiciendis saepe modi,
                  pariatur enim fugit laborum?`
    const clickFunction = ()=>{
        setShowText(!showText)
    }
    const [isDark, setIsDark] = useState(true)
    const func = ()=>{
        setIsDark(!isDark)
    }
    return(
        <div className="box" style={{background : isDark ? "White" : "Black"}}>
            <div className="ionIconsDiv">
                <div className="sunDiv" onClick={func}>
                    {isDark ? <ion-icon name="sunny-outline"></ion-icon> : 
                    <div className="moonDiv">
                        <ion-icon name="moon-outline"></ion-icon>
                    </div>}
                </div>
            </div>
            <div className="root" style={{border : isDark ? "1px solid black" : "1px solid white"}}>
                <h2 style={{color: isDark ? "black" : "white"}}>Information</h2>
                <p onClick={clickFunction} style={{color: isDark ? "black" : "white"}}>{text} <span className="span">{showText ? "Less" : "More"}</span> </p>
            </div>
        </div>
    );
}
export default Box