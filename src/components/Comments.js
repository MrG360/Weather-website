import React from "react";
class Comments extends React.Component{
    render(){
        return(
            <div className='App'>
                <textarea name="addcomments" placeholder="Enter your comment here..."></textarea><br/>
                <button>Comment</button>
            </div>
        );
    }
}
export default Comments;