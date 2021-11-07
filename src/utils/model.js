function Athlete() {

  this.name = undefined
  this.sex = undefined
  this.age = undefined
  this.country = undefined
  this.itemPlay = undefined
  this.preResult = undefined
  this.finalResult = undefined
  this.healthStatus = undefined
  this.comeTime = undefined

  this.athleteCount++
  this.id = this.athleteCount
}

Athlete.prototype = {
  constructor: Athlete,
  athleteCount: 0
}

export default Athlete
