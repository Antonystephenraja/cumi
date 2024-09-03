import React, { useEffect, useState } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import './style.css';
import { Transition } from '@headlessui/react';

const RTables = (device_data) => {
  const alldata = device_data.device_data;

//  if(alldata === 'N/A'){
//   alldata = [];
//   console.log("alldata",alldata)
//  }
  return (
    <div className="flex flex-col">
      <div className="sm:mx-0.5  lg:mx-0.5">
        <div className="py-1 overflow-x-auto  inline-block w-full">
          <div className="overflow-hidden mh-52  table_h lg:h-52 overflow-y-auto md:overflow-y-auto sm:overflow-y-auto lg:overflow-y-auto mr-1 ">
            <table className="min-w-full bg-white border">
              <thead className="bg-[#613522] border-b static">
                <tr>
                  <th className="text-sm font-medium text-white px-2 py-2">
                    Device Name
                  </th>
                  <th className="text-sm font-medium text-white px-2 py-2">
                    Thickness
                  </th>
                  <th className="text-sm font-medium text-white px-2 py-2">
                    Battery
                  </th>
                  <th className="text-sm font-medium text-white px-2 py-2">
                    Signal
                  </th>
                  <th className="text-sm font-medium text-white px-2 py-2">
                    Device Temp
                  </th>
                  <th className="text-sm font-medium text-white px-2 py-2">
                    Timestamp
                  </th>
                </tr>
              </thead>
              <tbody className={` divide-y divide-gray-200`}>
                {alldata.slice().map((data, index) => {
                  
                  const battery_value = data.battery_status;
              
                  let batteryPercentage = parseInt((battery_value - 290) * (100 - 0) / (776 - 290) + 0);

                  const signal_percentage= (data.signal_strength - 0)*(100 - 0 )/(32 - 0)+0;
                  const signal_percentage_convert = parseInt(signal_percentage)

                  return (
                    <tr key={index}>
                      <td className="px-2 whitespace-no-wrap text-center text-black">{data.device_name}</td>
                      <td className="px-2 whitespace-no-wrap text-center text-black">{data.thickness}</td>
                      <td className="px-2 whitespace-no-wrap text-center text-black">
                        {battery_value < 0 ? "0 %" : battery_value > 100 ? "100%" : battery_value + "%"}
                      </td>

                      <td className="px-2 whitespace-no-wrap text-center text-black">{signal_percentage_convert +"%"}</td>
                      <td className="px-2 whitespace-no-wrap text-center text-black">{data.device_status +"℃"}</td>
                      <td className="px-2 whitespace-no-wrap text-center text-black">{data.timestamp}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RTables;
