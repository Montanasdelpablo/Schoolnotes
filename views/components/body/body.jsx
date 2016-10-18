import React from 'react';
import Addnote from './addnote.jsx';
import Notes from './notes.jsx';

export default class Body extends React.Component {
  constructor(){
    super()
    this.state = {
      notename: '',
      notes: []
    }
  }
  makeNote(){
   
    var notename = this.state.notename
    var id = Math.random()
    var date = new Date()
    
    const note = {
      note_id: id,
      note_name: notename,
      note_items: [],
      note_made: date.toUTCString(),
    }
    let currentNotes = this.state.notes
    currentNotes.push(note)
    this.setState({
      notes: currentNotes
    })
    console.log("Inside body: ", this.state.notes)
  }

  handleNoteName(e){
    let val = e.target.value
    this.setState({
      notename: val
    })
    
  }

  render() {
    var validation = "";
    if (this.state.notename !== ''){
      validation = `You want to add a note about ${this.state.notename}?`
    }

    return <div> 
                
           <Addnote makeNote={this.makeNote.bind(this)} handleNoteName={this.handleNoteName.bind(this, event)}> </Addnote>

           {validation}

           <Notes notes={this.state.notes} />



           </div>;
  }
}