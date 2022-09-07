const btn = document.querySelector('input [name=rate]');
    const styles = document.querySelector('.star-style');
    btn.onclick = ()=>{
    styles.style.display = 'block';
    return false;
}