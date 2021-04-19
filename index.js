class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value)
    this.count = 1
    this.sum = value;
  }

  getSize() {
    return this.count
  }
  
  getSum(value){
    
    return this.sum

  }

  getAverage(){
    var average = this.sum / this.count;
    return average;

  }
 
  insert(value) {
    this.count++
    this.sum = this.sum + value;
    let newNode = new Node(value)

    const searchTree = node => {
     
      if (value < node.value) {
       
        if (!node.left) {
          node.left = newNode
        } 
       
        else {
          searchTree(node.left)
        }
      }
      
      else if (value > node.value) {
        
        if (!node.right) {
          node.right = newNode
        }
        else {
          searchTree(node.right)
        }
      }
    }

    searchTree(this.root)
  }


}
//tests
const bst = new BST(15)

bst.insert(3)
bst.insert(36)
bst.insert(3)
//bst.insert(12)
//bst.insert(28)
//bst.insert(39)

var size = bst.getSize()
var sum = bst.getSum()
var average = bst.getAverage()


console.log("tree size is", size)
console.log("sum of elements is:", sum)
console.log("average is:", average)
