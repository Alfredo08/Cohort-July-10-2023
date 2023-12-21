
class StudentNode{
    constructor(id, firstName, lastName){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.next = null;
    }
}

module.exports = StudentNode;