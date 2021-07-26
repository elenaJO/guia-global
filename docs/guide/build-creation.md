# Creación de build para publicar

## Creación de Android App Bundle (.aab)

1.  Descargar el certificado de subida de la carpeta compartida y tener a la mano el KeyStorePassword.

2. Generar el proyecto android apuntando a producción: ```ns build android --env.prod```

3. Abrir el proyecto en Android Studio platforms/android, en el archivo **build.gradle** se debe establecer como versión de sdk mínima soportada (minSdkVersion) el número **23 (borrar lo que trae por defecto: manifest."uses-sdk"."@android:minSdkVersion".text() ?: 17)**.
Colocar en la sección de ‘implementation del archivo **build.gradle** las siguientes dos dependencias:
```
implementation 'com.google.firebase:firebase-inappmessaging-display:17.2.0'
implementation 'com.google.guava:guava:27.0.1-android'
```

4. Generar el .aab firmado: ```Build --> Generate Signed Bundle / APK --> Build Bundle (s)```

5. Seleccionar Android App Bundle.

6. Parámetros:
```
Module: app
        KeyStorePath: la ruta hacia el certificado
        KeyStorePassword: El compartido
        KeyAlias: global66
        KeyPassword: El mismo compartido
```

7. Luego seleccionar la variante de build. Escogemos release y listo

8. El .aab se genera firmado en la ruta del proyecto ```platforms/android/app/release/app-release.aab```

9. Subir el nuevo .aab en la versión Alpha de la consola de PlayStore y distribuir 
- Gestión de versiones
  - versiones de la aplicación
    - Segmentos cerrados → gestionar AlphaTest → Crear versión
        - Arrastrar .aap y llenar formulario.

::: tip
Demostración de como generar el aab para la subida en este [link](https://drive.google.com/file/d/1V2SmJeAqPhfGkjjOQPlrbg_7SF4hlTNq/view)
:::
