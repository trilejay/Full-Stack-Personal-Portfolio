import OrderRow from './OrderRow.jsx';

function OrderPage({products}){
    return (
        <>
            <h2>Order</h2>
            <article>
                <table id="order">
                    <caption>Products for Sale</caption>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Product</th>
                            <th className='price-header'>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                    {products.map((product, i) => 
                        <OrderRow 
                            product={product} 
                            key={i} 
                        />)}
                    </tbody>
                </table>
            </article>
        </>
    )
}
export default OrderPage;