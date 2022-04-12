import './CartWidget.css'

const CartWidget = ({quantity})=> {
    return (
        <div className='cart-widget d-flex justify-content-center align-items-center ms-auto'>
            <i className="fa-solid fa-cart-shopping"></i>
            <span className='quantity'>{quantity.lenght == 0 ? '' : quantity}</span>
        </div>
    )
}

export default CartWidget;
