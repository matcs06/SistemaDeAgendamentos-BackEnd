function timeToMins(time:any) {
  var b = time.split(':');
  return b[0]*60 + +b[1];
}

// Convert minutes to a time in format hh:mm
// Returned value is in range 00  to 24 hrs
function timeFromMins(mins:any) {
  function z(n:any){return (n<10? '0':'') + n;}
  var h = (mins/60 |0) % 24; 
  var m = mins % 60;
  return z(h) + ':' + z(m);
}

// Add two times in hh:mm format
function addTimes(t0:any, t1:any) {
   return timeFromMins(timeToMins(t0) + timeToMins(t1));
}

export {addTimes}