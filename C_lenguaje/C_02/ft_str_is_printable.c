int ft_str_is_printable(char *str)
{
	int	i;
	int	results;
	
	i= 0;
	results = 0;
	
	if(str[0] == '\0')
	{
		return(1);
	}
	
	while(str[i] != '\0')
	{
		if(str[i] >= ' ' && str[i] <= '~')
		{
			i++;
			results = 1;
		}else {
			results = 0;
			return (results);
		}
	
	}
	
	
	if (results == 1){
		return(results);	
	}
}

int	main()
{
	char src[] = "";
	
	int result;
	
    result = ft_str_is_printable(src);
    /*while(i < n)
    {
 	 	printf("%c\n", src[i]);
    	i++;
    }*/
    	
    return(result);
}
