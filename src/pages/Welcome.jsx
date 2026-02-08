import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Welcome() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const isReady = useMemo(() => pin.trim().length > 0, [pin]);

  const handleUnlock = () => {
    if (pin === "1234") {
      navigate("/surprise");
      return;
    }
    setError("That code doesn’t match. Try again.");
  };

  const handleChange = (e) => {
    setPin(e.target.value);
    if (error) setError("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleUnlock();
  };

  return (
    <main className="page">
      <section className="noteCard" aria-label="Private note">
        <header className="noteHeader">
          <span className="noteTag">Private note</span>
          <h1 className="noteTitle">A tiny riddle</h1>
          <p className="noteText">
            "It comes once a month, but its most magical version only visits once a year."
          </p>
        </header>

        <div className="noteBody">
          <div className="fieldRow">
            <input
              id="pin"
              className="fieldInput"
              type="password"
              placeholder="Enter code"
              value={pin}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              autoComplete="one-time-code"
              inputMode="numeric"
            />

            <button
              className="primaryBtn"
              onClick={handleUnlock}
              disabled={!isReady}
            >
              Open
            </button>
          </div>

          {error && <p className="fieldError">{error}</p>}

          <p className="hint">
            Hint: try a date that matters to you.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Welcome;