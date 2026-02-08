import React, { useState } from "react";
import "../index.css";

function Surprise() {
  const [accepted, setAccepted] = useState(false);
  const [yesScale, setYesScale] = useState(1);
  const [noPos, setNoPos] = useState({ top: "60%", left: "50%" });

  const moveNo = () => {
    const top = Math.random() * 70 + 10;
    const left = Math.random() * 70 + 10;

    setNoPos({
      top: `${top}%`,
      left: `${left}%`,
    });

    setYesScale((prev) => prev + 0.15);
  };

  return (
    <main className="surprisePage">
      <div className="surpriseCard">
        <h1 className="surpriseTitle">
          {accepted ? "YIPPY!!! 🎉💖 Mahal mo talaga ako ah ;3" : "Will you be my Valentine?"}
        </h1>

        <div className="gifBox">
          <img
            src={
              accepted
                ? "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjh2MTdvY3hmdGFyYjd1ZDlvNWZlc2lrZDZsdWo2Yjl4cDZpeW12cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13G7hmmFr9yuxG/giphy.gif"
                : "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2R6N2UwczBtaTNwY3JzNGowc3VncmF6enNuazNvN3dqMnJxdjM4OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vDhDcIEmShbUI/giphy.gif"
            }
            alt="valentine gif"
          />
        </div>

        <h1 className="surpriseBody">
          {accepted ? "ILOVEYOUUUU MAYANG 💖" : ""}
        </h1>

        {!accepted && (
          <div className="buttonArea">
            <button
              className="yesBtn"
              style={{ transform: `scale(${yesScale})` }}
              onClick={() => setAccepted(true)}
            >
              Yes 💕
            </button>

            <button
              className="noBtn"
              style={{
                top: noPos.top,
                left: noPos.left,
              }}
              onMouseEnter={moveNo}
              onClick={moveNo}
            >
              No
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default Surprise;