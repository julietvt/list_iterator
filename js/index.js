'use strict';

class ListItem {
    constructor(value, next=null, prev=null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class List{
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    addBegin(value){
        const  newHead = new ListItem(value, this.head, null);
        if(this.head){
            this.head.prev = newHead;
        }
        this.head = newHead;
        if(!this.tail){
            this.tail = newHead;
        }
        this.size++;
    }

    addEnd(value){
        const newTail = new ListItem(value, null, this.tail);
        if(this.tail){
            this.tail.next = newTail;
        }
        this.tail = newTail;
        if(!this.head){
            this.head = newTail;
        }
        this.size++;
    }

    addAfter(node, value){
        if( node instanceof ListItem){
            if(this.tail === node){
                this.addEnd(value);
                return;
            }
            const newItem = new ListItem(value, node.next, node);
            node.next = newItem;
            newItem.next.prev = newItem;
            this.size++;
        }
    }

    insertTo(index,value){
        if(this.size === 0 || index===(this.size-1)){
            this.addEnd(value);
            return;
        }
        if(index===0){
            this.addBegin(value);
            return;
        }
        //...
    }

    [Symbol.iterator](){
        let current = this.head;
        return{
            next(){
                if(current){
                    const value = current.value;
                    current = current.next;
                    return{
                        value: value,
                        done: false,
                    }
                }
                else{
                    return{
                        done: true,
                    }
                }
            }
        }
    }
}

const list = new List();
list.addEnd("John");
list.addEnd(20);
list.addEnd({stud: {fname: "Tim", lname: "Fox"}});
list.addEnd(function(){console.log("hello")});
console.log(list);