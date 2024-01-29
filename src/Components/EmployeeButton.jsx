import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function AddEmployee() {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    qualification: "",
    address: "",
    email: "",
    mobileNo: "",
    experience: "",
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:8001/employee", employee);
      setEmployee({})
      
    } catch (error) {
      alert(error.response.data.message)
    } finally { 
      navigate('/employee')
    }
  };

  return (
    <>
      
      <button
        data-modal-target="crud-modal"
        data-modal-toggle="crud-modal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Add Employee
      </button>
      <div
        id="crud-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Add New Employee
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form
              onSubmit={handleSubmit}
              className="p-4 md:p-5 flex flex-col gap-2"
            >
              <label> First Name </label>
              <input
                required
                onChange={handleChange}
                value={employee.firstName}
                name="firstName"
                className="border rounded-sm p-1 border-black"
                placeholder="enter name here"
                type="text"
              />
              <label> Last Name </label>
              <input
                required
                onChange={handleChange}
                value={employee.lastName}
                name="lastName"
                className="border rounded-sm p-1 border-black"
                placeholder="enter lastname here"
                type="text"
              />
              <label> Qualification </label>
              <select
                required
                onChange={handleChange}
                value={employee.qualification}
                name="qualification"
                className="border rounded-sm p-1 border-black"
              >
                <option hidden></option>
                <option>10th</option>
                <option>12th</option>
                <option>Graduation</option>
                <option>Post-Graduation</option>
              </select>
              <label> Address </label>
              <input
                required
                onChange={handleChange}
                value={employee.address}
                name="address"
                className="border rounded-sm p-1 border-black"
                placeholder="enter address here"
                type="text"
              />
              <label> Email </label>
              <input
                required
                onChange={handleChange}
                value={employee.email}
                name="email"
                className="border rounded-sm p-1 border-black"
                placeholder="enter email here"
                type="email"
              />
              <label> Mobile No. </label>
              <input
                required
                onChange={handleChange}
                value={employee.mobileNo}
                name="mobileNo"
                className="border rounded-sm p-1 border-black"
                placeholder="enter no. here"
                type="number"
              />
              <label> Experience </label>
              <input
                required
                onChange={handleChange}
                value={employee.experience}
                name="experience"
                className="border rounded-sm p-1 border-black"
                placeholder="enter exp. here"
                type="text"
              />

              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="me-1 -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Add Employee
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddEmployee;

// const EmployeeButton = () => {
//

//     return (
//       <div className='flex flex-col items-center w-96 border-gray-200 border-2 shadow-lg p-4'>

//           <div> Add an Employee </div>
//           <div>
//           <form className='flex flex-col gap-2' onSubmit={handleSubmit} type="submit">
//   <label > First Name </label>
//   <input onChange={handleChange} value={employee.firstName} name='firstName' className='border rounded-sm p-1 border-black' placeholder='enter name here' type='text' />
//   <label > Last Name </label>
//   <input onChange={handleChange} value={employee.lastName} name='lastName' className='border rounded-sm p-1 border-black' placeholder='enter lastname here' type='text' />
//   <label > Qualification </label>
//   <select onChange={handleChange} value={employee.qualification} name='qualification' className='border rounded-sm p-1 border-black'>
//       <option hidden></option>
//       <option>10th</option>
//       <option>12th</option>
//       <option>Graduation</option>
//       <option>Post-Graduation</option>
//   </select>
//   <label > Address </label>
//   <input onChange={handleChange} value={employee.address} name='address' className='border rounded-sm p-1 border-black' placeholder='enter address here' type='text' />
//   <label > Email </label>
//   <input onChange={handleChange} value={employee.email} name='email' className='border rounded-sm p-1 border-black' placeholder='enter email here' type='email' />
//   <label > Mobile No. </label>
//   <input onChange={handleChange} value={employee.mobileNo} name='mobileNo' className='border rounded-sm p-1 border-black' placeholder='enter no. here' type='number' />
//   <label > Experience </label>
//   <input onChange={handleChange} value={employee.experience} name='experience' className='border rounded-sm p-1 border-black' placeholder='enter exp. here' type='text' />

//               <input className='border cursor-pointer rounded-sm p-1 border-black' type='submit' value='Add' />
//           </form>
//           </div>
//       </div>
//     )
//   }

//   export default EmployeeButton
