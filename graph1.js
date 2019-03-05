var dataP=d3.json("colordata.json");

var drawChart=function(colordata)
{
  var width=400;
  var height=200;
  var svg=d3.select("svg")
            .attr("width",width)
            .attr("height",height);

  svg.selectAll("rect")
     .data(colordata)
     .enter()
     .append("rect");

}
dataP.then(function(data)
{
console.log("data",data);
},
function(err)
{
  console.log(err);
}
)
