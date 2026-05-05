import "./NavigateWrapper.scss"
import { useNavigate } from "react-router";
import { useEffect, useRef } from "react";

export function NavigateWrapper({ children, delay = 0, page = "/test"}) {

    const root = useRef(null);
    const navigate = useNavigate();
    
    // This function will send user to another page
    function changePage() {
        const timeout = setTimeout(() => {
            navigate(page);
        }, delay);
    }
    
    useEffect(() => {
        const navigateWrapper = root.current;

        navigateWrapper.addEventListener("click", changePage);
    
        return () => {
            navigateWrapper.removeEventListener("click", changePage);
        }

    }, []);
    return (
        <div className="navigateWrapper">
            {children}
            <div className="navigateWrapper__pad" cursor="pointer" ref={root}></div>
        </div>
    );
}