import styles from "./FormInput.module.scss";
import classNames from "classnames/bind";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function FormInput(props) {
   const [isShowed, setIsShowed] = useState(false);

   const {
      errorMessage,
      name,
      pattern,
      type,
      hidden,
      onChange,
      id,
      ...inputProps
   } = props;

   const handleOnclickShowPass = () => {
      setIsShowed(!isShowed);
   };
   return (
      <div className={cx("form-input")}>
         <input
            name={name}
            className={cx("input")}
            {...inputProps}
            onChange={onChange}
            type={!isShowed ? type : "text"}
         />
         <span className={cx("error-message")}>{errorMessage}</span>
         {hidden && (
            <div className={cx("show-btn")} onClick={handleOnclickShowPass}>
               <span>
                  {isShowed ? (
                     <FontAwesomeIcon
                        className={cx("showed-pass")}
                        icon={faEye}
                     />
                  ) : (
                     <FontAwesomeIcon
                        className={cx("hidden-pass")}
                        icon={faEyeSlash}
                     />
                  )}
               </span>
            </div>
         )}
      </div>
   );
}

export default FormInput;
