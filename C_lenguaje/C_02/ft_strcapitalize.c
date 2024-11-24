#include <stdio.h>

int *ft_strcapitalize(char *str)
{
	int	i;
	int	results;
	
	i= 0;
	
	if(str[0] == '\0')
		return(1);
	
	if (str[i] >= 'a' && str[i] <= 'z') 
		str[i] -= 32;
	printf("%c\n", str[i]);	
	i++;
	while(str[i] != '\0')
	{
		if(str[i] == ' ' && str[i + 1] >= 'a' && str[i + 1] <= 'z')
				str[i + 1] = str[i + 1] - 32;
		printf("%c\n", str[i]);	
		i++;
	}
}

int	main()
{
	char src[] = "salut, comment tu vas ? 42mots quarante-deux; cinquante+et+un";
	
	int result;
	
    result = ft_strcapitalize(src);
    /*while(i < n)
    {
 	 	printf("%c\n", src[i]);
    	i++;
    }*/
    	
    return(result);
}
