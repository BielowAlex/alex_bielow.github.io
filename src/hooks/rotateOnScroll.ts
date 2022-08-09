
const rotateOnScroll = ()=>{
    let rotateItems = document.querySelectorAll('._rotate_item');

    const animRotate = () => {
        if(rotateItems.length>0){
            for (let i = 1;i>rotateItems.length;i++) {

            }
            let count = Math.floor(window.scrollY/5);
            // @ts-ignore
            rotateItem.style.transform = `rotate(${count}deg)`
        }

    }

        animRotate();
    window.addEventListener('scroll', rotateOnScroll)
}


export {rotateOnScroll}

