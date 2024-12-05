/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_rev_int_tab.c                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mabarra <marvin@42.fr>                     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/25 15:13:58 by mabarra           #+#    #+#             */
/*   Updated: 2024/11/25 16:00:39 by mabarra          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

void	ft_rev_int_tab(int *tab, int size)
{
	int	i;
	int	j;
	int	k;

	i = 0;
	j = 0;
	k = 0;
	while (i < size / 2)
	{
		k = tab[size - i - 1];
		tab[size - i - 1] = tab[i];
		tab[i] = k;
		i++;
	}
}
/*int	main(void)
{
	int	arreglo[9] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
	int	lenght;
	
	lenght = 9;	
	ft_rev_int_tab(arreglo, lenght);
	return (0);
}*/
