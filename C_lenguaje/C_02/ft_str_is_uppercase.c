int ft_str_is_uppercase(char *str)
{
	int	i;
	int	results;
	
	i= 0;
	results = 0;
	while(str[i] != '\0')
	{
		if(str[i] >= 'A' && str[i] <= 'Z')
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
	char src[] = "";
	
	int result;
	
    result = ft_str_is_uppercase(src);
    /*while(i < n)
    {
 	 	printf("%c\n", src[i]);
    	i++;
    }*/
    	
    return(result);
}