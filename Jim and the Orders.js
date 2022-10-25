function jimOrders(orders){
    let ar = [].concat(...orders)
    const output = []
    for(let i=0;i<ar.length;i+=2){
        output.push(ar[i]+ar[i+1])
    }
    const x = output.slice(0)
    x.sort((a,b)=> a-b)
    const y = x.map((v)=> output.indexOf(v)+1)
    return y;
}
jimOrders([[8, 1],[4, 2],[5, 6],[3, 1],[4, 3]])

function jimOrders(orders) {
 let arr_delivery_time = orders.map((order, index) => {
     return [...order, order[0] + order[1], index + 1]; 
 })
 arr_delivery_time.sort((a, b) => { return a[2] - b[2]; });
 return arr_delivery_time.map((elem) => { return elem[3]; }) }



const nArr = orders.map((Itm,i)=> {
    Itm.push([i+1,Itm[0]+Itm[1]]);
    return Itm;
});
const result = nArr.map(nItm => nItm[2]).sort((a,b)=> a[1]-b[1]).map(resItm=> {
    resItm.pop();
    return resItm;
})
return result;


function jimOrders(orders) {
    // Write your code here
    let delivery = [];
    for(let i = 0; i < orders.length; i++) {
        delivery.push([orders[i][0] + orders[i][1], i + 1]);
    }
    
    delivery.sort((a, b) => a[0] - b[0]);
    
    return delivery.map((value) => value[1]);
}
