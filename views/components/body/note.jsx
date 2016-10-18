'use babel'
import React from 'react';
import Item from './item.jsx';

export default class Note extends React.Component {
  
  constructor() {
      super()
      this.state = {
          noteitemname: '',
          items: []
      }
  }

  

  handleChange(e){
      let val = e.target.value
      this.setState({
          noteitemname: val
      })
  }

  addItem(){
      this.refs.itemInput.value = ""
      var id = Math.random()
      var itemname = this.state.noteitemname
      var date = new Date()
      let item = {
          item_id: id,
          item_name: itemname,
          item_made: date.toUTCString(),
          item_content: '',
          item_nested: []
      }
      var arr = this.state.items
      arr.push(item)
      this.setState({
          items: arr
      })
      
    }

  render() {
    const { note } = this.props

    return <div> 
                <h3> { note.note_name } <span style={{color: '#9E9E9E'}}>-  made at: {note.note_made} </span> </h3>  

                {this.state.items.map((item) => {
                    return <Item key={item.item_id} item={item} />
                })}

                <hr />

                <h4> Add main items </h4>
                <input ref="itemInput" onChange={this.handleChange.bind(this, event)} placeholder="Item name"/> <button onClick={this.addItem.bind(this)}> Add </button>


           </div>;
  }
}