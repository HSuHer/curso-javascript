const calcularPrecioConDescuento = (precio,descuento)=>{
    const porcentajePrecioConDescuento = 100-descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
};

const onClickButtonPriceDiscount=()=>{
    const InputPrice = document.getElementById("InputPrice");
    const coupons = document.getElementById("coupons");
    const priceValue=Number(InputPrice.value);
    const discountValue=Number(coupons.value);
    const precioConDescuento=calcularPrecioConDescuento(priceValue,discountValue);
    const resulP=document.getElementById("ResultPrice");
    resulP.innerText =`El precio con descuento son: ${precioConDescuento}`;
}


const coupons = [
    {
        name: "BLACK FRIDAY",
        discount: 15,
    },
    {
        name: "BUEN FIN",
        discount: 30,
    },
    {
        name: "PRIME DAY",
        discount: 25,
    },
];

if(coupons.length>0){
    let selectCoupons=document.getElementById("coupons");
    for (let coupon of coupons){
        let option=document.createElement("option");
        option.setAttribute("value",coupon.discount);
        option.textContent=coupon.name;
        selectCoupons.append(option);
    }
}