#include <stdio.h>

int ft_count_if(char **tab, int (*f)(char*))
{
    int i;
    int count;

    i = 0;
    count = 0;
    while (tab[i] != NULL)
    {
        if (f(tab[i]))
            count++;
        i++;
    }
    return (count); 
}

int ft_isalpha(char *str)
{
    if (str[0] >= 'a' && str[0] <= 'z')
        return 1;
    else
        return 0;
}

int main(void)
{
    char *tab[10];
    int i;

    i = 0;
    while (i < 10)
    {
        tab[i] = "Hola";
        i++;
    }
    i = 0;
    while (tab[i] != NULL)
    {                       
        if (ft_isalpha(tab[i]))
            printf("%s\n", tab[i]);
        i++;
    }
    return 0;
}       