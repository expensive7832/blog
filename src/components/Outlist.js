import { useEffect, useState } from "react";
import { FaCalendarAlt, FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import Posts from "./Posts";

function Outlist() {
  const [time, settime] = useState(new Date().toLocaleTimeString());

 useEffect(() => {
   setInterval(() => {
     settime(new Date().toLocaleTimeString());
   }, 10000);  
}, [])

  return (
    <div className="outlist">
      <div className="container-fluid">
        <div className="row">
          <div className="card">
            <div className="card-header text-center px-5">
              <div className="card-stool">
                <div className="d-flex justify-content-center align-items-center">
                  <small className="pe-2"><FaCalendarAlt style={{ marginRight: ".3rem" }} />{new Date().toDateString()}</small>
                  <small className=""><FaRegClock style={{ marginRight: ".6rem" }} />{time}</small>
                </div>
              </div>

              <div className="blog-catalogue mt-3 m-auto">
                <div className="table-responsive">
                <table className="table">
                  <th>
                    <p>
                      <Link className="px-2" to="politics">
                        Politics
                      </Link>
                    </p>
                  </th>
                  <th>
                    <p>
                      <Link className="px-2" to="">
                        Education
                      </Link>
                    </p>
                  </th>
                  <th>
                    <p>
                      <Link className="px-2" to="">
                        Sport
                      </Link>
                    </p>
                  </th>
                  <th>
                    <p>
                      <Link className="px-2" to="">
                        EnterTainment
                      </Link>
                    </p>
                  </th>
                  <th>
                    <p>
                      <Link className="px-2" to="">
                        Education
                      </Link>
                    </p>
                  </th>
                  <th>
                    <p>
                      <Link className="px-2" to="">
                        Politics
                      </Link>
                    </p>
                  </th>
                  <th>
                    <p>
                      <Link className="px-2" to="">
                        Sport
                      </Link>
                    </p>
                  </th>
                  <th>
                    <p>
                      <Link className="px-2" to="">
                        EnterTainment
                      </Link>
                    </p>
                  </th>
                </table>
                </div>
              </div>
            </div>

            <div className="card-body">
              <div className="container w-75">
                <Posts/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Outlist;
