int ft_str_is_numeric(char *str)
{
	int	i;
	int	results;
	i= 0;
	results = 0;
	
	while(str[i] != '\0')
	{
		if(str[i] >= '0' && str[i] <= '9')
		{
			i++;
			results = 1;
		}else {
			results = 0;
			return (results);
		}
	
	}
	
		
	if(str[0] == '\0')
	{
		return(1);
	}
	if (results == 1){
		return(results);	
	}
}

int	main()
{
	char src[] = "564654";
	
	int result;
	
    result = ft_str_is_numeric(src);
    /*while(i < n)
    {
 	 	printf("%c\n", src[i]);
    	i++;
    }*/
    	
    return(result);
}

