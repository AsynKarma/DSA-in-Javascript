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

const treeData = [1, 2, 3, 2, 5, 2, 5, 6, 2, 5, 6, 78, 6, 8, 6, 4, 2, 33, 66, 45, 77, 44, 33, 5, 88, 44, 3, 22, 77]
var BST = new BinarySearchTree()
treeData.forEach(item => {
    BST.insert(item)
});
var inOrderTraversal = [];
BST.inOrderTraversal(BST.getRootNode(), inOrderTraversal)
console.log(inOrderTraversal)
// BST.preOrderTraversal(BST.getRootNode())