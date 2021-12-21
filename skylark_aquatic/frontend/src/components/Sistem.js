/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from 'react'
import axios from "axios";

const Sistem = () => {
    const [dht11, setDht] = useState([]);

    useEffect(() => {
        getDht();
    }, []);

    const getDht = async () => {
        const response = await axios.get('http://localhost:5000/dht11');
        setDht(response.data);
    }

    return (
      <div className='table-responsive-md'>
          <table className="table table-light table-hover mt-2">
              <thead>
                  <tr>
                      <th>No</th>
                      <th>Kelembapan</th>
                      <th>Suhu</th>
                      <th>Tanggal</th>
                  </tr>
              </thead>
              <tbody>
                  { dht11.map((Dht, index) => (
                      <tr key={Dht.id}>
                      <td>{ index + 1}</td>
                      <td>{ Dht.hum }</td>
                      <td>{ Dht.tempe }</td>
                      <td>{ Dht.date}</td>
                  </tr>

                  )) }
                  
              </tbody>
          </table>
      </div>
  )
}

export default Sistem;
