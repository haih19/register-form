import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import {Link, useNavigate} from "react-router-dom";
import Button from "../../components/Button";
import {useEffect, useState} from "react";
import FormInput from "../../components/FormInput";
import {CHECK_ERROR, VALIDATE} from "../../common/helper";
import {INPUT} from "../../common/constants";
import {toast} from "react-toastify";
const cx = classNames.bind(styles);

function Register() {
   const navigate = useNavigate();
   const [isSubmit, setIsSubmit] = useState(false);
   const [values, setValues] = useState({
      username: "",
      email: "",
      password: "",
      confirm: "",
   });
   const [error, setError] = useState({
      username: "",
      email: "",
      password: "",
      confirm: "",
   });

   const inputs = INPUT.INPUTS_REGISTER.map((input) => {
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
         return {...prev, [e.target.name]: e.target.value};
      });
   };

   const handleOnsubmit = (e) => {
      e.preventDefault();
      setError((prev) => {
         return {
            ...prev,
            ...VALIDATE.validateRegister(values).errorsForm,
         };
      });
      setIsSubmit(!isSubmit);
   };

   useEffect(() => {
      if (
         CHECK_ERROR.checkValueObject(
            VALIDATE.validateRegister(values).validInput
         ) &&
         isSubmit
      ) {
         setIsSubmit(!isSubmit);
         toast.success(
            "Your registration has been completely successed! Enjoy our app"
         );
         navigate("/login");
         return;
      } else {
         setIsSubmit(false);
         return;
      }
   }, [isSubmit, error, values, navigate]);

   return (
      <div className={cx("wrapper")}>
         <form
            onSubmit={handleOnsubmit}
            action=""
            className={cx("form-register")}>
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
                  Register
               </Button>
            </div>

            <div className={cx("forgotten-pass")}>
               <Link href="#">
                  Already have an account? Click Log in button below!
               </Link>
            </div>
            <div className={cx("line")}></div>
            <div className={cx("log-in")}>
               <Button to="/login" secondary="secondary">
                  Log in
               </Button>
            </div>
         </form>
      </div>
   );
}

export default Register;
