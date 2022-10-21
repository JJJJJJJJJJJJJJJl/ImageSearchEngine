#include <pybind11/pybind11.h>
#include <iostream>
#include <assert.h>
#include <pybind11/stl.h>

namespace py = pybind11;

std::vector<std::string> images_url; 
int id = 0;

class TrieNode{
    private:
        bool root;
        char c;
        std::set<int> images_id;
        std::vector<TrieNode *> children;

    public:
        TrieNode(bool root_, char c_):
            root(root_),
            c(c_),
            children(26)
        { };

        bool is_root(){
            return root;
        }

        char get_c(){
            return c;
        }

        std::set<int> get_ids(){
            return images_id;
        }

        bool add_image_id(int image_id){
            images_id.insert(image_id);
            return true;
        }

        TrieNode *  get_child(char c){
            char child_index = c - 'a';
            if(child_index > -1 && child_index < 26){
                return children[child_index];
            }
            return NULL;
        }

        bool add_child(TrieNode * child){
            char child_c = child->get_c();
            char child_index = child_c - 'a';
            if(child_index > -1 && child_index < 26){
                if(children[child_index] == NULL){
                    children[child_index] = child;
                }
                return true;
            }
            return false;
        }

        void traverse_and_update(TrieNode * cur_node, int image_id, std::string s, int cur_index){
            int size = s.length();
            cur_node->add_image_id(image_id);

            // Lead node
            if(cur_index == size){
                return;
            }

            char c = s[cur_index];
            TrieNode * new_node = new TrieNode(false, c);
            cur_node->add_child(new_node);
            traverse_and_update(cur_node->get_child(c), image_id, s, cur_index+1);
            
            return;
        }

        void update_trie(TrieNode * root, std::string image_url, std::vector<std::string> image_description){
            images_url.push_back(image_url);

            /* Recursively traverse trie adding ID */
            for(std::string s : image_description){
                traverse_and_update(root, id, s, 0);
            }
            id++;
        }

        std::vector<std::string> convert_to_urls(std::set<int> ids){
            std::set<std::string> urls;
            for(int id : ids){
                urls.insert(images_url[id]);
            }
            std::vector<std::string> urls_vec;
            for(auto url : urls){
                urls_vec.push_back(url);
            }
            return urls_vec;
        }

        std::vector<std::string> get_query_results(TrieNode * cur_node, std::string query){
            TrieNode * root = cur_node;

            if(query.length() == 0){
                std::set<int> imgs_id = root->get_ids();
                return convert_to_urls(imgs_id);
            }

            for(char c : query){
                TrieNode * curs_child = cur_node->get_child(c);
                if(curs_child != NULL){
                    cur_node = curs_child;
                }
                else{
                    return std::vector<std::string> {};
                }
            }
            if(cur_node != NULL && cur_node != root){
                std::set<int> imgs_id = cur_node->get_ids();
                return convert_to_urls(imgs_id);
            }
            return std::vector<std::string> {};
        }
};

PYBIND11_MODULE(trie, handle){
    handle.doc() = "Image Search Trie";

    py::class_<TrieNode>(
        handle, "TrieNode"    
    )
        .def(py::init<bool, char>())
        .def("update_trie", &TrieNode::update_trie)
        .def("get_query_results", &TrieNode::get_query_results)
    ;
}