import React from 'react';

class List extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
    }
  }
  render(){
    return (
      <div className = "list">
        <h1>Data Goes Here</h1>
      </div>
    )
  }
}

export default List;
