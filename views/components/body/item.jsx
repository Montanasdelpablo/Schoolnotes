import React from 'react';

// ui
import Button from '../../ui/button.jsx';
import {Breadcrumb} from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

export default class Item extends React.Component {
    constructor() {
      super()
      this.state = {
          nesteditemname: '',
          nesteditems: [],
          beforecontent: '',
          content: '',
          editing: true,
          display: false,
      }
    }
    componentWillMount(){
        console.log("Added this item to note", this.props.item)
    }

    toggleView(){
        let current = this.state.display
        this.setState({
            display: !current
        })
    }

    handleContent(e){
        let val = e.target.value
        this.setState({
            beforecontent: val
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
        let val = this.state.beforecontent
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
    const {item, note} = this.props

    var textarea = ""
    if(this.state.editing) { 
        textarea = <FormGroup controlId="formControlsTextarea">
                            <ControlLabel><strong> Description </strong> </ControlLabel>
                            <FormControl ref="content" defaultValue={this.state.content} onChange={this.handleContent.bind(this, event)} componentClass="textarea" placeholder="Write your description here.." />
                            <div style={{marginTop: 5}}> 
                                <Button kind="primary" onClick={this.saveContent.bind(this)}> Save </Button> 
                            </div>
                    </FormGroup>
    }
    if (this.state.editing == false){
        textarea = <div style={{minHeight: 100}}> <div style={{marginTop: 5, marginBottom: 5}}> {this.state.content} </div> <br /> <Button kind="primary" onClick={this.Edit.bind(this)}> Edit </Button> </div>
                    
    }
    var body = ""
    if (this.state.display){
        body = <div>
                <Row style={{padding: 5}}>
                    <Col xs={12} lg={12}>
                            {textarea}
                    </Col>
                </Row>

                {this.state.nesteditems.map((item, index) => {
                    return <Row key={index}> <Item key={item.item_id} i={index} item={item} /> </Row>
                })}

                <Row style={{padding: 5, marginTop: 5, marginBottom: 15, backgroundColor: '#EEEEEE',  borderBottom: '4px solid #FAFAFA'}}>
                    <Col xs={12} lg={12}> 
                        <Row>
                            <Col xs={12} lg={12}>
                                <h4> Add nested item inside of {item.item_name} </h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} lg={12}>
                                <div className="input-group">
                                    <span className="input-group-btn">
                                        <Button type="button" kind="info" onClick={this.addNestedItem.bind(this)}> Add </Button>
                                    </span>
                                    <input ref="itemInput" className="form-control" onChange={this.handleChange.bind(this, event)} placeholder="Nested Item name"/> 
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row> 


               </div>
    }

    
    return <div> 
                <Row style={{backgroundColor: '#31b0d5', padding: 5,  borderBottom: '4px solid #F5F5F5'}}>
                    <Col xs={12} md={12} lg={12}>
                        <Row>
                            <Col xs={7} md={7} lg={7}>
                            <h4 style={{color: '#fff'}}> <strong> {item.item_name} </strong> <span style={{color: '#F5F5F5', fontSize: 15}}>-  made at: {item.item_made} </span></h4>
                            </Col>

                            <Col className="text-right" xs={4} md={4} lg={4} style={{padding: 2}}>
                                <span style={{marginRight: 5}}>
                                <Button kind="primary"> Edit name </Button>
                                </span>
                               <Button kind="danger"> Remove item </Button>
                               
                           </Col>
                           <Col xs={1} md={1} lg={1} style={{paddingTop: 7, cursor: 'pointer'}} className="glyphicon glyphicon-chevron-down" onClick={this.toggleView.bind(this)}>

                           </Col>
                        </Row>
                       
                    </Col>
                </Row>


                {body}
                       
           </div>;
  }
}