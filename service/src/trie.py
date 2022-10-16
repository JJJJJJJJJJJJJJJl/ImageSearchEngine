from build.trie import *;


def create(items, labels):
    global root;
    root = TrieNode(True, 'a');
    print("wtf: ", end='');
    print(root);
    for item, label in zip(items, labels):
        image_url = item[0];
        # List
        image_description = label;
        root.update_trie(root, image_url, image_description);
    return root;

def get_results(input):
    if len(input) == 0:
        return ["No matching images."];
    print(root);
    print("input: " + input);
    results = root.get_query_results(root, input);
    return results;

#create(["ahah", "xd"], [["ah", "xd"],["ok", "plsfckoff"]]);