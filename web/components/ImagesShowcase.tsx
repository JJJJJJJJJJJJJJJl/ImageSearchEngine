import React, { ReactElement } from 'react';
import Image from 'next/image';

export default function SearchBar(data: {images_url: Array<string>}): ReactElement {
    return (
        <div className="flex flex-wrap overflow-y-scroll w-3/4 h-96 mt-10 mx-36 border-double border-red-300">
            { data.images_url.map((imageSrc) =>
                <div key={imageSrc} className="flex items-center justify-center basis-1/4 m-6 grow w-min">
                    <Image src={imageSrc} width={125} height={125}/>
                </div>
            )}
        </div>
    );
}