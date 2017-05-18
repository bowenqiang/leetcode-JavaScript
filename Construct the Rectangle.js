/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let a=parseInt(Math.sqrt(area,2));
    let b=a;
    while(true){
        if(area%b===0){
            return [area/b,b];
        }
        b--;
    }
};
