import {getResource} from './services/requests';

const addMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    // cards.forEach(card => {
    //     card.classList.add('animated', 'fadeInUp');
    // });

    // btn.addEventListener('click', () => {
    //     cards.forEach(card => {
    //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });
    //     // btn.style.display = 'none';
    //     btn.remove();
    // });


    btn.addEventListener('click', () => {
        getResource('http://localhost:3000/styles')
            .then(res => new Card(res).renderCard())
            .catch(error => console.log(error));
        btn.remove();
    });

    class Card {
        constructor(response) {
            this.response = response;
        }

        renderCard() {
            this.response.forEach(({src, title, link}) => {
                let card = document.createElement('div');
                card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp');
                card.innerHTML = `
                    <div class=styles-block>
                        <img src=${src} alt>
                        <h4>${title}</h4>
                        <a href="${link}">Подробнее</a>  
                    </div>
                `;
                console.log(this.src);
                document.querySelector(wrapper).appendChild(card);
            });
        }

    }

    // <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">
    //     <div class=styles-block>
    //         <img src=assets/img/styles-6.jpg alt>
    //         <h4>Поп-арт</h4>
    //         <a href="#">Подробнее</a>
    //     </div>
    // </div>
};

export default addMoreStyles;