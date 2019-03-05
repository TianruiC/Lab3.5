var dataP=d3.json("colordata.json");
var datacsv=d3.csv("colordata.csv");

var drawChart=function(colordata)
{
  var width=400;
  var height=200;
  var barWidth=width/colordata.length;
  var svg=d3.select("svg")
            .attr("width",width)
            .attr("height",height);

  svg.selectAll("rect")
     .data(colordata)
     .enter()
     .append("rect")
     .attr("x",function(d,i){
       return i*barWidth;
     })
     .attr("y",function(d,i){
       //return height-d.num;
       return height-d.num*10;
     })
     .attr("width",barWidth)
     .attr("height",function(d){
       return d.num*10;
     })
     .attr("fill",function(d){
       return d.color;
     })
  svg.selectAll("text")
     .data(colordata)
     .enter()
     .append("text")
     .text(function(d){
       return d.num;
     }
     .attr("x",function(d,i){
       return i*barWidth+5;
     })
     .attr("y",function(d,i){
       return d.num*10+15;
     });
}
dataP.then(function(data)
{
  console.log("data",data);
  drawChart(data);
},
function(err)
{
  console.log(err);
}
)
