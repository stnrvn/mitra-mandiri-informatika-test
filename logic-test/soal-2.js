//dibuat pake function aja abis ini

// A
// for(let i = 1; i <= n; i++){
//   for(let j = 1; j <= i; j++){
//     temp += i
//   }
//   temp += '\n'
// }

//B
// for(let i = 1; i <= n; i++){
//   for(let j = i; j >= 1; j--){
//     temp += j
//   }
//   temp += '\n'
// }

//C
const n = 5
let output = 1
let temp = ''

for(let i = 1; i <= n; i++){

  if(output >= n){
    for(let j = output; j >= 1; j--){
      temp += output + ' '
      output--
    }
  }

  if(output <= n && output > 0){
    for(let j = 1; j <= i; j++){
      temp += output + ' '
      output++
    }
  }

  temp += '\n'
}
console.log(temp)

// function outputD(input){
//   let temp = ''

//   for(let i = 1; i <= input; i++){
//     for(let j = i; j <= input * input; j= j+input){
//       temp += j + ' '
//     }
//     temp += '\n'
//   }

//   return temp
// }

// console.log(outputD(5))

// if(j % 2 === 0){
    //   temp += j + 10 + ' '
    // }else {
    //   temp += i + ' '
    // }