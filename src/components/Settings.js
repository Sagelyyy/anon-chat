import './settings.css'
import { useState } from "react"

const Settings = (props) => {

    const [colors, setColor] = useState(['#FF6161', 'yellow', '#FF7E14', '#8A8AFF', '#EA82F8'])

    const changeColor = (color) => {
        props.setBgColor(color)
    }

    
    return(
        <div className="colors-container">
            {colors.map((bg, i) => {
                return(
                    <div key={i} className='color-item' onClick={() => changeColor(bg)} style={{backgroundColor: bg}}></div>
                )
            })}
        </div>
    )
}

export default Settings