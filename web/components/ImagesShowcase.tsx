import React, { ReactElement } from 'react';
import Image from 'next/image';

export default function SearchBar(data: {images_url: Array<string>}): ReactElement {
    return (
        <div className="flex justify-evenly flex-wrap overflow-y-scroll w-3/4 h-96 mt-10 mx-auto border border-solid border-pink-200">
            { data.images_url.map((imageSrc) =>
                <div key={imageSrc} className="flex items-center justify-center m-6 w-fit border border-dotted border-pink-200">
                    <Image src={imageSrc} width={125} height={125}/>
                </div>
            )}
        </div>
    );
}