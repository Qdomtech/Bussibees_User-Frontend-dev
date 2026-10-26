import AuthBgFrame from "@/ui/frame/AuthBgFrame";
import "./sign-up.css";
import SignUpImgIcon from "@/svg/SignUpImgIcon";
// import MobileIcon from "@/svg/MobileIcon";
import UseSignUp from "./hook/useSignUp";
import { Link } from "react-router";
import LockIcon from "@/svg/LockIcon";
import OpenEyeIcon from "@/svg/OpenEyeIcon";
import CloseEyeIcon from "@/svg/CloseEyeIcon";
import EmailIcon from "@/svg/EmailIcon";

export default function SignUp() {
    const {
        formik,
        sendOTP,
        isSendingOTP,
        isValidEmail,
        isPasswordShow,
        isConfirmPasswordShow,
        toggleConfirmPassword,
        togglePassword
    } = UseSignUp()
    return (
        <>
            <AuthBgFrame>
                <div className="sign-up-base">
                    <div className="sign-up-img-wrapper">
                        <SignUpImgIcon />
                        <div className="sign-up-title mt-4">Sign <span>Up</span></div>
                    </div>
                    <div className="w-full">
                        {/* form */}
                        <div className="sign-up-form-base">
                            <div className="mobile-input-field">
                                <div className="flex items-center gap-x-2 w-full">
                                    <EmailIcon />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={(e: { target: { value: string; }; }) => {
                                            formik.setFieldValue("email", e.target.value);
                                            // const value = e.target.value.replace(/\D/g, "");
                                            // if (value.toString().length <= 10) {
                                            //     formik.setFieldValue("mobileNo", value);
                                            // }
                                        }}
                                        className="w-full"
                                    />
                                </div>
                                {
                                    isValidEmail ?
                                        <div
                                            className="verify-btn"
                                        >Verified</div>
                                        : ""
                                }
                            </div>
                            {
                                isValidEmail && <>
                                    <div>

                                        <div className="password-input-field">
                                            <div className="flex items-center gap-x-2 w-full">
                                                <LockIcon />
                                                <input
                                                    type={isPasswordShow ? "text" : "password"}
                                                    placeholder="Enter Password"
                                                    name="password"
                                                    className="w-full"
                                                    value={formik.values.password}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                                <button onClick={togglePassword}>
                                                    {
                                                        isPasswordShow ?
                                                            <OpenEyeIcon />
                                                            :
                                                            <CloseEyeIcon />
                                                    }
                                                </button>
                                            </div>
                                        </div>
                                        {
                                            formik.touched.password && <p className="field-error-msg">{formik.errors.password}</p>
                                        }
                                    </div>
                                    <div>
                                        <div className="password-input-field">
                                            <div className="flex items-center gap-x-2 w-full">
                                                <LockIcon />
                                                <input
                                                    type={isConfirmPasswordShow ? "text" : "password"}
                                                    placeholder="Confirm Password"
                                                    name="confirmPassword"
                                                    className="w-full"
                                                    value={formik.values.confirmPassword}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                                <button onClick={toggleConfirmPassword}>
                                                    {
                                                        isConfirmPasswordShow ?
                                                            <OpenEyeIcon />
                                                            :
                                                            <CloseEyeIcon />
                                                    }
                                                </button>
                                            </div>
                                        </div>
                                        {
                                            formik.touched.confirmPassword && <p className="field-error-msg">{formik.errors.confirmPassword}</p>
                                        }
                                    </div>
                                </>
                            }
                        </div>
                        {
                            isValidEmail ?
                                <button onClick={formik.submitForm} className="common-btn-ui">Submit</button>
                                :
                                <button disabled={formik.values.email === "" || isSendingOTP}
                                    className={`common-btn-ui ${formik.values.email === "" || isSendingOTP ? "disabled" : ""}`}
                                    onClick={() => sendOTP("email")}
                                >{isSendingOTP ? "Sending..." : "Submit"}</button>
                        }
                        <div className="signup-btm-text">Already have an account? <Link to={"/login"}>Login</Link></div>
                    </div>
                </div>

            </AuthBgFrame>
        </>
    )
}
