function changelight(color){
    let redlight = document.getElementById('red-light'); 
    let yellowlight = document.getElementById('yellow-light'); 
    let greenlight = document.getElementById('green-light'); 

    if (color==='red'){
        redlight.style.background= 'red';
        yellowlight.style.background= '';
        greenlight.style.background= '';

        } 
    else if (color==='yellow'){
            redlight.style.background= '';
            yellowlight.style.background= 'yellow';
            greenlight.style.background= '';
        }
    else if (color==='green'){
            redlight.style.background= '';
            yellowlight.style.background= '';
            greenlight.style.background= 'green';
        } else{
            redlight.style.background= '';
            yellowlight.style.background= '';
            greenlight.style.background= '';
        }
        
}

function start(){
    let redTime = Number(document.getElementById('red-time').value); 
    let yellowTime = Number(document.getElementById('yellow-time').value); 
    let greenTime = Number(document.getElementById('green-time').value);

    changelight('green');
    setTimeout(() => changelight('yellow'), (greenTime)*1000);
    setTimeout(() => changelight('red'), (greenTime+yellowTime)*1000);
    setTimeout(() => changelight('clear'), (greenTime+yellowTime+redTime)*1000);
}



