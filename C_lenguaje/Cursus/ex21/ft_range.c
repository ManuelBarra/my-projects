#include <stdio.h>
#include <stdlib.h>

int *ft_range(int min, int max)
{
    int m;
    int n;
    int *i;

    if (min >= max)
        return NULL;
    m = 0;
    n = max - min;
    i = (int *)malloc(n * 4);
    if (i == NULL)
        return NULL;

    while (m < n)
    {
        i[m] = min;
        min++;    
        m++;
    }
    return (i);
}

int main(void)
{
    int i;
    int z;
    int *range;
    int size;

    i = 15;
    z = 89;

    range = ft_range(i, z);
    if (range == NULL)
        return 1;
    size = z - i; 
    i = 0;
    while (i < size) 
    {
        printf("%d\n", range[i]);
        i++;
    }

    free(range); 
    return 0;
}