
 let db_fname = 'Ivan'
 let db_sname = 'Ivanov'



function CreateObj(fname, sname) {
    this.fname = fname
    this.sname = sname
    this.full_name = `${this.fname} ${this.sname}`
}

const obj = {
    fname: '',
    sname: '',
    full_name: ''
}
obj.fname = db_fname
obj.sname = db_sname
obj.full_name = `${obj.fname} ${obj.sname}`

const obj2 = new CreateObj(db_fname, db_sname)


let { fname: fn, full_name: fun} = obj2

console.log(fn, fun);
// console.log(obj);
// console.log(obj2);

getName(obj2)
function getName({fname}) {
    console.log('getname', fname);
}

let arr = [1,23,656,645,2,13121]

let [n1, , n3] = arr

console.log(n1,n3);


let max = Math.max(...arr)
console.log(...arr);
console.log(max);



const obj3 = {...obj2}


obj2.age = 15

const arr3 = [5,555,5555,55555,5456]
const arr2 = [...arr, ...arr3]

console.log(arr2);


sum(456,32415,22,5412265,1,1651,31564,13)

function sum(...nums) {
    console.log('nums->>>>',nums);
    let sum = 0
    nums.forEach(el => sum += el)
    console.log(sum);
}


const numsObject = {...arr3}

console.log('numsObject->>>>', numsObject);