// main
import React from 'react';

// ui
import Button from '../../ui/button.jsx';


class Addnote extends React.Component {
  constructor(){
      super()
      
  }
  
  handleChange(e){
      this.props.handleNoteName(e)
  }

  makeNote(){
      this.props.makeNote()
      this.refs.notename.value = ""
 }
  
  render() {
    return(        
              <div className="input-group">
                        <input type="text" aria-describedby="sizing-addon2" className="form-control" ref="notename" onChange={this.handleChange.bind(this, event)} placeholder="Note name.."/>
                        <span className="input-group-btn">
                            <Button kind="primary" onClick={this.makeNote.bind(this)}> Add </Button>
                        </span>
                         
              </div>
        )
           
     }
}

export default Addnote