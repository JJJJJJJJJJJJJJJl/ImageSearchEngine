from flask import Flask, request;
from flask_cors import CORS;

import classifier;

app = Flask(__name__);
CORS(app);

@app.route("/classify", methods=["POST"])
def get_labels():
    items = None;
    try:
        items = request.files.items();
        print(items);
        print("Images successfully received");
    except Exception as err:
        # H_ERROR stands for Handled Error (Exception)
        print("H_ERROR: ", end = '');
        print(err);

    # Image descriptions
    global labels;

    """ BEGIN OF PIPELINE """
    # Assigning each image to a description phrase
    labels = classifier.classify(items);
    print(labels);

    # Processing descriptions (phrases -> set of words)
    #labels = ;

    # Create trie (given images and processed descriptions)

    # Save trie in server database or send it back to client (?) **

    """ END OF PIPELINE """

    """
        ** Should the client query the server or query the trie that is running on his browser?
            - Assuming client has uploaded photos are in browser reach, the client 
            could simply query against the locally stored trie instead of sending
            a request each time the query string changes. 
    """
    return "temp";

def main():
	app.run(debug=True, host="0.0.0.0", port=7777);
    
main();
