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

Robot.prototype.advance = function (x,y) {
  this.coordinates = [x, y]
}
