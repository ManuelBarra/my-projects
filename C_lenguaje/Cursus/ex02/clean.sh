#!/bin/bash

find . \( -name "-*.-" -o -name "*.~" -o -name "#*#" \) -exec rm {} \;
