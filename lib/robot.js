'use strict';

function Robot(bearing, coordinates) {
  this.bearing = bearing
  this.coordinates = coordinates
}

Robot.prototype.orient = function (currentDirection) {
  var d = [ 'east', 'west', 'north', 'south' ];
  if (d.includes(currentDirection)) {
    this.bearing = currentDirection
  } else {
    throw new Error ("Invalid Robot Bearing")
  }
}

Robot.prototype.turnRight = function () {
  if (this.bearing === 'north') {
    this.bearing = 'east'
  } else if (this.bearing === 'east') {
    this.bearing = 'south'
  } else if (this.bearing === 'south') {
    this.bearing = 'west'
  } else if (this.bearing === 'west') {
    this.bearing = 'north'
    }
}

Robot.prototype.turnLeft = function () {
  if (this.bearing === 'north') {
    this.bearing = 'west'
  } else if (this.bearing === 'east') {
    this.bearing = 'north'
  } else if (this.bearing === 'south') {
    this.bearing = 'east'
  } else if (this.bearing === 'west') {
    this.bearing = 'south'
    }
}

Robot.prototype.at = function (x,y) {
  this.coordinates = [x, y]
}

Robot.prototype.advance = function () {
    if (this.bearing === 'north') {
    this.coordinates[1]++
  }
    else if (this.bearing === 'south') {
    this.coordinates[1]--
  }
    else if (this.bearing === 'east') {
    this.coordinates[0]++
  }
    else if (this.bearing === 'west') {
    this.coordinates[0]--
  }
}

Robot.prototype.instructions = function (str) {
  var arr = str.split(''); var outp = [];

  arr.forEach(function(i){
    if (i === 'R') {
      outp.push("turnRight")
    }
    else if (i === 'L') {
      outp.push("turnLeft")
    }
    else if (i === 'A') {
      outp.push("advance")
    }
  })
  return outp
}

Robot.prototype.place = function(hash) {
  this.at(hash.x, hash.y)
  this.orient(hash.direction)
}

Robot.prototype.evaluate = function(directions) {
  var movement = this.instructions(directions)

  for(let i = 0; i < movement.length; i++){
    if (movement[i] === 'turnLeft'){
      this.turnLeft()
    }
    else if (movement[i] === 'turnRight'){
      this.turnRight()
    }
    else if (movement[i] === 'advance'){
      this.advance()
    }
  }
}
