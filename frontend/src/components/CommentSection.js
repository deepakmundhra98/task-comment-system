import { useEffect, useState } from "react";
import { getComments, addComment, deleteComment } from "../api";

export default function CommentSection({ taskId }) {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");

  const load = async () => {
    const res = await getComments(taskId);
    setComments(res.data.data || res.data);
  };

  useEffect(() => {
    load();
  }, [taskId]);

  return (
    <div className="comments">
      {comments.map((c) => (
        <div key={c.id} className="comment">
          <span>{c.content}</span>
          <button
            className="delete-btn"
            onClick={() => deleteComment(c.id).then(load)}
          >
            ✕
          </button>
        </div>
      ))}

      <div className="comment-input-row">
        <input
          className="comment-input"
          placeholder="Write a comment..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="small-btn"
          onClick={() => {
            if (!content) return;
            addComment(taskId, { content }).then(() => {
              setContent("");
              load();
            });
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
