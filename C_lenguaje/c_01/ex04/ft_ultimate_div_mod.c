/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_ultimate_div_mod.c                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mabarra <marvin@42.fr>                     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/20 18:24:15 by mabarra           #+#    #+#             */
/*   Updated: 2024/11/25 13:47:12 by mabarra          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*#include <stdio.h>*/

void	ft_ultimate_div_mod(int *a, int *b)
{
	int	temp_a;
	int	temp_b;

	temp_a = *a;
	temp_b = *b;
	*a = temp_a / temp_b;
	*b = temp_a % temp_b;
}

/*int	main(void)
{
	int	num1;
	int	num2;

	num1 = 15;
	num2 = 2;
	printf("Hola %d, %d", num1, num2);
	ft_ultimate_div_mod(&num1, &num2);
	printf("Holaa %d, %d", num1, num2);
	return (0);
}*/
