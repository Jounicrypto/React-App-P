import React from 'react';
import './App.css';
import NumberCom from './Components/NumberCom';
import Button from './Components/Button'



class App extends React.Component{

  constructor(props){
    super(props)
    this.state ={
      number:0,
      
    }
  }

increasing=()=>{
    this.setState({
      number: this.state.number +1,
      title:""
    })
}

decreasing=()=>{
  if(this.state.number > 0){
  this.setState({
    number: this.state.number -1
  })
  }else{
    this.setState({
      title:"You can not decrease the number if it's 0"
    })

  }
}

  render(){
    return(
      <div className='App'>
          <NumberCom number={this.state.number}/>
        <br></br>
        <div>
          <Button btnName="increasing +1" btnFunction={this.increasing}/>
          <Button btnName="decreasing -1"btnFunction={this.decreasing}/>
        </div>
        <h1 style={{color:'red'}}>{this.state.title}</h1>
      </div>
    )
  }
}

export default App;
