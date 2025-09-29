import { memo } from 'react';
import Navbar from "./Navbar"
const CommonLayout = ({children}) => {
    return (
        <div className=" min-h-screen flex flex-col">
            <Navbar />
            <div className="grow-1">{children}</div>
        </div>
    );
};

export default memo(CommonLayout);