/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strlen.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mabarra <marvin@42.fr>                     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/21 10:46:42 by mabarra           #+#    #+#             */
/*   Updated: 2024/11/25 14:27:39 by mabarra          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <unistd.h>

int	ft_strlen(char *str)
{
	int	i;

	i = 0;
	while (str[i] != '\0')
	{
		write(1, &str[i], 1);
		i++;
	}
	write(1, "\n", 1);
	return (i);
}
/*int main()
{
	char words[] = "Para que nuca mas en chile";
	
	int	data; 
	
	data = ft_strlen(words);
	
	return(data);
}*/
