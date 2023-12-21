const StudentNode = require("./studentNode");

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    addLast(newNode){
        this.length ++;
        if(this.head === null){
            this.head = newNode;
            return;
        } 
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }
        current.next = newNode;
        return;
    }

    addFirst(newNode){
        this.length ++;
        if(this.head === null){
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
        return;
    }

    removeFirst(){
        if(this.head === null){
            console.log('Nothing to remove, list is empty');
            return null;
        } 
        const current = this.head;
        this.head = current.next;
        current.next = null;
        this.length --;
        return current;
    }

    removeLast(){
        if(this.head === null){
            console.log('Nothing to remove, list is empty');
            return null;
        }
        if(this.length === 1){
            const toBeRemoved = this.head;
            this.head = null;
            this.length --;
            return toBeRemoved
        }
        let current = this.head;
        while(current.next.next !== null){
            current = current.next;
        }
        const toBeRemoved = current.next;
        current.next = null;
        this.length --;
        return toBeRemoved;
    }

    removeAt(position){
        if(position <= 0 || position > this.length){
            console.log('Nothing to remove, not existent position.');
            return;
        }
        if(position === this.length){
            return this.removeLast();
        }
        if(position === 1){
            return this.removeFirst();
        }
        let toBeRemoved = this.head;
        let previousToBeRemoved = this.head;
        for(let i = 1; i < position; i ++){
            previousToBeRemoved = toBeRemoved;
            toBeRemoved = toBeRemoved.next;
        }
        previousToBeRemoved.next = toBeRemoved.next;
        toBeRemoved.next = null;
        this.length --;
        return toBeRemoved;
    }

    edit(id, firstName, lastName){
        if(this.length === 0){
            console.log('Nothing to edit, list is empty');
            return
        }
        let current = this.head;
        while(current !== null){
            if(id === current.id){
                current.firstName = firstName;
                current.lastName = lastName;
                console.log('Student updated');
                return
            }
            current = current.next;
        }
        console.log("This student id doesn't exists in our list");
        return;
    }

    print(){
        let current = this.head;
        let result = ""; 
        while(current !== null){
            result += `${current.firstName} ${current.lastName} - `; 
            current = current.next;
        }
        result += null;
        return result;
    }
}

const alex = new StudentNode(1, 'Alex', 'Miller');
const martha = new StudentNode(2, 'Martha', 'Smith');
const roger = new StudentNode(3, 'Roger', 'Anderson');
const julie = new StudentNode(4, 'Julie', 'Winston');
const mike = new StudentNode(5, 'Mike', 'Smith');
const studentList = new LinkedList();

studentList.addLast(alex);
studentList.addLast(martha);
studentList.addLast(roger);
studentList.addLast(julie);
studentList.addFirst(mike);

console.log(studentList.print());
console.log(studentList.length);

studentList.edit(10, 'Alexander', 'Salazar');
console.log(studentList.print());