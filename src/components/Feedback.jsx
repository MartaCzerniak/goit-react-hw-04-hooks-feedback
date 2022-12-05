/** @jsxImportSource @emotion/react */
import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Statistics from "./Statistics";
import Notification from "./Notification";
import { css } from "@emotion/react";
import { useState } from "react";

const labels = ["Good", "Neutral", "Bad"];

const FeedbackStats = (props) => {
  const [good, addGood] = useState(0);
  const [neutral, addNeutral] = useState(0);
  const [bad, addBad] = useState(0);

  const handleClick = (label) => {
    label === "Good" && addGood(good + 1);
    label === "Neutral" && addNeutral(neutral + 1);
    label === "Bad" && addBad(bad + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let total = countTotalFeedback();
    return (good * 100) / total;
  };

  let total = countTotalFeedback();
  let positive = countPositiveFeedbackPercentage();

  return total === 0 ? (
    <div>
      <div
        css={css`
          text-align: left;
        `}
      >
        <Section title="Please leave feedback" />
        <FeedbackOptions options={labels} onLeaveFeedback={handleClick} />
        <Section title="Statistics" />
        <Notification message="There is no feedback" />
      </div>
    </div>
  ) : (
    <div>
      <div
        css={css`
          text-align: left;
        `}
      >
        <Section title="Please leave feedback" />
        <FeedbackOptions options={labels} onLeaveFeedback={handleClick} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positive}
        ></Statistics>
      </div>
    </div>
  );
};

export default FeedbackStats;
