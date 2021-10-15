import React, { Component } from 'react'
import { add_reminder,remove_reminder,clear_reminder} from './actions/Actions';
import {connect} from 'react-redux';
import Moment from 'react-moment';



class App extends Component {
  state={
    text:'',
    date:new Date()
  }
  render_reducer=()=>{
    const {reducer}=this.props;
    const date=new Date()
    return (
      <ul className="list-group">
        {
          reducer.map(item=>{
            return (
              <li key={item.id} className='list-group-item'>
                <div>{item.text}</div>
                
                <div><Moment  from={new Date()}>{new Date(item.date)}</Moment></div>

                
                <div  className='icon-remove  btn-danger'onClick={()=> this.props.remove_reminder(item.id)}>X</div>
                </li>
            )
          })
        }
        </ul>
    )
  }
  render(){
    return (
    <div className="App">

<img src =""/>
<div className="reminder-title">
  <h2>What Should you Do ?</h2>
  </div>     
  <br/>
  <input 
value={this.state.text}
  className="form-control"
  type="text"
  placeholder="Enter what you think ...?"
  onChange={(e) => this.setState({text:e.target.value})} />

<br/>
  
  <input className="form-control"
  type="datetime-local" 
  placeholder="September 15,2019 10:37 PM"
  
value={this.state.date}
  onChange={(e)=>this.setState({date:e.target.value})}/>

  <button className="btn btn-primary btn-block"
  onClick={()=>{
    this.props.add_reminder(this.state.text,this.state.date)
  this.setState({text:'',date:''})}}>
    Add Reminder 
    
  </button>
  {this.render_reducer ()}
  <br/  >
  <button className="btn btn-danger btn-block" onClick={()=> this.props.clear_reminder()}>
    Delete Reminder
  </button>
  


  
    </div>
    
    
  );}
  
}
/*function mapDispatchToProps(dispatch){
  return{
    add_reminder:()=>dispatch(add_reminder())
  }
}*/


export default connect(state=>{return{reducer:state}},{add_reminder,remove_reminder,clear_reminder})(App)
