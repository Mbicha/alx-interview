#!/usr/bin/env python3
""" Module for 0-minoperations"""


def minOperations(n):
    """
    Return fewest operation n of H
    """
    # all outputs should be at least 2 char: (min, Copy All => Paste)
    if (n < 2):
        return 0
    operations, r = 0, 2
    while r <= n:
        # if n evenly divides by r
        if n % r == 0:
            # total even-divisions by r = total operations
            operations += r
            # set n to the remainder
            n = n / r
            # reduce r to find remaining smaller vals that evenly-divide n
            r -= 1
        # increment r until it evenly-divides n
        r += 1
    return operations