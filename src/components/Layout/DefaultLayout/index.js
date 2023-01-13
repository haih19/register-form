import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Logo from "./Logo";

const cx = classNames.bind(styles);

function DefaultLayout({children}) {
   return (
      <div className={cx("wrapper")}>
         <div className={cx("main")}>
            <div className={cx("logo")}>
               <Logo />
            </div>
            <div className={cx("content")}>{children}</div>
         </div>
      </div>
   );
}

export default DefaultLayout;
