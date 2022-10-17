import {ReactElement, useEffect, useState} from 'react';
import SearchBar from '../components/SearchBar';
import Image from 'next/image';
import Link from 'next/link';

const MAX_IMAGE_UPLOAD: number = 20; 

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

    function handle_submit(){
        send_images();
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
    <div className="flex items-center justify-center bg-contain w-full m-0 p-0 bg-[url('/lean.webp')]">
        <div className="flex-row items-center justify-center bg-[url('/bh.gif')] opacity-75 p-40 pt-10 m-44 mt-10 border-solid rounded">
            <h1 className="text-3xl text-center text-orange-100 m-10">
            +++Image Search+++
            </h1>
            <div className="flex justify-between">
                <label className="bg-pink-200 text-slate-600 px-4 py-3 m-1">
                    <input type="file" multiple accept="image/*" onChange={on_image_change} className="text-red-600 hidden"/>
                    Choose your images ^^
                </label>
                {/* 
                    TODO: create component for button (add it to searchbar component aswell);
                */}
                <Link href="/search">
                    <button onClick={send_images} className="px-4 py-3 m-1 text-slate-600 bg-pink-200">Submit</button>
                </Link>
            </div>
            <div className="flex flex-wrap overflow-y-scroll h-96 mt-10">
                {/* 
                    TODO: create component for uploaded images
                */}
                { images_url.map(imageSrc => 
                    <div className="flex items-center justify-center basis-1/4 m-6 grow w-min border-dashed rounded">
                        <Image key={imageSrc} src={imageSrc} width={125} height={125}/>
                    </div>
                )}
            </div>
        </div>
    </div>
    );
};
