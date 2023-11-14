async function enviarScript(scriptText){
    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
    main = document.querySelector("#main"),
        textarea = main.querySelector(`div[data-testid="input-messages-text"]`);

    if(!textarea) throw new Error("No hay una conversación abierta");

    for(const line of lines){
        console.log(line);

        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('change', {bubbles: true}));

        setTimeout(() => {
            (main.querySelector(`[data-testid="input-messages-send-button"]`)).click();
        }, 100);

        if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
    }

    return lines.length;
}

enviarScript(`
    Hola, estoy probando un scrypt de spam en Telegram 😎
   
    `).then(e => console.log(`Mensajes enviados correctamente`)).catch(console.error);
