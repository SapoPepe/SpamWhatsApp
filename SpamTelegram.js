async function enviarScript(scriptText){
    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
    main = document.querySelector("#main"),
        textarea = main.querySelector(`div[contenteditable="true"]`)

    if(!textarea) throw new Error("No hay una conversación abierta")

    for(const line of lines){
        console.log(line)

        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('change', {bubbles: true}));

        setTimeout(() => {
            (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
        }, 100);

        if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
    }

    return lines.length;
}

enviarScript(`
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    Hola, estoy probando un scrypt de spam en whassapp 😎
    
    `).then(e => console.log(`Mensajes enviados correctamente`)).catch(console.error)
