function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const valToPostIndex = {};

  for (let i = 0; i < postorder.length; i++) {
    valToPostIndex[postorder[i]] = i;
  }

  const getNewPostOrder = (nodeVals) => {
    return nodeVals
      .map((val) => valToPostIndex[val])
      .sort((a, z) => a - z)
      .map((val) => postorder[val]);
  };

  const getRoot = (inorder, postorder) => {
    if (!inorder.length || !postorder.length) return null;
    const valToInIndex = {};

    for (let i = 0; i < inorder.length; i++) {
      valToInIndex[inorder[i]] = i;
    }

    const rootVal = postorder[postorder.length - 1];
    const rootNode = new TreeNode(rootVal);
    const rootIndex = valToInIndex[rootVal];

    const left = inorder.slice(0, rootIndex);
    const right = inorder.slice(rootIndex + 1);
    console.log('------ test left -----', left);
    console.log('------ test right -----', right);
    debugger;
    rootNode.left = left.length ? getRoot(left, getNewPostOrder(left)) : null;
    rootNode.right = right.length
      ? getRoot(right, getNewPostOrder(right))
      : null;

    return rootNode;
  };

  return getRoot(inorder, postorder);
};

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
