# Guía de instalación del entorno de desarrollo Front-end [Móvil y Web]

Este documento describe el procedimiento de instalación y configuración del entorno de desarrollo en macOS para las aplicaciones Web y Móvil de Global66.

Desarrollo Web: [Vue.js 2](https://es.vuejs.org/)

Desarrollo Móvil: [NativeScript + Vue.js 2](https://nativescript-vue.org/)

Esta guía está basada en la documentación oficial de NativeScript, específicamente en el apartado de [configuración del entorno](https://docs.nativescript.org/environment-setup.html)

## Instalación de Homebrew para Mac

Homebrew es un administrador de paquetes para macOS a través del cual se gestionará la descarga e instalación de algunas de las herramientas del entorno de desarrollo. Para instalarlo debe ejecutarse el siguiente comando en la terminal:

```bash_profile
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Para más información, consultar la documentación oficial de la herramienta: [Homebrew](https://brew.sh/ )

## Instalación de Git

En general, con la instalación de Homebrew debería instalarse el paquete de Xcode Command Line Tools, y con él Git.

La instalación de Git en el equipo se puede verificar desde la terminal a través de este comando:```git --version```.

Sin embargo, se recomienda instalar git a través del comando ```brew install git```.

Otras alternativas para la instalación de la herramienta en macOS pueden consultarse en la documentación de [Git](https://git-scm.com/download/mac)

## Instalación de utilidades para la terminal (Opcional)

- **iTerm2**

iTerm2 es un emulador de la terminal para macOS con características como el autocompletado, la edición, el uso de múltiples instancias en una vista, etc; que mejoran la experiencia de desarrollo.

La instalación de iterm2 puede realizarse a través de la descarga directa desde el sitio oficial de la [herramienta](https://iterm2.com/downloads.html)

- **Zsh**

Zsh es un intérprete de comandos para sistemas operativos tipo Unix, como macOS. Este intérprete adopta características de Bash, pero añade además funcionalidades que potencian la experiencia de desarrollo. 

Esta herramienta de puede instalar fácilmente a través de Homebrew con el comando: ```brew install zsh```.

- **Oh-my-zsh**

Oh-my-zsh es un framework para la gestión de la configuración de Zsh. Viene con diversas funcionalidades, plugins y temas que facilitan y potencian el uso de Zsh.

Su instalación puede realizarse a través de alguno de los siguientes comandos
[link](https://ohmyz.sh/#install)

Con Curl: 
```bash_profile
$ sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Con Wget:
```bash_profile
$ sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```

Una vez instalada, esta herramienta reemplazará la terminal por defecto de Zsh.

## Instalación y configuración de VSCode (Opcional)

Descargar e instalar Visual Studio Code desde la página oficial de la [herramienta](https://code.visualstudio.com/)

Una vez instalado el editor en el equipo, se pueden añadir extensiones que facilitan el flujo de trabajo con la herramienta. A continuación se listan algunas extensiones recomendadas:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
- [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)

## Instalación de Node.js a través de NVM

Los proyectos Web y Móvil corren con diferentes versiones de Node.js: **10 y 14**, respectivamente. Por esta razón su instalación se hace a través de un paquete de gestión de versiones llamado nvm [Node Version Manager](https://github.com/nvm-sh/nvm) que permite tener múltiples versiones de Node y cambiar entre ellas según la necesidad.

Para instalar **nvm** en el equipo debe correrse alguno de los siguientes comandos desde la terminal:

**Con Curl:**
```bash_profile
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

**Con Wget:**
```bash_profile
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```
Este comando descargará y correrá un script que clona el repositorio de nvm en el directorio ~/.nvm del equipo y añade unas líneas al archivo de perfil del sistema (~/.bash_profile, ~/.zshrc, ~/.profile, o ~/.bashrc).

Para probar la instalación de nvm, reiniciar la terminal y correr el comando ```command -v nvm```. En la terminal debería mostrarse como salida: ```nvm```

Una vez instalado NVM, instalar las versiones 10 y 14 de Node.js. Para esto, usar el comando install de nvm, como se muestra a continuación:

Para instalar una versión específica de Node.js:
```bash_profile
nvm install <version>
```

Para instalar la versión LTS de Node.js:
```bash_profile
nvm install --lts
```

Para usar una versión instalada de Node:
```bash_profile
nvm use <version>
```
Para el entorno de desarrollo con el que se probó este documento se instalaron las versiones 10.24.1 y 14.17.3 (LTS) de Node.js

## Instalación de JDK (Java Development Kit)

Desde la terminal, ejecutar los siguientes comandos:

```bash_profile
brew tap AdoptOpenJDK/openjdk
```
```bash_profile
brew install --cask adoptopenjdk15
```
## Instalación de Android Studio

Descargar el paquete de instalación de Android Studio desde el [sitio oficial](https://developer.android.com/studio)

Se deben seguir los pasos del Wizard de instalación considerando que los siguientes componentes deben estar incluídos en la instalación:

- Android SDK
- Android SDK Platform
- Android Virtual Device
- Performance (Intel ® HAXM)

Una vez terminada la instalación, si esta es exitosa, una pantalla de bienvenida debería mostrarse.

Es muy probable que al momento de leer esta guía, Android Studio instale entre sus herramientas las últimas versiones de Android SDK y Android SDK Build-Tools (**Android API 31 y Android SDK Build-Tools 31**). Es recomendable instalar versiones anteriores en ambas herramientas, que sean compatibles con la versión de NativeScript a usar. 

Para Android SDK se recomienda instalar todos los paquetes desde la versión **23**, mientras que para Build-Tools es recomendable instalar además de la última versión (**31 para el momento en que se escribe esta guía**), la versión **30**. Estas instalaciones adicionales se pueden hacer desde el SDK Manager (**Figura 1**), al cual se llega desde la pantalla principal de Android Studio.


Las figuras **2 y 3** corresponden a vistas de la interfaz gráfica del SDK Manager, y muestran las versiones instaladas de ambas herramientas (SDK y Build-Tools) en una configuración compatible con NativeScript. Desde estas vistas es posible instalar las versiones necesarias, simplemente seleccionándolas en la lista y aplicando los cambios.

Una vez instalado Android Studio con los paquetes y características antes mencionados, es necesario configurar las variables de entorno **ANDROID_HOME y PATH**. Para ello es necesario agregar las siguientes líneas al final del archivo de perfil de shell (~/.bash_profile, ~/.zshrc, ~/.profile, o ~/.bashrc):

```bash_profile
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
::: warning NOTA:
Es importante reiniciar la terminal para que los cambios tomen efecto
:::

## Instalación de Xcode y dependencias para iOS

La instalación se realiza desde la App Store de macOS (**Figura 4**). Se requieren mínimo 50 GB de espacio en el disco para realizar la instalación de la herramienta. Este proceso puede tomar tiempo.

Una vez instalada la aplicación, abrirla. Es probable que aparezca un cuadro de diálogo para completar la instalación de algunas herramientas, si esto ocurre, aceptarlo. Una vez terminado este proceso y con el programa abierto, ir a **Xcode -> Preferences -> Location**, y allí seleccionar _Command Line Tools_, como se muestra en la **figura 5**.


## Instalación de Ruby, Cocoapods y Xcodeproj

Instalar Ruby 2.7 a través de los siguientes comandos desde la terminal.

```bash_profile
brew install ruby@2.7
brew link ruby@2.7
```

Una vez terminados los procesos de instalación anteriores, añadir las siguientes líneas al final del archivo de perfil de shell (~/.bash_profile, ~/.zshrc, ~/.profile, o ~/.bashrc):

```bash_profile
# Add rubygems to the path
export PATH=/opt/homebrew/lib/ruby/gems/2.7.0/bin:$PATH
# or
export PATH=/usr/local/lib/ruby/gems/2.7.0/bin:$PATH
```

::: warning NOTA:
Es importante reiniciar la terminal para que los cambios tomen efecto
:::

En una nueva terminal ejecutar los siguientes comandos como superusuario para la instalación de _Cocoapods y Xcodeproj_, dependencias de NativeScript para iOS:

```bash_profile
sudo gem install cocoapods
```

Finalmente, instalar pip y six, a través de los siguientes comandos:

```bash_profile
sudo easy_install pip==20.3.3
python -m pip install six
```

## Instalación de NativeScript

La instalación global de NativeScript se hace desde npm (Node Package Manager), ya instalado junto con Node.Js, a través del siguiente comando:

```bash_profile
npm install -g nativescript
```

::: warning NOTA:
Es importante recordar que alguna de las versiones de Node (preferiblemente la más reciente) debe estar en uso en el sistema: ```nvm use 14.17.3```
:::

Para verificar la correcta instalación de NativeScript y sus dependencias de Android e iOS, pueden correrse los siguientes comandos:

```bash_profile
ns doctor ios
ns doctor android
```

Si la instalación de NS y sus dependencias en ambos entornos fue correcta, en la terminal se deberían mostrar las salidas que se muestran en la **figura 6**. 

## Ejecución del proyecto Web en entorno de desarrollo

En la terminal, ubicados en la ruta del proyecto para ejecutar el proyecto en entorno local basta con correr el comando: ```npm run dev```