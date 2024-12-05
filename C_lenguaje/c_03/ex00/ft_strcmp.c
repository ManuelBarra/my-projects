/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strcmp.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mabarra <marvin@42.fr>                     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/28 14:59:40 by mabarra           #+#    #+#             */
/*   Updated: 2024/12/04 12:29:11 by mabarra          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdio.h>

int	ft_strcmp(char *s1, char *s2)
{
	int	i;
	int	rslt;

	i = 0;
	rslt = 0;
	while (s1[i] != '\0' || s2[i] != '\0')
	{
		rslt = s1[i] - s2[i];
		if (rslt != 0)
		{
			return (rslt);
		}
		i++;
	}
	return (rslt);
}
/*int	main(void)
{
	char	s1[11] = "Hol mundo";
	char	s2[11] = "ohlm adoun";

	printf("%d\n", ft_strcmp(s1, s2));
	printf("%d\n", strcmp(s1,s2));
	return(0);
}*/
