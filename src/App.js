import './App.css';
import { useState } from 'react';
import datalist from './database';
import { MdModeEdit } from "react-icons/md";


const App = () => {
  const [formview, setFormview] = useState(false);

  const [formedit, setFormedit] = useState(false);
  const [namea, setNamea] = useState([]);



  const [formdata, setFormdata] = useState([]);

  const [listdata, setListdata] = useState(datalist);
  const [inputValues, setInputValues] = useState({});



  const viewfrom = (index, e) => {
    console.log(e);
    setFormdata(e)
    setFormview(true);
  }


  const editname = (e) => {
    setFormedit(true);
    setNamea(e);
  }


  const handleInputChange = (key, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [key]: value,
    }));
  };



  return (
    <div className="pl-20 pr-20">

      {formedit &&
        <div className='popup-edit bg-gray-800 rounded-md'>
          <div className="close-btn text-white absolute right-2 top-0" onClick={() => setFormedit(false)}>&times;</div>

          <div className='p-5'>
            {Object.keys(namea).map((key) => (
              <div key={key}>
                {key !== 'id' && (
                  <>
                    <label className="block text-white text-xl font-bold mb-2">{key}. </label>
                    <input
                      value={inputValues[key] || namea[key]}
                      onChange={(e) => handleInputChange(key, e.target.value)}
                      className="w-full p-2" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      }




      {formview &&
        <div className="popup-container rounded-md bg-gray-800">
          <div className="close-btn text-white absolute right-2 top-0" onClick={() => setFormview(false)}>&times;</div>

          <div className="popup-content p-2">
            <span className='text-white text-md text-2xl'>{formdata[0].name + "(" + formdata[1] + ")"}</span>
            <br />
            <br />
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/4 px-3">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">Previous Year</label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
              </div>

              <div className="w-full md:w-1/4 px-3">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">January-March 2023(1st)</label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
              </div>

              <div className="w-full md:w-1/4 px-3">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">April-June-2023(2nd)</label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
              </div>

              <div className="w-full md:w-1/4 px-3 mb-5">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">July-September-2023(3rd)</label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
              </div>

              <div className="w-full md:w-1/4 px-3">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">October-December-2023(4th)</label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
              </div>

              <div className="w-full md:w-1/4 px-3">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">Current Year(2023)</label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
              </div>
            </div>
            <center>
              <button className="bg-blue-500 item-center w-[200px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
            </center>

          </div>
        </div>
      }


      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <div className='text-center p-2 text-xl text-black-800'>FORMAT FOR NON- LIFE INSURANCE</div>
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th className='text-gray-500 text-center bg-gray-50 border border-gray-300' rowSpan="2">Particulars</th>
                    <th className='text-gray-500 text-center bg-gray-50 p-2 border border-gray-300'>Audited</th>
                    <th colSpan="5" className='text-gray-500 text-center bg-gray-50 p-2 border border-gray-300'>Unaudited</th>
                  </tr>
                  <tr>
                    <th className="text-gray-500 text-center bg-gray-50 border border-gray-300">Previous Year(2022)</th>
                    <th className="text-gray-500 text-center bg-gray-50 border border-gray-300">January-March-2023(1st-Q)</th>
                    <th className="text-gray-500 text-center bg-gray-50 border border-gray-300">April-June-2023 (2nd-Q)</th>
                    <th className="text-gray-500 text-center bg-gray-50 border border-gray-300">July-September-2023(3rd-Q)</th>
                    <th className="text-gray-500 text-center bg-gray-50 border border-gray-300">October-December-2023(4th-Q)</th>
                    <th className="text-gray-500 text-center bg-gray-50 border border-gray-300">Current-Year(2023)</th>
                  </tr>
                </thead>

                <tbody>
                  {listdata.map((data, index) => {
                    return (
                      <tr className="border-b dark:border-neutral-500" key={index}>
                        <td className="whitespace-wrap">
                          <div className='p-2 font-bold flex cursor-cell' onClick={() => editname(data)}><MdModeEdit size={20} /> &nbsp; {index + 1 + ") " + data.name}</div>
                          <div className='appearance-none mb-1 block py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer' onClick={() => viewfrom(index, [data, data.a])}>{data.a}</div>
                          <div className='appearance-none mb-1 block py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer' onClick={() => viewfrom(index, [data, data.b])}>{data.b}</div>
                          <div className='appearance-none mb-1 block py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer' onClick={() => viewfrom(index, [data, data.c])}>{data.c}</div>
                          <div className='appearance-none mb-1 block py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer' onClick={() => viewfrom(index, [data, data.d])}>{data.d}</div>
                          <div className='appearance-none mb-1 block py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer' onClick={() => viewfrom(index, [data, data.e])}>{data.e}</div>
                        </td>

                        <td className="whitespace-nowrap">
                          <div className="appearance-none mb-1 block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer">Total</div>
                          {data.a &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.b &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.c &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.d &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.e &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                        </td>

                        <td className="whitespace-nowrap">
                          <div className="appearance-none mb-1 block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer">Total</div>
                          {data.a &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.b &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.c &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.d &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.e &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                        </td>


                        <td className="whitespace-nowrap">
                          <div className="appearance-none mb-1 block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer">Total</div>
                          {data.a &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.b &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.c &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.d &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.e &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                        </td>

                        <td className="whitespace-nowrap">
                          <div className="appearance-none mb-1 block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer">Total</div>
                          {data.a &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.b &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.c &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.d &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.e &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                        </td>


                        <td className="whitespace-nowrap">
                          <div className="appearance-none mb-1 block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer">Total</div>
                          {data.a &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.b &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.c &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.d &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.e &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                        </td>

                        <td className="whitespace-nowrap">
                          <div className="appearance-none mb-1 block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer">Total</div>
                          {data.a &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.b &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.c &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.d &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.e &&
                            <input className="appearance-none mb-1 block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                        </td>

                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
