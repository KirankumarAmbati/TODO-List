import React from 'react'
import { connect } from 'react-redux'
import ConnectedGoals from './Goals'
import ConnectedTodos from './Todos'
import handleInitialData from '../actions/shared'


class App extends React.Component{
  componentDidMount(){
      this.props.dispatch(handleInitialData())
  }

  render(){
      if(this.props.loading===true){
          return <h2>Loading...</h2>
      }
      return (
          <div>
              <ConnectedTodos />
              <ConnectedGoals />
          </div>
      ) 
  }
}

export default connect((state) => {
  // eslint-disable-next-line
  loading:state.loading
})(App)