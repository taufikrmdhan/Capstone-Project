import { useState, useEffect } from 'react'
import axios from "axios";

const Sistem = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        const response = await axios.get('http://localhost:5000/products');
        setProduct(response.data);
    }

    return (
<div className="container">
<p class="karel">Daftar Ikan Channa</p>

<div class="hahaha">
    <p>
      list log sensor pH
    </p>
    <ul>
      <li>23/05/2021 -jam 08:00</li>
      <p>
        5 pH
      </p>
      <li>23/05/2021 -jam 08:10</li>
      <p>
        6 pH
      </p>
      <li>23/05/2021 -jam 08:20</li>
      <p>
        4 pH
      </p>
    </ul>
  </div>
</div>
    )
}

export default Sistem
