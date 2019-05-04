import React from 'react';

class App extends React.Component {
     state = {data: []};

     componentWillMount() {
          fetch('http://localhost:8000/tasks').then(res => {
               return res.json();
          }).then(json => {
               this.setState({
                    data: json
               });
          });
     }

     render() {
          return (
               <div>
                    <h1> React API </h1>
                    <ul>
                         {this.state.data.map(item => <li key={item._id}> {item.subject} </li> ) }
                    </ul>
               </div>
          )
     }
}

export default App;
