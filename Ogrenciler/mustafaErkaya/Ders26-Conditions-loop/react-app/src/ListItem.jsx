import React from 'react'
import {useState} from 'react'

export const ListItem = ({ students }) => {
    const [text, setText] = useState()
    
    const filterText = students.filter((item) => {
        item.includes(text)
    }
    )

    


    return (
        <div>
            <li>{filterText}</li>
            <input type="text" placeholder='filitrele'/>
            <button onClick={setText()}>ara</button>
        </div>

    )
}
