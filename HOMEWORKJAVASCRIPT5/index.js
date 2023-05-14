const nums = [10, 15, 15, 20];
const filtrnums = [];



nums.forEach(element => {

   
   
   if (filtrnums.includes(element) == false){
    filtrnums.push(element)
    
    }
    
});

console.log(filtrnums);

