import React, { useEffect, useRef } from 'react';
import * as d3 from "d3";
import _ from "lodash";

function TestWithD3() {
  const svgSelect = useRef();
  const rectWidth = 50
  const svgHeight = 100

  function updateBars() {
    // another way
    // const container = d3.select('#app')
    // create svg
    // container.append('svg')
    //   .attr('height', 100)
    //   .style('overflow', 'visible')
    // create button ...

    // select svg so that transition can be localized within selection
    const t = d3.select(svgSelect.current).transition().duration(1000)
    console.log(svgSelect.current)
    // randomly generate an array of data
    const data = _.times(_.random(3, 8), i => _.random(20, 100))
    d3.select('svg').selectAll('rect')
      .data(data, d => {
        console.log(d)
        return d
      })
      .join(
        enter => {
          return enter.append('rect')
          .attr('x', (d, i) => i * rectWidth)
          .attr('height', 0)
          .attr('y', svgHeight)
          .attr('fill', 'pink')
          .attr('stroke', 'plum')
          .attr('stroke-width', 2)
        },
        update => update,
        exit => {
          exit.transition(t)
            .attr('height', 0)
            .attr('y', 100)
        }
      )
      .attr('width', rectWidth)
      .transition(t)
      .attr('x', (_d, i) => i * rectWidth)
      .attr('height', d => d)
      .attr('y', d => 100 -d)
    // eslint-disable-next-line
    d3.select('code').text(JSON.stringify(data).replace(/\,/g, ', '))
  }

  useEffect(() => {
    updateBars()
  }, [])

  // updateBars()
  // d3.select('button').on('click', updateBars)
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
        <div>
          <button onClick={() => {
            updateBars()
          }}>new Data</button>
          <code></code>
        </div>
      </div>
    </>
  )
}
// eslint-disable-next-line
export default () => {
  return TestWithD3();
};
