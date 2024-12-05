/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_str_is_printable.c                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mabarra <marvin@42.fr>                     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/26 12:33:44 by mabarra           #+#    #+#             */
/*   Updated: 2024/11/26 12:38:15 by mabarra          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

int	ft_str_is_printable(char *str)
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
		if (str[i] >= ' ' && str[i] <= '~')
		{
			i++;
			results = 1;
		}
		else
		{
			results = 0;
			return (results);
		}
	}
	return (results);
}
/*int	main()
{
	char src[] = "";
	
	int result;
	
    	result = ft_str_is_printable(src);
	return(result);
}*/
