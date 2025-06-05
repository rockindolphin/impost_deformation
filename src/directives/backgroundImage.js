export default {
    mounted(img, binding, vnode) {
        let imgSrc = img.getAttribute('src'),
            parent = img.parentNode;
        if( parent.nodeName.toUpperCase() === 'PICTURE' ){
            if( img.complete ){
                parent.parentNode.style.backgroundImage = `url(${img.currentSrc})`;
                img.style.display = 'none';
            }else{
                img.addEventListener('load', () => {
                    parent.parentNode.style.backgroundImage = `url(${img.currentSrc})`;
                    parent.style.display = 'none';
                }, { once: true });
                img.addEventListener('error', () => {
                    parent.parentNode.style.backgroundImage = `url(${imgSrc})`;
                    parent.style.display = 'none';
                }, { once: true });
            }
        }else{
            parent.style.backgroundImage = `url(${imgSrc})`;
            img.style.display = 'none';
        }
    }
}