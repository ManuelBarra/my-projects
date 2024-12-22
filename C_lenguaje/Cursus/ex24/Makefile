 CC = gcc
 CFLAGS = -Wall -Wextra -Werror 
 NAME = libft
 SRCS = $(wildcard srcs/*.c)
 OBJS = $(SRCS:.c=.o)
 INCLUDES = $(wildcard includes/*.h)
 LIBFT = libft.a

all: $(LIBFT)

$(LIBFT): $(OBJS)
	ar rcs $(LIBFT) $(OBJS)

%.o: %.c $(INCLUDES)
	$(CC) $(CFLAGS) -c $< -o $@

clean:
	rm -f $(OBJS) $(LIBFT)
	rm -f *~
	rm -f *.o	
	rm -f *.a
	rm -f *.so
	rm -f *.out
	rm -f *.exe
	rm -f core
	rm -f gmon.out
	rm -f *.stackdump

		