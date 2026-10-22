import { useAccount } from "@/context/account/AccountContext";
import useSwitchAccount from "@/hooks/useSwitchAccount";
import SelectFieldImgIcon from "@/svg/SelectFieldImgIcon";
import TypeBox from "@/ui/type-box/TypeBox";
import { Modal, ModalBody, ModalContent } from "@heroui/react";

export default function AccountSwitchModal({ isOpen, onOpenChange }: AccountSwitchModalProp) {
    const { handleSwitchAccount } = useSwitchAccount();
    const { accountMode } = useAccount();
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            disableAnimation={true}
            hideCloseButton
            placement="center"
            classNames={{
                backdrop: "bg-[#EAEAEF66] backdrop-opacity-60",
                base: "md:p-[20px] p-[20px] max-w-[592px] md:mx-0 mx-4",
                body: "px-0"
            }}
        >
            <ModalContent>
                {() => (
                    <>
                        {/* <ModalHeader className="flex items-center justify-between gap-1 md:mb-6 mb-0">
                            <span className="text-[#211C37] font-semibold md:text-[20px] text-[16px]">Account Switch</span>
                            <button type="button" onClick={onClose}><CloseMenuIcon /></button>
                        </ModalHeader> */}
                        <ModalBody>
                            <div className="px-4 account-switch-base">
                                <div className="svg-wrapper flex justify-center [&>svg]:w-[180px] [&>svg]:h-[180px]">
                                    <SelectFieldImgIcon />
                                </div>
                                <div className="select-field-title !text-[18px]">Select Your <span> Preparation Type</span></div>
                                <div className="select-field-type-base">
                                    <div onClick={() => handleSwitchAccount("exam")} className="cursor-pointer flex-1">
                                        <TypeBox text={"Government Exams Preparation"} image={
                                            <img src="/gov-exam-icon.svg" alt="stud" className="w-[100px] h-[100px]" />
                                        } isActive={accountMode === "exam" ? true : false} />
                                    </div>
                                    {/* <div onClick={() => examTypeActiveHandler("skills")}> */}
                                    <div onClick={() => handleSwitchAccount("skills")} className="type-select-item-disabled1 cursor-pointer flex-1">
                                        <TypeBox text={"Skills Preparation"} image={
                                            <img src="/skills-icon.svg" alt="stud" className="w-[100px] h-[100px]" />
                                        } isActive={accountMode === "skills" ? true : false} />
                                    </div>
                                </div>
                            </div>
                            {/* <div className="flex flex-col gap-4">
                                <button type="button" onClick={() => handleSwitchAccount("exam")} className={`bg-[#F7F1FF] border ${accountMode === "exam" ? "border-[#9933FF]" : "border-transparent"}  p-2`}>Government Exam Preparation</button>
                                <button type="button" onClick={() => handleSwitchAccount("skills")} className={`bg-[#F7F1FF] border ${accountMode === "skills" ? "border-[#9933FF]" : "border-transparent"}  p-2`}>Skills Preparation</button>
                            </div> */}
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

interface AccountSwitchModalProp {
    isOpen: boolean;
    onOpenChange: () => void;
}