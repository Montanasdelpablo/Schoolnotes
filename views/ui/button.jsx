import React from 'react';
import cn from 'classnames';

var Button = React.createClass({
   render: function(){
      const {kind} = this.props
      
       const classes = cn(
        "btn",
        kind && `btn-${kind}`
    )
    
    return (
        <button className={classes} onClick={this.props.onClick}>
            {this.props.children}
        </button>
    )
   } 
})

export default Button