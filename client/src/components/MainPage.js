import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';  

const MainPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const orderDetails = location.state && location.state.orderDetails;
    console.log('Order Details:', orderDetails);
    const [orders, setOrders] = useState([]);
    // useEffect(() => {
    //     const fetchOrders = async () => {
    //         try {
    //             console.log('came inside try block');
    //             const response = await axios.get('api endpoint to fetch orders');
    //             const fetchedOrders = response.data; 
    //             setOrders(fetchedOrders);
    //         } catch (error) {
    //             console.error('Error fetching orders:', error);
    //         }
    //     };
    //     fetchOrders();
    // }, []); 
    useEffect(() => {
        const hardcodedOrders = [
            { orderId: 12345, googleId: 'sho@gmai.com', name: 'Sho ', totalPrice: 50 },
            { orderId: 15644, googleId: 'yi@gmail.com', name: 'Yi', totalPrice: 32 },
            { orderId: 53545, googleId: 'sui@gmail.com', name: 'Sufi', totalPrice: 10 },
        ];
        setOrders(hardcodedOrders);
    }, []); 

    const handleClick = () => {
        navigate('/order', { state: { orderDetails } });
    };

    const handleDelete = async (orderId) => {
        // try {
        //     await axios.delete(`delete api endpoint/${orderId}`);
        //     setOrders((prevOrders) => 
        //      prevOrders.filter((order) => order.orderId !== orderId));
        // } catch (error) {
        //     console.error('Error canceling order:', error);
        // }
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
                <h1>Main Page</h1>

                <h2>Order List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Google ID</th>
                            <th>Name</th>
                            <th>Total Price</th>
                            <th>Delete Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.orderId}>
                                <td>{order.orderId}</td>
                                <td>{order.googleId}</td>
                                <td>{order.name}</td>
                                <td>${order.totalPrice}</td>
                                <td>
                                    <button onClick={handleDelete}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="center-button" onClick={handleClick}>
                    Create
                </button>
            </div>
        </div>
    );
};

export default MainPage;







