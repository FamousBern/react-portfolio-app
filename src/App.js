import React, {Component} from "react";
import Profile from './Components/Profile';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      more: '',
      percentage: 0
    }

  }

  info = () => {
    this.setState({
      more: 'I develop web applications in both react and flask'
    })
  }


  render(){
    return (
      <div>
        <div className="container">
            <Profile
            name = {this.state.more}
            change = {this.info}
            />
            <Skills/>
            <Contact/>
        </div>  
        <Footer/>
      </div>
    );
  }
}

export default App;
