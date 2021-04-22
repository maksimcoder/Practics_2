const checkTextInputs = (selector, isFree = false) => {
    const textInputs = document.querySelectorAll(selector);

    textInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (isFree) {
                if (e.key.match(/[^а-яё 0-9,.?-]/ig)) {
                    e.preventDefault();
                }
            } else if (e.key.match(/[^а-яё]/ig)) {
                e.preventDefault();
            }
        });
    });
};

export default checkTextInputs;