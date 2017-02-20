let square = (x => {
  let result = x * x
  return result
})
console.log(square(5))

var user = {
  name: "Perft",
  sayHi: () => {
    console.log(arguments)
    console.log(`HI. I'm ${this.name}`)
  },
  sayHiAlt() {
    console.log(arguments)
    console.log(`HI. I'm ${this.name}`)
  }
}

user.sayHi(1, 2, 3)
