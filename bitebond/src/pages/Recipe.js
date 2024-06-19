import React, { useState } from'react';

const Recipe = ({ match }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        setComments([...comments, newComment]);
        setNewComment('');
    };


    return (
        <div>
            <h1>Recipe Page</h1>
            <form onSubmit={handleCommentSubmit}>
                <input type="text" value={newComment} onChange={handleCommentChange} placeholder="Add a comment" />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {comments.map ((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
        </div>
    );
};

export default Recipe;