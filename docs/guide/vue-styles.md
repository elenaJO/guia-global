# Estilos Vue

Con el fin de mantener un código más legible y estandarizado dentro de nuestros equipos de trabajo. Hemos decidido adoptar la guía de [estilos oficial de VueJs](https://vuejs.org/v2/style-guide/), de la cual, se resume a continuación los aspectos más importantes.

## Nombres de componentes

Los nombres de los componentes siempre deben ser de varias palabras, a excepción de los componentes raíz de la **App**, de preferencia siempre en inglés (por convención).
Esto evita conflictos con elementos existentes y futuros, ya que en web, todos los elementos HTML son de una sola palabra, además que permiten ser más descriptivos.
Deben ser suficientemente cortos pero descriptivos, de modo que con sólo leerlos ya den una idea clara de qué función cumplirá el componente.
Ejemplos: _MovementItem_, _ModalCommon_, _FileUploader_.

Cuando existen componentes bases (también conocidos como componentes de presentación, tontos o puros) que son variaciones ya sean de UI o comportamiento lógico, pero que pueden cumplir el mismo objetivo dentro de la aplicación, los prefijamos (primera palabra) haciendo alusión al elemento y luego palabras que indiquen su variación. Esto por la naturaleza de los editores de código e IDE’s que los ordenan alfabéticamente y así queden agrupados, volviéndose más fácil de identificar. A su vez, si son de uso muy frecuente es posible hacerlos globales mucho más fácil en vez de importarlos en todos lados con ayuda de empaquetadores como webpack:

```js
const requireComponent = require.context("./src", true, /^Base[A-Z]/)
requireComponent.keys().forEach(function (fileName) {
 const baseComponentConfig = requireComponent(fileName)
 baseComponentConfig = baseComponentConfig.default || baseComponentConfig
 const baseComponentName = baseComponentConfig.name || (
   fileName
     .replace(/^.+\//, '')
     .replace(/\.\w+$/, '')
 )
 Vue.component(baseComponentName, baseComponentConfig)
})
```

Ejemplo: _ModalCommon_, _ModalTransferDetail_, _ModalP2p_, _ModalDatePicker_.

## Definiciones de las propiedades

Las definiciones de **props** siempre deben ser lo más detalladas posible, especificando al menos su(s) **tipo(s), si es requerido o no, o su valor por defecto**.
Esto permite a otros desarrolladores dar una idea de cómo se debe usar el componente además de que en modo de desarrollo permite ver en consola mensajes de alerta cuando se usan incorrectamente.

Ejemplo:

```js
props: {
   editable: { type: Boolean, default: true },
   currency: { type: String, required: true },
}
```

## Colocar directiva key en un v-for

Hacer un bind en la directiva ```key``` del elemento que se itera de un bulce ```v-for``` con un valor único, le permite a Vue actualizar el árbol interno de nodos de una manera mucho más óptima y evita comportamientos inesperados. Así que es un requisito indispensable al momento de utilizar un ```v-for```.

Ejemplo:

```js
<Button
    v-for="(item, i) in buttons"
    :key="i"
    :text="item.text"
    :class="item.class || ''"
    @tap="executeCallback(item.callback)"
>
```

## Evitar usar v-if en un bucle v-for
No es nada óptimo utilizar un ```v-if``` en un bucle ```v-for```, ya que el ```v-for``` tiene mayor prioridad que el ```v-if```, por lo tanto, aunque sólo se renderice una fracción de los elementos del listado que se filtra con la condición, de todas formas se deberá iterar sobre toda la lista completa de elementos cada vez que haya una actualización y se vuelva a renderizar el UI independientemente si el resultado de la condición evaluada cambia para algunos elementos de la lista iterada.

La solución y mejor práctica para esto es hacer uso de las **propiedades computadas**, en donde se haga el filtro deseado sobre el listado original y el resultado de este filtro sea lo que finalmente se itere en el bucle ```v-for```.

Ejemplo:

```js
computed: {
 activeUsers: function () {
   return this.users.filter(function (user) {
     return user.isActive
   })
 }
}
```

y en el maquetado:

```js
<ul> 
 <li
   v-for="user in activeUsers"
   :key="user.id"
 >
   {{ user.name }}
 <li>
</ul>
```

## Cada componente es un archivo

Siempre que un compilador pueda concatenar archivos, cada componente debería estar en su propio archivo, de preferencia un **SingleFileComponent (.vue)**. Esto ayudará a encontrar de una manera más rápida un componente cuando precise editarlo o verificar cómo se utiliza.

Ejemplo:

```
components/
|- TodoList.vue
|- TodoItem.vue
```

## Notación de nombres de componentes SingleFile

Los nombres de los archivos de los componentes single-file deben ser siempre **PascalCase** o siempre **kebab-case**, pero no combinar entre ambas notaciones.

El autocompletado de los editores de código funciona mejor cuando se utiliza **PascalCase**, ya que esta es consistente con la forma en que referenciamos componentes en en JS(X) y plantillas, donde sea posible. Sin embargo, los nombres de archivos mixtos pueden crear problemas en sistemas de archivos insensibles a las mayúsculas y minúsculas, es por esto que utilizar kebab-case es perfectamente aceptable.

Ejemplo: ```.../components/ButtonMain.vue```

