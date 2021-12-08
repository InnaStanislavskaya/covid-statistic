import React, { Component } from 'react'
import Table from './Table/Table'
import Loader from './Loader/Loader'

class App extends Component {

  state = {
    isLoading: true,
    data: [],
  }

  async componentDidMount() {
    const response = await fetch(`https://api.covid19api.com/summary`)
    const data = await response.json()
  
    this.setState({
      isLoading: false,
      data: data,
    })
  }

  onSort = (sortField) => {
    console.log(sortField)
  }

render() {
  return (
    <div className='container'>
      {
        this.state.isLoading
          ? <Loader />
          : <Table 
            data={this.state.data}
            onSort={this.onSort}
          />
      }
    </div>
  );
}
}

export default App;
