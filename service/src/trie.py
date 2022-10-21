from build.trie import *;


def create(items, labels):
    global root;
    root = TrieNode(True, 'a');
    for item, label in zip(items, labels):
        image_url = item[0];
        # List
        image_description = label;
        root.update_trie(root, image_url, image_description);
    return root;

def get_results(input):
    try:
        results = root.get_query_results(root, input);
        return results;
    except Exception as e:
        print(e);
        return [];

#create(["ahah", "xd"], [["ah", "xd"],["ok", "plsfckoff"]]);