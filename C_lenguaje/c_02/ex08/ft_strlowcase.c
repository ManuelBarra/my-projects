/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strlowcase.c                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mabarra <marvin@42.fr>                     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/26 13:02:52 by mabarra           #+#    #+#             */
/*   Updated: 2024/11/26 13:28:16 by mabarra          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdio.h>

char	*ft_strlowcase(char *str)
{
	int	i;

	i = 0;
	while (str[i] != '\0')
	{
		if (str[i] >= 'A' && str[i] <= 'Z')
		{
			str[i] = str[i] + 32;
		}
		i++;
	}
	return (str);
}
/*int   main()
{
        char src[] = "sDSDFSDFsdasd45asdasd";

        int n = 18;
        int i = 0;
        ft_strlowcase(src);
        while(i < n)
        {
                printf("%c\n", src[i]);
                i++;
        }

        return(0);
}*/
