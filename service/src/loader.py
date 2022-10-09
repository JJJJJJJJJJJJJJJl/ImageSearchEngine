""" 
    Module responsible for (down)loading the model..
 """

import os

import torch
import torchvision
from transformers import VisionEncoderDecoderModel, ViTFeatureExtractor, AutoTokenizer, AutoModel

device = "cuda" if torch.cuda.is_available() else "cpu";

def load_model(path):
    global model;
    global feature_extractor;
    global tokenizer;

    if os.path.exists(path):
        print("Loading model ("+ path +")..");
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