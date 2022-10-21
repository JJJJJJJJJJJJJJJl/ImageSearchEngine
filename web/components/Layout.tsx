import {ReactElement} from "react";

export default function SearchBar({children}): ReactElement {
    return (
        <div className="flex items-center justify-center bg-contain w-full h-full">
            <div className="flex-row items-center justify-center bg-739 w-10/12 pb-10 pt-10 my-10 border-solid rounded">
                <h1 className="text-2xl text-center text-pink-200 m-10 font-light relative">
                 +++ IMAGE SEARCH ENGINE<sup className="text-xs font-semibold absolute top-0 right-50">powered by AI +++ </sup>
                </h1>
                <main>{children}</main>
                <h1 className="text-center text-pink-200 mt-20 font-light"> +++ FAST REMINISCING +++ </h1>
            </div>
        </div>
    );
}