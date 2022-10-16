from flask import Flask, request;
from flask_cors import CORS;

import descriptor;
import processor;
import trie;

app = Flask(__name__);
CORS(app);

@app.route("/submit_data", methods=["POST"])
def process_input():
    items = None;
    items_perm = None;
    try:
        items = request.files.items();
        items_perm = [it for it in items];
        print("Images successfully received");
    except Exception as err:
        # H_ERROR stands for Handled Error (Exception)
        print("H_ERROR: ", end = '');
        print(err);

    # Image descriptions
    global labels;

    """ BEGIN OF PIPELINE """
    # Assigning each image to a description phrase
    labels = descriptor.describe(items_perm);
    print("labels: ", end='');
    print(labels);

    # Processing descriptions (phrases -> set of words)
    labels = processor.process(labels);
    print("labels: ", end='');
    print(labels);

    """ i = 0;
    for item in items_perm:
        print(item[0]);
        print(labels[i]);
        i = i+1; """

    # Create trie (given images and processed descriptions)
    trie.create(items_perm, labels);

    # Save trie in server database or send it back to client (?) **

    """ END OF PIPELINE """

    """
        ** Should the client query the server or query the trie that is running on his browser?
            - Assuming client has uploaded photos are in browser reach, the client 
            could simply query against the locally stored trie instead of sending
            a request each time the query string changes. 
    """
    return "temp";

@app.route('/query', methods=['GET'])
def process_query():
    results = trie.get_results(request.args['input']);
    print(results);
    # Return image_urls !!
    return results;

def main():
	app.run(debug=True, host="0.0.0.0", port=7777);
    
main();
