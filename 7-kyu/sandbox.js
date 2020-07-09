
//this is a simple but it doesn't transform hours to minutes
let li = [10, 10, 5, 'GO NOW!', 45, 65, 'GO NOW!', 358, 355, 'GO NOW!'], i = 0
function busTimer(curTime) {
       return curTime= li[i++];
}
// this is the little bit  longer version
function buildBusDepartures() {
    let departures = [];
    const firstBus = 6 * 60;
    const lastBus = 24 * 60;
    
    for (let nextBus = firstBus; nextBus <= lastBus; nextBus += 15) {
      departures.push(nextBus);
    }
    
    return departures;
  }
  
  function busTimer(time) {
    const walkToBusStop = 5; 
    const busDepartures = buildBusDepartures();
    
    const [hours, mins] = time.split(':')
                              .map(component => parseInt(component, 10));
    
    const currentTime = hours * 60 + mins;
    const timeToBusStop = (currentTime + walkToBusStop) % 1440;
    
    if (timeToBusStop === 0) return 0;
    
    const nextBus = busDepartures.find(departure => departure >= timeToBusStop);
    
    return nextBus - timeToBusStop;
  }
// short function with return value
function busTimer(time) {
  const firstBus = 6 * 60;
  const [hours, minutes] = time.split(':').map(Number);
  const totalMinutes = (hours * 60 + minutes + 5) % 1440;
  
  if (totalMinutes > 0 && totalMinutes < firstBus) {
    return firstBus - totalMinutes;
  }
  
  return (15 - totalMinutes % 15) % 15;
}