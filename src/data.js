const socket = io();

(function(){
    socket.on("DATA_SAVED",(data)=>{
     addDataToTable(data);
    })
})();


(function(){
 fetch('/esp8266').then((data)=>{
    //  console.log(data.json());
     return data.json();
 }).then((jsonData)=>{
     jsonData.map(data =>{
         addDataToTable(data);
     })
     
 })
})()

function addDataToTable(data){
 const uuid = document.createElement('td');
 const uuid_data = document.createTextNode(data.UUID);
 uuid.appendChild(uuid_data);

 const InitialBalance = document.createElement('td');
 const Init_bal_data = document.createTextNode(data.InitialBalance);
 InitialBalance.appendChild(Init_bal_data);

 const TransportFare = document.createElement('td');
 const Trans_Fare_data = document.createTextNode(data.TransportFare);
 TransportFare.appendChild(Trans_Fare_data);

 const NewBalance = document.createElement('td');
  const New_bal_data = document.createTextNode(data.NewBalance);
NewBalance.appendChild(New_bal_data);

const date = document.createElement('td');
const date_data = document.createTextNode(data.Date);
console.log(date_data);

date.appendChild(date_data);
const tbl = document.querySelector('#tbl');
const tbl_row = document.createElement('tr');

tbl_row.appendChild(uuid);
tbl_row.appendChild(InitialBalance);
tbl_row.appendChild(TransportFare);
tbl_row.appendChild(NewBalance);
tbl_row.appendChild(date);

tbl.appendChild(tbl_row);
 
 
}