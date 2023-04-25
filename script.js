const textareas = document.getElementsByTagName('textarea')

console.log(textareas.length)

function createListeners(){
  for(let i = 0; i<textareas.length; i++){
    console.log(i)
    textareas[i].addEventListener('input', ()=>{
      // substitui -> por →
      const value = textareas[i].value
      const newValue = value.replace('->', '→')
      textareas[i].value = newValue

      // a textarea cresce conforme forem adicionados itens
      textareas[i].style.height = 'auto';
      textareas[i].style.height = `${textareas[i].scrollHeight}px`;
    })
  }
}

createListeners()
