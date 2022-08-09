

const startAnimatedScroll = () => {
    const animItemList = document.querySelectorAll('._anim_item');
    const animScroll = () => {
        if (animItemList.length > 0) {
            for (let i = 0; i < animItemList.length; i++) {
                const animItem = animItemList[i];
                // @ts-ignore
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offSet(animItem).top;
                const animStart = 10;

                let animItemPointStart = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPointStart = window.innerHeight - window.innerHeight / animStart;
                }
                if ((window.scrollY > animItemOffset - animItemPointStart) && window.scrollY < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                } else {
                    if (!animItem.classList.contains('_anim_no_hide')) {
                        animItem.classList.remove('_active');
                    }
                }
            }
        }
    };


    animScroll();
    window.addEventListener('scroll', animScroll)
}

function offSet(el: Element) {
    const rect = el.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop};
}

export {startAnimatedScroll}


