import React from 'react';
import Subject from '../presentation/subject';

const viewSubjects = (props) => {
    const { subjects } = props;
    const subjectsDisplay = subjects.length ? 
      subjects.map((subject, index) => {
        return <Subject key={index} subject={subject}/>
      }) :
    <h1>No Subjects</h1>
    return <> {subjectsDisplay} </>
}
export default viewSubjects;