import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
const orderDetails = location.state && location.state.orderDetails;
  // console.log(location.state); 
console.log("order details", orderDetails); 


  const [quantities, setQuantities] = useState({
    shirt: 0,
    pant: 0,
    coat: 0,
  });

  const [selectedOptions, setSelectedOptions] = useState({
    shirt: { wash: false, iron: false, pack: false },
    pant: { wash: false, iron: false, pack: false },
    coat: { wash: false, iron: false, pack: false },
  });

  const [proceedClicked, setProceedClicked] = useState(false);

  const handleQuantityChange = (cloth, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [cloth]: value,
    }));
  };

  const handleOptionToggle = (cloth, option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [cloth]: {
        ...prevOptions[cloth],
        [option]: !prevOptions[cloth][option],
      },
    }));
  };

  const handleReset = (cloth) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [cloth]: 0,
    }));
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [cloth]: { wash: false, iron: false, pack: false },
    }));
  };

  const washCost = 10;
  const ironCost = 5;
  const packCost = 2;

  const calculateTotalCost = (cloth) => {
    let total = 0;

    if (selectedOptions[cloth].wash) {
      total += washCost * quantities[cloth];
    }
    if (selectedOptions[cloth].iron) {
      total += ironCost * quantities[cloth];
    }
    if (selectedOptions[cloth].pack) {
      total += packCost * quantities[cloth];
    }
    return total;
  };

  const totalCostShirt = calculateTotalCost('shirt');
  const totalCostPant = calculateTotalCost('pant');
  const totalCostCoat = calculateTotalCost('coat');
  const handleProceed = () => {
    setProceedClicked(true);
  };

  const generateOrderId = () => {
    return Math.floor(Math.random() * 100000);
  };

  const sendToServer = async () => {
    const formData = {
      ...orderDetails,
      order: {
        shirt: { quantity: quantities.shirt, options: selectedOptions.shirt },
        pant: { quantity: quantities.pant, options: selectedOptions.pant },
        coat: { quantity: quantities.coat, options: selectedOptions.coat },
      },
    };

    const totalBill = totalCostShirt + totalCostPant + totalCostCoat;
    const orderId = generateOrderId();
    console.log('Form Data:', formData);
    console.log('Total Bill:', totalBill);
    console.log('Order ID:', orderId);

    // try {
    //   await axios.post('api call to Google database', { formData, totalBill, orderId });
    //   console.log('Data sent to the server successfully!');
    // } catch (error) {
    //   console.error('Error sending data to the server:', error);
    // }
    navigate('/main');

  };

  return (
    <div className="main-container">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <h1>Order Page</h1>
        <p className="description">
          Wash cost: $10 per cloth, Iron cost: $5 per cloth, Pack cost: $2 per cloth
        </p>
        <table>
          <thead>
            <tr>
              <th>Cloths</th>
              <th>Quantity</th>
              <th>Wash Type</th>
              <th>Price</th>
              <th>Reset</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shirt</td>
              <td>
                <input
                  type="number"
                  value={quantities.shirt}
                  onChange={(e) => handleQuantityChange('shirt', e.target.value)}
                />
              </td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <button
                          onClick={() => handleOptionToggle('shirt', 'wash')}
                          className={selectedOptions.shirt.wash ? 'selected' : ''}
                        >
                          Wash
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => handleOptionToggle('shirt', 'iron')}
                          className={selectedOptions.shirt.iron ? 'selected' : ''}
                        >
                          Iron
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => handleOptionToggle('shirt', 'pack')}
                          className={selectedOptions.shirt.pack ? 'selected' : ''}
                        >
                          Pack
                        </button>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>${totalCostShirt}</td>
              <td>
                <button onClick={() => handleReset('shirt')}>Reset</button>
              </td>
            </tr>
            <tr>
              <td>Pant</td>
              <td>
                <input
                  type="number"
                  value={quantities.pant}
                  onChange={(e) => handleQuantityChange('pant', e.target.value)}
                />
              </td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <button
                          onClick={() => handleOptionToggle('pant', 'wash')}
                          className={selectedOptions.pant.wash ? 'selected' : ''}
                        >
                          Wash
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => handleOptionToggle('pant', 'iron')}
                          className={selectedOptions.pant.iron ? 'selected' : ''}
                        >
                          Iron
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => handleOptionToggle('pant', 'pack')}
                          className={selectedOptions.pant.pack ? 'selected' : ''}
                        >
                          Pack
                        </button>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>${totalCostPant}</td>
              <td>
                <button onClick={() => handleReset('pant')}>Reset</button>
              </td>
            </tr>
            <tr>
              <td>Coat</td>
              <td>
                <input
                  type="number"
                  value={quantities.coat}
                  onChange={(e) => handleQuantityChange('coat', e.target.value)}
                />
              </td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <button
                          onClick={() => handleOptionToggle('coat', 'wash')}
                          className={selectedOptions.coat.wash ? 'selected' : ''}
                        >
                          Wash
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => handleOptionToggle('coat', 'iron')}
                          className={selectedOptions.coat.iron ? 'selected' : ''}
                        >
                          Iron
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => handleOptionToggle('coat', 'pack')}
                          className={selectedOptions.coat.pack ? 'selected' : ''}
                        >
                          Pack
                        </button>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>${totalCostCoat}</td>
              <td>
                <button onClick={() => handleReset('coat')}>Reset</button>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="proceed-button" onClick={() => handleProceed()}>
          Proceed
        </button>

        {proceedClicked && (
          <div className="bill-section">
            <h2>Bill</h2>
            <p>Total Cost Shirt: ${totalCostShirt}</p>
            <p>Total Cost Pant: ${totalCostPant}</p>
            <p>Total Cost Coat: ${totalCostCoat}</p>
            <p>Total Bill: ${totalCostShirt + totalCostPant + totalCostCoat}</p>

            <button className="confirm-button" onClick={() => sendToServer()}>
              Confirm
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
