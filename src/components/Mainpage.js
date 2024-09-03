import React, { useState, useEffect } from 'react';
import './style.css';
import Model from './Model';
import Rcards from './Rcards';
import RTables from './RTables';
import Charts from './Charts';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Mainpage = ({ Device_data, Alldata_list, Device_name, Devicename }) => {
  
  const XY00001Data = Device_name.find(item => item.devicename === "XY00001");
  const XY00002Data = Device_name.find(item => item.devicename === "XY00002");
  const XY00003Data = Device_name.find(item => item.devicename === "XY00003");
  const XY00004Data = Device_name.find(item => item.devicename === "XY00004");
  const XY00005Data = Device_name.find(item => item.devicename === "XY00005");

  const device1 = Alldata_list["XY00001"];
  const device2 = Alldata_list["XY00002"];
  const device3 = Alldata_list["XY00003"];
  const device4 = Alldata_list["XY00004"];
  const device5 = Alldata_list["XY00005"];



  const device1_data = device1 ? device1.thickness : 'N/A';
  const device2_data = device2 ? device2.thickness : 'N/A';
  const device3_data = device3 ? device3.thickness : 'N/A';
  const device4_data = device4 ? device4.thickness : 'N/A';
  const device5_data = device5 ? device5.thickness : 'N/A';

  const device1_thickness = parseFloat(XY00001Data ?XY00001Data.limit  :"N/A");
  const device2_thickness = parseFloat(XY00002Data ?XY00002Data.limit  :"N/A");
  const device3_thickness = parseFloat(XY00003Data ?XY00003Data.limit  :"N/A");
  const device4_thickness = parseFloat(XY00004Data ?XY00004Data.limit  :"N/A");
  const device5_thickness = parseFloat(XY00005Data ?XY00005Data.limit  :"N/A");


  const device1_convert = parseFloat(device1_data)
  const device2_convert = parseFloat(device2_data)
  const device3_convert = parseFloat(device3_data)
  const device4_convert = parseFloat(device4_data)
  const device5_convert = parseFloat(device5_data)


  const device1_percentage = ((device1_convert - 0)*(100-0))/(device1_thickness-0)+0;
  const device2_percentage = ((device2_convert - 0)*(100-0))/(device2_thickness-0)+0;
  const device3_percentage = ((device3_convert - 0)*(100-0))/(device3_thickness-0)+0;
  const device4_percentage = ((device4_convert - 0)*(100-0))/(device4_thickness-0)+0;
  const device5_percentage = ((device5_convert - 0)*(100-0))/(device5_thickness-0)+0;

  let device1_thickness_value = parseFloat(device1_thickness)+parseFloat(2)
  const device1_data_thickness = parseFloat(device1_data)> (device1_thickness_value)

  let device2_thickness_value = parseFloat(device2_thickness)+parseFloat(2)
  const device2_data_thickness = parseFloat(device2_data)> (device2_thickness_value)

  let device3_thickness_value = parseFloat(device3_thickness)+parseFloat(2)
  const device3_data_thickness = parseFloat(device3_data)> (device3_thickness_value)

  let device4_thickness_value = parseFloat(device4_thickness)+parseFloat(2)
  const device4_data_thickness = parseFloat(device4_data)> (device4_thickness_value)

  let device5_thickness_value = parseFloat(device5_thickness)+parseFloat(2)
  const device5_data_thickness = parseFloat(device5_data)> (device5_thickness_value)

  const rounded_value_device1 = device1_percentage.toFixed(2);
  const rounded_value_device2 = device2_percentage.toFixed(2);
  const rounded_value_device3 = device3_percentage.toFixed(2);
  const rounded_value_device4 = device4_percentage.toFixed(2);
  const rounded_value_device5 = device5_percentage.toFixed(2);


  const data1 = [
    { id: 'XY00001', thickness: `${rounded_value_device1 >=parseFloat(125)? "⚠️" :rounded_value_device1 + "%"}`},
    { id: 'XY00002', thickness: `${rounded_value_device2 >=parseFloat(125)? "⚠️" :rounded_value_device2 + "%"}`},
    { id: 'XY00003', thickness: `${rounded_value_device3 >=parseFloat(125)? "⚠️" :rounded_value_device3 + "%"}`},
    { id: 'XY00004', thickness: `${rounded_value_device4 >=parseFloat(125)? "⚠️" :rounded_value_device4 + "%"}`},
    { id: 'XY00005', thickness: `${rounded_value_device5 >=parseFloat(125)? "⚠️" :rounded_value_device5 + "%"}`},
    { id: 'XY00006', thickness: 'N/A'},
    { id: 'XY00007', thickness: 'N/A'},
    { id: 'XY00008', thickness: 'N/A'},
    { id: 'XY00009', thickness: 'N/A'},
    { id: 'XY00010', thickness: 'N/A'},
  ];

  const data2 = [
    { id: 'XY00011', thickness: 'N/A'},
    { id: 'XY00012', thickness: 'N/A'},
    { id: 'XY00013', thickness: 'N/A'},
    { id: 'XY00014', thickness: 'N/A'},
    { id: 'XY00015', thickness: 'N/A'},
    { id: 'XY00016', thickness: 'N/A'},
    { id: 'XY00017', thickness: 'N/A'},
    { id: 'XY00018', thickness: 'N/A'},
    { id: 'XY00019', thickness: 'N/A'},
    { id: 'XY00020', thickness: 'N/A'},
  ];
  const data3 = [
    { id: 'XY00021', thickness: 'N/A'},
    { id: 'XY00022', thickness: 'N/A'},
    { id: 'XY00023', thickness: 'N/A'},
    { id: 'XY00024', thickness: 'N/A'},
    { id: 'XY00025', thickness: 'N/A'},
    { id: 'XY00026', thickness: 'N/A'},
    { id: 'XY00027', thickness: 'N/A'},
    { id: 'XY00028', thickness: 'N/A'},
    { id: 'XY00029', thickness: 'N/A'},
    { id: 'XY00030', thickness: 'N/A'},
  ];
  const data4 = [
    { id: 'XY00031', thickness: 'N/A'},
    { id: 'XY00032', thickness: 'N/A'},
    { id: 'XY00033', thickness: 'N/A'},
    { id: 'XY00034', thickness: 'N/A'},
    { id: 'XY00035', thickness: 'N/A'},
    { id: 'XY00036', thickness: 'N/A'},
    { id: 'XY00037', thickness: 'N/A'},
    { id: 'XY00038', thickness: 'N/A'},
    { id: 'XY00039', thickness: 'N/A'},
    { id: 'XY00040', thickness: 'N/A'},
  ];
  const handleDeviceClick = (device, thickness) => {
    localStorage.setItem("DeviceId", device);
  };


  const renderGridItems1 = () => {
    return data1.map((item, index) => (
      <div key={index} className='grid grid-cols-2'>
        <div className={`
          ${
            parseFloat(rounded_value_device1) < parseFloat(50) && item.id === 'XY00001' ? 'bg-red-500' :
            device1_data_thickness === true && item.id === 'XY00001' ? 'bg-[#0A99DF]' :
            parseFloat(rounded_value_device1) >= parseFloat(75) && device1_data_thickness === false && item.id === 'XY00001' ? 'bg-green-500' :
            parseFloat(rounded_value_device1) >= parseFloat(50) && parseFloat(rounded_value_device1) < parseFloat(75) && item.id === 'XY00001' ? 'bg-[#ED7014]' :
            item.id === 'XY00001' ? 'bg-white' :
            // Condition for device 5

            parseFloat(rounded_value_device2) < parseFloat(50) && item.id === 'XY00002' ? 'bg-red-500' :
            device2_data_thickness === true && item.id === 'XY00002' ? 'bg-[#0A99DF]' :
            parseFloat(rounded_value_device2) >= parseFloat(75) && device2_data_thickness === false && item.id === 'XY00002' ? 'bg-green-500' :
            parseFloat(rounded_value_device2) >= parseFloat(50) && parseFloat(rounded_value_device2) < parseFloat(75) && item.id === 'XY00002' ? 'bg-[#ED7014]' :
            item.id === 'XY00002' ? 'bg-white' :

            parseFloat(rounded_value_device3) < parseFloat(50) && item.id === 'XY00003' ? 'bg-red-500' :
            device3_data_thickness === true && item.id === 'XY00003' ? 'bg-[#0A99DF]' :
            parseFloat(rounded_value_device3) >= parseFloat(75) && device3_data_thickness === false && item.id === 'XY00003' ? 'bg-green-500' :
            parseFloat(rounded_value_device3) >= parseFloat(50) && parseFloat(rounded_value_device3) < parseFloat(75) && item.id === 'XY00003' ? 'bg-[#ED7014]' :
            item.id === 'XY00003' ? 'bg-white' :

            parseFloat(rounded_value_device4) < parseFloat(50) && item.id === 'XY00004' ? 'bg-red-500' :
            device4_data_thickness === true && item.id === 'XY00004' ? 'bg-[#0A99DF]' :
            parseFloat(rounded_value_device4) >= parseFloat(75) && device4_data_thickness === false && item.id === 'XY00004' ? 'bg-green-500' :
            parseFloat(rounded_value_device4) >= parseFloat(50) && parseFloat(rounded_value_device4) < parseFloat(75) && item.id === 'XY00004' ? 'bg-[#ED7014]' :
            item.id === 'XY00004' ? 'bg-white' :

            parseFloat(rounded_value_device5) < parseFloat(50) && item.id === 'XY00005' ? 'bg-red-500' :
            device5_data_thickness === true && item.id === 'XY00005' ? 'bg-[#0A99DF]' :
            parseFloat(rounded_value_device5) >= parseFloat(75) && device5_data_thickness === false && item.id === 'XY00005' ? 'bg-green-500' :
            parseFloat(rounded_value_device5) >= parseFloat(50) && parseFloat(rounded_value_device5) < parseFloat(75) && item.id === 'XY00005' ? 'bg-[#ED7014]' :
            item.id === 'XY00005' ? 'bg-white' :
          'bg-white' 
          }


          rounded-r-md hover:border-[#2d2d2d] flex justify-center m-2 border-2 text-sm font-bold  cursor-pointer`}
          onClick={() => handleDeviceClick(item.id, item.thickness)}
        >
    
          {item.thickness}
        </div>
  
        <div className={`
        ${

           // Condition for device 1
           parseFloat(rounded_value_device1) < parseFloat(50) && item.id === 'XY00001' ? 'bg-red-500' :
           device1_data_thickness === true && item.id === 'XY00001' ? 'bg-[#0A99DF]' :
           parseFloat(rounded_value_device1) >= parseFloat(75) && device1_data_thickness === false && item.id === 'XY00001' ? 'bg-green-500' :
           parseFloat(rounded_value_device1) >= parseFloat(50) && parseFloat(rounded_value_device1) < parseFloat(75) && item.id === 'XY00001' ? 'bg-[#ED7014]' :
           item.id === 'XY00001' ? 'bg-white' :
           // Condition for device 5

           parseFloat(rounded_value_device2) < parseFloat(50) && item.id === 'XY00002' ? 'bg-red-500' :
           device2_data_thickness === true && item.id === 'XY00002' ? 'bg-[#0A99DF]' :
           parseFloat(rounded_value_device2) >= parseFloat(75) && device2_data_thickness === false && item.id === 'XY00002' ? 'bg-green-500' :
           parseFloat(rounded_value_device2) >= parseFloat(50) && parseFloat(rounded_value_device2) < parseFloat(75) && item.id === 'XY00002' ? 'bg-[#ED7014]' :
           item.id === 'XY00002' ? 'bg-white' :

           parseFloat(rounded_value_device3) <= parseFloat(50) && item.id === 'XY00003' ? 'bg-red-500' :
           device3_data_thickness === true && item.id === 'XY00003' ? 'bg-[#0A99DF]' :
           parseFloat(rounded_value_device3) >= parseFloat(75) && device3_data_thickness === false && item.id === 'XY00003' ? 'bg-green-500' :
           parseFloat(rounded_value_device3) >= parseFloat(50) && parseFloat(rounded_value_device3) < parseFloat(75) && item.id === 'XY00003' ? 'bg-[#ED7014]' :
           item.id === 'XY00003' ? 'bg-white' :

           parseFloat(rounded_value_device4) <= parseFloat(50) && item.id === 'XY00004' ? 'bg-red-500' :
           device4_data_thickness === true && item.id === 'XY00004' ? 'bg-[#0A99DF]' :
           parseFloat(rounded_value_device4) >= parseFloat(75) && device4_data_thickness === false && item.id === 'XY00004' ? 'bg-green-500' :
           parseFloat(rounded_value_device4) >= parseFloat(50) && parseFloat(rounded_value_device4) < parseFloat(75) && item.id === 'XY00004' ? 'bg-[#ED7014]' :
           item.id === 'XY00004' ? 'bg-white' :

           parseFloat(rounded_value_device5) < parseFloat(50) && item.id === 'XY00005' ? 'bg-red-500' :
           device5_data_thickness === true && item.id === 'XY00005' ? 'bg-[#0A99DF]' :
           parseFloat(rounded_value_device5) >= parseFloat(75) && device5_data_thickness === false && item.id === 'XY00005' ? 'bg-green-500' :
           parseFloat(rounded_value_device5) >= parseFloat(50) && parseFloat(rounded_value_device5) < parseFloat(75) && item.id === 'XY00005' ? 'bg-[#ED7014]' :
           item.id === 'XY00005' ? 'bg-white' :
          'bg-white' 
        }
        rounded-r-md hover:border-[#2d2d2d] flex text-sm font-bold justify-center m-2 border-2 cursor-pointer`}
        // onClick={() => handleDeviceClick(item.id, item.thickness)}
      >
          {item.id}
        </div>
      </div>
    ));
  };
  
  
  

  const renderGridItems2 = () => {
    return data2.map((item, index) => (
      <div key={index} className='grid grid-cols-2'>
     <div className={`bg-white  rounded-r-md hover:border-[#2d2d2d]  flex justify-center m-2 border text-sm font-bold cursor-pointer`}>{item.thickness}</div>
        <div className={`bg-white rounded-r-md hover:border-[#2d2d2d]  flex text-sm font-bold justify-center m-2 border cursor-pointer`} onClick={() => handleDeviceClick(item.id, item.thickness)}>{item.id}</div>
      </div>
    ));
  };

  const renderGridItems3 = () => {
    return data3.map((item, index) => (
      <div key={index} className='grid grid-cols-2'>
   <div className={`bg-white rounded-r-md hover:border-[#2d2d2d]  flex justify-center m-2 border text-sm font-bold cursor-pointer`}>{item.thickness}</div>
        <div className={`bg-white rounded-r-md hover:border-[#2d2d2d]  flex text-sm font-bold justify-center m-2 border cursor-pointer`} onClick={() => handleDeviceClick(item.id, item.thickness)}>{item.id}</div>
      </div>
    ));
  };
  const renderGridItems4 = () => {
    return data4.map((item, index) => (
      <div key={index} className='grid grid-cols-2'>
      <div className={`bg-white rounded-r-md hover:border-[#2d2d2d] flex justify-center m-2 border text-sm font-bold cursor-pointer`}>{item.thickness}</div>
        <div className={`bg-white rounded-r-md hover:border-[#2d2d2d]  flex text-sm font-bold justify-center m-2 border cursor-pointer`} onClick={() => handleDeviceClick(item.id, item.thickness)}>{item.id}</div>
      </div>
    ));
  };

  return (
    <div>
      <Navbar 
        device_data={Device_data}
        Device_name={Devicename}
        alldata_list={Alldata_list}
      />
      <div className='flex flex-wrap'>
        <div className='w-full sm:w-1/2 border m-0.2 rounded-lg'>
          {/* <div className='flex justify-center items-center'>
            <h1 className='font-bold'>MODEL VIEW</h1>
          </div> */}
          <div className='grid grid-cols-1 lg:grid-cols-4  gap-2' style={{ maxHeight: '45vh', overflowY: 'auto' }}>
            <div className='h-full rounded-r-md bg-[#fce6cac7] border'>
              <div className='flex font-bold bg-[#613522] text-rose-50 justify-around'>
                <div>Thickness</div>
                <div>Device</div>
              </div>
              {renderGridItems1()}
            </div>
            <div className='h-full rounded-r-md bg-[#fce6cac7] border'>
              <div className='flex font-bold bg-[#613522] text-rose-50 justify-around'>
                <div>Thickness</div>
                <div>Device</div>
              </div>
              {renderGridItems2()}
            </div>
            <div className='h-full rounded-r-md bg-[#fce6cac7] border'>
              <div className='flex font-bold bg-[#613522] text-rose-50 justify-around'>
                <div>Thickness</div>
                <div>Device</div>
              </div>
              {renderGridItems3()}
            </div>
            <div className='h-full rounded-r-md bg-[#fce6cac7] border'>
              <div className='flex font-bold bg-[#613522] text-rose-50 justify-around'>
                <div>Thickness</div>
                <div>Device</div>
              </div>
              {renderGridItems4()}
            </div>
          </div>
        </div>
        <div className='w-full sm:w-1/2'>
          <Rcards 
              device_data={Device_data}
              devicename = {Devicename}
            />
        </div>
      </div>
      <div className='flex flex-wrap'>
        <div className='w-full sm:w-1/2'>
        <RTables device_data={Device_data} />
        </div>
        <div className='w-full sm:w-1/2'>
        <Charts device_data={Device_data} />
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
