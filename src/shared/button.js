import React from 'react';

const button = (props) => {
    const {label, onClick, disabled} = props;
    return <button disabled={disabled || false} onClick={onClick} type="submit">{label}</button>;
}

export default button