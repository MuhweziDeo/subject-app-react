import React from 'react';

const subject = ({subject}) => {
    const {name, score} = subject;
    return <p><strong>Subject: </strong> {name} <strong>Score:</strong> {score || 0}</p>
}

export default subject;