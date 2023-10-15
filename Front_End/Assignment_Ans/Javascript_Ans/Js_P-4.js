//Question - 1
    let arr=[1,2,3,4,5,6,2,3];
    let num=2;
    for(let i=0; i<arr.length;i++){
        if(arr[i]==num){
            arr.splice(i,1);
        }
    }
    console.log(arr);

//Question - 2
    let number= 2998152;
    let count = 0;
    let copy = number;    
    while(copy>0){
        count++;
        copy= Math.floor(copy/10);
    }
    console.log(count);
    
//Question -3
    let number1= 287152;
    let sum=0;
    let copy1=number1;
    while(copy1>0){
        let  digit=copy1 % 10;
        sum+=digit;
        copy1=Math.floor(copy1/10);
    }
    console.log(sum);

//Question - 4
    let n=20;
    let factorial=1;
    for(let i=1; i<=n; i++){
        factorial*=i;

    }
    console.log(`Factorial of ${n} is : ${factorial}`);

//Question - 5
    let array=[34,50,43,93,63,85,33,12];
    let large=0;

    for(let i=0; i<array.length; i++){
        if(large<array[i]){
            large=array[i];
        }
    }
    console.log(large);