cmake_minimum_required(VERSION 3.4)
project(image-search)
add_subdirectory(pybind11)
pybind11_add_module(trie trie.cpp)