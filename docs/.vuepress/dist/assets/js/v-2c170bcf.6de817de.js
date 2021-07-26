(self.webpackChunk=self.webpackChunk||[]).push([[710],{537:(e,a,r)=>{"use strict";r.r(a),r.d(a,{data:()=>l});const l={key:"v-2c170bcf",path:"/guide/build-creation.html",title:"Creación de build para publicar",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Creación de Android App Bundle (.aab)",slug:"creacion-de-android-app-bundle-aab",children:[]}],filePathRelative:"guide/build-creation.md",git:{}}},206:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>c});var l=r(252);const i=(0,l.uE)('<h1 id="creacion-de-build-para-publicar" tabindex="-1"><a class="header-anchor" href="#creacion-de-build-para-publicar" aria-hidden="true">#</a> Creación de build para publicar</h1><h2 id="creacion-de-android-app-bundle-aab" tabindex="-1"><a class="header-anchor" href="#creacion-de-android-app-bundle-aab" aria-hidden="true">#</a> Creación de Android App Bundle (.aab)</h2><ol><li><p>Descargar el certificado de subida de la carpeta compartida y tener a la mano el KeyStorePassword.</p></li><li><p>Generar el proyecto android apuntando a producción: <code>ns build android --env.prod</code></p></li><li><p>Abrir el proyecto en Android Studio platforms/android, en el archivo <strong>build.gradle</strong> se debe establecer como versión de sdk mínima soportada (minSdkVersion) el número <strong>23 (borrar lo que trae por defecto: manifest.&quot;uses-sdk&quot;.&quot;@android:minSdkVersion&quot;.text() ?: 17)</strong>. Colocar en la sección de ‘implementation del archivo <strong>build.gradle</strong> las siguientes dos dependencias:</p></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>implementation &#39;com.google.firebase:firebase-inappmessaging-display:17.2.0&#39;\nimplementation &#39;com.google.guava:guava:27.0.1-android&#39;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="4"><li><p>Generar el .aab firmado: <code>Build --&gt; Generate Signed Bundle / APK --&gt; Build Bundle (s)</code></p></li><li><p>Seleccionar Android App Bundle.</p></li><li><p>Parámetros:</p></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Module: app\n        KeyStorePath: la ruta hacia el certificado\n        KeyStorePassword: El compartido\n        KeyAlias: global66\n        KeyPassword: El mismo compartido\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="7"><li><p>Luego seleccionar la variante de build. Escogemos release y listo</p></li><li><p>El .aab se genera firmado en la ruta del proyecto <code>platforms/android/app/release/app-release.aab</code></p></li><li><p>Subir el nuevo .aab en la versión Alpha de la consola de PlayStore y distribuir</p></li></ol><ul><li>Gestión de versiones <ul><li>versiones de la aplicación <ul><li>Segmentos cerrados → gestionar AlphaTest → Crear versión <ul><li>Arrastrar .aap y llenar formulario.</li></ul></li></ul></li></ul></li></ul>',8),n={class:"custom-container tip"},d=(0,l.Wm)("p",{class:"custom-container-title"},"TIP",-1),o=(0,l.Uk)("Demostración de como generar el aab para la subida en este "),s={href:"https://drive.google.com/file/d/1V2SmJeAqPhfGkjjOQPlrbg_7SF4hlTNq/view",target:"_blank",rel:"noopener noreferrer"},t=(0,l.Uk)("link"),c={render:function(e,a){const r=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.j4)(l.HY,null,[i,(0,l.Wm)("div",n,[d,(0,l.Wm)("p",null,[o,(0,l.Wm)("a",s,[t,(0,l.Wm)(r)])])])],64)}}}}]);