/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_sort_int_tab.c                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mabarra <marvin@42.fr>                     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/25 16:02:27 by mabarra           #+#    #+#             */
/*   Updated: 2024/11/25 16:31:25 by mabarra          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

void	ft_sort_int_tab(int *tab, int size)
{
	int	i;
	int	temp;
	int	swapped;

	i = 0;
	swapped = 1;
	while (swapped)
	{
		swapped = 0;
		i = 0;
		while (i < size - 1)
		{
			if (tab[i] > tab[i + 1])
			{
				temp = tab[i];
				tab[i] = tab[i + 1];
				tab[i + 1] = temp;
				swapped = 1;
			}
			i++;
		}
		size--;
	}
}
/*int main()
{
	int numbers[] = {35, 25, 13, 45, 12, 6, 87, 75, 44};
	
	int	data;
	
	int i;
	
	i = 0;
	
	data = 9; 
	
	ft_sort_int_tab(numbers, data);
	
	while(i < data)
	{
		printf("%d\n", numbers[i]);
		i++;	
	}
	return(0);
}*/
