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

