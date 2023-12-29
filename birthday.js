const username = document.querySelector('.username')
const phonenumber = document.querySelector('.phonenumber')
const hack = document.querySelector('button[type= "button"]')
const form = document.querySelector('form')
const text = document.querySelector('#text')

const user = {
    userName: 'me',
    phoneNumber: ''
}
hack.addEventListener('click' , (e) => {
user.userName = username.value;
user.phoneNumber = phonenumber.value;
console.log(user)

    form.style.display = 'none'
    text.style.display = 'block'
document.body.classList.add('hackmode')
showHack();
e.preventDefault();
})
/*let a = [
    "Initializing Hack tool...",
    "Connecting to Facebook...",
    "Connecting to server 1...",
    "Connection failed. Retrying...",
    "Connecting to server 2",
    "Connected Successfully...",
    `Username harry...`,
    "Trying Brute Force...",
    "200K passwords tried...",
    "Match not found",
    "Another 200K passwords tried...",
    "Match not found...",
    "Another 200K passwords tried...",
    "Match not found...",
    "Another 200K passwords tried...",
    "Match found...",
    "Accessing Account...",
    "Hack Successful..."
]

const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
            setTimeout(() => { resolve(true) }, seconds * 1000)
    })
}
const showHack = async (message) => {
    await sleep(2)
    // console.log(message)
    text.innerHTML = text.innerHTML + message + "<br>"
}

(async () => {
    for (let i = 0; i < a.length; i++) {
            await showHack(a[i])
    }
})()
*/


function update(msg){
    const para = document.createElement('p');
    para.textContent = msg;
    text.appendChild(para);
}
const showHack = async () => {
      let p1 = new Promise ((resolve,reject) => {
        setTimeout(()=> {resolve(
            "Initializing Hack tool...")
        },1000)
      })

      let p2 = new Promise ((resolve,reject) => {
        setTimeout(()=> {resolve(
            "Connecting to Instagram")
        },3000)
      })
      let p3 = new Promise ((resolve,reject) => {
        setTimeout(()=> {resolve(
            "Connecting to all 10000 server...")
        },4000)
      })
      let p4 = new Promise ((resolve,reject) => {
        setTimeout(()=> {resolve(
            "Connection failed...")
        },6000)
      })
      let p5 = new Promise ((resolve,reject) => {
        setTimeout(()=> {resolve(
            "Connect to hack sever...")
        },7000)
      })
      let p6 = new Promise ((resolve,reject) => {
        setTimeout(()=> {resolve(
            "Connected successfully...")
        },9000)
      })
      let p7 = new Promise ((resolve,reject) => {
        setTimeout(()=> {resolve(
            "Username : " + user.userName)
        },10000)
      })
      let p8 = new Promise ((resolve,reject) => {
        setTimeout(()=> {resolve(
           "200M passwords tried...")
        },11000)
      })
      let p9 = new Promise ((resolve,reject) => {
        setTimeout(()=> {resolve(
            "Match not found")
        },14000)
      })
      let p10 = new Promise ((resolve,reject) => {
        setTimeout(()=> {resolve(
            "Phone Number : " + user.phoneNumber )
        },15000)
      })
      let p11 = new Promise ((resolve,reject) => {
        setTimeout(()=> {resolve(
            "Enter the OTP")
        },16000)
      })
      let p12 = new Promise ((resolve,reject) => {
        setTimeout(()=> {resolve(
            "OTP is sucessfully Entered")
        },19000)
      })
      let p13 = new Promise ((resolve,reject) => {
        setTimeout(()=> {resolve(
            "Accessing Account.... , Hack sucessful"
            )
        },20000)
      })
      let p14 = new Promise ((resolve,reject) => {
        setTimeout(()=> {resolve(
            "Happy birthday rock star🎉🎉🎂. I hope all your wishes come true. I pray to God that you become a great singer like Arijit Singh, and very soon in future I get your music library in my playlist.")
        },23000)
      })
         
      update(await p1);
      update(await p2);
      update(await p3);
      update(await p4);
      update(await p5);
      update(await p6);
      update(await p7);
      update(await p8);
      update(await p9);
      update(await p10);
      update(await p11);
      update(await p12);
      update(await p13);
      update(await p14);
      update(await p14);
      
}