const accordion = () => {
    const btns = document.querySelectorAll('.accordion-heading'),
          blocks = document.querySelectorAll('.accordion-block');
    
    blocks.forEach(block => block.classList.add('hide'));
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            const sibling = this.nextElementSibling;
            this.firstElementChild.classList.toggle('active');
            sibling.classList.toggle('opened');
            sibling.classList.toggle('hide');  
        });
    });
    const brush = document.querySelector('.brushes');
    brush.addEventListener('click', (e) => {
        console.log(`target = ${e.target}`);
    });
    brush.addEventListener('click', function() {
        console.log(`this = ${this}`);
    });
};

export default accordion;