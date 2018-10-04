import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { createStudent } from './store'

class StudentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      gpa: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  

  handleSubmit (evt) {
    //evt.preventDefault()
    store.dispatch(createStudent(this.state))
  }

  render() {
    const { schools } = this.props
    console.log('WE SEE THE STUDENT FORM');
    return (
      <div>
        <h3>Create Student:</h3>
        <hr />
        <br />
        <form id='createForm' onSubmit={this.handleSubmit}>
          <label>First Name:
            <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange} />
          </label>
          <label>Second Name:
            <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange} />
          </label>
          <label>GPA:
            <input type='number' min='0' max='4' name='gpa' value={this.state.gpa} onChange={this.handleChange} />
          </label>
          <label>Attending:
          <select name='school'>
              {/*MUST ONLY ALLOW CURRENT SCHOOLS TO BE CHOSEN USING schools PROP*/}
          </select>
          </label>
          <input type='submit' value='submit' />
        </form>
      </div>
    )
  }
}


const mapStateToProps = ({ students, schools }) => ({
    students,
    schools
  })

export default connect(mapStateToProps)(StudentForm);
