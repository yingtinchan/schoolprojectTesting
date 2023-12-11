function enter() {
    document.querySelector('#loginbu')
        .addEventListener('click', async (e) => {
            e.preventDefault()
            e.stopPropagation()
            const id = document.querySelector('#userid').value

            let res = await fetch('/user/forgetPWByEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email:id,verifyUrl:window.location.hostname+'/user/verify'})
            })
            let json = await res.json()
            document.querySelector('.form-login').reset()
            if (json.statusCode === 200) {
                window.location.replace('newpwd.html')
            } else {
                window.location.replace('login.html')
            }
        })
}
function back(){
    document.querySelector('#cancel')
        .addEventListener('click', async (e) => {
            window.location.replace('login.html')
        })
}