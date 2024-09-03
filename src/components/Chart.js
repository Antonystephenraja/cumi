import React from "react";
import { Line } from "react-chartjs-2";
import Select from 'react-select';



const Chart = (chartdata) => {
  const filterdata = chartdata.chartdata;
  const thickness = filterdata.map(item => item.thickness);
  const devicename = filterdata.map(item => item.device_name);

  
  const battery = filterdata.map(item=>item.battery_status)





  const time = filterdata.map(item => item.timestamp);
  


  const Data_freequences = [
    { label: 'XY00001', value: 'XY00001' },
    { label: 'XY00002', value: 'XY00002' },
    { label: 'XY00003', value: 'XY00003' },
    { label: 'XY00004', value: 'XY00004' },
    { label: 'XY00005', value: 'XY00005' },
  ];
  const customStyles_2 = {
    control: (provided) => ({
      ...provided,
      // backgroundColor: '#2d2d2d',
      borderColor:'#2d2d2d',
      color: 'black',
    }),
    option: (provided, state) => ({
      ...provided,
      
  
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#D3D2D1', 
    }),
    placeholder: (defaultStyles) => ({
      ...defaultStyles,
      color: '#fffff', 
    }),
  };
  const handle_dropdown_Change = async(selectedOption) => {
    localStorage.setItem("ChartId",selectedOption.value)
  }

  const data = {
    labels: time.reverse(),
    datasets: [
      {
        label: 'Dataset 1',
        data: thickness.reverse(),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Dataset 2',
        data: battery,
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  };
  // const data={
  //   labels:time,
  //   datasets:[
  //     {
  //       data:thickness,
  //       backgroundColor:'transparent',
  //       borderColor:'#08B8FF',
  //       pointBorderColor:'transparent',
  //     },
  //     {
  //       data: battery ,
  //       backgroundColor: 'transparent',
  //       borderColor: '#FF5733', 
  //       pointBorderColor: 'transparent',
  //     },
  //   ]
  // }


  return (
    <div className="chart_page">
      <div id="chart" className="bg-[#ffffffe7] ml-4 mr-4 mt-4 rounded-lg ">
        <div className="flex justify-center items-center">
          <div className="flex">
          <h3 className="font-bold mt-2 text-black">Select the DeviceId:</h3>
          <Select  className="w-22 ml-2 mt-1 h-10" options={Data_freequences} styles={customStyles_2} isSearchable={true}  placeholder={`${devicename[0]}`} onChange={handle_dropdown_Change} />
          </div>
         
        </div>
   
        <Line data={data} />
      </div>
    </div>
  );
};

export default Chart;
