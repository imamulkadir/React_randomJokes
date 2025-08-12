import React, { useEffect, useState } from "react";
import { getRandomJoke } from "../services/api";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import "./Setup.css";

export default function Setup() {
  const [joke, setJoke] = useState({ setup: "", delivery: "" });
  const [loading, setLoading] = useState(false);
  const [showDelivery, setShowDelivery] = useState(false);

  async function loadJoke() {
    setLoading(true);
    const fetchedJoke = await getRandomJoke();
    setJoke(fetchedJoke);
    setShowDelivery(false); // Hide delivery for new joke
    setLoading(false);
  }

  useEffect(() => {
    loadJoke();
  }, []);

  return (
    <div className="setup-container">
      <h2 className="setup-title">Random Joke</h2>

      <div className="joke-box">
        {loading ? (
          <p className="joke-text">Loading joke...</p>
        ) : (
          <>
            <p className="joke-text">
              <strong>🤔</strong> {joke.setup}
            </p>

            <p
              className="joke-text delivery-toggle"
              onClick={() => setShowDelivery(!showDelivery)}
              style={{
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                userSelect: "none",
              }}
            >
              <span
                style={{
                  minWidth: "220px",
                  display: "inline-flex",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                <span>{showDelivery ? joke.delivery : " "}</span>
                {showDelivery ? (
                  <BiSolidHide size={20} />
                ) : (
                  <BiSolidShow size={20} />
                )}
              </span>
            </p>
          </>
        )}
      </div>

      <div>
        <button className="setup-button" onClick={loadJoke} disabled={loading}>
          {loading ? "Fetching..." : "Get Another Joke"}
        </button>
      </div>
    </div>
  );
}
