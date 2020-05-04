import React, { Component } from 'react'
import SelectStateList from './SelectStateList'
import axios from 'axios';
import _ from "lodash";


const textRed={
    color:'red'
}
const textOrange={
    color:'Orange'
}
const textGreen={
    color:'Green'
}
const heightSection={
    height:'50px',
    display:'flex'

    
}
export default class SelectState extends Component {
    constructor(){
        super();
            this.state={
                states:'',
                data:[],
            
            }
        }
  
  state={
      zoneData:{},
      tableData:{}
    }
  

  async componentDidMount(){
      const res=await axios.get('https://api.covid19india.org/zones.json')
      this.setState({zoneData:res.data.zones })
  }

  onType=e=>{
    this.setState({
        [e.target.name]:e.target.value
    });
}

handleSumbit=async(states)=>{
    this.setState(this.state.data=[])
   var index=0; 
   {Object.keys(this.state.zoneData).map(d => { 
      if((this.state.zoneData[d].state===states)){
       this.setState(this.state.data[index]=this.state.zoneData[d])
       index=index+1;
     }
     
    
   })}


}
    render() {
        const {states,data}=this.state
        return (
            <section>
                <SelectStateList handleSumbit={this.handleSumbit} />
                
                {Object.keys(this.state.data).map(l=>(
                    <div key={l} style={heightSection}>
                    <p style={textRed}>
                    {_.isEqual((this.state.data[l].zone),"Red") && (
                       (this.state.data[l].district)
                    )}
                    </p>
                    <p  style={textOrange}>
                    {_.isEqual((this.state.data[l].zone),"Orange") && (
                       (this.state.data[l].district)
                    )}
                    </p>
                    <p  style={textGreen}>
                    {_.isEqual((this.state.data[l].zone),"Green") && (
                       (this.state.data[l].district)
                    )}
                    </p>
                    </div>
                  
                ))} 
            </section>
        )
    }
}
