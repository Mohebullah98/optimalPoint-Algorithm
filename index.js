const magic =[2,4,5,1]
const dist =[4,3,1,3];
function optimalPoint(magic, dist) {
    // Write your code here
    let next =1;
    let optimalPoint=-1;
    let count =0;
    let currentMagic =0;
    for(let i=0;i<magic.length;i++){
        if(magic[i]<dist[i])continue;
        
        count=0;
        for(let j=i;count!=magic.length;j++){
          currentMagic+=magic[j];
          if(j+1===magic.length) next =0-magic.length;
          else next=1;
          currentMagic +=-dist[j];
          //console.log(currentMagic+" "+count);
          if(currentMagic<0) break;
          //Completed a full loop and magic has not been negative, then set the optimal point as our starting point ,i and return it.
          if(currentMagic>0&&count===magic.length-1){
            optimalPoint=i;
            return optimalPoint;
            }
        //Want to treat the array as a circle, so when you reach the end restart at the first spot.
        if(j+1===magic.length) j =j+next;
        count++;
        }
    
}
    return optimalPoint;
}
console.log(optimalPoint(magic,dist));
