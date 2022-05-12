//the function has one argument
function cachingFunc(func){
    const m = new Map();

    return function(arg){
        if(m.has(arg)){
            return m.get(arg);
        }
        const result = func(arg);
        m.set(arg, result);
        return result;
    }
}
// function has several arguments

function cachingFunc(func){
    const m = new Map();

    return function(){
        let key = [].slice.call(arguments).join('');
        if(m.has(key)){
            return m.get(key);
        }
        const result = func.apply(this, arguments);
        m.set(key, result);
        return result;
    }
}

//for any function

function cachingFunc(func){
    const m = new Map();
    return function(...args){
        const key = JSON.stringify(args);
        if(m.has(key)){
            return m.get(key);
        }
        const result = func(...args);
        m.set(key, result);
        return result;
    }
}
