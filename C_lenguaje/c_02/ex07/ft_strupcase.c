/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_strupcase.c                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mabarra <marvin@42.fr>                     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/26 12:46:10 by mabarra           #+#    #+#             */
/*   Updated: 2024/11/26 12:57:57 by mabarra          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

char	*ft_strupcase(char *str)
{
	int	i;

	i = 0;
	while (str[i] != '\0')
	{
		if (str[i] >= 'a' && str[i] <= 'z')
		{
			str[i] = str[i] - 32;
		}
		i++;
	}
	return (str);
}

/*int	main()
{
	char src[] = "ssdasdasd45asdasd";
	
	int n = 18;
	int i = 0;
    	ft_strupcase(src);
   	while(i < n)
    	{
 	 	printf("%c\n", src[i]);
    		i++;
    	}
    	
    	return(0);
}*/
