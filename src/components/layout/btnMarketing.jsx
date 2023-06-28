import styles from "./css/button.module.css";

export default function BtnMarketing({name, to, title}) {
  return <a title={title} className={`${styles['btn-marketing']} ${styles[name]}`} to={to} >button</a>;
}
