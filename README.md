# Proyecto Final Git
**Objetivo del proyecto:**
El objetivo principal es aprender todo sobre Git y como se debe conectar con Github

**Integrante:**
Jose Luis Rubio Cabrera

**Fecha:**
24/11/25

**¿Qué es GIT?**
Git es un sistema de control de versiones distribuido y gratuito de
código abierto que se utiliza para rastrear cambios en archivos y
coordinar el trabajo de desarrollo entre varios colaboradores. Es
eficiente, seguro y flexible, permitiendo a los desarrolladores gestionar
proyectos de cualquier tamaño, realizar cambios localmente y colaborar
de manera segura. Plataformas como GitHub utilizan Git para
alojar repositorios de código en la nube y ofrecer herramientas
de colaboraciones adicionales


**10 comandos de Git explicados:**
*git init*
Inicializa un repositorio de Git en una carpeta
Crea la estructura interna donde Git guarda los commits, ramas y cambios

*git clone <url>*
Clona (copia) un repositorio remoto en tu computador
git clone https://github.com/usuario/proyecto.git
Obtienes una copia exacta del proyecto para trabajar localmente.

*git status*
Muestra el estado actual de tu proyecto
qué archivos cambiaron,cuáles están listos para commit, en qué rama estás

*git add .*
Añade los archivos modificados al "área de preparación" (stage)
Indica cuáles cambios irán en el próximo commit.

*git commit -m "mensaje"*
Guarda una versión del proyecto con un mensaje descriptivo,
Crea un punto de restauración del proyecto.

*git push origin rama*
Sube tus commits al repositorio remoto, Permite que otros vean tu código y que GitHub lo registre.

*git pull*
Descarga la versión más reciente del proyecto desde el remoto, Une tus cambios locales con lo
haya agregado tu equipo.

*git checkout -b nombre-rama*
Crea una nueva rama y te mueve a ella.
Sirve para trabajar en tareas separadas sin afectar el código principal.

*git merge (rama)*
Fusiona otra rama con la actual.
Une el trabajo de dos ramas.
Si hay conflictos, Git te pedirá resolverlos manualmente.

*git log --oneline --graph --all*
Muestra el historial de commits de forma visual y resumida.
Te permite ver: ramas,merges,commits,estructura del proyecto


**Problemas encontrados hoy**
-Tuve conflictos al hacer merge entre varias ramas
-El repositorio detectaba archivos que no quería subir

**¿Que aprendi hoy?**
-A usar PRs correctamente
-A resolver conflictos en Git
-A trabajar con ramas de forma profesional

**¿Que fue lo mas dificil?**
-Entender por qué ciertas ramas no estaban actualizadas localmente
-Manejar archivos ignorados en el .gitignore

**Conclusión del día**
Aprendí a manejar Git y GitHub de forma estructurada, utilizando ramas,
merges, PRs y buenas prácticas de control de versiones
