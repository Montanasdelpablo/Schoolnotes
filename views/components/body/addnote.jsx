import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../style.css';



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
    return <div> 
                

                <input ref="notename" onChange={this.handleChange.bind(this, event)} placeholder="Note name.."/> 
                <button styleName='buttongreen' onClick={this.makeNote.bind(this)}> Add </button>
                
           </div>;
  }
}

export default CSSModules(Addnote, styles)