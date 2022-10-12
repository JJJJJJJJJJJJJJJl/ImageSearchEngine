#include <pybind11/pybind11.h>
#include <iostream>
#include <assert.h>
#include <pybind11/stl.h>

namespace py = pybind11;

class TrieNode{
    private:
        char c;
        std::vector<std::string> images_url;
        std::vector<TrieNode*> children;

    public:
        TrieNode(char c_, std::vector<std::string> images_url_):
            c(c_),
            images_url(images_url_),
            children(26)
        { };

        char get_c(){
            return c;
        }

        bool add_image_url(std::string image_url){
            images_url.push_back(image_url);
            return true;
        }

        std::vector<std::string> get_images_url(){
            TrieNode * tn = new TrieNode('z', images_url);
            std::cout << add_child(tn) << std::endl;
            return images_url;
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

float func_cpp(float x, float y){
    return x + y;
}

PYBIND11_MODULE(trie, handle){
    handle.doc() = "Image Search Trie";
    handle.def("func_py", &func_cpp);

    py::class_<TrieNode>(
        handle, "TrieNode"    
    )
        .def(py::init<char, std::vector<std::string>>())
        .def("get_c", &TrieNode::get_c)
        .def("get_images_url", &TrieNode::get_images_url)
        .def("add_child", &TrieNode::add_child)
    ;
}