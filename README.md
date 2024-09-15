# Web components

## ¿Qué es web components?

Es un estándar JS

Son especificaciones de la W3C encaminadas al desarrollo de elementos personalizados

### ¿Qué son los elementos personalizados? 

Custom elementos, la especificacón principal, permiten extender el HTML, creando nuevmos componentes que encapsula un aspecto y una funcionalidad

#### Ex.

~~~
<my-calendar> </my-calendar>

<menu-user> </menu-user>

<my-icon icono="home"> </my-icon>
~~~

### Propiedades 

#### ¿Qué son los elementos personalizados?

- Extensibles 
    
    Puedo extender el HTML. Además puedo crear unos componentes en base a otros

- Encapsulados

    La complejidad se queda dentro, desde fuera no se puede alterar accidentalmente

- Reutilizables

    Una vez definido un elemento personalizado, lo podemos usar tantas veces como queramos, en ese proyecto, en cualquier otro proyecto, o ofrecerlo para que otras personas los usen y lo extiendan también.

### ¿Qué se necesita? 

Solamente JS 

## ¿Cómo se hace un custom element

Un componente se implementa mediante una clase en este caso: 
~~~
class Componente extends HTMLElement
~~~
#### ¿Qué es HTMLElment?

Es una etiqueta HTML (Se entiende como una etiqueta vacía)

#### Definimos el componente
Utilizamos customElements.define para definir la nueva etiqueta, a partir de la clase.

##### *Siempre debe haber un "-" en el nombre*
~~~
customElements.define('primer-componente', Componente)
~~~
#### Componente de ejemplo

~~~
<script>
    //defino la clase con la que implemento el componente 
    class Componente extends HTMLElement{
        constructor(){
            super()
        }
    }

    //asocio la clase a un nombre de componente
    customElements.define('primer-componente', Componente)
</script>
~~~

## ¿Por qué usar web components y no una librería como React?
1. Desarrollo nativo
2. Evita dependencias
3. Mejora el rendimiento y velicidad de descarga
4. Componentes transversales
5. Ayudas a extender el HTML


## ¿Qué es Lit?

Es una clase (de programación orientada a objetos) base para la creación de Custom Elements.

##### "Creado por el equipo de Polymer (Google)"

### ¿Por qué necesito LitElement? 

Realmente no se necesita...

Sólo que, si creas un componente extendido de Lit estarás obteniendo varios beneficios...

1. Data-binding
2. Sistema de templates reactivo
3. Constructable stylesheets
4. Sincrinización entre propiedades y atributos
5. Pesa 5kb

### ¿Dónde puedo usarlo? 

Es Js! por lo que lo puedes usar más allá de donde lo necesites. (en todos lados)...

### Rendimiento

Mantiene un rendimiento casi igual a JS Vanilla

### ¿Qué se puede construir? 
- Componentes UI
- Design Systems 
- App's web
  - SPA
  - PWA

## ¿Que se necesita para comenzar a trabajar con lit? 

### Instalar NodeJS (y npm)
Para instalar Lit en un proyecto cómodamente usamos el gestor de dependencias JS (npm).

npm se instala cuando instalas NodeJS. 

### Herramientas de desarrollo 
Por su puesto, podemos apoyarnos en las herramientas frontend y caonocidas.

- Servidor de desarrollo
- Transpilar código JS
- Llevar a producción

### Iniciar un proyecto con npm
En la carpeta de tu proyecto
~~~
npm init -y
~~~
Esto creara tu package.json
##### Server
Si ya cuentas con alguna herramienta que te pueda levantar el server para ver tu HTML puedes usarla o instalar Web dev server
~~~
npm i --save-dev @web/dev-server
~~~
Hecho esto, se te va a crear una carpeta llamada node_modules y un archivo llamado package-lock.json

Ahora debemos acceder a package.json y agregar la linea 
~~~
"start": "web-dev-server --node-resolve --open --watch"
~~~
Quedando de la siguiente manera (solo si no lo has modificado anteriormente)
~~~
{
  "name": "lit",
  "version": "1.0.0",
  "description": "## ¿Qué es web components?",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "web-dev-server --node-resolve --open --watch"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@web/dev-server": "^0.4.6"
  },
  "dependencies": {
    "lit": "^3.2.0"
  }
}
~~~
Hecho esto ahora ya tenemos el script para iniciar el server ya solo en terminal y ubicado en tu proyecto debemos escribir
~~~
npm run start
~~~
#### Al hacer esto nos va a abrir una ventana con un mensaje de "aviso" el cual nos indica que como tal no se encontró un index.html y debemos agregarlo. 

Por lo que ahora pocedemos a crear un archivo llamado index.html y podemos añadirle algunas cosas, por ejemplo un h1 etc...

### Instalando Lit

Hecho lo anterior ahora si podemos proceder a instalar lit.

~~~
npm i lit
~~~

## Crear primer componente
Nuestro primer compoenente lo vamos a crear en base al primer ejemplo visto anteriormente.

Para este ejemplo se está ocupando el método render(), este método define la vista del componente y al final regresa un template string (html`<"Etiquetas">` )
~~~
import { LitElement, html } from 'lit';

export class MyCounter extends LitElement{
    render(){
        return html`
        <p>Soy tu primer <b>Web Component</b>!!</p>
        `;
    }
}
customElements.define('my-counter',MyCounter);
~~~

### Para poder usar componentes se necesita un script que va a indentificar a los componentes.
~~~
<script src="./components/eit-counter.js" type="module"></script>
~~~

## Contexto hasta el momento 

#### Se crea el archivo eit-counter.js
Datos relevantes...

- host: se refiere a las propiedades globales del mismo componente
- Recuerda siempre al definirlo con .define("nombre-componente",NombreComponente)
de usar un "-" GUION, dado que las palabras sin GUION estaán reservadas para HTML
- slot es como tal los elementos dentro de la etiqueta del componente 
- static properties es las propiedades con las que podemos trabajar en el componente
- El constructor es donde podemos declarar los valores de las propiedades
~~~
import { LitElement, html, css } from 'lit';

export class EitCounter extends LitElement{
    static styles=[
        css`
            :host {
                display:inline-block;
                padding:1em;
                border:1px solid blue;
            }
            slot{
                
                color:red;
            }
            .parrafo{
                color:blue;
                font-size:1.5em;
            }
        `
    ];

    static properties={
        counter:{ type:Number }
    }
    
    constructor(){
        super();
        this.counter = 30 
    }
    

    render(){
        return html`
            <slot></slot>
            <p class="parrafo">${this.counter}</p>
        `;
    }
}
customElements.define('eit-counter',EitCounter);
~~~
#### Contenido del archivo index.html

~~~
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lit </title>
</head>

<body>

    <h1>Lit.dev</h1>

    <eit-counter counter="10">
        <h2>Mi contador</h2>
    </eit-counter>

    <eit-counter counter="0">
        <h3> <a href="#"> Mi contador!!!!!</a></h2>
    </eit-counter>

    <script src="./components/eit-counter.js" type="module"></script>
</body>

</html>
~~~