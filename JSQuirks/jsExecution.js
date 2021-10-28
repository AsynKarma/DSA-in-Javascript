/*
    Initially creates a global context which has memory,code.
    in Phase 1: memory allocation.
        var is undefined
        functions are copied
    in phase 2: Code execution.
        calling a function creates a new execution context. repeats the process;
*/
export default JSExecution = {};