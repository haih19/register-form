import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import {Link, useNavigate} from "react-router-dom";
import Button from "../../components/Button";
import {useEffect, useState} from "react";
import FormInput from "../../components/FormInput";
import {VALIDATE, CHECK_ERROR} from "../../common/helper";
import {INPUT} from "../../common/constants";
import {toast} from "react-toastify";
const cx = classNames.bind(styles);

function Login() {
   const navigate = useNavigate();
   const [isSubmit, setIsSubmit] = useState(false);
   const [values, setValues] = useState({
      username: "",
      password: "",
   });
   const [error, setError] = useState({
      username: "",
      password: "",
   });

   const inputs = INPUT.INPUTS_LOGIN.map((input) => {
      return {
         ...input,
         errorMessage: error[input.name],
      };
   });

   const onChange = (e) => {
      setError((prev) => {
         return {
            ...prev,
            [e.target.name]: "",
         };
      });
      setValues((prev) => {
         return {
            ...prev,
            [e.target.name]: e.target.value,
         };
      });
   };

   const handleOnsubmit = (e) => {
      e.preventDefault();
      setError((prev) => {
         return {
            ...prev,
            ...VALIDATE.validateLogin(values).errorsForm,
         };
      });
      setIsSubmit(!isSubmit);
   };

   useEffect(() => {
      if (
         CHECK_ERROR.checkValueObject(
            VALIDATE.validateLogin(values).validInput
         ) &&
         isSubmit
      ) {
         setIsSubmit(true);
         toast.success(
            "Your registration has been completely successed! Enjoy our app"
         );
         setValues({
            username: "",
            password: "",
         });
         navigate("/login");
         return;
      } else {
         setIsSubmit(false);
         return;
      }
   }, [isSubmit, error, values, navigate]);

   return (
      <div className={cx("wrapper")}>
         <form onSubmit={handleOnsubmit} action="" className={cx("form-login")}>
            {inputs.map((input) => (
               <FormInput
                  key={input.id}
                  {...input}
                  name={input.name}
                  onChange={onChange}
                  value={values[input.name]}
               />
            ))}
            <div className={cx("register")}>
               <Button type="submit" primary="primary">
                  Log in
               </Button>
            </div>

            <div className={cx("forgotten-pass")}>
               <Link href="#">Forgotten password?</Link>
            </div>
            <div className={cx("line")}></div>
            <div className={cx("log-in")}>
               <Button to="/" secondary="secondary">
                  Register
               </Button>
            </div>
         </form>
      </div>
   );
}

export default Login;
