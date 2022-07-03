let arr = [];//array declare
let array = [1, 2, 3, 4, 5, 6, 67, 89];
for (let i = 0; i <= array.length; i++) {
    console.log(array[i]);//output array elements
}//first print of array
//push to add object in an array
array.push("push element in an array at last using push");
array.unshift("add element in start of an array using unsift");
//now print
console.log("...............")
for (let i = 0; i <= array.length; i++) {
    console.log(array[i]);//output array elements
}
console.log("...............");
array.shift();//to remove first element
array.pop();//to remove last element
console.log(array);
console.log("......................");
           let partofarray=array.slice(0,6)//Returns a copy of a section of an array. For both start and end
           console.log(partofarray);
           console.log("....................");
           array.splice(2,3);//adds and/or removes array elements
           console.log(array);
