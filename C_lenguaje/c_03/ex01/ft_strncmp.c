/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strncmp.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mabarra <marvin@42.fr>                     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/12/02 12:14:27 by mabarra           #+#    #+#             */
/*   Updated: 2024/12/04 12:36:48 by mabarra          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

int	ft_strncmp(char *s1, char *s2, unsigned int n)
{
	unsigned int	i;
	unsigned int	rslt;

	i = 0;
	rslt = 0;
	while ((s1[i] != '\0' || s2[i] != '\0') && i < n)
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
	char	s1[4] = "Hola";
	char	s2[4] = "Hoga";

	printf("%d\n", ft_strncmp(s1, s2, 4));
	printf("%d\n", strncmp(s1, s2, 4));
	return (0);
}*/
