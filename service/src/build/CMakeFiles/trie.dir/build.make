# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.24

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Disable VCS-based implicit rules.
% : %,v

# Disable VCS-based implicit rules.
% : RCS/%

# Disable VCS-based implicit rules.
% : RCS/%,v

# Disable VCS-based implicit rules.
% : SCCS/s.%

# Disable VCS-based implicit rules.
% : s.%

.SUFFIXES: .hpux_make_needs_suffix_list

# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /opt/homebrew/Cellar/cmake/3.24.2/bin/cmake

# The command to remove a file.
RM = /opt/homebrew/Cellar/cmake/3.24.2/bin/cmake -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /Users/jjjjjj/Desktop/JJJJJJ/image-search/service/src

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /Users/jjjjjj/Desktop/JJJJJJ/image-search/service/src/build

# Include any dependencies generated for this target.
include CMakeFiles/trie.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include CMakeFiles/trie.dir/compiler_depend.make

# Include the progress variables for this target.
include CMakeFiles/trie.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/trie.dir/flags.make

CMakeFiles/trie.dir/trie.cpp.o: CMakeFiles/trie.dir/flags.make
CMakeFiles/trie.dir/trie.cpp.o: /Users/jjjjjj/Desktop/JJJJJJ/image-search/service/src/trie.cpp
CMakeFiles/trie.dir/trie.cpp.o: CMakeFiles/trie.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/Users/jjjjjj/Desktop/JJJJJJ/image-search/service/src/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/trie.dir/trie.cpp.o"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/trie.dir/trie.cpp.o -MF CMakeFiles/trie.dir/trie.cpp.o.d -o CMakeFiles/trie.dir/trie.cpp.o -c /Users/jjjjjj/Desktop/JJJJJJ/image-search/service/src/trie.cpp

CMakeFiles/trie.dir/trie.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/trie.dir/trie.cpp.i"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /Users/jjjjjj/Desktop/JJJJJJ/image-search/service/src/trie.cpp > CMakeFiles/trie.dir/trie.cpp.i

CMakeFiles/trie.dir/trie.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/trie.dir/trie.cpp.s"
	/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /Users/jjjjjj/Desktop/JJJJJJ/image-search/service/src/trie.cpp -o CMakeFiles/trie.dir/trie.cpp.s

# Object files for target trie
trie_OBJECTS = \
"CMakeFiles/trie.dir/trie.cpp.o"

# External object files for target trie
trie_EXTERNAL_OBJECTS =

trie.cpython-39-darwin.so: CMakeFiles/trie.dir/trie.cpp.o
trie.cpython-39-darwin.so: CMakeFiles/trie.dir/build.make
trie.cpython-39-darwin.so: CMakeFiles/trie.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/Users/jjjjjj/Desktop/JJJJJJ/image-search/service/src/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX shared module trie.cpython-39-darwin.so"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/trie.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/trie.dir/build: trie.cpython-39-darwin.so
.PHONY : CMakeFiles/trie.dir/build

CMakeFiles/trie.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/trie.dir/cmake_clean.cmake
.PHONY : CMakeFiles/trie.dir/clean

CMakeFiles/trie.dir/depend:
	cd /Users/jjjjjj/Desktop/JJJJJJ/image-search/service/src/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /Users/jjjjjj/Desktop/JJJJJJ/image-search/service/src /Users/jjjjjj/Desktop/JJJJJJ/image-search/service/src /Users/jjjjjj/Desktop/JJJJJJ/image-search/service/src/build /Users/jjjjjj/Desktop/JJJJJJ/image-search/service/src/build /Users/jjjjjj/Desktop/JJJJJJ/image-search/service/src/build/CMakeFiles/trie.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/trie.dir/depend

