const sizes = (blockSelector) => {
    const sizeBlocks = document.querySelectorAll(blockSelector);

    function bindHover(elements, event) {
        elements.forEach(elem => {
            elem.addEventListener(event, (e) => {
                const targetImg = e.target.firstElementChild,
                      targetClass = targetImg.className.slice(5);
                if (event == 'mouseenter') {
                    targetImg.setAttribute('src', `assets/img/sizes-${targetClass}-1.png`);
                    getSiblings(targetImg).forEach(item => item.style.display = `none`);
                } else if (event == 'mouseleave') {
                    targetImg.setAttribute('src', `assets/img/sizes-${targetClass}.png`);
                    getSiblings(targetImg).forEach(item => item.style.display = `block`);
                } else {
                    throw new Error('Event is not defined');
                }
            });
        });
        
    }
    bindHover(sizeBlocks, 'mouseenter');
    bindHover(sizeBlocks, 'mouseleave');

    function getSiblings(elem) {
        let siblings = [];

        if (!elem.parentNode) {
            return siblings;
        }

        let sibling = elem.parentNode.firstChild;

        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== elem && sibling.className !== `sizes-hit`) {
                siblings.push(sibling);
            }
            sibling = sibling.nextElementSibling;
        }
        return siblings;
    }
};

export default sizes;