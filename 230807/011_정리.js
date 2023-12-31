shift <-> pop
unshift - push


// push 배열에 마지막에 추가 -> [4] : 배열의 길이
[10, 20, 30].push(40)

// pop 배열의 뒤에서 값을 꺼내서 반환  -> [30]
[10, 20, 30].pop()

// unshift 배열의 앞에 추가-> [4] : 배열의 길이
[10, 20, 30].unshift(40)

// shift 배열의 앞에서 값을 꺼내서 반환 -> [10]
[10, 20, 30].shift()

// splice (index a자리에서, b개 없애고, c를 추가한다) -> [10,40,20,30]
[10, 20, 30].splice(1, 0, 40)

// sort
[10, 20, 30].sort() // [10,20,30]
[10, 20, 30].sort((a, b) => a - b) // [10,20,30] 오름차순
[10, 20, 30].sort((a, b) => b - a) // [30,20,10] 내림차순

// map
[10, 20, 30].map((v, i) => v ** 2) // (3) [100, 400, 900]

// forEach
[10, 20, 30].forEach((v, i) => console.log(v)) 
// 10
// 20
// 30


// filter
[10, 20, 30].filter((v, i) => v > 15) // (2) [20, 30]

// reduce
[10, 20, 30].reduce((a, c) => a + c, 0) // 60

// includes(String에도 있습니다!)
[10, 20, 30].includes(20) // true

// join
[10, 20, 30].join('!') // '10!20!30'

// reverse
[10, 20, 30].reverse() // (3) [30, 20, 10]


// 메서드 체이닝에서 주의할 점
Array(10)
    .fill(0)
    .map((_, i) => i + 1)
    .filter(v => v % 2 === 0)
    .includes('1') // array가 깨지기 때문에
    // 여기서부터는 array와 관련된 메서드 체이닝이 아니라 boolean과 관련된 메서드 체이닝이 들어가야 합니다.

