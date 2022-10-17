import {ReactElement} from "react";

export default function SearchBar({children}): ReactElement {

    return (
        <div className="flex items-center justify-center bg-contain w-full h-full">
            <div className="flex-row items-center justify-center bg-739 p-40 pt-10 m-44 mt-10 border-solid rounded">
                <h1 className="text-3xl text-center text-orange-100 m-10">
                +++Image Search+++
                </h1>
                <main>{children}</main>
            </div>
        </div>
    );
}