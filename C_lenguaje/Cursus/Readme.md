Readme para el Cursus de 42 Barcelona

/_----> ex00 <---_/

Mostrar Inodos

Utilizamos

mkdir -> Para crear carpetas o directorios, -> "d"

touch -> Para crear archivos comunes, -> "-"

touch -t -> Para cambiar la fecha del archivo

touch -ht -> Para cambiar solo el tiempo de un archivo y no de su enlace padre

ln -> Para crear enlaces duros -> "-"

ln -s -> Para crear enlaces blandos -> "l"

/_----> ex01 <---_/

Print Z más facíl

/_----> ex02 <---_/

En un archivo llamado clean colocar la línea de comandos que buscará todos los archivos - en el
directorio actual así como en sus subdirectorios - con un nombre que termine por ~, o con
un nombre que empiece y termine por #

- La línea de comandos mostrará y borrará todos los archivos encontrados.
- Sólo se permite un comando: nada de ';' o '&&' u otras travesuras.

find . \( -name "-_.-" -o -name "_.~" -o -name "#\*#" \) -exec rm {} \;

Agrupamos los distintos tipos requeridos y ejecutamos una eliminación de todos los archivos {}

/_----> ex03 <---_/

Escriba una línea de comandos que busque todos los nombres de archivo que terminen en «.sh» (sin comillas) en el directorio actual y en todos sus subdirectorios.
comillas) en el directorio actual y en todos sus subdirectorios. Debería
mostrar sólo los nombres de archivo sin el .sh.

find . -name "\*.sh" -exec basename {} \; | cut -d. -f1

Buscamos los archivos que terminan en .sh y ejecuta para todos los archvios en su nombre base, pasamos a la siguiente salida del terminal con | y ejecutamos el cut con un separador -d. y -f1 que toma todo el campo antes del punto.

/_----> ex04 <---_/

Escriba una línea de comandos que muestre las direcciones MAC de su máquina. Cada dirección
debe ir seguida de un salto de línea.

/_----> ex05 <---_/
