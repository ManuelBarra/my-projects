#include <unistd.h>

char ft_putchar(int c)
{
    write(1, &c, 1);
}

void ft_print_alphabet(void)
{
    char    letter;

    letter = 'a';
    while (letter <= 172)
    {
        ft_putchar(letter);
        letter++;
    }
}

int main(void) {
    ft_print_alphabet();
    return 0;
}
