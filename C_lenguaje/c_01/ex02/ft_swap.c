/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_swap.c                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mabarra <marvin@42.fr>                     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/20 16:25:21 by mabarra           #+#    #+#             */
/*   Updated: 2024/11/25 13:42:37 by mabarra          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

//#include <stdio.h>

void	ft_swap(int *a, int *b)
{
	int	temp;

	temp = *a;
	*a = *b;
	*b = temp;
}

/*int	main(void)
{
	int	a;
	int	b;
	int	*c;

	a = 7;
	b = 8;
	c = &b;
	printf("Antes del intercambio: x = %d, y = %d\n", a, b);
	ft_swap(&a, &b);
	printf("Después del intercambio: x = %d, y = %d\n", a, b);
	return (0);
}*/
