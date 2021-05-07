const socket = io();

(function(){
    socket.on("DATA_SAVED",(data)=>{
     addDataToTable(data);
    });
})();

socket.on('UPDATE_BALANCE', (data) => {
    let {UUID, newBalance,Date,OldBalance,TransportFare} = data;
    let udpatableTd = document.getElementById(UUID);
    udpatableTd.innerHTML = newBalance;
    let updatableDate = document.getElementById(`time-${UUID}`);
    updatableDate.innerHTML = formatDate(Date);

    let updatableInitialBalance = document.getElementById(`initialBalance-${UUID}`);
    updatableInitialBalance.innerHTML = OldBalance;

    let updataleTransportFare = document.getElementById(`oldBalance-${UUID}`);
    updataleTransportFare.innerHTML = TransportFare;

 });

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
 InitialBalance.setAttribute('id',`initialBalance-${data.InitialBalance}`);
 InitialBalance.appendChild(Init_bal_data);

 const TransportFare = document.createElement('td');
 const Trans_Fare_data = document.createTextNode(data.TransportFare);
 TransportFare.setAttribute('id',`oldBalance-${data.OldBalance}`);
 TransportFare.appendChild(Trans_Fare_data);

 const NewBalance = document.createElement('td');
 NewBalance.setAttribute('id',data.UUID);
 const New_bal_data = document.createTextNode(data.NewBalance);
NewBalance.appendChild(New_bal_data);

const date = document.createElement('td');
const formatedDate = formatDate(data.Date);
const date_data = document.createTextNode(formatedDate);
date.setAttribute('id',`time-${data.UUID}`);

// console.log(formatedDate);

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

const formatDate = (timestamp) => {
    var date = new Date(timestamp);
    return (date.getDate()+
              "/"+(date.getMonth()+1)+
              "/"+date.getFullYear()+
              " "+date.getHours()+
              ":"+date.getMinutes()+
              ":"+date.getSeconds());
    }