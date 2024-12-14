#include <stdio.h>

void ft_rev_int_tab(int *tab, int size)

{
	int	i;
	int j;
	int temp;
	
	i = 0;
	j = 0;
	while(i < size /2)
	{
		temp = tab[i];
		tab[i] =  tab[size - i - 1];
		tab[size - i - 1] = temp;	
		i++;// Cuenta una vez se muestra la posicion con lo cual nos permite contar correctamente el string.
	}
	
	while(j < size)
	{
		printf("%d", tab[j]);
		j++;
	}
}

int main()
{
	int num[] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
	int	data;
	
	data = 9; 
	ft_rev_int_tab(num, data);
	return(0);
}
