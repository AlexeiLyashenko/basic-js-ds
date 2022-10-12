const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/



class BinarySearchTree {
  root() {
    if(this.parent) {
      return this.parent
    } else {
      return null
    }
  }

  add(data) {
    const newNode = new Node(data);
    if(!this.parent) {
      this.parent = newNode;
      return;
    } else {

      let currentNode = this.parent;

      while(currentNode) {

        if(newNode.data < currentNode.data) {
          if(!currentNode.left) {
            currentNode.left = newNode;
            return;
          }
          currentNode = currentNode.left
        } else {
          if(!currentNode.right) {
            currentNode.right = newNode;
            return;
          }
          currentNode = currentNode.right
        }
      }
    }
  }

  has(data) {
    return searchWithin(this.parent, data)

    function searchWithin(node, data) {

      if(!node) {
        return false
      } else if (node.data === data) {
        return true
      }

      return data < node.data ?
      searchWithin(node.left, data) :
      searchWithin(node.right, data);
    }
  }

  find( data ) {
    return searchWithin(this.parent, data)

    function searchWithin(node, data) {

      if(!node) {
        return null
      } else if (node.data === data) {
        return node
      }

      return data < node.data ?
      searchWithin(node.left, data) :
      searchWithin(node.right, data);
    }
  }

  remove(data) {
    this.parent = removeNode(this.parent, data);

    function removeNode(node, data) {
      if (!node) {
        return null
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data)
        return node
      } else {
        if(!node.left && !node.right) {
          return null
        } else if (!node.left) {
          node = node.right;
          return node;
        } else if(!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);

        return node
      }
    }
  }

  min() {
    if (!this.parent) {
      return
    }

    let node = this.parent;
    while(node.left) {
      node = node.left;
    }

    return node.data
  }

  max() {
    if (!this.parent) {
      return
    }

    let node = this.parent;
    while(node.right) {
      node = node.right;
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree
};