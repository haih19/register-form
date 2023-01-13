import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import {Link} from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
   to,
   href,
   children,
   onClick,
   primary,
   secondary,
   ...passProps
}) {
   let Comp = "button";
   const props = {
      to,
      href,
      children,
      onClick,
      primary,
      secondary,
      ...passProps,
   };

   if (to) {
      props.to = to;
      Comp = Link;
   } else if (href) {
      props.href = href;
      Comp = "a";
   }

   const classes = cx("wrapper", primary, secondary);

   return (
      <Comp className={classes} {...props}>
         {children}
      </Comp>
   );
}

export default Button;
