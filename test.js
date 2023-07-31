let a = '哈哈'
// let a = /^哈哈\d*的文件夹$/
let b = `^${a}\\d*的文件夹$`
let c = new RegExp(b)
let d = '哈哈1的文件夹'
let e = '哈哈哈2的文件夹'
let g = '哈哈的文件'
let z = '哈哈哈的文件夹'
let h = '哈哈000002的文件夹'
let f = '哈哈的文件夹'
console.log(c.test(d),c.test(e),c.test(g),c.test(z),c.test(h),c.test(f))

const x = /^\d+\.*\d{0,2}$/


let a = /^(https?:\/\/([a-zA-Z0-9]+\.)+[a-zA-Z]+)(:\d+)?(\/.*)?(\?.*)?(#.*)?$/i
