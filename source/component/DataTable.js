import React from 'react';
import BaseVisualization from './BaseVisualization.js'
import { MDBDataTable } from 'mdbreact';

// should only have to worry about rendering
class DataTable extends BaseVisualization {
  constructor(props, ctx) {
    super(props, ctx);
    this.table_data = {}
  }

  render() {
    if(this.state.ready){
      this.table_data = {}
      this.table_data.columns = []
      var columns = this.props.columns || []
      if (this.state.filteredData[0]){
        columns = Object.keys(this.state.filteredData[0])
      }
      for (let i = 0; i<columns.length; i++){
        this.table_data.columns.push({label: columns[i], field: columns[i]})
      }
      this.table_data.rows = this.state.filteredData
      return(<MDBDataTable striped   bordered hover data={this.table_data}/>)
    } else {
      return <div id={this.id} key={this.id} style={this.style} className="vis-loading"><p>waiting...</p></div>
    }

  }
}

export default DataTable
