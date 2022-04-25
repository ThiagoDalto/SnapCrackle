

function snapCrackle(maxValue){
    let snapCrackleArray = []
    
        for(let i = 1; i <= maxValue; i++){
            if(i % 2 !== 0 && i % 5 !== 0){
                snapCrackleArray.push('Snap')
            } else if(i % 2 === 0 && i % 5 === 0){
                snapCrackleArray.push('Crackle')
            } else if(i % 2 !== 0 && i % 5 === 0){
                snapCrackleArray.push('SnapCrackle')
            } else {
                snapCrackleArray.push(i)
            }
     
        }
        let snapCrackle = snapCrackleArray.join(', ')
        return snapCrackle
        
    }

    console.log(snapCrackle(12))