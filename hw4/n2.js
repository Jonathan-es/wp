function minArray(a){

    let min = a[0]

    for(let i = 0; i<=a.length; i++){
        if(a[i]<min){
            min=a[i]
        }
    }

    return min

}

a = [43, 21, 543, 64, 31]
console.log(minArray(a))