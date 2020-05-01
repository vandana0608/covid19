import React ,{Component} from 'react';
import {fetchData} from './api/';
import Cards from './components/Cards';
import SelectCountry from './components/SelectCountry';
import Chart from './components/Chart';
import Nav from './components/Nav'
import Button from './components/Button';
import New from './components/New';
import styles from './components/App.css';
import image from './image/images.jpg';
import './components/sc.css'
import axios from 'axios';
class App extends React.Component {
  state = {
    data:'' ,
    confirmed:'',
    deaths:'',
    recovered:'',
    lastUpdate:'',
    country: '',
  }

    

  async componentDidMount() {
  
     const res=await axios.get('https://api.rootnet.in/covid19-in/stats/latest')

  console.log(res.data.data.regional[0].loc)
     this.setState({confirmed:res.data.data.summary.total,
    recovered:res.data.data.summary.discharged,
     deaths:res.data.data.summary.deaths,
    lastUpdate:res.data.lastRefreshed});
     //.then(res=>res.json())

    //  .then(data=>{
    //      console.log(data)
    //     //this.setState({data})
    //    })
       
       
     
     
  }

  globalChange = async()=>{
    const data = await fetchData();
    this.setState({confirmed:data.confirmed.value,
      deaths:data.deaths.value,
      recovered:data.recovered.value,
      lastUpdate:data.lastUpdate

})
}
  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({confirmed:data.confirmed.value,
      deaths:data.deaths.value,
      recovered:data.recovered.value,
      lastUpdate:data.lastUpdate, country: country });
  }

  indiaChange = async () => {
    const res=await axios.get('https://api.rootnet.in/covid19-in/stats/latest')

    
       this.setState({confirmed:res.data.data.summary.total,
      recovered:res.data.data.summary.discharged,
       deaths:res.data.data.summary.deaths,
      lastUpdate:res.data.lastRefreshed});
  }

  render() {
     const { confirmed,deaths,recovered,lastUpdate } = this.state;
    //const {}=this.state
   // console.log(data);
    return (
      <div>
        <section>
        <img className={styles.image} align='center'  src={image} alt="COVID-19" />
        </section>
        <section>
        <Nav indiaChange={this.indiaChange} globalChange={this.globalChange}/>
        </section>
        <section>
         <Cards confirmed={confirmed} deaths={deaths} recovered={recovered} lastUpdate={lastUpdate} />
         </section>

         <section>
         <SelectCountry handleCountryChange={this.handleCountryChange} />
         </section>

         <section>
         <New />
         </section>

         <section>
         <Chart confirmed={confirmed} deaths={deaths} recovered={recovered} />
         </section>
      </div>
      
      // <div className={styles.container}>
      //   <img className={styles.image}  src={image} alt="COVID-19" />
      // <Nav indiaChange={this.indiaChange} globalChange={this.globalChange}/>
      //   {/* <img className={styles.image} src={image} alt="COVID-19" /> */}
      // 
      //   <Button />
      //   <SelectCountry handleCountryChange={this.handleCountryChange} />
      //  <Chart confirmed={confirmed} deaths={deaths} recovered={recovered}  />
       
        
      
    );
  }
}

export default App;