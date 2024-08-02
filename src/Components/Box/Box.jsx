import { useState } from "react";
import IonIcon from "../IonIcon/IonIcon";

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
    return(
        <div className="box">
            <IonIcon/>
            <div className="root">
                <h2>Information</h2>
                <p onClick={clickFunction}>{text} <span className="span">{showText ? "Less" : "More"}</span> </p>
            </div>
        </div>
    );
}
export default Box