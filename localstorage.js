let count = Number(localStorage.getItem("visits")) || 0;
count++;
localStorage.setItem("visits", count);
console.log(`Visits: ${count}`);
