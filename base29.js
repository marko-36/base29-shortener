const baseKey = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ23456789'; //Secret key

const to29 = (i, baseKey, minLength = 2) => {
  let shift = Math.floor(Math.random() * baseKey.length)
  let tempKey = baseKey.substring(shift, baseKey.length) + baseKey.substring(0, shift);
  shift = baseKey.substring(shift, shift+1);    
  const minVal = Math.pow(tempKey.length, minLength-2);
  i += minVal;
  var sLen = Math.floor(Math.log(i) / Math.log(tempKey.length)) + 1;
  var s = '';
  for (let ex = sLen - 1; ex > -1; --ex) {
    s += tempKey.substring(Math.floor(i / Math.pow(tempKey.length, ex)), Math.floor(i / Math.pow(tempKey.length, ex)) + 1);
    i = i % Math.pow(tempKey.length, ex);
  }
  return shift+s;
}

const from29 = (s, baseKey, minLength = 2) => {
  let shift = baseKey.indexOf(s.substring(0, 1));
  let tempKey = baseKey.substring(shift, baseKey.length) + baseKey.substring(0, shift);
  s=s.substring(1, s.length);
  const minVal = Math.pow(tempKey.length, minLength-2);
  var i = 0;
  for (let ex = 0; ex < s.length; ++ex) {
    i += tempKey.indexOf(s.substring(ex, ex + 1)) * Math.pow(tempKey.length, s.length - 1 - ex);
  }
  return i - minVal;
}

//  DEMO

console.log(`☐  En/decoding of '1' using base29. There are [baseKey.length] randomly chosen possibilites to represent any number:`)
for (let i = 1; i < 6; i++) {console.log(`i=${1}    encoded: ${to29(1, baseKey)}, decoded back: ${from29(to29(1, baseKey), baseKey)}`)}
console.log(`...`)

console.log(`☐  En/decoding of numbers 2-10:`)
for (let i = 2; i < 11; i++) {console.log(`i=${i}   encoded: ${to29(i, baseKey)}, decoded back: ${from29(to29(i, baseKey), baseKey)}`)}console.log(` `)

console.log(`☐  En/decoding of numbers 1001-1010:`)
for (let i = 1001; i < 1011; i++) {console.log(`i=${i}    encoded: ${to29(i, baseKey)}, decoded back: ${from29(to29(i, baseKey), baseKey)}`)}console.log(` `)

console.log(`☐  En/decoding of numbers between 10K and 23.7B:`)
for (let i = 10000; i < 100000000000; i=Math.floor(Math.pow(i,1.1))) {console.log(`i=${i}    encoded: ${to29(i, baseKey)}, decoded back: ${from29(to29(i, baseKey), baseKey)}`);}console.log(` `)

console.log(`☐  En/decoding of 1 billion using base29.There are [baseKey.length] randomly chosen possibilites to represent any number:`)
for (let i = 1; i < 6; i++){console.log(`i=${100000000000000}    encoded: ${to29(100000000000000, baseKey)}, decoded back: ${from29(to29(100000000000000, baseKey), baseKey)}`);}console.log(` `)

console.log(`☐  En/decoding of '1' using base29. And enforcing minimal length using optional [minLength] parameter to 5:`)
for (let i = 0; i < 6; i++) {console.log(`i=${1000}    encoded: ${to29(1000, baseKey, 5)}, decoded back: ${from29(to29(1000, baseKey, 5), baseKey, 5)}`)}console.log(` `)

console.log(`☐  En/decoding of '0' using base29.`)
for (let i = 1; i < 6; i++) {console.log(`i=${0}    encoded: ${to29(0, baseKey)}, decoded back: ${from29(to29(0, baseKey), baseKey)}`)}console.log(` `)
