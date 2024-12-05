/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_str_is_alpha.c                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mabarra <marvin@42.fr>                     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/25 19:03:15 by mabarra           #+#    #+#             */
/*   Updated: 2024/11/27 17:10:11 by mabarra          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

//#include <stdio.h>
int	ft_str_is_alpha(char *str)
{
	int	i;
	int	results;

	i = 0;
	results = 0;
	if (str[0] == '\0')
	{
		results = 1;
		return (results);
	}
	while (str[i] != '\0')
	{
		if (str[i] >= 'A' && str[i] <= 'Z')
			results = 1;
		else if (str[i] >= 'a' && str[i] <= 'z')
			results = 1;
		else
			return (0);
		i++;
	}
	return (results);
}
/*int	main()
{
	char src[] = "";

	int result;

    	result = ft_str_is_alpha(src);
	printf("%d", result);
    	return(result);
}*/
