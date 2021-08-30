import React, { Component } from 'react'
import ShowComment from "./ShowComment";

export default class ShowBlog extends Component {

    comments = [{"id":1,"blogId":1,"comment":"this is a comment 1","isActive": true},
    {"id":2,"blogId":1,"comment":"this is a comment 2","isActive": false},
    {"id":3,"blogId":2,"comment":"this is a comment 1","isActive": true},
    {"id":1,"blogId":2,"comment":"this is a comment 2","isActive": false}]

    state = {
        "id": this.props.value.id,
        "title": this.props.value.title,
        "description": this.props.value.description
    }
    render() {
        return (
            <div>
               <h1>{this.state.title}</h1>
               <p>{this.state.description}</p>
               {this.comments.map((item,i)=>{ 
                   if(item.blogId === this.state.id)
                   {return <ShowComment key={i} value={item}></ShowComment>}  
               })} 
            </div>
        )
    }
}
