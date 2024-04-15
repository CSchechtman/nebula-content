// Abstract Datatypes
// When do i pick one datatype ove the other?
// Arrays vs Objects?
    // What instance methods/properties do i want to use
    // key value pairs looking up values in objects is O(1) vs in an array O(N)



// LinkedList
    // One directional A -> B -> C 
    // Bi Directional A <-> B <-> C
    // it is a class that contains a value
    // it optionally has child node
    // if it is a bidirectional linked list it optionally can have a reference to its parent
class LinkedList{
    constructor(value, child){
        // this.depth = counter++;
        this.value = value;
        this.child = child;
        if(child){
            child.parent = this;
        }
    }
}

let A = new LinkedList('A', new LinkedList('B', new LinkedList('C')));
// Bi Directional A <-> B <-> C
let D = new LinkedList('D', new LinkedList('E', new LinkedList('F')));
// Bi Directional D <-> E <-> F


console.log(A.value, A.child.value, A.child.child.value);

// create a function returns the depth of a linked list
function returnDepth(linkedList){
    let depth = 0;
    while(linkedList.parent){
        linkedList = linkedList.parent;
        depth++;
    }
    return depth;
}

console.log(returnDepth(D.child.child));


// Queue
    // A system for getting data elements FIFO - First in first out
    // instance methods of enqueueing and dequeueing 

class Queue {
    queue = []
    enqueue(element){
        this.queue.push(element);
    }
    dequeue(){
        return this.queue.shift()
    }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue('A');

// implement a function that tells me how close an element is to the front of the queue
function getOrder(element){
    return queue.queue.indexOf(element);
}


console.log(getOrder(2))


// Stack
    // Inverse of a queue LIFO - last in first out
    // instance methods of enqueueing and dequeueing 





// write a function that takes a incoming number and returns all the permutations of that number

// perms(5341) = 24
//  /   \
// 5 + perms(341)
//      /  \
//     3 + perms(41)
//          /  \
//    perm(1)  perm(4)

// console.log(perms(12)); // = [12, 21]
// console.log(perms(123)); // = [123, 213, 321, 312, 231, 132]
let hashMap = {};

function perms(number){
    let nums = number.toString().split('');
    let sorted = [...nums].sort().join();
    let output = [];
    if(nums.length < 2) return nums;
    if(hashMap[sorted]) return hashMap[sorted];
    for(let i = 0; i < nums.length; i++){
        //add to our output the different orders of digits
        let current = nums[i];
        let remaining = nums.slice(i + 1).concat(nums.slice(0, i));
        for(let recursivePerms of perms(remaining.join('') * 1) ){
            // console.log(remaining, recursivePerms);
            output.push(current + recursivePerms);
        }
        // output.push(i == 0 ? `${nums[0]}${nums[1]}` : `${nums[1]}${nums[0]}`);
    }
    hashMap[sorted] = output;
    return output;

}

console.log(perms(1111111111111111).length);

// 1145, 1145