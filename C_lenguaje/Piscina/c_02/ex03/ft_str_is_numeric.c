/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_str_is_numeric.c                                :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mabarra <marvin@42.fr>                     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/26 11:47:07 by mabarra           #+#    #+#             */
/*   Updated: 2024/11/26 12:00:36 by mabarra          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

int	ft_str_is_numeric(char *str)
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
		if (str[i] >= '0' && str[i] <= '9')
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
	
	result = ft_str_is_numeric(src);
	printf("%d\n", result);
    	
	return(result);
}*/
