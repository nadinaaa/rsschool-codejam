function make(...args1) {
  
  let current = [...args1];
  
  function f(...args2) {
    if(arguments[0] instanceof Function)
        return current.reduce(arguments[0]);
    current=current.concat(args2);
    return f;
  }
  return f;
}