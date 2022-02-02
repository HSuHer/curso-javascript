const calcularPrecioConDescuento = (precio,descuento)=>{
    const porcentajePrecioConDescuento = 100-descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
};

const onClickButtonPriceDiscount=()=>{
    const InputPrice = document.getElementById("InputPrice");
    const InputDiscount = document.getElementById("InputDiscount");
    const priceValue=Number(InputPrice.value);
    const discountValue=Number(InputDiscount.value);
    const precioConDescuento=calcularPrecioConDescuento(priceValue,discountValue);
    const resulP=document.getElementById("ResultPrice");
    resulP.innerText =`El precio con descuento son: ${precioConDescuento}`;
}

