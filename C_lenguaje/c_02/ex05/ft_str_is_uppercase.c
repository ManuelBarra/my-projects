/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_str_is_uppercase.c                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mabarra <marvin@42.fr>                     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/26 12:15:45 by mabarra           #+#    #+#             */
/*   Updated: 2024/11/26 12:32:40 by mabarra          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

int	ft_str_is_uppercase(char *str)
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
		else
		{
			results = 0;
			return (results);
		}
		i++;
	}
	return (results);
}
/*int   main()
{
        char src[] = "bb";
        
        int result;
        
        result = ft_str_is_uppercase(src);

        printf("%d\n", result);
        
        return(result);
}*/
