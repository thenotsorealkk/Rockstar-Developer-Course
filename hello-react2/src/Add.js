import React from 'react';

class Add extends React.Component{
     constructor(){
          super();

          this.input = React.createRef();
     }
     render(){
          return(
               <>
                    <input type="text" ref={this.input} />
                    <button onClick={() => {
                              this.props.add(
                                   this.input.current.value
                              );
                         }
                    }> + </button>
               </>
          )
     }
}
export default Add;
