int	ft_recursive_factorial(int nb)
{
        int	number;
	
	number = 0;
	if(nb < 0)
		return (number);

	if (nb == 0)
	{
		number = 1;
		return (number);
	}

	if(nb != '\0')
	{
		number = nb * ft_recursive_factorial(nb - 1);
	}

	return (number);
}
