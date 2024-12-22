void ft_foreach(int *tab, int length, void (*f)(int))
{
    int i;

    i = 0;
    while (i < length)
    {
        f(tab[i]);
        i++;
    }
}   

void ft_putnbr(int nbr)
{
    if (nbr < 0)
    {
        write(1, "-", 1);
        nbr = -nbr;
    }
    if (nbr > 9)
        ft_putnbr(nbr / 10);
    write(1, &nbr, 1);
}

int main(void)
{
    int tab[10];
    int i;

    i = 0;
    while (i < 10)
    {
        tab[i] = i;
        i++;
    }
    ft_foreach(tab, 1337, &ft_putnbr);

    return 0;
}   