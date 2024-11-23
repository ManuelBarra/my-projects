//#include <stdio.h>
//#include <unistd.h>

int ft_strlen(char *str)
{
	int	i;
	
	i = 0;
	
	while(str[i] != '\0')
	{
		//printf("%c, %d\n", str[i], i);
		//write(1, &str[i], 1);
		i++;// Cuenta una vez se muestra la posicion con lo cual nos permite contar correctamente el string.
	}
	return(i);
}


int main()
{
	char words[] = "Para que nuca mas en chile";
	
	int	data; 
	
	data = ft_strlen(words);
	
	return(data);
}
