import Actions from "../../../layouts/adminLayouts/Actions/Actions";
import Content from "../../../layouts/adminLayouts/Content/Content";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import Order from "../../../admin/Order/Order";
import { Order as OrderTypes } from "../../../../types/common";
import Card from "../../../UI/Card/Card";
import Loader from "../../../UI/Loader/Loader";
import Placeholder from "../../../UI/Placeholder/Placeholder";
import { NO_ORDERS } from "../../../../constants/messages";
import { useEffect, useState } from "react";
import classes from "../../../UI/BaseLink/BaseLink.module.css";

const OrdersPage: React.FC = () => {
  const { orders, isLoading } = useSelector((state: RootState) => state.common);
  const [sortType, setSortType] = useState("old");
  const [ordersCopy, setOrdersCopy] = useState<OrderTypes[]>();

  const changeSortType = () => {
    setSortType(sortType === "old" ? "new" : "old");
    setOrdersCopy(ordersCopy?.reverse());
  };

  useEffect(() => {
    if (orders.length !== 0) {
      setOrdersCopy([...orders]);
    }
  }, [orders]);

  return (
    <>
      <Actions title={"Заказы"} />
      <Content>
        <>
          {isLoading && <Loader />}
          {!isLoading && (
            <Card fullWidth>
              <>
                <button
                  className={`${classes.link} ${classes.button} ${classes["m"]}`}
                  onClick={changeSortType}
                >
                  {sortType === "old"
                    ? "Сначала старые заказы ↓"
                    : "Сначала новые заказы ↑"}
                </button>
                <table>
                  <thead>
                    <tr>
                      <th>Дата</th>
                      <th>Покупатель</th>
                      <th>Телефон</th>
                      <th>Адрес</th>
                      <th>Сумма</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.length === 0 && (
                      <tr>
                        <td colSpan={6}>
                          <Placeholder text={NO_ORDERS} />
                        </td>
                      </tr>
                    )}

                    {ordersCopy?.map(
                      ({
                        user,
                        totalPrice,
                        totalWeight,
                        totalDiscount,
                        cart,
                        timestamp,
                        id,
                      }) => (
                        <Order
                          user={user}
                          cart={cart}
                          totalPrice={totalPrice}
                          timestamp={timestamp}
                          key={id}
                          totalWeight={totalWeight}
                          totalDiscount={totalDiscount}
                        />
                      )
                    )}
                  </tbody>
                </table>
              </>
            </Card>
          )}
        </>
      </Content>
    </>
  );
};

export default OrdersPage;
