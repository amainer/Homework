let PhoneNumber = function(PhoneNumber) {
  this.phoneNumber = PhoneNumber
}

PhoneNumber.prototype.number = function() {
  num = this.phoneNumber.replace(/[^0-9]/g,"")

  if (num.length === 11 && num.charAt(0) === "1") {
    num = num.slice(1);
  } else if (num.length !== 10) {
    return null;
  }

  if (num.charAt(0) === "0" || num.charAt(0) === "1") {
    return null;
  } else if (num.charAt(3) === "0" ||num.charAt(3) === "1") {
    return null;
  }
  return num;
}

module.exports = PhoneNumber;
