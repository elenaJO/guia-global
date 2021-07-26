# Listado de comandos Nativescript

## Comandos generales

- Verificar el correcto funcionamiento del entorno de desarrollo:
```bash_profile
ns doctor
```

- Crear un proyecto desde cero:
```bash_profile
ns create <nombre_aplicación>
```

- Realizar una limpieza del proyecto (borrar carpeta node_modules, platforms, hooks, etc):
```bash_profile
ns clean
```

- Listar dispositivos disponibles:
```bash_profile
ns device
```

- Listar dispositivos iOS disponibles en Mac:
```bash_profile
instruments -s
```

## Verbos (comandos importantes)

Existen tres comandos para compilar y/o ejecutar el proyecto, los llamaremos **verbos**. Los tres posibles verbos son:

- ```run```: Ejecuta la aplicación en la plataforma y ambiente proporcionados.

- ```debug```: Ejecuta la aplicación en la plataforma y ambiente proporcionados en modo **debugger**, donde a través de **ChromeDevTools** permite analizar el tráfico de peticiones http, ver logs de consola, etc.

- ```build```: Compila el proyecto nativo generando el archivo instalador según la plataforma y en el ambiente proporcionado en el comando.

## Plataformas soportadas

Para utilizar alguno de estos verbos se debe proporcionar para qué plataforma se debe ejecutar y opcionalmente el **ambiente/entorno**([que veremos más adelante]()) al que se quiere apuntar durante la ejecución.
Los dos posibles valores de plataforma son:

- ```android```
- ```ios```

Podemos combinar los verbos con las posibles plataformas así:

- ```ns run android```
- ```ns debug android```
- ```ns build ios```

## Ambientes de trabajo

Actualmente tenemos tres ambientes distintos con sus propios pool de usuarios, servicios y algunas configuraciones de acuerdo a las necesidades a medida que se desarrollan las nuevas funcionalidades. Estos ambientes son:

- Development (**dev**): Es el ambiente donde los desarrolladores **Backend** despliegan sus desarrollos nuevos antes de pasar a los analistas QA, puede estar un poco inestable pero permite a los desarrolladores Frontend integrar y consumir los nuevos servicios para ir ajustando las implementaciones hasta que puedan pasar al ambiente de pruebas.

- Continuous integration / Pruebas (**ci**): Es el ambiente con la configuración lo más idéntica posible al ambiente de producción, ideal para que los **QA** realicen todas las pruebas funcionales que consideren pertinentes de las nuevas funcionalidades hechas en el ambiente de development, antes de dar su aprobación para que puedan pasar a producción.

- Producción / Release (**production o prod**): Como su nombre lo indica, es el ambiente donde se encuentran todas las funcionalidades ya aprobadas por el equipo de QA y por ende ya están disponible para uso de los **usuarios finales**.

Estos ambientes son establecidos en los comandos a través del uso del modificador ```--env```, el cual detallaremos más en el apartado de [modificadores]() que veremos más adelante.

## Combinando las partes de un comando

Ahora con todas las partes importantes de la estructura de nuestros comandos claros, podemos combinarlos para ejecutar el verbo que queramos, de la plataforma deseada, en un ambiente definido. Se debe organizar en el siguiente orden específico:

```bash_profile
ns <verbo> <platform> --env.<environment>
```

Es decir que podríamos ejecutar algunos comandos como:

- Compilar la aplicación para un dispositivo android apuntando al ambiente de desarrollo:

```ns build android --env.development``` ó ns ```build android --env.dev``` ó simplemente ```ns build android```

- Debuggear la aplicación en un dispositivo iOS apuntando al ambiente de pruebas:
```ns build ios --env.ci```

- Correr la aplicación en un dispositivo Android apuntando al ambiente de producción (release):

```ns run android --env.production``` ó ```ns run android --env.prod```

::: warning NOTA:
Cuando no se establece un ambiente, se selecciona el de development (dev) por defecto.
:::

## Modificadores

Al igual que cualquier interfaz de línea de comandos (CLI), existen varios modificadores que a través de banderas escritas en los comandos, permiten modificar la ejecución para realizar tareas y cosas específicas. Estos son los más importantes que algunas veces utilizamos, algunos son específicos por plataforma:

::: warning NOTA:
A los modificadores se le anteponen dos signos de guión (--) como vimos en los ejemplos anteriores.
:::


| Modificador                         | Plataforma  | Descripción                                        |
| ----------------------------------- | ----------- | -------------------------------------------------- |
| ```--emulator``` | ambas       | Da prioridad al emulador de la plataforma indicada cuando también hay dispositivos físicos conectados. |
| ```--no-hmr``` | ambas       | Desactiva la función de HotModuleReload de webpack. |
| ```--clean``` | ambas       | Forza una limpieza del proyecto antes de ejecutar el comnado.|
| ```--inspector``` | IOS       | Utiliza Webkit Web Inspector debugger (Safari) en vez de ChromeDevTools que es el que se usa por defecto.|
| ```--device <ID del device>``` | ambas       | Utiliza el dispositivo del identificador único proporcionado |
| ```--for-device``` | IOS       | Genera el proyecto nativo para un dispositivo físico (que tiene distinta estructura al de emulador). Genera el archivo .ipa para distribuir de manera alternativa.|
| ```--env.development o --env.dev``` | ambas       | Establece **desarrollo** como el ambiente de trabajo |
| ```--env.ci``` | ambas       | Establece **ci** como el ambiente de trabajo |
| ```--env.production ó --env.prod``` | ambas       | Establece **producción** como el ambiente de trabajo |
| ```--env.dropConsole``` | ambas       | Elimina los mensajes de consola utilizados en el proyecto (console.log, console.dir, etc.) |
| ```--env.forceDebug``` | ambas       | Forza a escribir siempre los logs en consola, ya que cuando se compila a producción, se suprimen los logs por defecto. |




