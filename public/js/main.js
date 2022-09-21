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