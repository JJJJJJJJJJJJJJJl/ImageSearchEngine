import {ReactElement, useEffect, useState} from 'react';
import SearchBar from '../components/SearchBar';
import Image from 'next/image';

const MAX_IMAGE_UPLOAD: number = 10; 

export default function Home(): ReactElement{
    const [images, set_images] = useState<Array<Blob> | null>(new Array<Blob>());
    const [images_url, set_images_url] = useState<Array<string> | null>(new Array<string>(MAX_IMAGE_UPLOAD));

    useEffect(() => {
        const images_size: number = images.length;
        if(images_size > 0 && images_size < MAX_IMAGE_UPLOAD+1){
            const new_images_url = new Array<string>(MAX_IMAGE_UPLOAD);
            var index: number = 0;
            while(index < images_size){
                new_images_url.push(URL.createObjectURL(images[index++]));
            }
            set_images_url(new_images_url);
        }
        else if(images_size > 0){
            alert("You can only upload up to " + MAX_IMAGE_UPLOAD + " images.");
        }
        else{
            return;
        }
    },
    [images]);

    function on_image_change(e): void{
        set_images([...e.target.files]);
        return null;
    };

    function get_form(): FormData{
        if(images.length == 0){
            return null;
        }
        let form = new FormData();
        let image_number = 0;
        for(let image of images){
            form.append(images[image_number++]["name"].toString(), image);
        }
        return form;
    }

    async function send_images(): Promise<void>{
        const form = get_form();
        if(form == null) {
            alert("You might want to add some images");
            return null;
        }
        const res = await fetch("http://localhost:7777/submit_data", {
            method: "POST",
            body: form
        });
        console.log("res: " + res);
        return null;
    }

    return (
    <div className='flex-row justify-around bg-pink-300'>
        <h1 className="text-3xl font-bold underline text-red-600 mx-10 my-10 py-10">
        JJJJJJ
        </h1>
        <SearchBar ph={"slatº,~:`-"}></SearchBar>
        <input type="file" multiple accept="image/*" onChange={on_image_change} />
        {/* 
            TODO: create component for uploaded images
        */}
        { images_url.map(imageSrc => <Image key={imageSrc} src={imageSrc} width={250} height={250}/>)}
        {/* 
            TODO: create component for button (add it to searchbar component aswell);
        */}
        <button onClick={send_images} className="px-4 text-white bg-red-600 ">Submit</button>
    </div>
    );
};
