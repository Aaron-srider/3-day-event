function Athlete() {
  this.name = undefined
  this.gender = undefined
  this.age = undefined
  this.country = undefined
  this.game = undefined
  this.preGrade = undefined
  this.finGrade = undefined
  this.health = undefined
  this.comingDate = undefined
}

Athlete.prototype = {
  constructor: Athlete
}

export default Athlete
