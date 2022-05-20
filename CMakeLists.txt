cmake_minimum_required(VERSION 3.9)
project(plugin-test)

add_library(
    plugin
    SHARED
    plugins/test.c
)

target_link_libraries(
    plugin
)