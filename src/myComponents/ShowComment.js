import React, { Component } from 'react'

export default class ShowComment extends Component {


        

      
    render() {
        return (
            <div>
                {(this.props.value.isActive)?<p >{this.props.value.comment}</p>:<h1></h1>}
                
            </div>
        )
    }
}
