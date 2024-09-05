const reset = document.querySelector(".reset");
const game = document.querySelector(".game")


const data = ["❤️", "❤️", "😂", "😂", "😒", "😒", "💕", "💕", "🙌", "🙌", "🤷‍♀️", "🤷‍♀️", "🤞", "🤞", "💩", "💩", "🤣", "🤣", "😘", "😘", "😢", "😢", "🤷‍♂️", "🤷‍♂️"]

let count = 0;

const shufledata = data.sort(() => (Math.random() > .5) ? 2 : -1)

shufledata.forEach((e) => {
    const card = document.createElement("div")
    card.className = 'card';
    card.innerHTML = e;

    card.onclick = function () {
        this.classList.add('open');
        count++;

        setTimeout(()=>{
            if(document.querySelectorAll('.open').length > 1){
                if(document.querySelectorAll('.open')[0].innerHTML == document.querySelectorAll('.open')[1].innerHTML){

                    document.querySelectorAll('.open')[0].classList.add("match")
                    document.querySelectorAll('.open')[1].classList.add("match")
                    document.querySelectorAll('.open')[1].classList.remove("open")
                    document.querySelectorAll('.open')[0].classList.remove("open")

                        if(document.querySelectorAll('.match').length == data.length){
                            alert("All Pairs Found")
                        }

                }
                else{
                    document.querySelectorAll('.open')[1].classList.remove("open")
                    document.querySelectorAll('.open')[0].classList.remove("open")
                }
            }
        },500)

            document.querySelector('.attempts').innerText = `Attempts ${count}`
        
        console.log(count);

    }

    // document.querySelector('.container').append(document.createElement('p').innerText = `${count}`)

    game.appendChild(card)
})

document.querySelector(".reset").addEventListener('click', () => {
    window.location.reload()
})