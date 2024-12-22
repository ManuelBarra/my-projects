#include <stdio.h>
#include <stdlib.h>

int	ft_strlen(char *str)
{
	int	i;

	i = 0;
	while (str[i] != '\0')
	{
		i++;
	}
	return (i);
}

void ft_strcpy(char *dest, char *src) {
    int i = 0;
    while (src[i] != '\0') {
        dest[i] = src[i];
        i++;
    }
    dest[i] = '\0';
}

char *ft_strdup(char *src)
{    
    char    *dup; 
    
    dup = (char *)malloc(ft_strlen(src) + 1);
    if (dup == NULL)
        return NULL;
    ft_strcpy(dup, src);
    return (dup);
}

int main(void)
{
    char *original = "Hola, mundo!";
    char *copia = ft_strdup(original);

    if (copia != NULL) {
        printf("Original: %s\n", original);
        printf("Copia: %s\n", copia);
        free(copia); 
    } else {
        printf("Error al duplicar la cadena.\n");
    }
}