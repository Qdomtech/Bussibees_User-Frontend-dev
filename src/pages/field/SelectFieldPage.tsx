import SelectFieldImgIcon from "@/svg/SelectFieldImgIcon";
import AuthBgFrame from "@/ui/frame/AuthBgFrame";
import TypeBox from "@/ui/type-box/TypeBox";
import { Link } from "react-router";
import UseSelectField from "./hook/useSelectField";
import "./select-field-page.css";
export default function SelectFieldPage() {
    const {
        selectFieldFormik,
        fieldTypeActiveHandler,
        isNextSection,
        toggleNextSection,
        examTypeActiveHandler
    } = UseSelectField();
    return (
        <>
            <AuthBgFrame>
                <div className="select-field-base">
                    <div className="svg-wrapper">
                        <SelectFieldImgIcon />
                    </div>
                    {/* toggle */}
                    {
                        !isNextSection ?
                            <div className="w-full min-[501px]:min-w-[496px]">
                                <div className="select-field-title">Sign <span> Up</span></div>
                                <div className="select-field-type-base">
                                    <div onClick={() => fieldTypeActiveHandler("student")}>
                                        <TypeBox text={"Student"} image={
                                            <img src="/student-icon.svg" alt="stud" />
                                        } isActive={selectFieldFormik.values.studentType === "student" ? true : false} />
                                    </div>
                                    {/* <div onClick={() => fieldTypeActiveHandler("institute")} className="type-select-item-disabled"> */}
                                    {/* <div className="type-select-item-disabled">
                                        <TypeBox text={"Coaching institute"} image={
                                            <img src="/institute-icon.svg" alt="stud" />
                                        } isActive={selectFieldFormik.values.studentType === "institute" ? true : false} />
                                    </div> */}
                                </div>
                                <button onClick={toggleNextSection} className="common-btn-ui">Next</button>
                            </div>
                            :
                            <div className="w-full min-[501px]:min-w-[496px]">
                                <div className="select-field-title">Sign <span> Up</span></div>
                                <div className="select-field-type-base">
                                    <div onClick={() => examTypeActiveHandler("exam")} className="cursor-pointer">
                                        <TypeBox text={"Government Exams Preparation"} image={
                                            <img src="/gov-exam-icon.svg" alt="stud" />
                                        } isActive={selectFieldFormik.values.examType === "exam" ? true : false} />
                                    </div>
                                    {/* <div onClick={() => examTypeActiveHandler("skills")}> */}
                                    <div onClick={() => examTypeActiveHandler("skills")} className="type-select-item-disabled1 cursor-pointer">
                                        <TypeBox text={"Skills Preparation"} image={
                                            <img src="/skills-icon.svg" alt="stud" />
                                        } isActive={selectFieldFormik.values.examType === "skills" ? true : false} />
                                    </div>
                                </div>
                                <button onClick={selectFieldFormik.submitForm} className="common-btn-ui">Next</button>
                            </div>
                    }
                    <div className="flex items-center justify-between">
                        <div className="signup-btm-text !mb-0">Already have an account? <Link to={"/login"}>Login</Link></div>
                    </div>
                </div>
            </AuthBgFrame>
        </>
    )
}
