import React from 'react';

import Note from './note.jsx';

export default class Notes extends React.Component {
  componentWillReceiveProps(){
      console.log("Inside notes: ", this.props.notes)
  }

 

  render() {
    const { notes } = this.props 

    return <div> 
                <h2> Note overview </h2>
                {notes.map((note, index) => {
                    return <div key={note.note_id}> <Note  i={index} note={note} /> <hr /> </div>
                })}


           </div>;
  }
}