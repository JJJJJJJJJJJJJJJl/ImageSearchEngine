import React, { ReactElement } from 'react';
import Image from 'next/image';

export default function SearchBar(data: {images_url: Array<string>}): ReactElement {
    return (
        <div className="flex justify-evenly flex-wrap overflow-y-scroll w-3/4 h-96 mt-10 mx-auto border border-solid border-pink-200">
            { data.images_url.map((imageSrc) =>
                <div key={imageSrc} className="flex items-center justify-center m-6 w-fit h-fit overflow-visible hover:cursor-pointer border border-solid border-pink-200 hover:scale-125 transition-transform ease-in-out duration-150">
                    <Image src={imageSrc} width={125} height={125} alt="${imageSrc}"/>
                </div>
            )}
        </div>
    );
}