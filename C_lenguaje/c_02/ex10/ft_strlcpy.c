/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strlcpy.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mabarra <marvin@42.fr>                     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/26 14:09:35 by mabarra           #+#    #+#             */
/*   Updated: 2024/11/28 12:58:08 by mabarra          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

int	ft_strlen(char *str)
{
	int	length;

	length = 0;
	while (str[length] != '\0')
	{
		length++;
	}
	return (length);
}

unsigned int	ft_strlcpy(char *dest, char *src, unsigned int size)
{
	unsigned int	i;
	unsigned int	src_lenght;

	i = 0;
	src_lenght = ft_strlen(src);
	if (size > 0)
	{
		while (i < size && src[i] != '\0')
		{
			dest[i] = src[i];
			i++;
		}
		dest[i] = '\0';
	}
	return (src_lenght);
}
/*int	main()
{
	char	dest[10];
	char	src[] = "Hola mundo";
	int		size = 10;

	ft_strlcpy(dest, src, size);
	return (0);
}*/
