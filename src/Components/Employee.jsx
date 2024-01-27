import React from 'react'

const Employee = () => {
  return (
    <div className='flex flex-col items-center w-96 border-gray-200 border-2 shadow-lg p-4'>
        <div> Add an Employee </div>
        <div>
        <form className='flex flex-col gap-2' type="submit"> 
            <label > First Name </label>
            <input className='border rounded-sm p-1 border-black' placeholder='enter name here' type='text' />
            <label > Last Name </label>
            <input className='border rounded-sm p-1 border-black' placeholder='enter lastname here' type='text' />
            <label > Qualification </label>
            <select className='border rounded-sm p-1 border-black'> 
                <option hidden></option>
                <option>10th</option>
                <option>12th</option>
                <option>Graduation</option>
                <option>Post-Graduation</option>
            </select>
            <label > Address </label>
            <input className='border rounded-sm p-1 border-black' placeholder='enter address here' type='text' />
            <label > Email </label>
            <input className='border rounded-sm p-1 border-black' placeholder='enter email here' type='email' />
            <label > Mobile No. </label>
            <input className='border rounded-sm p-1 border-black' placeholder='enter no. here' type='number' />
            <label > Experience </label>
            <input className='border rounded-sm p-1 border-black' placeholder='enter exp. here' type='text' />

            <input className='border rounded-sm p-1 border-black' type='submit' value='Add' /> 
        </form>
        </div>
    </div>
  )
}

export default Employee