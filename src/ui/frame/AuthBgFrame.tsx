import { ToastContainer } from 'react-toastify';
import "./authbg-frame.css";
export default function AuthBgFrame({ children }: AuthBgFrameProp) {
    return (
        <>
            <div className="bg-[linear-gradient(90deg,#6633CC,#9933FF)] 2xl:min-h-[calc(100vh-106px)] min-h-[calc(100vh-76px)] bg-cover bg-no-repeat flex justify-center items-center px-4">
                {children}
            </div>
            <ToastContainer />
        </>
    )
}

interface AuthBgFrameProp {
    children: React.ReactNode
}