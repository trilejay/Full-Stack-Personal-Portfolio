import OrderQuantity from "./OrderQuantity";

function OrderRow({product}){
    return (
        <tr>
            <td>{product.company}</td>
            <td>{product.product}</td>
            <td className="price-column">{product.price.toLocaleString('en-US',{style: 'currency',currency: 'USD', minimumFractionDigits: 2})}</td>
            <td>{<OrderQuantity/>}</td>
        </tr>
    );
}
export default OrderRow;