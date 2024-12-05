/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   rush03.c                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mabarra <marvin@42.fr>                     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/11/17 15:18:48 by mabarra           #+#    #+#             */
/*   Updated: 2024/11/17 15:44:04 by mabarra          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

void	ft_putchar(char printChar);

void	rush(int input_x, int input_y)
{
	char	position_x;
	char	position_y;

	position_y = 1;
	while(position_y <= input_y)
	{
		position_x = 1;
		while(position_x <= input_x)
		{
			if((position_x == 1 && position_y == 1) || (position_x == 1 && position_y == input_y))
				ft_putchar('A');
			else if((position_x == input_x && position_y == 1) || (position_x == input_x && position_y == input_y))
				ft_putchar('C');
			else if((position_x > 1 && position_x < input_x) && (position_y > 1 && position_y < input_y))
				ft_putchar(' ');
			else
				ft_putchar('B');
			position_x++;
		}
		ft_putchar('\n');
	position_y++;
	}
}
