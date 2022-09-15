import React from "react";
import Reply from "./Reply";
import { comments } from "../libs/comments";

export default function Comment(props) {
  return (
    <div>
      {comments.map((x, i) => (
        <div>
          <div className="d-flex gap-2 my-2" key={i}>
            <img
              src={x.userImagePath}
              width="48"
              height="48"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
            <div
              className="rounded rounded-3 p-2"
              style={{ backgroundColor: "#3A3B3C" }}
            >
              <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
                {x.username}
              </span>
              <br />
              <span style={{ color: "#E4E6EB" }}>{x.commentText}</span>
              {x.likeNum != 0 && (
                <div className="d-flex align-items-center gap-1">
                  <img src="/like.svg" width={20}></img>
                  <span style={{ color: "#B0B3B8" }}>{x.likeNum}</span>
                </div>
              )}
            </div>
          </div>
          <Reply reply={x.replies} />
        </div>
      ))}
    </div>
  );
}
