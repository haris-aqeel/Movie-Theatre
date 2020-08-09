function totalSeats() {

    let total = localStorage.getItem('drillisCount') + localStorage.getItem('homeAloneCount') + localStorage.getItem('mammaCount') + 
    localStorage.getItem('osmanCount') + localStorage.getItem('winnerCount');
    document.querySelector(".seats").textContent = total;
}
window.addEventListener('storage', function(e){
    document.querySelector(".seats").textContent = e.url;
    console.log(e);
});
