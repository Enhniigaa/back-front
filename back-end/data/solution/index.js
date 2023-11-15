// let nums = [4,3,6]
// function perimetr(nums) {
//         console.log(nums[0]+nums[1]+nums[2]);
// }
// let spr = [23,3] ;
// function add(spr) {
//     console.log(spr[0]+spr[1])
// }
// const num = [3];
// function cubic(num) {
//     console.log(num ** 3);
//     console.log((num **2)*6);
// }
// const number = [6,4];
// function rectangle(number) {
//     console.log(number[0]*number[1]);
//     console.log((number[0]+number[1])*2);
// }
// const a = [11];
// function  func(a) {
//     console.log((a*3)-5);
// }
// const b = [20];
// function func2(b) {
//     console.log((b**2)*4-(b*3)+5);
// }
// const c = [595];
// function lastnum(c) {
//     console.log(c.ToString().slice(-1))
// }
// const g = [112] ;
//  function secondToLastnum(g) {
//     console.log(g.ToString().slice(0));

//  }
//  const r = [23];
//  function times(r) {
//     console.log((r.ToString().slice(0)*(r.ToString().slice(-1))));
//  }

//  const w = [252];
//  function times1(w) {

//         console.log((w.ToString().split("").slice(-1))*(w.ToString().slice(-2)*(w.ToString().slice(-3))))
//  }

//  const e= [2, 12] 
//  function day(e) {
//     console.log((e[0]*24)+e[1]);
//  }
//  const l = [44];
//  function hourToDay(l) {
//     for(let a =1; a<e; a*24) {
//         console.log( a, l-a);
//     }
//  } 
//  const number1 = [16, 22] 
//  function more(number1) {
//     if(number1[0] > number[1]) {
//         return number1[0]
//     } else {
//         return number1[1];
//     }
//  }
//  const number2 = [15, 26, 100] ;
//  function threemore(number2) {
//     if(number2[0]> number[1])  {
//         if(number2[0]> number2[2]) {
//             return number2[0];
//         } else {
//             return number2[2]
//         }

//     } else  {
//         if(number2[1]> number2[2]) {
//             return number[1];
//         } else {
//             return number[2];
//         }
//     }
//  }
// const numbers = [11, 23, 1, 20];
//     function not11(numbers) {
//         for(let i =0; i < numbers.length; i++) {
//             if(numbers[i]%11===0) {
//                 return numbers[i];
//             }
//         }
//         console.log(numbers)
//     }  


// function ioi() {
//     return 101;
// }
// console.log(ioi());


// const number = [5];
// function nSum(number) {
//     let ans = 0;
//     for (let a = 0; a <= number; a++) {
//         ans += a;
//     }
//     return ans;
// }
// const solution = nSum(number);
// console.log(solution);

// const number = [4];

// function factorial(number) {
//     let ans = 1;
//     for(let a=1; a<=number; a++) {
//         ans *= a;
//     }
//     return ans;
// }
// const solution  = factorial(number);
// console.log(solution);


// const number = 4;

// function power(number){
//     let ans =2;
//     const answer = ans**number;
//     return answer;
// }
// const solution = power(number);
// console.log(solution);

// const number = 6;
// function hundred(number) {
//     const ans = number*100;
//     return ans;
// }
// const solution = hundred(number) ;
// console.log(solution);

// const number = [80, 77, 89, 100];
//   let ans = 0;
// function sum(number) {
//     for(let i=0; i<number.length; i++) {
//         if(number[i] > 80) {
//             ans += number[i];

//         }
//     } return ans;

// }
// const solution = sum(number) ;
// console.log(solution);

// const a = 4;
// const b = 2;
// function apowerb(a, b) {
//     const ans = a**b;
//     return ans;
// }
// const solution = apowerb(a, b);
// console.log(solution);


// const c= 10;

// function tentssen(c) {
//     if(c> 3) {
//         return tentssen
//     } else {
//         return unasan
//     }
// }
// const solution = tentssen(c) ;
// console.log(solution);
  

// const a=3;
// const b=5;

// function power(a, b) {
//     for(let i=0; i<b; i++) {
//         const ans = a**b
//         return ans

//     }
// }

// console.log(power(a,b));

const a=[3,4,1];

function iler(a) {
    const ans = a[0]*a[1]-a[2];
    return ans;
}
console.log(iler(a));