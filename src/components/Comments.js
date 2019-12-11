import React from "react";
class Comments extends React.Component{
    render(){
        return(
            <div className='div-comments'>
                <textarea name="addcomments" placeholder="Enter your comment here..."></textarea><br/>
                <button className="button-comment">Comment</button>
            </div>
        );
    }
}
export default Comments;