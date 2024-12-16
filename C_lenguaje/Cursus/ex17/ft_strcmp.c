int ft_strcmp(char *s1, char *s2)
{
	int	i;
	int	j;
	int	res;

	if (s2[0] == '\0')
		return (s1)
	
	while (s1[i] != '\0' || s2[j] != '\0')
	{
		if(s1[i] == s2[j])
		{
			res = s1[i] - s2[j];
			if (res != 0)
			{
				return (res);
			}
		}
	}
	return (res)
}
