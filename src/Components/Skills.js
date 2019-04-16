import React, {Component} from 'react'
import Progresbar from './Progresbar';

class Skills extends Component {
  constructor(props){
    super();

    this.state = {
      percentage: 90
    }



  }


  render(){
  return (
    <div className="profile">
        <h3 style={{color: '#2e4158', fontWeight: '400'}}>Languages i use.</h3>

        <p style={{ margin: '10px', textAlign: 'left' }}>HTML  90%</p>
        <Progresbar
        percentage={this.state.percentage}
        />
        <p style={{ margin: '10px', textAlign: 'left' }}>CSS  90%</p>
        <Progresbar
        percentage={this.state.percentage}
        />
        <p style={{ margin: '10px', textAlign: 'left' }}>REACT  90%</p>
        <Progresbar
        percentage={this.state.percentage}
        />
        <p style={{ margin: '10px', textAlign: 'left' }}>FLASK  90%</p>
        <Progresbar
        percentage={this.state.percentage}
        />

    </div>
  )
  }
}


export default Skills;