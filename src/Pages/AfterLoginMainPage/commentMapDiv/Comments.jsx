import React, { useState } from "react";

const Comments = (props) => {
  const first = props.value.first;

  //   const commentOpen = props.commentOpen;
  //   const setCommentOpen = props.setComment;
  const [commentOpen, setCommentOpen] = useState(false);
  const [text, settext] = useState("");

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "2%" }}>
      <p>{first}</p>
      <button
        onClick={() => setCommentOpen(true)}
        style={{ border: "1 px solid gray", color: "blue" }}
      >
        Comment
      </button>
      {commentOpen ? (
        <div>
          <input
            type="text"
            onChange={(e) => settext(e.target.value)}
            style={{ border: "1 px solid black", background: "white" }}
          />
          <button
            onClick={() => {
              setCommentOpen(false);
            }}
          >
            submit
          </button>
        </div>
      ) : (
        ""
      )}
      <div style={{ display: "block" }}>{text}</div>
    </div>
  );
};

export default Comments;
