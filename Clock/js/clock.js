
function show(){
    var date =  new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();


    temp =  hours + minutes + seconds;

    document.getElementById("clock").innerText = temp;

    document.getElementById("clock").textContent = temp;
}
 show();

