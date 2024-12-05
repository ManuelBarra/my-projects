/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strncpy.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mabarra <marvin@42.fr>                     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/25 18:45:19 by mabarra           #+#    #+#             */
/*   Updated: 2024/11/28 11:52:57 by mabarra          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

char	*ft_strncpy(char *dest, char *src, unsigned int n)
{
	unsigned int	i;

	i = 0;
	while (i < n && src[i] != '\0')
	{
		dest[i] = src[i];
		i++;
	}
	while (i < n)
	{
		dest[i] = '\0';
		i++;
	}
	return (dest);
}

/*int	main(void)
{
	char	dest[18];
	char src[18] = "Welcome terricolas";
	int	i;
	int n;

	n = 18;
	i = 0;
	ft_strncpy(dest, src, n);
    while (i < n)
    {
		printf("%c\n", dest[i]);
		i++;
    }
	return(0);
}*/
