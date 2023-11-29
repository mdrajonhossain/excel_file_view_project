import './App.css';
import { useState } from 'react';


const App = () => {
  const [formview, setFormview] = useState(false);
  const [formdata, setFormdata] = useState([]);


  const datalist = [
    { id: 1, name: "Gross Premium", a: "Fire", b: "Marine (Cargo)", c: "Marine (Hull)", d: " Motor", e: "Micellaneous" },
    { id: 2, name: "Re-Insurance Premium paid", a: "Fire", b: "Marine (Cargo)", c: "Marine (Hull)", d: " Motor", e: "Micellaneous" },
    { id: 3, name: "Net Premium (1-2)", a: "Fire", b: "Marine (Cargo)", c: "Marine (Hull)", d: " Motor", e: "Micellaneous" },
    { id: 4, name: "Re-Insurance Premium payable of Sadharan Bima", a: "Opening Balance of payable as on beginning the quarter", b: "Addition during the quarter", c: "Re-Insurance Premium Paid or adjustment made during the quarter", d: " Closing balance of Re insurance Payable as at end of the quarter" },
    {
      id: 5,
      name: "Re-Insurance Premium payable  of others reinsurers:",
      a: " Opening Balance of ReInsurance premium payable as on beginning of the quarter",
      b: "Marine (Cargo)", c: "Marine (Hull)",
      d: " Motor",
      e: "Micellaneous"
    },
    {
      id: 6,
      name: "Total Re Insurance Payable as at end of the quarter  (4(iv)+5(iv))"
    },
    {
      id: 7,
      name: "Re-Insurance / Co Insurance Receivable at end of the quarter:",
      a: "Re-Insurance Claims amount receivable from SBC as at end of the quarter",
      b: "Re-Insurance Claims amount receivable from Others as at end of the quarter",
      d: " Co Insurance premium receivable as at end of the quarter"
    },
    {
      id: 8,
      name: "Number of Policy (With Cover note) issued during the quarter :",
      a: "Fire", b: "Marine (Cargo)", c: "Marine (Hull)", d: " Motor", e: "Micellaneous"
    }


  ]

  const viewfrom = (index, e) => {
    console.log(index);
    setFormdata(e)
    setFormview(true);
  }


  return (
    <div className="pl-20 pr-20">
      {formview &&
        <div className="popup-container rounded-md bg-gray-500">
          <div className="close-btn text-white absolute right-2 top-0" onClick={() => setFormview(false)}>&times;</div>

          <div className="popup-content p-2">
            <span className='text-white text-md text-2xl'>{formdata[0].name + "(" + formdata[1] + ")"}</span>
            <br />
            <br />
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/4 px-3">
                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2">Previous Year</label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
              </div>

              <div class="w-full md:w-1/4 px-3">
                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2">January-March 2023(1st)</label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
              </div>

              <div class="w-full md:w-1/4 px-3">
                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2">April-June-2023(2nd)</label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
              </div>

              <div class="w-full md:w-1/4 px-3 mb-5">
                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2">July-September-2023(3rd)</label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
              </div>

              <div class="w-full md:w-1/4 px-3">
                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2">October-December-2023(4th)</label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
              </div>

              <div class="w-full md:w-1/4 px-3">
                <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2">Current Year(2023)</label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
              </div>

            </div>

            <center>
              <button class="bg-blue-500 item-center w-[200px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
            </center>

          </div>
        </div>
      }


      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <div className='text-center p-2 text-xl text-black-800'>FORMAT FOR NON- LIFE INSURANCE</div>
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th className='text-center bg-gray-50 border border-gray-400' rowspan="2">Particulars</th>
                    <th className='text-center bg-gray-50 p-2 border border-gray-400'>Audited</th>
                    <th colspan="5" className='text-center bg-gray-50 p-2 border border-gray-400'>Unaudited</th>
                  </tr>
                  <tr>
                    <th scope="col" class="text-center bg-gray-50 border border-gray-400">Previous Year(2022)</th>
                    <th scope="col" class="text-center bg-gray-50 border border-gray-400">January-March-2023(1st-Q)</th>
                    <th scope="col" class="text-center bg-gray-50 border border-gray-400">April-June-2023 (2nd-Q)</th>
                    <th scope="col" class="text-center bg-gray-50 border border-gray-400">July-September-2023(3rd-Q)</th>
                    <th scope="col" class="text-center bg-gray-50 border border-gray-400">October-December-2023(4th-Q)</th>
                    <th scope="col" class="text-center bg-gray-50 border border-gray-400">Current-Year(2023)</th>
                  </tr>
                </thead>

                <tbody>
                  {datalist.map((data, index) => {
                    return (
                      <tr class="border-b dark:border-neutral-500" key={index}>
                        <td class="whitespace-wrap">
                          <div className='p-2 font-bold'>{index + 1 + ") " + data.name}</div>
                          <div className='appearance-none mb-1 block py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer' onClick={() => viewfrom(index, [data, data.a])}>{data.a}</div>
                          <div className='appearance-none mb-1 block py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer' onClick={() => viewfrom(index, [data, data.b])}>{data.b}</div>
                          <div className='appearance-none mb-1 block py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer' onClick={() => viewfrom(index, [data, data.c])}>{data.c}</div>
                          <div className='appearance-none mb-1 block py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer' onClick={() => viewfrom(index, [data, data.d])}>{data.d}</div>
                          <div className='appearance-none mb-1 block py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer' onClick={() => viewfrom(index, [data, data.e])}>{data.e}</div>
                        </td>

                        <td class="whitespace-nowrap">
                          <div class="appearance-none mb-1 block w-full bg-green-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer">Total</div>
                          {data.a &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.b &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.c &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.d &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.e &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                        </td>

                        <td class="whitespace-nowrap">
                          <div class="appearance-none mb-1 block w-full bg-green-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer">Total</div>
                          {data.a &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.b &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.c &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.d &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.e &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                        </td>


                        <td class="whitespace-nowrap">
                          <div class="appearance-none mb-1 block w-full bg-green-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer">Total</div>
                          {data.a &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.b &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.c &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.d &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.e &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                        </td>


                        <td class="whitespace-nowrap">
                          <div class="appearance-none mb-1 block w-full bg-green-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer">Total</div>
                          {data.a &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.b &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.c &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.d &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.e &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                        </td>


                        <td class="whitespace-nowrap">
                          <div class="appearance-none mb-1 block w-full bg-green-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer">Total</div>
                          {data.a &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.b &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.c &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.d &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.e &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                        </td>

                        <td class="whitespace-nowrap ">
                          <div class="appearance-none mb-1 block w-full bg-green-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer">Total</div>
                          {data.a &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.b &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.c &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.d &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
                          }
                          {data.e &&
                            <input class="appearance-none mb-1 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" />
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

      <br />
      <br />
      <br />


      {/* {datalist.map((data, index) => {
        return (
          <div key={index} className='w-auto'>
            <div className='p-2 font-bold'>{index + 1 + ") " + data.name}</div>
            <div className='pl-5 cursor-pointer hover:bg-gray-200' onClick={() => viewfrom(index, [data, data.a])}>{data.a}</div>
            <div className='pl-5 cursor-pointer hover:bg-gray-200' onClick={() => viewfrom(index, [data, data.b])}>{data.b}</div>
            <div className='pl-5 cursor-pointer hover:bg-gray-200' onClick={() => viewfrom(index, [data, data.c])}>{data.c}</div>
            <div className='pl-5 cursor-pointer hover:bg-gray-200' onClick={() => viewfrom(index, [data, data.d])}>{data.d}</div>
            <div className='pl-5 cursor-pointer hover:bg-gray-200' onClick={() => viewfrom(index, [data, data.e])}>{data.e}</div>
          </div>
        )
      })} */}


    </div>
  );
}

export default App;
