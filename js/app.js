import apiKey from "./apiKey.js";

(function () {
    fetch(`https://pokeapi.co/api/v2/pokemon/5`)
        .then(res => res.json())
        .then(res => {
            const html = `
                <div class="overlay"></div>
                <img class="card" src="${res.sprites.front_default}" width="200" height="300" />
            `;

            document.querySelector('#content').innerHTML = html;



            var container = document.querySelector('.container')
            var overlay = document.querySelector('.overlay')
            container.addEventListener('mousemove', function(e){
                var x = e.offsetX
                var y = e.offsetY
                var rotateY = -1/5 * x + 20
                var rotateX = 4/30 * y - 20

                overlay.style = `background-position : ${x/5 + y/5}%; filter : opacity(${x/200}) brightness(1.2)`

                container.style = `transform : perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            })

            container.addEventListener('mouseout', function(){
                overlay.style = 'filter : opacity(0)'
                container.style = 'transform : perspective(350px) rotateY(0deg) rotateX(0deg)'
            })
        })

})();