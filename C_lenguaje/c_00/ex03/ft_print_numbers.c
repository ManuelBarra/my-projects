/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_print_numbers.c                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mabarra <marvin@42.fr>                     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/14 15:31:10 by mabarra           #+#    #+#             */
/*   Updated: 2024/11/21 18:07:12 by mabarra          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <unistd.h>

int	ft_print_numbers(void)
{
	char	num;

	num = '0';
	while (num <= '9')
	{
		write(1, &num, 1);
		num++;
	}
	return (0);
}

/*int	main(void)
{
	ft_print_numbers();
	return (0);
}*/
