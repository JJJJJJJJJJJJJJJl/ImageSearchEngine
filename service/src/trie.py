from build.trie import *;


def create(items, labels):
    global root;
    root = TrieNode(True, 'a');
    print("wtf: ", end='');
    print(root);
    k = 0;
    for item, label in zip(items, labels):
        print("k: " + str(k));
        image_url = item[0];
        print(image_url);
        # List
        image_description = label;
        print(image_description);
        root.update_trie(root, image_url, image_description);
        print("AFTER UPDATE TRIE");
        k += 1;
    print("TRIE CREATION COMPLETED");
    return root;

def get_results(input):
    if len(input) == 0:
        return ["No matching images."];
    print(root);
    print("input: " + input);
    results = root.get_query_results(root, input);
    return results;

#create(["ahah", "xd"], [["ah", "xd"],["ok", "plsfckoff"]]);