import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {

function makeEmojiList(minutes) {
    const fiveCount = Math.ceil(minutes / 5);
    const tenCount = Math.ceil(minutes / 10);
    let emojis = "";
    
    if (minutes < 30) {
        for (let i = 0; i < fiveCount; i ++) {
            emojis += "☕️";
        }
    } else {
        for (let i = 0; i < tenCount; i++) {
            emojis += "🍱"
        }
    }
    
    return emojis;
    }

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date}
      </small>
      <p>{preview}</p>
      <p>{makeEmojiList(minutes)} {minutes} min read</p>
    </article>
  );
}

export default Article;