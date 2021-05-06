(function(){
 fetch('/esp8266').then((data)=>{
     return data.json();
 }).then((jsonData)=>{
     console.log(jsonData);
 })
})()