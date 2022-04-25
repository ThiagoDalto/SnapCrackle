

function snapCrackle(maxValue){
    let snapCrackleArray = []
    
        for(let i = 1; i <= maxValue; i++){
            if(i === 2){
                snapCrackleArray.push('Prime')

            }else if(i % 2 !== 0 && i % 5 !== 0 && !ePrimo(i)){
                snapCrackleArray.push('Snap')

            } else if(i % 2 !== 0 && i % 5 !== 0 && ePrimo(i)){
                snapCrackleArray.push('SnapPrime')

            }
             else if(i % 2 === 0 && i % 5 === 0){
                snapCrackleArray.push('Crackle')

            } else if( i === 5){
                snapCrackleArray.push('SnapCracklePrime')
                
            } else if(i % 2 !== 0 && i % 5 === 0 && i !== 5){
                snapCrackleArray.push('SnapCrackle')
                
            } else {
                snapCrackleArray.push(i)

            }
     
        }
        let snapCrackle = snapCrackleArray.join(', ')
        return snapCrackle
        
    }
    function ePrimo(num){
        for(let i = 2; i < num; i++)
            if( num % i === 0 ){ return false};
            return num > 1
        
    }
    