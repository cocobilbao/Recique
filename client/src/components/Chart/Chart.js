import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import residuos from "./residuos2018.json";


class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      chartData:{
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre'],
        datasets:residuos,
        
      } 
    };
  }
  
  static defaultProps = {
    title:"title",
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
  };

  render() {
    return (
      
      <div className="chart">
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: this.props.title,
              fontSize: 25,
              fontColor: "#000",
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              labels: {
                fontColor: "#000",
                fontSize: 12
            }
            },
            scales: {
              yAxes: [{
                  ticks: {
                      fontColor: "#000"
                  },
              }],
            xAxes: [{
                  ticks: {
                      fontColor: "#000"
                  },
              }]
          } 
          }}
        />
      </div>
    );
  }
}


export default Chart;
