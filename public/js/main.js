const receiptApproved = document.querySelectorAll('span.approved')
const receiptItem = document.querySelectorAll('span.not')

Array.from(receiptItem).forEach((el)=>{
    el.addEventListener('click', markApproved)
})

Array.from(receiptApproved).forEach((el)=>{
    el.addEventListener('click', markNotApproved)
})

async function markApproved(){
    const receiptId = this.parentNode.dataset.id
    try{
        const response = await fetch('receipts/markApproved', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'receiptIdFromJSFile': receiptId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markNotApproved(){
    const receiptId  = this.parentNode.dataset.id
    try{
        const response = await fetch('receipts/markNotApproved', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'receiptIdFromJSFile': receiptId 
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("googleMap"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
}
  
  window.initMap = initMap;