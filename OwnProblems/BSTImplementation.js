class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    //Inserting into BST
    insert(data) {
        var newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    removeNode(node, data) {
        if (node === null) {
            return null;
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node
        } else if (data > node.data) {
            node.right = this.removeNode(node.right, data);
            return node
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            } else if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
            //If we find the node with both the children, find the min of the right sub tree and replace the node 
            // with the min node
            let minNode = this.findMinNodeInBST(node.right);
            node = minNode;
            node.right = this.removeNode(node.right, minNode.data)

        }
    }

    findMinNodeInBST(node) {
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNodeInBST(node.left)
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data)
    }

    getRootNode() {
        return this.root;
    }

    search(node, data) {
        if (node == null) {
            return null;
        } else if (data < node.data) {
            //Traverse left
            return this.search(node.left, data);
        } else if (data > node.data) {
            //raverse right
            return this.search(node.right, data)
        } else {
            return node
        }
    }

    inOrderTraversal(node, inOrderTraversalArr) {

        if (node !== null) {
            this.inOrderTraversal(node.left);
            inOrderTraversalArr.push(node.data);
            this.inOrderTraversal(node.right);
        }
        return inOrderTraversalArr
    }

    preOrderTraversal(node) {
        if (node !== null) {
            console.log(node.data);
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }

}

// const treeData = [1, 2, 3, 2, 5, 2, 5, 6, 2, 5, 6, 78, 6, 8, 6, 4, 2, 33, 66, 45, 77, 44, 33, 5, 88, 44, 3, 22, 77]
// var BST = new BinarySearchTree()
// treeData.forEach(item => {
//     BST.insert(item)
// });
// var inOrderTraversal = [];
// BST.inOrderTraversal(BST.getRootNode(), inOrderTraversal)
// console.log(inOrderTraversal)

var tree = new Node(60);
tree.left = new Node(72)
tree.left.left = new Node(12)
tree.left.right = new Node(24)
tree.right = new Node(12)
tree.right.left = new Node(73)
tree.right.right = new Node(76)

removeLeftNodeFromTree = (someTree, node) => {
    if (node.left === null && node.right === null) {
        someTree.left = null
    } else if (node.left === null) {
        someTree.left = node.right
    } else {
        someTree.left = node.left
    }
}

removeRightNodeFromTree = (someTree, node) => {
    if (node.left === null && node.right === null) {
        if (node.left === null && node.right === null) {
            someTree.right = null
        } else if (node.left === null) {
            someTree.right = node.right
        } else {
            someTree.right = node.left
        }
    }
}

findMinNodesToBeRemovedToMakeATreeBST = (someTree) => {
    var minNodes = 0
    //Left traverse
    if (someTree.left === null && someTree.right === null) {
        return minNodes
    } else if (someTree.left === null) {
        // traverse right
        if (someTree.data < someTree.righ.data) {
            minNodes = minNodes + findMinNodesToBeRemovedToMakeATreeBST(someTree.right);
        } else {
            minNodes++;
            removeRightNodeFromTree(someTree, someTree.right);
            minNodes = minNodes + findMinNodesToBeRemovedToMakeATreeBST(someTree);
        }
    } else if (someTree.right === null) {
        // .traverse left
        if (someTree.left && someTree.data > someTree.left.data) {
            minNodes = minNodes + findMinNodesToBeRemovedToMakeATreeBST(someTree.left);
        } else {
            minNodes++;
            removeLeftNodeFromTree(someTree, someTree.left);
            minNodes = minNodes + findMinNodesToBeRemovedToMakeATreeBST(someTree);
        }
    } else {
        if (someTree.left && someTree.data > someTree.left.data) {
            minNodes = minNodes + findMinNodesToBeRemovedToMakeATreeBST(someTree.left);
        } else {
            minNodes++;
            removeLeftNodeFromTree(someTree, someTree.left);
            minNodes = minNodes + findMinNodesToBeRemovedToMakeATreeBST(someTree);
        }

        //Right traverse
        if (someTree.data < someTree.right.data) {
            findMinNodesToBeRemovedToMakeATreeBST(someTree.right);
        } else {
            minNodes++;
            removeRightNodeFromTree(someTree, someTree.right);
            return findMinNodesToBeRemovedToMakeATreeBST(someTree);
        }
    }

    return minNodes
}

console.log(findMinNodesToBeRemovedToMakeATreeBST(tree));