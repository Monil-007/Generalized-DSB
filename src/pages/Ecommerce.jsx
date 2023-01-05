import React, { useState } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
// import Carousel from 'flat-carousel';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import sl1 from "../data/sl1.jpg";
import sl2 from "../data/sl2.jpg";
import sl3 from "../data/sl3.jpg";
import Webcam from 'react-webcam'
const WebcamComponent = () => <Webcam />
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: 'user',
}

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Ecommerce = () => {
  const [picture, setPicture] = useState('')
  const webcamRef = React.useRef(null)
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot()
    setPicture(pictureSrc)
  })
  const { currentColor, currentMode } = useStateContext();
  const liveFeed = [
    { lf: 'Garbage under scanning' },
    { lf: 'found few potential metals' },
    { lf: 'ML determined the final metals to be extracted' },
    { lf: 'The Metlas are: xyz,xyz,xyz' }
  ];
  const caroStyle = {
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    textAlign: "center"
  }
  return (
    <div className="mt-24">

      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: "38%" }}>
        <div>
          {picture == '' ? (
            <Webcam
              audio={false}
              height={400}
              ref={webcamRef}
              width={400}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          ) : (
            <img src={picture} />
          )}
        </div>
        <div style={{ marginLeft: "20%" }}>
          {picture != '' ? (
            <button
              onClick={(e) => {
                e.preventDefault()
                setPicture()
                window.location.reload();
              }}
              className="btn btn-primary"
              style={{ backgroundColor: "orange", borderRadius: "16%", marginBottom: "13px", marginTop: "13px" }}
            >
              Retake
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault()
                capture()
              }}
              className="btn btn-success"
              style={{ backgroundColor: "limegreen", borderRadius: "16%", marginBottom: "13px", marginTop: "13px" }}>
              Capture
            </button>
          )}
        </div>
        <div style={{ marginLeft: "18%" }}><button type="button" href="https://mlcrats-yolov5-e-waste-detection-app-ffzm7i.streamlit.app/" target="_blank" class="btn btn-success" style={{ backgroundColor: "limegreen", borderRadius: "16%" }}>Submit Input</button></div>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Metals Revenue</p>
              <p className="text-2xl">$8,328.53</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="justify-center">
        {/* <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className=" border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">$48,487</p>

                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine currentColor={currentColor} id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor} />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked currentMode={currentMode} width="320px" height="360px" />
            </div>
          </div>
        </div> */}
        {/* <Carousel> flex gap-10 flex-wrap
          {liveFeed.map((i, index) => (
            <div
              key={index}
              className="demo-item"
              style={{ backgroundColor: 'aquamarine' }}
            >
              {i.lf}
            </div>
          ))}
        </Carousel> */}
        <h3 style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', color: 'Orange', fontSize: '60px' }}>Live Feed</h3>
        <div className="carousel-wrapper flex mx-auto w-82% rounded-md h-400 text-orange-800">
          <Carousel infiniteLoop useKeyboardArrows autoPlay>
            <div className="flex items-center justify-center mt-12">
              <a className="relative block w-1/4 bg-gray-900 group" href="##">
                <img className="absolute inset-0 object-cover 
                                        w-full h-full group-hover:opacity-50" src={sl1} />
                <div className="relative p-5">
                  <div className="mt-40">
                    <div className="transition-all transform 
                                        translate-y-8 opacity-0 
                                        group-hover:opacity-100 
                                        group-hover:translate-y-0">
                      <div className="p-2">
                        <p className="text-lg text-green">
                          Metal image input taken
                        </p>
                        {/* <button className="px-4 py-2 text-sm 
                                                    text-white bg-green-600">
                          Visit site
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="flex items-center justify-center mt-12">
              <a className="relative block w-1/4 bg-gray-900 group" href="##">
                <img className="absolute inset-0 object-cover 
                                        w-full h-full group-hover:opacity-50" src={sl2} />
                <div className="relative p-5">
                  <div className="mt-40">
                    <div className="transition-all transform 
                                        translate-y-8 opacity-0 
                                        group-hover:opacity-100 
                                        group-hover:translate-y-0">
                      <div className="p-2">
                        <p className="text-lg text-green">
                          ML algos running
                        </p>
                        {/* <button className="px-4 py-2 text-sm 
                                                    text-white bg-green-600">
                          Visit site
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="flex items-center justify-center mt-12">
              <a className="relative block w-1/4 bg-gray-900 group" href="##">
                <img className="absolute inset-0 object-cover 
                                        w-full h-full group-hover:opacity-50" src={sl3} />
                <div className="relative p-5">
                  <div className="mt-40">
                    <div className="transition-all transform 
                                        translate-y-8 opacity-0 
                                        group-hover:opacity-100 
                                        group-hover:translate-y-0">
                      <div className="p-2">
                        <p className="text-lg text-green">
                          Metals to be extracted are determined
                        </p>
                        {/* <button className="px-4 py-2 text-sm 
                                                    text-white bg-green-600">
                          Visit site
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </Carousel>
        </div>
        {/* <div className="carousel-wrapper" style={{ display: "flex", margin: "auto", width: "82%", backgroundImage: { sl2 }, justifyContent: "center", borderRadius: "25px", height: "300px", backgroundColor: "#00FFFF", color: "orange" }}>
          
          <Carousel infiniteLoop useKeyboardArrows autoPlay>

            <div style={{ backgroundImage: "sl1.jpg" }}>
              Potential garbage under scanning
            </div>
       
            <div style={{ backgroundImage: "sl2.jpg" }}>
              ML models determined the final metals to be extracted
            </div>
            <div style={{ backgroundImage: "sl3.jpg" }}>
              The metals are: xyz,xyz,xyz
            </div>
          </Carousel>
        </div> */}
        <br></br>
        <div style={{ display: "flex", marginLeft: "390px" }}>
          <div
            className=" rounded-2xl md:w-400 p-4 m-3"
            style={{ backgroundColor: currentColor }}
          >
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white text-xl">Metal extracted worth</p>

              <div>
                <p className="text-2xl text-white font-semibold mt-8">$6,448.78</p>

              </div>
            </div>

            <div className="mt-4">
              <SparkLine currentColor={currentColor} id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </div>
          </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold ">2,146</p>
              <p className="text-gray-400">Metal extracted</p>
            </div>

            <div className="w-40">
              <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Recent Transactions</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="mt-10 w-72 md:w-400">
            {recentTransactions.map((item) => (
              <div key={item.title} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button
                color="white"
                bgColor={currentColor}
                text="Add"
                borderRadius="10px"
              />
            </div>

            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
          <div className="flex justify-between items-center gap-2 mb-10">
            <p className="text-xl font-semibold">Sales Overview</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="md:w-full overflow-auto">
            <LineChart />
          </div>
        </div>
      </div> */}

      {/* <div className="flex flex-wrap justify-center">
        <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Weekly Stats</p>
            <button type="button" className="text-xl font-semibold text-gray-500">
              <IoIosMore />
            </button>
          </div>

          <div className="mt-10 ">
            {weeklyStats.map((item) => (
              <div key={item.title} className="flex justify-between mt-4 w-full">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{ background: item.iconBg }}
                    className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>

                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
            <div className="mt-4">
              <SparkLine currentColor={currentColor} id="area-sparkLine" height="160px" type="Area" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </div>
          </div>

        </div>
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">MedicalPro Branding</p>
            <button type="button" className="text-xl font-semibold text-gray-400">
              <IoIosMore />
            </button>
          </div>
          <p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-10">
            16 APR, 2021
          </p>

          <div className="flex gap-4 border-b-1 border-color mt-6">
            {medicalproBranding.data.map((item) => (
              <div key={item.title} className="border-r-1 border-color pr-4 pb-2">
                <p className="text-xs text-gray-400">{item.title}</p>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="border-b-1 border-color pb-4 mt-2">
            <p className="text-md font-semibold mb-2">Teams</p>

            <div className="flex gap-4">
              {medicalproBranding.teams.map((item) => (
                <p
                  key={item.name}
                  style={{ background: item.color }}
                  className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-2">
            <p className="text-md font-semibold mb-2">Leaders</p>
            <div className="flex gap-4">
              {medicalproBranding.leaders.map((item, index) => (
                <img key={index} className="rounded-full w-8 h-8" src={item.image} alt="" />
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button
                color="white"
                bgColor={currentColor}
                text="Add"
                borderRadius="10px"
              />
            </div>

            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          </div>
        </div>
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Daily Activities</p>
            <button type="button" className="text-xl font-semibold text-gray-500">
              <IoIosMore />
            </button>
          </div>
          <div className="mt-10">
            <img
              className="md:w-96 h-50 "
              src={product9}
              alt=""
            />
            <div className="mt-8">
              <p className="font-semibold text-lg">React 18 coming soon!</p>
              <p className="text-gray-400 ">By Johnathan Doe</p>
              <p className="mt-8 text-sm text-gray-400">
                This will be the small description for the news you have shown
                here. There could be some great info.
              </p>
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Read More"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Ecommerce;
