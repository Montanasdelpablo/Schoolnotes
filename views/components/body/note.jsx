'use babel'
import React from 'react';
import Item from './item.jsx';

// ui
import Button from '../../ui/button.jsx';
import {Row, Col} from 'react-bootstrap';

export default class Note extends React.Component {
  
  constructor() {
      super()
      this.state = {
          noteitemname: '',
          items: [],
          display: false
      }
  }

  

  handleChange(e){
      let val = e.target.value
      this.setState({
          noteitemname: val
      })
  }

  toggleView(){
    let current = this.state.display
    this.setState({
        display: !current
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

    var body = ""
    if(this.state.display){
        body =  <div>  {this.state.items.map((item, index) => {
                    return <Row key={index} className="row"> <Item key={item.item_id} note={note} item={item} /> </Row>
                })}

                <hr />
                
                <Row style={{padding: 5, marginBottom: 15, backgroundColor: '#EEEEEE', borderBottom: '4px solid #FAFAFA'}}>
                    <h4> Add main items </h4>
                    <div className="input-group">
                        <span className="input-group-btn">
                            <Button kind="success" onClick={this.addItem.bind(this)}> Add </Button>
                        </span>
                         <input ref="itemInput" className="form-control" onChange={this.handleChange.bind(this, event)} placeholder="Item name"/>  
                    </div>
                </Row> </div>
    }


    return <div> 
                <Row style={{backgroundColor: '#449d44', padding: 5, borderBottom: '4px solid #F5F5F5', borderTop: '2px solid #F5F5F5'}}>
                   <Col xs={12} md={12} lg={12}>
                        <Row>
                            <Col xs={7} md={7} lg={7}>
                                <Row>
                                    <Col xs={12} md={4} lg={5}> 
                                       <h3 style={{color: '#fff'}}> <strong>  { note.note_name } </strong>  </h3> 
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={8} lg={7} >    
                                    <h5 style={{marginLeft: 5, color: '#F5F5F5', fontSize: 15}}>-  made at: {note.note_made} </h5>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="text-right" xs={4} md={4} lg={4} style={{paddingTop: 7}}>
                                <span style={{marginRight: 5}}>
                                <Button kind="primary"> Edit name </Button>
                                </span>
                               <Button kind="danger"> Remove item </Button>
                                                      
                           </Col>
                            <Col xs={1} md={1} lg={1} className="glyphicon glyphicon-chevron-down" style={{paddingTop: 7, cursor: 'pointer'}} onClick={this.toggleView.bind(this)}>

                           </Col>
                        </Row>
                       
                    </Col>                          
                </Row>

               {body}

           </div>;
  }
}