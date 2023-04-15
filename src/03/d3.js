import React, { useEffect, useRef } from 'react';
import * as d3 from "d3";
// import _ from "lodash";

export default function D3Move() {
  const svgSelect = useRef();

  var line = d3.line()
    .x(function(d) { return d.x; })
    .y(function(d) { return d.y; });

  var data = [{x: 100, y: 100}, {x: 200, y: 200}];

  function updateBars() {
    // console.log(svgSelect.current)
    d3.select('svg')
      .append("rect")
      .attr("x", 100)
      .attr("y", 100)
      .attr("width", 50)
      .attr("height", 50)
      .attr("fill", "blue");
    d3.select('svg')
      .append("rect")
      .attr("x", 200)
      .attr("y", 200)
      .attr("width", 50)
      .attr("height", 50)
      .attr("fill", "red");

    d3.select("svg").append("path")
      .attr("d", line(data))
      .attr("stroke", "black")
      .attr("fill", "none");
  }

  useEffect(() => {
    updateBars()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className="d3-simple" id='app'>
        <svg
          style={{ overflow: 'visible' }}
          height={100}
          ref={svg => {
            svgSelect.current = svg
          }}
        ></svg>
      </div>
    </>
  );
}