#include <unistd.h>

char	ft_putchar(int c)
{
	write(1, &c, 1);
	return (c)
}

void	ft_print_number(void)
{
	char    letter;

	letter = '0';
	while (letter <= 47)
	{	        
		ft_putchar(letter);
		letter++;
	}
}

int	main(void) {
	ft_print_numbers();
	return 0;
}
