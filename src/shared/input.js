import React from 'react';

const input = (props) => {
    const {onChange, placeholder, name, type} = props;
    return  <input type={type} name={name} onChange={onChange} placeholder={placeholder}/>
}

export default input;