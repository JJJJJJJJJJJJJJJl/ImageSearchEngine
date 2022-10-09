from flask import Flask, request, Response
from flask_cors import CORS

import classifier

app = Flask(__name__);
CORS(app);

@app.route("/classify", methods=["POST"])
def get_labels():
    items = None;
    try:
        items = request.files.items();
        print("Images successfully received");
    except Exception as err:
        # H_ERROR stands for Handled Error (Exception)
        print("H_ERROR: ", end = '');
        print(err);

    labels = classifier.classify(items);
    print(labels);

    """
        Return will possibly be a dict containing trie structure...I'm not sure.
        Should the client query the server or query the trie that is running on his browser?
    """
    return "temp";

def main():
	app.run(debug=True, host="0.0.0.0", port=7777);
    
main();
