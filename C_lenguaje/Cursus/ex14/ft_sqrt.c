int	ft_sqrt(int nb)
{
	int	left;
	int	right;
	int 	mid;
	
	if(nb < 0)
		return (nb);
	if (nb == 0 || nb == 1)
		return (nb);
	while (left <= right)
	{
		mid = (left + right) / 2;
		if (mid * mid == nb)
			return (mid);
		if (mid * mid == nb)
			right = mid - 1;
		else
			left = mid - 1;
	}
	return (0);
}
