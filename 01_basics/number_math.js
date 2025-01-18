/*let num = 100
console.log(num.toFixed(2))

let numOne = 3.1452683
console.log(numOne.toFixed(3))
console.log(numOne.toFixed())

const otherNumber = 12.8984
console.log(otherNumber.toPrecision(4))

const hundreds = 1000000
console.log(hundreds.toLocaleString())*/

//++++++++++++   MATH    ++++++++++++++++++

/*let num = -4
console.log(Math.abs(num))

let numOne = 3.74326789
console.log(Math.round(numOne))
console.log(Math.ceil(numOne))
console.log(Math.floor(numOne))*/

/*let num = Math.random()
console.log(num)
console.log(num * 10)
console.log((num *10) +1 )
console.log(Math.floor((num *10) +1 ))*/

let min = 10;
let max = 20;

console.log(Math.floor(Math.random()* (max - min + 1) + min ))

/*
Ye code ek random integer generate karta hai jo **min** aur **max** ke beech hota hai (inclusive).

Agar aap `min = 10` aur `max = 20` rakhte hain, to yeh code 10 se 20 ke beech koi bhi random integer generate karega.

Chaliye, step-by-step samajhte hain:

### Code Explanation:
```javascript
let min = 10;
let max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
```

1. **`Math.random()`**: 
   - Ye function ek random floating-point number generate karta hai, jo **0** aur **1** ke beech hota hai (but 1 kabhi nahi hota). 
   - Example output: `0.473`, `0.945`, etc.

2. **`(max - min + 1)`**:
   - Ye expression min aur max ke beech ka range calculate karta hai.
   - Agar `min = 10` aur `max = 20` hai, to:
     - `max - min + 1 = 20 - 10 + 1 = 11`
   - Matlab, random number ko 11 se multiply karenge, taki result **0** se **11** ke beech ho.

3. **`Math.random() * (max - min + 1)`**:
   - Ab `Math.random()` ko `11` se multiply karenge.
   - Example output: Agar `Math.random()` ka value `0.473` hai, to:
     - `0.473 * 11 = 5.203`
     - Iska matlab hai ki result 0 se 11 ke beech ho sakta hai.

4. **`+ min`**:
   - Ab hum `min` ko add karte hain. Ye step result ko shift karta hai, taki final range min se start ho.
   - Agar `min = 10` hai, to:
     - `5.203 + 10 = 15.203`
   - Matlab, ab result **10** se **20** ke beech hoga.

5. **`Math.floor()`**:
   - Ye step result ko **floor** (round down) kar deta hai, taki hume integer mile. 
   - Agar result `15.203` hai, to `Math.floor(15.203)` result `15` dega.
   - Is step se hum integer result paate hain.

### Final Example:

Agar:
- `Math.random()` = `0.473` hai
- `min = 10` aur `max = 20` hai

Toh:
1. `Math.random() * (max - min + 1) = 0.473 * 11 = 5.203`
2. `5.203 + 10 = 15.203`
3. `Math.floor(15.203) = 15`

Toh output hoga: `15` (ye random hoga, har baar alag value aayegi)

### Conclusion:
Is code ka kaam hai ki **min** aur **max** ke beech ek random integer generate kare, jisme dono boundary values (10 aur 20) bhi shamil ho sakti hain.*/