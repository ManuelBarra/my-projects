#include <unistd.h>
#include "ft_strlen.h"

void ft_putstr(char *str)
{
    write(1, str, ft_strlen(str));
}   