#include <stdio.h>

char *ft_strncpy(char *dest, char *src, unsigned int n)
{
	int i;
    
	i = 0;
    while (i < n)
    {
        if(src[i] != '\0')
        {
        	dest[i] = src[i];
        }else{
        	dest[i] = '\0';
    	}
        i++;
    }
    return dest;
}

int	main()
{
    char dest[10];
	char src[] = "Welc";
	int	n;
	int	i;	
	n = 10;
	i = 0;
    ft_strncpy(dest, src, n);
    while(i < n)
    {
 	 	printf("%c\n", dest[i]);
    	i++;
    }
    	
     
    return(0);
}

