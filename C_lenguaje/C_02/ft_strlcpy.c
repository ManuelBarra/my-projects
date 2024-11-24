//#include <stdio.h>


unsigned int ft_strlcpy(char *dest, char *src, unsigned int size){
	int i;
	int	j;
    i = 0;
    j = 0;
    
    while (i < size && src[i] != '\0') {
        dest[i] = src[i];
        printf("%c", dest[i);
        i++;
    }

    while (i < size) {
        dest[i] = '\0';
        i++;
    }
    /*while(j < size){
    	printf("%c", dest[j]);
    	j++;
	}*/
    return dest;
}


int main()
{
	char dest[10];
	char src[] = "Hola mundo";
	int	size = 10;
	
	ft_strlcpy(dest, src, size);
}
