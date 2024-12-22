int	ft_sqrt(int nb)
{
	int	i;
	int	j;

	i = 0;
	j = nb;
	while (i < j)
	{
		i = (i + j) / 2;
		j = (i + nb / i) / 2;
	}
	return (i);	
}
