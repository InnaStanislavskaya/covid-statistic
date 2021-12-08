import React, { Component } from 'react'
import Table from './Table/Table'
import Loader from './Loader/Loader'
import _ from 'lodash'

class App extends Component {

  state = {
    isLoading: true,
    data: [],
    sort: 'asc', // desc
    sortField: 'index + 1',
  }

  async componentDidMount() {
    const response = await fetch(`https://api.covid19api.com/summary`)
    const data = await response.json()
  
    this.setState({
      isLoading: false,
      data: data,
    })
  }

  onSort = sortField => {
    const clonedData = this.state.data.Countries.concat()
    const sortType = this.state.sort === 'asc' ? 'desc' : 'asc'

    const orderedData = _.orderBy(clonedData, sortField, sortType)
    const data = this.state.data
    data.Countries = orderedData

    this.setState({
      data,
      sort: sortType,
      sortField,

    })
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
