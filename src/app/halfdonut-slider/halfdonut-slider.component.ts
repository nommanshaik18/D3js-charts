import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';
//import * as $ from "jquery";
declare var $: any;
//import 'round-slider';

@Component({
  selector: 'app-halfdonut-slider',
  templateUrl: './halfdonut-slider.component.html',
  styleUrls: ['./halfdonut-slider.component.css'],
})
export class HalfdonutSliderComponent implements OnInit {
  @ViewChild('svgContainer', { read: ElementRef, static: true })
  svgContainerRef!: ElementRef<HTMLDivElement>;
  private theData = { a: 20, b: 20, c: 20, d: 20, e: 20, f: 20 };
  private svg: any;

  private pie: any;

  dataSource: any;
  glob;

  private data = [
    { ValueType: 'Low', Value: '20' },
    { ValueType: 'Low to Moderate', Value: '20' },
    { ValueType: 'Moderate', Value: '20' },
    { ValueType: 'Moderaterly High', Value: '20' },
    { ValueType: 'High', Value: '20' },
    { ValueType: 'Very High', Value: '20' },
  ];

  private margin = 50;
  private width = 450;
  private height = 350;
  sliderval: any;

  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors;
  min: 10;
  max: 60;
  value: 10;
  constructor() {}

  ngOnInit(): void {
    this.createSvg();
    this.createColors();
    this.drawChart();
    this.inside_pie();
  }

  ngAfterViewInit() {}
  inside_pie() {
    $('#slider1').roundSlider({
      sliderType: 'min-range',
      circleShape: 'half-top',
      startAngle: '315',
      lineCap: 'round',
      radius: 60,
      width: 8,
      handleSize: '+8',
      disable: true,
      // handleShape: "dot",
      min: 10,
      max: 60,
      value: 60,
      svgMode: true,

      borderWidth: 0,

      startValue: 0,
      rangeColor: 'url(#grad1)',
      mouseScrollAction: false,
      drag: null,
      setValue: function (event) {
        var value = event.value;

        $('#slider1').roundSlider('setValue', 30);
      },
      valueChange: function (e) {
        this.sliderval = 40;

        $('#slider1').roundSlider({
          rangeColor:
            '-webkit-gradient(linear, left top, left bottom, from(#ccc), to(#000))',
          tooltipColor: '#ffffff',
        });
        $('#slider1').roundSlider('setValue', this.sliderval);
        $('#slider1 .rs-handle').css({ 'background-color': 'transparent' });

        $('#slider1 .rs-handle').css({
          'background-image': 'url("../../../../assets/img/sliderarrow.png") ',
          'background-repeat': 'no-repeat',
          'background-size': '40px',
          height: '40px',
          width: '40px',
          position: 'relative',
          right: '15px',
          bottom: '8px',
          transform: 'rotate(-150deg)',
          'pointer-events': 'none',
        });
      },
    });
  }
  private createSvg(): void {
    this.svg = d3
      .select('#airlineChart')
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr(
        'transform',
        'translate(' + this.width / 2.8 + ',' + this.height / 2 + ')'
      );
  }

  private createColors(): void {
    this.colors = d3
      .scaleOrdinal()
      .domain(this.data.map((d) => d.Value.toString()))

      .range([
        '#B41A15',
        '#7CC324',
        '#C8DC00',
        '#FFE500',
        '#FFBA00',
        '#FF7200',
      ]);
  }

  private drawChart(): void {
    const pie = d3.pie<any>().value((d: any) => Number(d.Value));
    this.pie = d3
      .pie()
      .startAngle(-90 * (Math.PI / 180))
      .endAngle(90 * (Math.PI / 180))
      .value((d) => d[1])
      .sort((a, b) => d3.ascending(a[0], b[0]));

    this.svg
      .selectAll('pieces')
      .data(this.pie(Object.entries(this.theData)))
      .enter()
      .append('path')
      .attr('d', d3.arc().innerRadius(65).outerRadius(this.radius))
      .attr('fill', (d: any, i: any) => this.colors(i))
      .attr('stroke', 'none')
      .style('stroke-width', '1px');

    const labelLocation = d3.arc().outerRadius(80).innerRadius(this.radius);
    console.log('labelLocation', labelLocation);

    // this.svg
    //   .selectAll('pieces')
    //   .data(pie(this.data))
    //   .enter()
    //   .append('text')
    //   .text((d: any) => d.data.ValueType)
    //   .attr("transform","translate("+this.width/2+","+this.height/2+")")

    //   .attr("transform", (d: any) => {
    //     console.log("labelLocation", labelLocation.centroid(d))
    //     return "translate(" + labelLocation.centroid(d) + ")"
    //   })
    //   .attr('dy', '.100em')
    //   .style("text-anchor", "middle")
    //   .style("font-size", 12)
    //   .css("color","red")
  }

  starRating = 3;
}
