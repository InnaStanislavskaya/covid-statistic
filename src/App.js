import React, { Component } from 'react'
import Table from './Table/Table'
import Loader from './Loader/Loader'
import DetailRowView from './DetailRowView/DetailRowView'
import _ from 'lodash'


class App extends Component {

  state = {
    isLoading: true,
    data: [],
    sort: 'asc', // desc
    sortField: 'index + 1',
    row: null,
  }

  async componentDidMount() {
    const response = await fetch(`https://api.covid19api.com/summary`)
    const rawData = await response.json()
    const data = rawData.Countries.map((c, index) => {
      c.index = index
      return c
    })
  
    this.setState({
      isLoading: false,
      data: data,
    })
  }

  onSort = sortField => {
    const clonedData = this.state.data.concat()
    const sortType = this.state.sort === 'asc' ? 'desc' : 'asc'

    const orderedData = _.orderBy(clonedData, sortField, sortType)
    const data = this.state.data
    data.Countries = orderedData

    this.setState({
      data: orderedData,
      sort: sortType,
      sortField,

    })
  }

  onRowSelect = row => {
    this.setState({row})
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
            onRowSelect={this.onRowSelect}
          />
      }
      {
        this.state.row
          ? <DetailRowView country={this.state.row} />
          : null
      }
    </div>
  );
}
}

export default App;
