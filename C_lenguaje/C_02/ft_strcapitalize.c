#include <stdio.h>

int ft_strcapitalize(char *str)
{
	int	i;
	int	results;
	
	i= 0;
	
	if(str[0] == '\0')
	{
		return(1);
	}
	
	while(str[i] != '\0')
	{
		if(str[i] == ' ' || str[0] )
		{
			str[i] = str[i] - 32;	
		}
		printf("%c\n", str[i]);	
		i++;	
	}
}

int	main()
{
	char src[] = "Los paraametros pasados 1544s son correctos";
	
	int result;
	
    result = ft_strcapitalize(src);
    /*while(i < n)
    {
 	 	printf("%c\n", src[i]);
    	i++;
    }*/
    	
    return(result);
}
