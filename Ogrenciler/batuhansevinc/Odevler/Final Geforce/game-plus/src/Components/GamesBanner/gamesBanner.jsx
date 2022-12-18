import React from 'react'
import {Checkbox, Collapse} from 'antd';
import { useState } from 'react';

const {Panel} = Collapse

const gameGenres =[
    {
        "_id" : 1,
        "genres": "Aksiyon"
    },
    {
        "_id" : 2,
        "genres": "Macera"
    },
    {
        "_id" : 3,
        "genres": "Bağımsız"
    },
    {
        "_id" : 4,
        "genres": "Canlandırma"
    },
    {
        "_id" : 5,
        "genres": "Kahramanın gözünden oynanan ateş etme oyunu"
    },
    {
        "_id" : 6,
        "genres": "Oynaması Ücretsiz"
    }
]




function GamesBanner(props) {

    const [Checked, setChecked] = useState([])

    const handleToggle = (value) => {

        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];

        if(currentIndex === -1){
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }
        setChecked(newChecked)
        props.handleFilters(newChecked)
    }

    const renderCheckboxLists = () => gameGenres.map((value,index) =>(
        <React.Fragment key={index}>
            <Checkbox onChange={() => handleToggle(value._id)} type="checkbox" 
            checked={Checked.indexOf(value._id) === -1 ? false : true}/>
    
            <span>{value.genres}</span>
        </React.Fragment>
    ))

  return (
    <div>
        <Collapse defaultActiveKey={['0']}>
            <Panel header key = "1">
                    {renderCheckboxLists()}
            </Panel>
        </Collapse>

    </div>
  )
}

export default GamesBanner