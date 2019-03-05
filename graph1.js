var dataP=d3.json("colordata.json");

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
       return i*barwidth;
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
