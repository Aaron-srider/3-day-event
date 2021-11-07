import Athlete from '@/utils/model.js'

const athletes = []

let a1 = new Athlete()

a1.name = '小明'
a1.sex = '男'
a1.age = 22
a1.country = '中国'
a1.itemPlay = '划水'
a1.preResult = 99
a1.finalResult = 100
a1.health = '良好'
a1.comeTime = '2021-02-29'

for (let i = 0; i < 10; i++) {
  let a = new Athlete()
  a = Object.assign(a, a1)
  athletes.push(a)
}

athletes.push(a1)

export {
  athletes
}
