const {
    readdir,
    readFile,
    writeFile
} = require('fs/promises')

const { join } = require('path')
const inbox = join(__dirname, 'inbox')
const outbox = join(__dirname, 'outbox')

const reverseText = str =>
    str
    .split('')
    .reverse()
    .join('')

//Me gustaria saber si estos catch que estoy aplicando a cada promesa despues del await, son en el fondo exactamente lo mismo que el catch de un try/catch block. Considere muchas opciones para que cada linea de await en este archivo pudiera levantar los errores en las mismas posiciones que lo hace la version con callbacks y devolver el mensaje custom correspondiente, entre ellas, hacer nested try/catch blocks, por eso surge la duda. Hubiera habido alguna diferencia en aplicar los nested try catch blocks?.

//No se si hubiera sido necesario un Promise.all para que las promesas que devuelve el "for" loop se ejecuten en forma parallela, en lugar de secuencial como esta ocurriendo ahora. Entiendo que en la version con callbacks era secuencial tambien. 


const promiseHeaven = async() => {
    try {
        let files = await readdir(inbox).catch(e => console.log("Error: Folder inaccessible: ", e.message));

        for (let file of files) {
            let text = await readFile(join(inbox, file), 'utf8').catch(e => console.log('Error: File error: ', e.message));
            await writeFile(join(outbox, file), reverseText(text)).catch(e => console.log('Error: File could not be saved!: ', e.message));
            console.log(`${file} was successfully saved in the outbox!`)
        }
    } catch (err) {
        console.error(err);
    }
}

promiseHeaven()