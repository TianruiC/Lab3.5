var dataP=d3.json("colordata.json");

dataP.then(function(data)
{
console.log("data",data);
},
function(err)
{
  console.log(err);
}
)
