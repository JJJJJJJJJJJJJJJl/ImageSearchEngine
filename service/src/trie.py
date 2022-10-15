from build.trie import *;

def create(items, labels):
    root = TrieNode(True, 'a');
    
    for item, label in zip(items, labels):
        image_url = item[0];
        # List
        image_description = label;
        root.update_trie(root, image_url, image_description);

    return root;
        

