 import React, { useEffect } from 'react';
 import Questions from './questions';
 import * as constants from '../../../../constants';
 import d3 from 'd3v3';

 
 const Wheel= ({ children, ...props }) => {

    let chart, questionContainer, data, svg, container, vis, pie, arc, arcs, ps, array, scale;

    useEffect(() => {
        // Update the document title using the browser API
     chart=document.getElementById('chart');
     questionContainer=document.getElementById('question');

        console.log(chart);
        wheereRender();

      });

function wheereRender(){
 let padding = {top:20, right:40, bottom:0, left:0},
 w = 500 - padding.left - padding.right,
 h = 500 - padding.top  - padding.bottom,
 r = Math.min(w, h)/2,
 rotation = 0,
 oldrotation = 0,
 picked = 100000;
 let color = d3.scale.category20();
 let randomNumbers = getRandomNumbers();
 let oldpick=[];
 

 data = constants.gamesPage.fortuneWheel;

 svg = d3.select(chart)
.append("svg")
.data([data])
.attr("width",  w + padding.left + padding.right)
.attr("height", h + padding.top + padding.bottom);

container = svg.append("g")
.attr("class", "chartholder")
.attr("transform", "translate(" + (w/2 + padding.left) + "," + (h/2 + padding.top) + ")");

vis = container.append("g");
 pie = d3.layout.pie().sort(null).value(function(d){return 1;});

// declare an arc generator function
arc = d3.svg.arc().outerRadius(r);

// select paths, use arc generator to draw
 arcs = vis.selectAll("g.slice")
.data(pie)
.enter()
.append("g")
.attr("class", "slice");


arcs.append("path")
.attr("fill", function(d, i){ return color(i); })
.attr("d", function (d) { return arc(d); });

// add the text
arcs.append("text").attr("transform", function(d){
    d.innerRadius = 0;
    d.outerRadius = r;
    d.angle = (d.startAngle + d.endAngle)/2;
    return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius -10) +")";
})
.attr("text-anchor", "end")
.text( function(d, i) {
    return data[i].label;
});

container.on("click", spin);


function spin(d){

container.on("click", null);

//all slices have been seen, all done
console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
if(oldpick.length === data.length){
    console.log("done");
    container.on("click", null);
    return;
}

  var ps = 360/data.length,
     //pieslice = Math.round(1440/data.length),
     rng      = Math.floor((Math.random() * 1440) + 360);
    
rotation = (Math.round(rng / ps) * ps);

picked = Math.round(data.length - (rotation % 360)/ps);
picked = picked >= data.length ? (picked % data.length) : picked;


if(oldpick.indexOf(picked) !== -1){
    d3.select(this).call(spin);
    return;
} else {
    oldpick.push(picked);
}

rotation += 90 - Math.round(ps/2);

vis.transition()
    .duration(3000)
    .attrTween("transform", rotTween)
    .each("end", function(){

        //mark question as seen
        d3.select(".slice:nth-child(" + (picked + 1) + ") path")
            .attr("fill", "aqua");

        //populate question
        d3.select(questionContainer)
            .text(data[picked].question);

        oldrotation = rotation;
    
        container.on("click", spin);
    });
}

//make arrow
svg.append("g")
.attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h/2)+padding.top) + ")")
.append("path")
.attr("d", "M-" + (r*.15) + ",0L0," + (r*.05) + "L0,-" + (r*.05) + "Z")
.style({"fill":"#860e86"});

//draw spin circle
container.append("circle")
.attr("cx", 0)
.attr("cy", 0)
.attr("r", 60)
.style({"fill":"#860e86","cursor":"pointer"});

//spin text
container.append("text")
.attr("x", 0)
.attr("y", 15)
.attr("text-anchor", "middle")
.text("SPIN")
.style({"font-weight":"normal", "font-size":"20px", "color":"#fff"});


function rotTween(to) {
var i = d3.interpolate(oldrotation % 360, rotation);
return function(t) {
return "rotate(" + i(t) + ")";
};
}


function getRandomNumbers(){
 array = new Uint16Array(1000);
 scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);

if(window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function"){
    window.crypto.getRandomValues(array);
    console.log("works");
} else {
    //no support for crypto, get crappy random numbers
    for(var i=0; i < 1000; i++){
        array[i] = Math.floor(Math.random() * 100000) + 1;
    }
}

return array;
}

    }



    return (
    <div id='chart'>
        
  <Questions></Questions></div>);
}

export default Wheel;