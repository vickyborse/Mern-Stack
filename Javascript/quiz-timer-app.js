let time = 5;

let interval = setInterval(() => {
   console.log(time);
   time--;

   if(time === 0){
      clearInterval(interval);
      console.log("Time Up");
   }
}, 1000);
