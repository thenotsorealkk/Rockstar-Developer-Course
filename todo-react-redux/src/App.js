import React from 'react';
import Header from './Header';
import Item from './Item';
import Done from './Done';
import Todo from './Todo';
import Add from './Add';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

const App = props => {
          return(
               <div>
                    <Header count={props.toDoCount} clearAllDone={props.clearAllDone} clearAllToDo={props.clearAllToDo} name="Todo"/>
                    <div style={{margin : 20}}>
                         <Todo done={props.done} remove={props.remove} tasks={props.data}> </Todo>
                         <Divider/>
                    </div>
                         <Header count={props.doneCount}  clearAllDone={props.clearAllDone} clearAllToDo={props.clearAllToDo} name="Done" />
                    <div style={{margin : 20}}>

                         <Done undo={props.undo} remove={props.remove} tasks={props.data}> </Done>

                         <Divider/>
                         <Add add={props.add}/>
                         <br/>
                         <Button onClick={()=>{
                              props.clearAll();
                         }}
                              variant="outlined"
                              color="secondary">
                              Clear All
                         </Button>
                    </div>
               </div>
          );
}

const ReduxApp = connect((state) => {
     return {
          toDoCount: state.filter(item => item.status ===0).length,
          doneCount: state.filter(item => item.status ===1).length,
          data: state
     }
}, (dispatch) => {
     return {
          add: (name) => {
               dispatch({ type: 'ADD', value: name })
          },
          remove: (id) => {
               dispatch({ type: 'DEL', id: id })
          },
          clearAllDone: () => {
               dispatch({ type: 'CLEARALLDONE'})
          },
          clearAllToDo: () => {
               dispatch({ type: 'CLEARALLTODO'})
          },
          clearAll: () => {
               dispatch({ type: 'CLEARALL'})
          },
          done: (id) => {
               dispatch({ type: 'DONE', id: id })
          },
          undo: (id) => {
               dispatch({ type: 'UNDO', id: id })
          }
     }
})(App);

export default ReduxApp;
