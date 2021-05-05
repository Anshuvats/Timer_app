import React from "react";
import "./styles.css";

export class Timer extends React.Component{
  constructor(props){
      super(props);
      this.state={
        date:new Date().toLocaleTimeString()
      };
  }

updateTime=()=>{
  this.setState({
    date:new Date().toLocaleTimeString()
  })
}
  //Lifecycle Method
  componentDidMount(){
    //Fetch data
    //Any task needs to be done on first mount
    //console.log("Initial Mounted");
    setInterval(this.updateTime,1000)
    
  }
  render(){
    let date=new Date().toLocaleTimeString();
      return(<div>{this.state.date}</div>);
  }
}