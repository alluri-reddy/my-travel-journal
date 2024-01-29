import React, { useState } from 'react';

function Comment({ comment, onDelete, onEdit, onReply }) {
  const [replying, setReplying] = useState(false);
  const [replyContent, setReplyContent] = useState('');

  const handleDelete = () => {
    onDelete(comment.id);
  };

  const handleEdit = () => {
    onEdit(comment.id);
  };

  const handleReply = () => {
    setReplying(!replying);
  };

  const handleAddReply = () => {
    if (replyContent.trim() !== '') {
      onReply(comment.id, replyContent);
      setReplyContent('');
      setReplying(false);
    }
  };

  return (
    <div>
      <p>{comment.content}</p>
      <p>By: {comment.author}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleReply}>Reply</button>
      {replying && (
        <div>
          <textarea
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
          />
          <button onClick={handleAddReply}>Add Reply</button>
        </div>
      )}
      {comment.replies.map((reply) => (
        <div key={reply.id}>
          <Comment comment={reply} onDelete={onDelete} onEdit={onEdit} onReply={onReply} />
        </div>
      ))}
    </div>
  );
}

function CommentSection() {
  const [comments, setComments] = useState([
    {
      id: 1,
      content: 'This is the first comment!',
      author: 'User1',
      replies: [
        {
          id: 101,
          content: 'Reply to the first comment!',
          author: 'User2',
        },
      ],
    },
    {
      id: 2,
      content: 'This is the second comment!',
      author: 'User3',
      replies: [],
    },
  ]);

  const handleDeleteComment = (commentId) => {
    const updatedComments = comments.filter((comment) => comment.id !== commentId);
    setComments(updatedComments);
  };

  const handleEditComment = (commentId, editedContent) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, content: editedContent };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const handleReplyToComment = (commentId, replyContent) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            {
              id: Date.now(), // Generating a unique id
              content: replyContent,
              author: 'CurrentUser', // You can replace this with the actual user's name
              replies: [], // No nested replies for now
            },
          ],
        };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const handleAddComment = (newComment) => {
    setComments([
      ...comments,
      {
        id: Date.now(), // Generating a unique id
        ...newComment,
        replies: [], // No replies for a new comment
      },
    ]);
  };

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <Comment
            comment={comment}
            onDelete={handleDeleteComment}
            onEdit={handleEditComment}
            onReply={handleReplyToComment}
          />
        </div>
      ))}
      <div>
        <h2>Add a New Comment</h2>
        <textarea />
        <button>Add Comment</button>
      </div>
    </div>
  );
}

export default CommentSection;
