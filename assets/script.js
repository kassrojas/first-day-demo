var inputKey = document.getElementById("inputKey");
var inputValue = document.getElementById("inputValue");
var btnInsert = document.getElementById("btnInsert");
var lsOutput = document.getElementById("lsOutput");

btnInsert.onclick = function(){
    var key = inputKey.value;
    var value = inputValue.value;

    console.log(key, value);

    if (key && value){
        localStorage.setItem(key, value);
        location.reload();
    }
};

for (var i = 0; i < localStorage.length; i++){
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    
    lsOutput.innerHTML += `${key}: ${value}<br />`;
}

// can also do it like this. <br /> creates a line break for the next input
// for (var i = 0; i < localStorage.length; i++){
//     var key = localStorage.key(i);
    
//     lsOutput.innerHTML += `${key}: ${localStorage.getItem(key)}<br />`;

// }
