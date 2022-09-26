function circularArrayRotation(a,k, queries){
    return queries.map(value => a.reduce((target, item, index) => {
        let focus = (index + k) % a.length;
        target[focus] = item;

        return target;
    }, [])[value]);
}
circularArrayRotation([1,2,3],2,[0,1,2]);
