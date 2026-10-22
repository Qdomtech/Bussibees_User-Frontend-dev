import SignUpImgIcon from "@/svg/SignUpImgIcon";
import AuthBgFrame from "@/ui/frame/AuthBgFrame";
import UseLogin from "./hook/useLogin";
import LockIcon from "@/svg/LockIcon";
import { Link } from "react-router";
import "./login.css";
import UserIcon from "@/svg/UserIcon";
import CloseEyeIcon from "@/svg/CloseEyeIcon";
import OpenEyeIcon from "@/svg/OpenEyeIcon";

export default function Login() {
    const { formik, isShowPass, togglePasswordVisibility, signUpLink } = UseLogin();
    return (
        <>
            <AuthBgFrame>
                <div className="sign-up-base">
                    <div className="sign-up-img-wrapper">
                        <SignUpImgIcon />
                        <div className="sign-up-title mt-4">Log <span>In</span></div>
                    </div>
                    <div className="w-full">
                        {/* form */}
                        <div className="sign-up-form-base">
                            <div className="mobile-input-field">
                                <div className="flex items-center gap-x-2 w-full">
                                    <UserIcon />
                                    <input
                                        type="text"
                                        // placeholder="Phone Number / email Address"
                                        placeholder="Email address"
                                        name="type"
                                        className="w-full"
                                        value={formik.values.type}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                            </div>
                            {
                                (formik.touched.type && formik.errors.type) && <p className="field-error-msg">{formik.errors.type}</p>
                            }
                            <div>
                                <div className="password-input-field">
                                    <div className="flex items-center gap-x-2 w-full">
                                        <LockIcon />
                                        <input
                                            type={isShowPass ? "text" : "password"}
                                            placeholder="Enter Password"
                                            name="password"
                                            className="w-full"
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        <button onClick={togglePasswordVisibility}>
                                            {
                                                isShowPass ?
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
                        </div>
                        <button onClick={formik.submitForm} className="common-btn-ui">Submit</button>
                        {/* {
                            isValidMob ?
                                :
                                <button disabled={true} className="common-btn-ui disabled">Submit</button>
                        } */}
                        <div className="flex items-center justify-between">
                            <Link to={"/forget-password"} className="forget-password-redirect-link">Forget Password</Link>
                            <div className="signup-btm-text">New User <Link to={signUpLink}>Sign Up</Link></div>
                        </div>
                    </div>
                </div>

            </AuthBgFrame>
        </>
    )
}
