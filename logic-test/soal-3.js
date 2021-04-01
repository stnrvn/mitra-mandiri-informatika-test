let n = [12,9,13,6,10,4,7,2]
n = n.filter(item => {
  return item % 3 !== 0
})

for(let i = 0; i < n.length; i++){
  let asc = i

  for(let j = i + 1; j < n.length; j++){
    if(n[j] < n[asc]) asc = j
  }

  let temp = n[i]
  n[i] = n[asc]
  n[asc] = temp
}

console.log(n)