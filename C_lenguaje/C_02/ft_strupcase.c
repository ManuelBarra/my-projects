#include <stdio.h>

int *ft_strupcase(char *str)
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
		if(str[i] >= 'a' && str[i] <= 'z')
		{
			str[i] = str[i] - 32;	
		}
		printf("%c\n", str[i]);	
		i++;	
	}
}

int	main()
{
	char src[] = "ssdasdasd45asdasd";
	
	int result;
	
    result = ft_strupcase(src);
    /*while(i < n)
    {
 	 	printf("%c\n", src[i]);
    	i++;
    }*/
    	
    return(result);
}
