import styles from "./Options.module.css";

function Options({ onLeaveFeedback, totalFeedback }) {
  return (
    <div className={styles.options}>
      <button onClick={() => onLeaveFeedback("good")}>Good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={() => onLeaveFeedback("reset")}>Reset</button>
      )}
    </div>
  );
}

export default Options;
