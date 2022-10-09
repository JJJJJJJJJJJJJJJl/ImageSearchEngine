""" 
    Module responsible for describing received images.
"""

from PIL import Image;
import loader;
import env;

def describe(items):
    loader.load_model(env.path);

    max_length = 16;
    num_beams = 4;
    gen_kwargs = {"max_length": max_length, "num_beams": num_beams};
    
    images = [];
    
    for item in items:
        key = item[0];
        img = item[1];
        i_image = Image.open(img);
        i_image.save(env.dir+"/album/"+key);
        if i_image.mode != "RGB":
            i_image = i_image.convert(mode="RGB");
        images.append(i_image);

    pixel_values = loader.feature_extractor(images=images, return_tensors="pt").pixel_values;
    pixel_values = pixel_values.to(loader.device);

    output_ids = loader.model.generate(pixel_values, **gen_kwargs);

    preds = loader.tokenizer.batch_decode(output_ids, skip_special_tokens=True);
    preds = [pred.strip() for pred in preds];
    return preds;