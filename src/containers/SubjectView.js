import React, {Component} from 'react';
import Input from '../shared/input';
import Button from '../shared/button';
import ViewSubjects from '../presentation/viewSubjects';

class SubjectView extends Component {
    state = {
        name: "",
        score: 0,
        subjects: [],
        total: 0,
        error: false
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    submit = (event) => {
        event.preventDefault();
        this.setState({error: false});
        const {name, score, subjects: oldSubjects} = this.state;
        const subject = {name, score};
        const [isExistingSubject] = oldSubjects.filter(subject => subject.name === name);
        if(isExistingSubject) { return this.setState({error: true})};
        const subjects = [...oldSubjects, subject];
        const total = parseInt(this.state.total) + parseInt(this.state.score || 0);
        console.log(this.state.total, this.state.score )
        this.setState({
          subjects,
          total
        });
    }

    render() {
      const {subjects, total, name, error} = this.state;
      return (
      <>
      <h1>Total : {total} </h1>
      <form onSubmit={this.submit}>
        <Input name="name" type="text" onChange={this.handleChange} placeholder="Enter Subject"/>
        <Input type="number" name="score" onChange={this.handleChange} placeholder="Enter Score"/>
        <Button disabled={name === "" ? true : false} label="Submit"/>
        {error ? <span>Subject already added</span>: null}
      </form>
      <ViewSubjects subjects={subjects}/>
    </>
    )
    }
}

export default SubjectView;