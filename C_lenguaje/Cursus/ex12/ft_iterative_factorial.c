int	ft_iterative_factorial(int nb)
{
	int	number;
	int	i;

	number = 0;
	i = 0;
	if (nb < 0) 
	{
		return (number); 
	}
	if (nb == 0)
	{
		number + 1;
	}
	if(nb != '\0')
	{
		while(i <= nb)
		{
			number = number * number;
			i++;
		}
	}
	if (nb == 0)
	{
		number = 0;
	}
	return (number);
}
