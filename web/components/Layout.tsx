import {ReactElement} from "react";

export default function SearchBar({children}): ReactElement {
    return (
        <div className="flex items-center justify-center bg-contain w-full h-full">
            <div className="flex-row items-center justify-center bg-739 w-10/12 pb-10 pt-10 my-10 border-solid rounded">
                <h1 className="text-2xl text-center text-pink-200 m-10 font-light relative">
                 +++ IMAGE SEARCH ENGINE +++ 
                </h1>
                <main>{children}</main>
                <h1 className="text-center text-pink-200 mt-20 font-light"> +++ FAST REMINISCING +++ </h1>
                <p className="text-center text-pink-200"><sup className="text-xs font-light"> ⁂ powered by OpenAI:GPT2 </sup></p>
            </div>
        </div>
    );
}