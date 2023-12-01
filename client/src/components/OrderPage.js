import React from 'react';
import { Link } from 'react-router-dom';

const OrderPage = () => {
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
              <td>0</td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>Wash</td>
                      <td>Iron</td>
                      <td>Pack</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>0</td>
              <td>
                <button>Reset</button>
              </td>
            </tr>
            <tr>
              <td>Pant</td>
              <td>0</td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>Wash</td>
                      <td>Iron</td>
                      <td>Pack</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>0</td>
              <td>
                <button>Reset</button>
              </td>
            </tr>
            <tr>
              <td>Coat</td>
              <td>0</td>
              <td>
                <table>
                  <tbody>
                    <tr>
                    <td>Wash</td>
                      <td>Iron</td>
                      <td>Pack</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>0</td>
              <td>
                <button>Reset</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderPage;
