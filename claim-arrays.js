function claimAnArray(length, claimPower) {

  var claimTo = function(arg, count) {
    var c = 0;
    var argument = arg;
    while (c < count) {
      argument = argument * arg;
      c++;
    }
    return argument;
  }
  
  var peoples = new Float32Array(length);
  peoples = peoples.map((people, index) => { return claimTo(index, claimPower) });

  document.write( peoples );
}

/* usage: claimAnArray(new_array_length(simple=10), ppower(simple=2)); */
