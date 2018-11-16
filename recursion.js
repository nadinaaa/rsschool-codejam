function recursion(tree) {
    const mas = [], branch = [];
    if (tree.hasOwnProperty('left')) {
      branch.push(tree.left);
    }
    if (tree.hasOwnProperty('right')) {
      branch.push(tree.right);
    }
    if (tree.hasOwnProperty('value')) {
      mas.push([tree.value]);
    }
    
    function inside_recursion(children) {
      const leaves_values = [], child_leaves = [];
      while (children.length) {
        let leaf = children.shift();
        if (leaf.hasOwnProperty('left')) {
          child_leaves.push(leaf.left);
        }
        if (leaf.hasOwnProperty('right')) {
          child_leaves.push(leaf.right);
        }
        if (leaf.hasOwnProperty('value')) {
          leaves_values.push(leaf.value);
        }
      }
      if (leaves_values.length) {
        mas.push([...leaves_values]);
      }
      if (child_leaves.length) {
        inside_recursion(child_leaves);
      }
    }
    inside_recursion(branch);
    return mas;
  }
