""" 
    Module responsible for processing raw descriptions.
"""

def tokenize(labels):
    processed_labels = [];
    for label in labels:
        label = label.split(" ");
        processed_labels.append(label);
    return processed_labels;

def swr(tokenized_labels):
    swrd_labels = []
    stopwords = load_stopwords();
    for tkl in tokenized_labels:
        swrd_labels.append([word for word in tkl if word not in stopwords]);
    return swrd_labels;

def del_duplicates(juicy_labels):
    for juicy_label in juicy_labels:
        juicy_labels_set = set();
        for word in juicy_label:
            if word not in juicy_labels_set:
                juicy_labels_set.add(word);
            else:
                juicy_label.remove(word);
    return juicy_labels;

def process(labels):

    # Tokenization
    processed_labels = tokenize(labels);

    # Stop word removal
    processed_labels = swr(processed_labels);

    # Remove duplicates
    processed_labels = del_duplicates(processed_labels);

    for pl in processed_labels:
        print(pl);

    return processed_labels;

def load_stopwords():
    return ['i', 'me', 'my', 'myself', 'we', 'our', 
    'ours', 'ourselves', 'you', "you're", "you've", 
    "you'll", "you'd", 'your', 'yours', 'yourself', 
    'yourselves', 'he', 'him', 'his', 'himself', 
    'she', "she's", 'her', 'hers', 'herself', 'it', 
    "it's", 'its', 'itself', 'they', 'them', 'their', 
    'theirs', 'themselves', 'what', 'which', 'who', 
    'whom', 'this', 'that', "that'll", 'these', 
    'those', 'am', 'is', 'are', 'was', 'were', 'be', 
    'been', 'being', 'have', 'has', 'had', 'having', 
    'do', 'does', 'did', 'doing', 'a', 'an', 'the', 
    'and', 'but', 'if', 'or', 'because', 'as', 'until', 
    'while', 'of', 'at', 'by', 'for', 'with', 'about', 
    'against', 'between', 'into', 'through', 'during', 
    'before', 'after', 'above', 'below', 'to', 'from', 
    'up', 'down', 'in', 'out', 'on', 'off', 'over', 
    'under', 'again', 'further', 'then', 'once', 'here', 
    'there', 'when', 'where', 'why', 'how', 'all', 'any', 
    'both', 'each', 'few', 'more', 'most', 'other', 'some', 
    'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 
    'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 
    'don', "don't", 'should', "should've", 'now', 'd', 'll', 
    'm', 'o', 're', 've', 'y', 'ain', 'aren', "aren't", 'couldn', 
    "couldn't", 'didn', "didn't", 'doesn', "doesn't", 'hadn', 
    "hadn't", 'hasn', "hasn't", 'haven', "haven't", 'isn', 
    "isn't", 'ma', 'mightn', "mightn't", 'mustn', "mustn't", 
    'needn', "needn't", 'shan', "shan't", 'shouldn', "shouldn't", 
    'wasn', "wasn't", 'weren', "weren't", 'won', "won't", 'wouldn', 
    "wouldn't"];