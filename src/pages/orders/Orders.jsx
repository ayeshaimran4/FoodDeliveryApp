import React,{useState} from "react";
import useOrders from "../../hooks/useOrders";
import "./orders.css";
import Loading from "../../Components/Loading/Loading";
import ReviewModal from "../../Components/ReviewModal/ReviewModal";

const Orders = () => {
  const { orders, loading } = useOrders();
  const [showModal, setShowModal] = useState(false);

  console.log("Orders:", orders);
  const flatOrders = orders.flat();
  if (loading) {
    return <Loading />;
  }

  return (
    <>
    <div className="order-container">
      <h1 className="order-head">Orders</h1>
      {Array.isArray(flatOrders) && flatOrders.length > 0 ? (
        flatOrders.map((order) =>
          order && typeof order === "object" ? ( //  order is an object
            <div key={order.id} className="order-item">
              <h2>Order: {order.id}</h2>
              <p>
                <strong>Total Amount:</strong> Rs. {order.totalAmount}
              </p>
              <p className="status1">{order.status}</p>
              <ul>
                {order.items &&
                  order.items.map(
                    (
                      item // items is an array
                    ) => (
                      <li key={item.id}>
                        {item.name} (x{item.quantity}) - Rs. {item.price}
                      </li>
                    )
                  )}
              </ul>
            </div>
          ) : null
        )
      ) : (
        <p className="para2">Place your Order.😀</p>
      )}
        
    </div>
   
     <p
     onClick={() => setShowModal(true)}
     className="btn-submit-review" >Get Support  </p>
   {showModal && (
     <ReviewModal closeModal={() => setShowModal(false)} />
   )}
   </>
  );
};

export default Orders;
