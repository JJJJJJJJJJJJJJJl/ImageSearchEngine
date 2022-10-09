import os
import torch
import torchvision
from transformers import VisionEncoderDecoderModel, ViTFeatureExtractor, AutoTokenizer, AutoModel
from PIL import Image

from flask import Flask, request, Response, jsonify
from flask_cors import CORS

app = Flask(__name__);
CORS(app);

device = "cuda" if torch.cuda.is_available() else "cpu"
print("Device: " + device);

dir = "./service"
path = dir+"/models_torchsave";
model = None;
feature_extractor = None;
tokenizer = None;

def load_model(path):
    if os.path.exists(path):
        print("Loading model ("+ path +")..");
        global model;
        global feature_extractor;
        global tokenizer;
        model = torch.load(path+"/m.pt");
        model = model.to(device);
        feature_extractor = torch.load(path+"/fe.pt");
        tokenizer = torch.load(path+"/t.pt");
        print("Model successfully loaded*+-.");
    else:
        os.mkdir(path);
        print("Downloading model..");
        model = VisionEncoderDecoderModel.from_pretrained("nlpconnect/vit-gpt2-image-captioning");
        feature_extractor = ViTFeatureExtractor.from_pretrained("nlpconnect/vit-gpt2-image-captioning");
        tokenizer = AutoTokenizer.from_pretrained("nlpconnect/vit-gpt2-image-captioning");
        print("Model successfully downloaded*+-.");
        print("Saving model ("+ path +")..");
        torch.save(model, path+"/m.pt");
        torch.save(feature_extractor, path+"/fe.pt");
        torch.save(tokenizer, path+"/t.pt");
        print("Model successfully saved*+-.");
    
    return model, feature_extractor, tokenizer;

@app.route("/predict", methods=["POST"])
def predict_step():
    image_paths = ['../web/assets/test_images/playboy.png','../web/assets/test_images/test.png'];
    """ req_json = request.get_json();
    print("req_json: "+req_json);
    json_instances = req_json["instances"];
    print("json_instances: "+json_instances); """
    files = None;
    items = None;
    try:
        # check if the post request has the file part
        files = request.files;
        items = files.items();
        print("Images successfully received");
    except Exception as err:
        # H_ERROR stands for Handled Error (Exception)
        print("H_ERROR: ", end = '');
        print(err);

    max_length = 16;
    num_beams = 4;
    gen_kwargs = {"max_length": max_length, "num_beams": num_beams};
    images = [];
    for img in items:
        key = img[0];
        i_image = Image.open(files.get(key));
        i_image.save(dir+"album/"+key+".png");
        if i_image.mode != "RGB":
            i_image = i_image.convert(mode="RGB");
        images.append(i_image);

    pixel_values = feature_extractor(images=images, return_tensors="pt").pixel_values;
    pixel_values = pixel_values.to(device);

    output_ids = model.generate(pixel_values, **gen_kwargs);

    preds = tokenizer.batch_decode(output_ids, skip_special_tokens=True);
    preds = [pred.strip() for pred in preds];
    print(preds);
    return preds;


@app.route("/isalive")
def is_alive():
    print("/isalive request")
    status_code = Response(status=200)
    return status_code

def main():
	load_model(path);
	#print(predict_step(['../web/assets/test_images/playboy.png','../web/assets/test_images/test.png'], model, feature_extractor, tokenizer));
	app.run(debug=True, host="0.0.0.0", port=7777);

main();
