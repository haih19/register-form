import classNames from "classnames/bind";
import styles from "./Logo.module.scss";

const cx = classNames.bind(styles);

function Logo() {
   return (
      <div className={cx("wrapper")}>
         <img
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt="Facebook"
         />
      </div>
   );
}

export default Logo;
