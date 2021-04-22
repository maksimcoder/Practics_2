const filter = (menuSelector, photoSelector) => {
    const btns = document.querySelectorAll(menuSelector),
          photoWrapper = document.querySelectorAll(photoSelector);

    btns.forEach(item => {
        item.addEventListener('click', (e) => {
            photoWrapper.forEach(item => {
                document.querySelector('.portfolio .portfolio-no').style.display = 'none';
                if (item.classList.contains(e.target.className)) {
                    item.style.display = 'block';
                } else if (e.target.classList.contains('all')) {
                    item.style.display = 'block';
                } else if (e.target.classList.contains('grandmother') || e.target.classList.contains('granddad')) {
                    item.style.display = 'none';
                    document.querySelector('.portfolio .portfolio-no').style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
            btns.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
    
   
};

export default filter;