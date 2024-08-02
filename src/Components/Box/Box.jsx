import { useState } from "react";

function Box(props) {
    const [showText,setShowText] = useState(true)
    const [isDark, setIsDark] = useState(true)
    const func = ()=>{
        setIsDark(!isDark)
    }
    const clickFunc = (e)=>{
        e.preventDefault()
        setShowText(!showText)
    }
    // const text = props.text
    // const max = 50
    // if (text.length<=max) {
    //     return(
    //         <span>{text}</span>
    //     )
    // }
    const {text, max=55} = props

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
                <span style={{color : isDark ? "black" : "white"}}>{showText ? `${text.substring(0,max)}...`: text}
                <a href="" onClick={clickFunc} className="span">{showText ? "More" : "Less"}</a></span>
            </div>
        </div>
    ); 
}
export default Box