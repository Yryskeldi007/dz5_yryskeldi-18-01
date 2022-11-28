import React, {useState} from "react";
import Text from "../textAbout/Text";

function AboutUs () {
    const [text, setText] = useState(true);

    const hideText = () => {
        setText(!text)
    }


    return (
        <>
            <button onClick={hideText}>кнопка</button>
            {
                text === true
                    ?
                    <Text/>
                    :
                    ""
            }
        </>
    )
}

export default AboutUs;