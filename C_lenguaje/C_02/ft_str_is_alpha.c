int ft_str_is_alpha(char *str)
{
	int	i;
	int	results;
	i= 0;
	
	while(str[i] != '\0')
	{
		if((str[i] >= 'A' && str[i] < 'Z') || (str[i] >= 'a' && str[i] < 'z'))
		{
			return(1);
		}else{
			return(0);
		}
		i++;
	}
	
	if(str[0] == '\0')
	{
		return(1);
	}
}

int	main()
{
	char src[] = "aaaa";
	
	int result;
	
    result = ft_str_is_alpha(src);
    /*while(i < n)
    {
 	 	printf("%c\n", src[i]);
    	i++;
    }*/
    	
    return(result);
}



