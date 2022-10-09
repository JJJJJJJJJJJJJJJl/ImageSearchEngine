""" 
    Module responsible for processing raw descriptions.
"""

import nltk;

def tokenize(labels):
    processed_labels = [];
    for label in labels:
        label = label.split(" ");
        processed_labels.append(label);
    return processed_labels;

def swr(tokenized_labels):
    swrd_labels = []
    nltk.download('stopwords');
    stopwords = nltk.corpus.stopwords.words('english');
    for tkl in tokenized_labels:
        swrd_labels.append([word for word in tkl if word not in stopwords]);
    return swrd_labels;

def process(labels):

    # Tokenization
    processed_labels = tokenize(labels);

    for pl in processed_labels:
        print(pl);

    # Stop word removal
    processed_labels = swr(processed_labels);

    for pl in processed_labels:
        print(pl);

    return processed_labels;
