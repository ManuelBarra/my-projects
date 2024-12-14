/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_is_negative.c                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mabarra <marvin@42.fr>                     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/15 12:35:10 by mabarra           #+#    #+#             */
/*   Updated: 2024/11/21 18:07:38 by mabarra          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <unistd.h>

void	ft_is_negative(int n)
{
	int	num;

	num = n;
	if (num < 0)
		write (1, "N", 1);
	else
		write (1, "P", 1);
}

/*int	main(void)
{
	ft_is_negative(6);
	return (0);
}*/
