import styles from "./Chip.module.css";
import Caption from "../FontStyles/Caption/Caption";

const Chip = (props) => {
  return (
    <div className={styles.container}>
      <Caption label={props.label} color="#ffffff" />
    </div>
  );
};

export default Chip;
