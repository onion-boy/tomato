#if defined(_WIN32)
    #define EXPORTS __declspec(dllexport)
#else
    #define EXPORTS
#endif

#include <stdio.h>