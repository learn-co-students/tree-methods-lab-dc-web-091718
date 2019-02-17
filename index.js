//given root node, the inOrder method will `console.log` all other nodes
// in the tree, in sequential order lowest to highest
function inOrder(node) {
  // inOrder = inOrder(Right branch), root node, inOrder(left branch)
  if (node.left) {
    inOrder(node.left);
  }
  console.log(node.data);
  if (node.right) {
    inOrder(node.right);
  }
}

//should return the minimum element in a tree
min = node => {
  if (node.left) {
    return min(node.left);
  } else {
    return node;
  }
};

// should return the maximum element in a tree:
function max(node) {
  if (node.right) {
    return max(node.right);
  } else {
    return node;
  }
}

function findOrAdd(root, newNode) {
  if (root.data == newNode.data) {
    return true;
  }

  if (newNode.data < root.data) {
    if (root.left) {
      return findOrAdd(root.left, newNode);
    } else {
      return (root.left = newNode);
    }
  }

  if (newNode.data > root.data) {
    if (root.right) {
      return findOrAdd(root.right, newNode);
    } else {
      return (root.right = newNode);
    }
  }
}
