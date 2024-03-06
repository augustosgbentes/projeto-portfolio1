const toggler = document.getElementById('toggle');
toggler.addEventListener('change', function(){
    if(this.checked){
        document.body.classList.add('dark');
    }else{
        document.body.classList.remove('dark');
    }
})