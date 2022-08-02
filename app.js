let wsETH = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@kline_12h/ethusdt@kline_1w/ethusdt@kline_1M/ethusdt@kline_3d/ethusdt@kline_1d/ethusdt@kline_12h/ethusdt@kline_6h/ethusdt@kline_4h/ethusdt@kline_1h');
let stockObject;
let stockObject_k;
let i_1m, i_1w, i_3d, i_1d, i_12h, i_6h, i_4h, i_1h;

wsETH.onmessage = (event) => {
   stockObject = JSON.parse(event.data);
    stockObject_k = stockObject.k

   if(stockObject_k.i === '1M') return  i_1m = stockObject_k
   if(stockObject_k.i === "1w") return   i_1w = stockObject_k
   if(stockObject_k.i === '3d') return  i_3d = stockObject_k
   if(stockObject_k.i === "1d") return   i_1d = stockObject_k
   if(stockObject_k.i === '12h') return  i_12h = stockObject_k
   if(stockObject_k.i === "6h") return   i_6h = stockObject_k
   if(stockObject_k.i === '4h') return  i_4h = stockObject_k
   if(stockObject_k.i === '1h') return  i_1h = stockObject_k
};


let asset = document.getElementById("asset");
let interval = document.getElementById("interval")
let low = document.getElementById("low")
let high = document.getElementById("high")

asset.addEventListener("change", result);
interval.addEventListener("change", result)

function result() {

    if(asset.value === "eth" && interval.value === "1m"){
        high.innerHTML = parseFloat(i_1m.h).toFixed(2);
        low.innerHTML = parseFloat(i_1m.l).toFixed(2);  
    } 

    if(asset.value === "eth" && interval.value === "1w"){
        high.innerHTML = parseFloat(i_1w.h).toFixed(2);
        low.innerHTML = parseFloat(i_1w.l).toFixed(2);
    } 

    if(asset.value === "eth" && interval.value === "3d"){
        high.innerHTML = parseFloat(i_3d.h).toFixed(2);
        low.innerHTML = parseFloat(i_3d.l).toFixed(2);
    } 

    if(asset.value === "eth" && interval.value === "1d"){
        high.innerHTML = parseFloat(i_1d.h).toFixed(2);
        low.innerHTML = parseFloat(i_1d.l).toFixed(2);
    } 
    if(asset.value === "eth" && interval.value === "12h"){
        high.innerHTML = parseFloat(i_12h.h).toFixed(2);
        low.innerHTML = parseFloat(i_12h.l).toFixed(2);
    } 

    if(asset.value === "eth" && interval.value === "6h"){
        high.innerHTML = parseFloat(i_6h.h).toFixed(2);
        low.innerHTML = parseFloat(i_6h.l).toFixed(2);
    } 

    if(asset.value === "eth" && interval.value === "4h"){
        high.innerHTML = parseFloat(i_4h.h).toFixed(2);
        low.innerHTML = parseFloat(i_4h.l).toFixed(2);
    } 

    if(asset.value === "eth" && interval.value === "1h"){
        high.innerHTML = parseFloat(i_1h.h).toFixed(2);
        low.innerHTML = parseFloat(i_1h.l).toFixed(2);
    }
}