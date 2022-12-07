import React from 'react';

function ListItem(props, key) {
    return(
        <div>
            <li key={key}>{props.value}</li>
        </div>
    )
}

export default ListItem;