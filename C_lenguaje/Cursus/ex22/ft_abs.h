#ifndef FT_ABS_H
# define FT_ABS_H

int ft_abs(int value)
{
    if (value < 0)
        return -value;
    else
        return value;
}

#endif