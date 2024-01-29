import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";

const ShowEmployee = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [data]);

  const getData = async () => {
    await axios
      .get("http://localhost:8001/showemployee")
      .then((e) => setData(e.data));
  };

  const handleLogout = () => {
    localStorage.removeItem("login");
    navigate("/");
  };
  const handleEdit = async (id) => {
    try {
      // await axios.put("http://localhost:8001/editemployee/" + id);
      navigate('/addemployee',id)
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8001/deleteemployee/${id}`)
    .then(res=>console.log(res))
    .catch(error=> {
      console.log(error)
    })
  };

  return (
    <div>
      <div className="flex flex-row gap-80 mb-10">
        <div> Welcome Page !! </div>
        <Link
          className="bg-blue-700 p-2 text-white rounded-lg px-4"
          to={"/addemployee"}
        >
          Add Employee
        </Link>
        <button
          className="bg-blue-700 p-2 text-white rounded-lg px-4"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      {data.map((item) => {
        return (
          <Table
            className="text-justify w-full border-collapse border border-slate-500"
            striped
            bordered
            hover
            key={item._id}
          >
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Qualification</th>
                <th>Address</th>
                <th>Email</th>
                <th>Mobile No.</th>
                <th>Experience</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.qualification}</td>
                <td>{item.address}</td>
                <td>{item.email}</td>
                <td>{item.mobile_no}</td>
                <td>{item.experience}</td>
                <td className="flex gap-2">
                  <span
                    className="cursor-pointer"
                    onClick={() => handleEdit(item._id)}
                  >
                    ✏️
                  </span>
                  <span
                    className="cursor-pointer"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </span>
                </td>
              </tr>
            </tbody>
          </Table>
        );
      })}
    </div>
  );
};

export default ShowEmployee;
