import React from 'react'
import { HorizontalBar } from 'react-chartjs-2';

export function TechStack() {
  const data = {labels: ["CSS", "React", "JS", "SASS", "HTML5"],
  datasets: [{
  backgroundColor: 'rgb(255, 99, 132)',
  borderColor: 'rgb(255, 99, 132)',
  data: [20, 10, 5, 2, 20],
  }]}
  return (
    < HorizontalBar 
      data={
        data
      }/>
  )
}

export default TechStack
