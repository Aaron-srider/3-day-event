import Athlete from '@/utils/model.js'

const athletes = []

let a1 = new Athlete()

a1.name = '小明'
a1.gender = '男'
a1.age = 22
a1.country = '中国'
a1.game = '划水'
a1.preGrade = 99
a1.finGrade = 100
a1.health = '良好'
a1.comingDate = '2021-02-29'

athletes.push(a1)

export {
  athletes
}
