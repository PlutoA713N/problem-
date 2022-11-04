function pageCount(n, p) {
    // Write your code here
let total_pages = Math.floor(n/2);
let front = Math.floor(p/2)
return Math.min(front,total_pages-front)
}
