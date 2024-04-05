# Comandos Básicos de Git

## Configuración de Usuario
- `git config --global user.name "favio"`: Establece el nombre de usuario global.
- `git config --global user.email dotaone136@gmail.com`: Establece el correo electrónico global.
- `git config --global core.editor "code --wait"`: Configura el editor preferido.
- `git config --global core.autocrlf true`: Configura la conversión automática de saltos de línea.

## Comandos de Visualización y Navegación
- `git config --global -e`: Abre el archivo de configuración global.
- `git config --list`: Lista la configuración global.
- `clear`: Limpia la pantalla de la terminal.

## Comandos de Directorio
- `pwd`: Muestra el directorio actual.
- `ls`: Lista archivos y directorios.
- `ls -a`: Lista todos los archivos, incluidos los ocultos.

## Inicialización y Estado del Repositorio
- `git init`: Inicializa un nuevo repositorio.
- `git status`: Muestra el estado del repositorio.
- `git status -s`: Muestra un resumen del estado.
- `git diff`: Muestra las diferencias entre archivos.

## Operaciones Básicas
- `git add`: Agrega cambios al área de preparación.
- `git rm --cached`: Elimina archivos del área de preparación.
- `git restore`: Restaura archivos del área de preparación.

## Commits
- `git commit -m "mensaje"`: Crea un nuevo commit con un mensaje.
- `git commit`: Abre el editor para escribir un mensaje.

## Historial
- `git log`: Muestra el historial de commits.
- `git log --oneline`: Muestra el historial de commits en una línea.

## Ramas y Fusión
- `git branch`: Lista las ramas.
- `git checkout -b <nombre_rama>`: Crea y cambia a una nueva rama.
- `git checkout <nombre_rama>`: Cambia a una rama existente.
- `git merge <nombre_rama>`: Fusiona una rama con la actual.

## Sincronización Remota
- `git push`: Sube cambios al repositorio remoto.
- `git pull`: Descarga cambios del repositorio remoto.
- `git branch -u origin/<nombre_rama>`: Configura el seguimiento de una rama remota.
- `git push -u origin/<nombre_rama>`: Sube cambios y configura el seguimiento.

## Eliminación
- `git branch -d <nombre_rama>`: Elimina una rama local.
- `git push origin --delete <nombre_rama>`: Elimina una rama remota.

## Restablecimiento
- `git reset`: Resetea el área de preparación.
- `git reset --hard`: Resetea el área de preparación y el directorio de trabajo.
