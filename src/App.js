import React, { Component } from 'react'
import Table from './Table/Table'
import Loader from './Loader/Loader'
import DetailRowView from './DetailRowView/DetailRowView'
import TableSearch from './TableSearch/TableSearch'
import _ from 'lodash'


class App extends Component {

  state = {
    isLoading: true,
    data: [],
    filteredData: [],
    search: '',
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
      filteredData: data,
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

  onOkPressed = () => {
    this.setState({row:null})
  }

  searchHandler = search => {
    if(!search || search === ''){
      this.setState({filteredData: this.state.data});
      return
    }

    const filteredData = this.state.data.filter(item => {
      return item.Country.toLowerCase().includes(search.toLowerCase())
    })

    this.setState({filteredData})
    
  }


render() {

  return (
    <div className='container'>
      {
        this.state.isLoading
          ? <Loader />
          : <React.Fragment>
            <TableSearch onSearch={this.searchHandler}/>
            <Table 
              data={this.state.filteredData}
              onSort={this.onSort}
              onRowSelect={this.onRowSelect}
          />
          </React.Fragment>
      }
      {
        this.state.row
          ? <DetailRowView country={this.state.row}
          onOkPressed={this.onOkPressed}
          />
          : null
      }
    </div>
  );
}
}

export default App;
