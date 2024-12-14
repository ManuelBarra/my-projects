/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strstr.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mabarra <marvin@42.fr>                     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/12/02 15:21:08 by mabarra           #+#    #+#             */
/*   Updated: 2024/12/05 11:36:18 by mabarra          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdio.h>

char	ft_check_word(char *str, char *to_find, int i, int j)
{
	int	results;

	results = 0;
	while (to_find[j] != '\0')
	{
		results += to_find[j] - str[i];
		i++;
		j++;
	}
	return (results);
}

char	*ft_strstr(char *str, char *to_find)
{
	int	i;
	int	j;
	int	position;
	int	result;	

	i = 0;
	j = 0;
	if (to_find[j] == '\0')
		return (&str[i]);
	while (str[i] != '\0')
	{
		if (str[i] == to_find[j])
		{
			position = i;
			result = ft_check_word(str, to_find, i, j);
			if (result == 0)
				return (&str[position]);
		}
		i++;
	}
	return (NULL);
}

/*int	main(void)
{
	char	text[] = "aaaaabaaa";
	char    word[] = "ab";

	printf("%s\n", ft_strstr(text, word));	
	printf("%s\n", strstr(text, word));
	return (0);
}*/
