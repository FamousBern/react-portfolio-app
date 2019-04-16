import React, { Component } from 'react'

class Contact extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      subject: '',
      email: '',
      message: ''
    }

  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)

  }

  handleChange = (e) => {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value

    })

  }



  render() {
    return (
      <div className="profile"> 
        <h3 style={{color: '#2e4158', fontWeight: '400'}}>CONTACT ME</h3>
        <form onSubmit = {this.handleSubmit}>
          <input
          name="name"
          onChange = {this.handleChange} 
          type="text"
          placeholder="Your name"
          />
           <input
           name="subject"
          onChange = {this.handleChange} 
          type="text"
          placeholder="Subject"
          />
           <input
           name="email"
          onChange = {this.handleChange} 
          type="text"
          placeholder="Your email"
          />
           <textarea
           name="message"
           onChange = {this.handleChange}  
           placeholder="Your message"
           >
           </textarea>
           <button className="btn-sub">SUBMIT</button>

        </form>
      </div>
    )
  }
}

export default Contact;