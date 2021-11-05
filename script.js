const agriculturedata = [
  ['Brazil', 33.9],
  ['Canada', 6.9],
  ['Costa Rica', 34.5],
  ['Denmark', 62],
  ['Fiji', 23.3],
  ['France', 52.4],
  ['Greenland', 0.6],
  ['Italy', 43.2],
  ['Mali', 33.8],
  ['Netherlands', 53.3],
];

const width = 600;
const height = 500;
const marginLeft = 150;
const marginTop = 80;
const barHeight = 30;
const widthMultiplier = 6;
const gap = 5;
const barOpacity = 0.7;

// define svg
const svg = d3
  .select('#viz')
  .append('svg')
  .attr('viewBox', [0, 0, width, height]);

// add rectangle bars
svg
  .append('g')
  .attr('class', 'rect-bars')
  .selectAll('rect')
  .data(agriculturedata)
  .enter()
  .append('rect')
  .attr('y', (d, i) => i * (barHeight + gap) + marginTop)
  .attr('x', marginLeft)
  .attr('width', (d) => d[1] * widthMultiplier)
  .attr('height', barHeight)
  .attr('fill', 'green')
  .attr('fill-opacity', barOpacity);

// add text label
svg
  .selectAll('text.country')
  .data(agriculturedata)
  .enter()
  .append('text')
  .attr('class', 'text-styling')
  .text((d) => {
    return d[0];
  })
  .attr('y', (d, i) => (i + 1) * (barHeight + gap) + marginTop - 10)
  .attr('x', marginLeft - 10)
  .attr('text-anchor', 'end')
  .attr('alignment-baseline', 'ideographic');

// add percentage label
svg
  .selectAll('text.data')
  .data(agriculturedata)
  .enter()
  .append('text')
  .attr('class', 'label-styling')
  .text((d) => {
    return `${d[1]}%`;
  })
  .attr('y', (d, i) => (i + 1) * (barHeight + gap) + marginTop - 10)
  .attr('x', (d) => d[1] * widthMultiplier + marginLeft + 10)
  .attr('text-anchor', 'start')
  .attr('alignment-baseline', 'ideographic');

// add title to the chart
svg
  .append('text')
  .attr('class', 'title-styling')
  .attr('text-anchor', 'start')
  .attr('x', marginLeft)
  .attr('y', marginTop - barHeight)
  .text('Proportion of Agricultural Land in 2016');
