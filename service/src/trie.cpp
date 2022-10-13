#include <pybind11/pybind11.h>
#include <iostream>
#include <assert.h>
#include <pybind11/stl.h>

namespace py = pybind11;

class TrieNode{
    private:
        char c;
        std::vector<std::string> images_url;
        std::vector<TrieNode *> children;

    public:
        TrieNode(char c_, std::vector<std::string> images_url_):
            c(c_),
            images_url(images_url_),
            children(26)
        { };

        char get_c(){
            return c;
        }

        std::vector<std::string> get_images_url(){
            return images_url;
        }

        bool add_image_url(std::string image_url){
            images_url.push_back(image_url);
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
                children[child_index] = child;
                return true;
            }
            return false;
        }
};

PYBIND11_MODULE(trie, handle){
    handle.doc() = "Image Search Trie";

    py::class_<TrieNode>(
        handle, "TrieNode"    
    )
        .def(py::init<char, std::vector<std::string>>())
        .def("get_c", &TrieNode::get_c)
        .def("get_images_url", &TrieNode::get_images_url)
        .def("add_child", &TrieNode::add_child)
        .def("get_child", &TrieNode::get_child)
    ;
}