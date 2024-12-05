/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_putstr.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mabarra <marvin@42.fr>                     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/21 09:44:17 by mabarra           #+#    #+#             */
/*   Updated: 2024/11/25 14:05:55 by mabarra          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <unistd.h>

void	ft_putstr(char *str)
{
	int	i;

	i = 0;
	while (str[i] != '\0')
		write(1, &str[i++], 1);
}

/*int	main(void)
{
	char	*strng;

	strng = "Bienvenido al mundo terricola.";
	ft_putstr(strng);
	return (0);
}*/
