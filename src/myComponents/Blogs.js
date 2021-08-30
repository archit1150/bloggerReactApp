import React, { Component } from 'react'
import ShowBlog from "./ShowBlog";

export default class Practice extends Component {
    
     blog = [{"id":1,"title":"Nagarro","description":"Nagarro is a MNC"},
     {"id":2,"title":"Nagarro Noida","description":"Nagarro is a MNC in Noida"}]

    render() {
        return (
            <div>
                {this.blog.map((item,i)=>{ return <ShowBlog key={i} value={item}></ShowBlog>})}
             
            </div>
        )
    }
}
