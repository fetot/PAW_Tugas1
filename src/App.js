import React, { Component   } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){

    var content = "";
    var n = 1;
    for(var i = 1; i<=10; i++){
      n = n * i;
      if((i%2) == 0){
        content += "<tr style='text-align:center'><td>" + i + "!</td><td>" + n + "</td></tr>";
      }else{
        content += "<tr style='background-color:lightgrey; text-align:center'><td>" + i + "!</td><td>" + n + "</td></tr>";
      }
    }

    return (
      <div>
        <table style={{borderCollapse:'collapse', width:500, textAlign: 'center', marginTop: '40px'}} align="center" border="1">
          <thead>
            <tr><th>Faktorial</th><th>Hasil</th></tr>
          </thead>
          <tbody dangerouslySetInnerHTML={{__html : content}}></tbody>
        </table> 
      </div>
    );
  }
}

export default App;
