import React from 'react';
import PropTypes from 'prop-types'
export default function Template({isim, baslik, id}){
    return(
        <div>
            <h2>template component {isim} {baslik}{id}</h2>
        </div>
    )
} 

Template.propTypes = {
    isim: PropTypes.string,
    baslik: PropTypes.string,
    id: PropTypes.number
}