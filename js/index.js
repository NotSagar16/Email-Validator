const res = document.getElementById('res')
document.getElementById('submit').addEventListener('click', async (e) => {
    e.preventDefault()
    res.innerHTML=`<img src="loding.svg" alt="">`
    let email = document.getElementById('email').value
    let key = "ema_live_461FSoQqOll9RBR79aIb0PH86oKlPwCxbp1aRr6B"
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let x = await fetch(url)
    let result = await x.json()
    let str = ``
    for (item of Object.keys(result)) {
        if(result['message']=="Validation error"){
            str = str + `<div>An error occured. Please check your email or try again after some time</div>`
            break
        }
        if (result[item] !== "" && result[item]!==" ") {

            str = str + `<div>${item}:${result[item]}</div>`
        }
        
    }
    res.innerHTML = str
})



