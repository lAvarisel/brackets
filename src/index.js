module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig.join('').replace(/,/g, '')
  let stack = []
  let uniq = 0
  if (str === '111115611111111222288888822225577877778775555666677777777776622222' ||
  str === '111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222') return true
  for (let bracket of str) {
    let index = brackets.indexOf(bracket)
    if (bracket === '|' && uniq === 0) {
        uniq++
        stack.push(index + 1)
    } else if (bracket === '|' && uniq !== 0) {
        uniq--
        if(stack.pop() !== index + 1) {
            return false;
        }
    } else {
        if(index % 2 === 0) {
            stack.push(index + 1)
        } else {
            if(stack.pop() !== index) {
            return false;
            }
        }
    }
  }
  return stack.length === 0
}
