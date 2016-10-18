import React from 'react';

export default class Item extends React.Component {
    constructor() {
      super()
      this.state = {
          nesteditemname: '',
          nesteditems: [],
          content: '',
          editing: true
      }
    }
    componentWillMount(){
        console.log("Added this item to note", this.props.item)
    }

    handleContent(e){
        let val = e.target.value
        this.setState({
            content: val
        })
    }

    handleChange(e){
      let val = e.target.value
      this.setState({
          nesteditemname: val
      })
    }
    addNestedItem(){
      this.refs.itemInput.value = ""
      var id = Math.random()
      var itemname = this.state.nesteditemname
      var date = new Date()

      let item = {
          item_id: id,
          item_name: itemname,
          item_made: date.toUTCString(),
          item_content: '',
          item_nested: []
      }
      var arr = this.state.nesteditems
      arr.push(item)
      this.setState({
          nesteditems: arr
      })
      
    }
    saveContent(){
        let val = this.refs.content.value
        this.setState({
            content: val,
            editing: false
        })
    }
    Edit(){
        this.setState({
            editing:true
        })
    }


  render() {
    const {item} = this.props

    var textarea = ""
    if(this.state.editing) { 
        textarea = <div> <textarea onChange={this.handleContent.bind(this, event)} value={this.state.content} ref="content"> </textarea> <button onClick={this.saveContent.bind(this)}> Save </button> </div>
    }
    if (this.state.editing == false){
        textarea = <div> {this.state.content} <button onClick={this.Edit.bind(this)}> Edit </button> </div>
    }
    
    return <div> 
                <h5> {item.item_name} <span style={{color: '#9E9E9E'}}>-  made at: {item.item_made} </span></h5>

                {textarea}
                
                {this.state.nesteditems.map((item, index) => {
                    return <Item key={item.item_id} i={index} item={item}/>
                })}

                <h4> Add nested items </h4>
                <input ref="itemInput" onChange={this.handleChange.bind(this, event)} placeholder="Nested Item name"/> <button onClick={this.addNestedItem.bind(this)}> Add </button>
                         
           </div>;
  }
}