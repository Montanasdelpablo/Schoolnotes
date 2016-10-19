import React from 'react';
import Addnote from './addnote.jsx';
import Notes from './notes.jsx';
import {Grid, Row, Col} from 'react-bootstrap';
const sampledate = new Date()


export default class Body extends React.Component {
  constructor(){
    super()
    this.state = {
      notename: '',
      notes: [
        {
      note_id: 1,
      note_name: "CDM2",
      note_items: [],
      note_made: sampledate.toUTCString(),
        }
      ]
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
      if (this.state.notename == undefined){
        validation = ""
      } else {
      validation = `You want to add a note about ${this.state.notename}?`
      }
    }

    return <Grid> 
            
            <Row>
              <Col xs={12} md={12} lg={12}>
                  <Addnote makeNote={this.makeNote.bind(this)} handleNoteName={this.handleNoteName.bind(this, event)}> </Addnote>
              </Col>
            </Row>

           <Row style={{marginTop: 15, marginBottom: 15, backgroundColor: '#EEEEEE', width: '100%'}}>
              <Col xs={12} md={12} lg={12} style={{width: '100%'}}>
              <h4> 
                {validation}
              </h4>
              </Col>
           </Row>

           <Row>
              <Col xs={12} md={12} lg={12}>
                <Notes notes={this.state.notes} />
              </Col>
           </Row>


           </Grid>;
  }
}