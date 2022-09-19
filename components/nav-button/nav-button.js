function createButton(name, callback){
    const button = document.createElement('button');
    button.classList.add('button')
    if (name === 'prev'){
        button.classList.add('button--prev');
        
    }
    return createButton;
}