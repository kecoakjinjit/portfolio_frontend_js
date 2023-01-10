const calculate = () =>{
    const p = document.getElementById('inputan').value;
    let hasil;
    const q = document.getElementById('result');
    
    if(p === '0' || !(/[0-9\s\.$]./.test(p))){
        hasil = "invalid input";
        q.style.color = "red";
    }
    else if((p%3 === 0) && (p%5 === 0)){
        hasil = "FizzBuzz!";
        q.style.color = "black";
    }
    else if(p % 5 === 0){
        hasil = "Buzz!";
        q.style.color = "black";
    }
    else if(p % 3 === 0){
        hasil = "Fizz!";
        q.style.color = "black";
    }
    else{
        hasil = p;
        q.style.color = "black";
    }

    q.innerText = hasil;

}