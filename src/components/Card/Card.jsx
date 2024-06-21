import Icon from "../Icon/Icon";
import styles from "./Card.module.css";

function Card({ onPlay, index, player, isWinner }) {
  let icon = <Icon />;

  if (player === "X" || player === "O") {
    icon = <Icon name={player} />;
  }

  return (
    <div className={styles.card} onClick={() => {
      if(isWinner) return;
      onPlay(index)
    }}>
      {icon}
    </div>
  );
}

export default Card;
