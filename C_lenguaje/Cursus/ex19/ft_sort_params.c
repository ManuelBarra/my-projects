void	ft_putchar(char c)
{
	write(1, &c , 1);
}

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
	return (res)
}

void	ft_swap(int *a, int *b)
{
	int	temp;
	
	temp = *a;
	*a = *b;
	*b = temp;
}

void    ft_sort_params(argc, argv, i)
{
    int res;
    int temp[argc];

    res = 0;
    while(i < (argc -1))
    {
        res = ft_strcmp(argv[i], argv[i + 1]);
        if (res > 0)
            ft_swap(argv[i], argv[i + 1]);
        i++;
    }
}

int	main(int argc, char *argv[])
{
	int i;
	int	j;

	i = 1; // Para no mostrar el parametro 0?
	j = 0;
	while (i < argc)
	{
		int j = 0;
        ft_sort_params(argc, argv, i, j);
		while (argv[i][j] != '\0')
		{
			ft_putchar(argv[i][j]);
			j++;
		}
		ft_putchar('\n');
		i++;
	}

	return (0);
}
