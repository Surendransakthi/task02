
var req = new XMLHttpRequest();

req.open('GET','https://restcountries.eu/rest/v2/all',true);

req.send();
var data;
req.onload=function(){
data=JSON.parse(this.response);
console.log(data);
console.log(data[0].name);
console.log(data.length);
for(i=0;i<data.length;i++)
{
    console.log(data[i].name);
}
}

