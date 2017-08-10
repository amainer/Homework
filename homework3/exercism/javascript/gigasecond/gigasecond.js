let Gigasecond = function(date) {
  this.begDate = date
}

Gigasecond.prototype.date = function() {
  let gigasecond = 1000000000000;
  let endDate = new Date(this.begDate.getTime() + gigasecond);

  return endDate;

}

module.exports = Gigasecond;
