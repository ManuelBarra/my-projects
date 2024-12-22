int ft_strcmp(char *s1, char *s2)
{
	int	i;

	i = 0;
	while (s1[i] != '\0' || s2[j] != '\0')
	{
		if(s1[i] == s2[j])
		{
			res = s1[i] - s2[j];
			if (res != 0)
				return (res);
		}
	}
	return (res);
}