function diameterOfBinaryTree(root) {
    let diameter = 0;

    function depth(node) {
        if (!node) return 0;

        const leftDepth = depth(node.left);
        const rightDepth = depth(node.right);
        diameter = Math.max(diameter, leftDepth + rightDepth);
        return Math.max(leftDepth, rightDepth) + 1;
    }

    depth(root);
    return diameter;
}














class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


function arrayToTreeNode(arr) {
    if (arr.length === 0) return null;

    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (i < arr.length) {
        let currentNode = queue.shift();

        if (currentNode !== null) {
            if (i < arr.length && arr[i] !== null) {
                currentNode.left = new TreeNode(arr[i]);
                queue.push(currentNode.left);
            }
            i++;

            if (i < arr.length && arr[i] !== null) {
                currentNode.right = new TreeNode(arr[i]);
                queue.push(currentNode.right);
            }
            i++;
        }
    }

    return root;
}

function treeNodeToArray(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let currentNode = queue.shift();

        if (currentNode === null) {
            result.push(null);
        } else {
            result.push(currentNode.val);
            queue.push(currentNode.left);
            queue.push(currentNode.right);
        }
    }

    // Trim trailing nulls
    while (result[result.length - 1] === null) {
        result.pop();
    }

    return result;
}


// Example usage:
let arr = [1,2,3,4,5];
let root = arrayToTreeNode(arr);
console.log("Original tree:", treeNodeToArray(root));

let diameter = diameterOfBinaryTree(root);
console.log("Inverted tree:", diameter);
