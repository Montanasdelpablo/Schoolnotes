import React from 'react';

import Note from './note.jsx';
import {Row, Col} from 'react-bootstrap';

export default class Notes extends React.Component {
  componentWillReceiveProps(){
      console.log("Inside notes: ", this.props.notes)
  }

 

  render() {
    const { notes } = this.props 

    return <div> 
                <Row style={{marginBottom: 5}}>
                    <Col xs={12} md={10} lg={10} mdPush={1} lgPush={1}>
                        <h2> Note overview </h2>
                    </Col>
                </Row>
                
                {notes.map((note, index) => {
                    return <Row key={note.note_id}> <Col xs={12} md={10} mdPush={1} lg={10} lgPush={1}> <Note  i={index} note={note} /> <hr /> </Col> </Row>
                })}


           </div>;
  }
}