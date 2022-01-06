The function must return an integer that denotes the minimum index of magic from which he can start a successful journey. 
If no such starting point exists, return -1.

optimalPoint has the following parameter(s):

magic[magic[0],…magic[n-1]]: an array of integers where magic[i] denotes the amount of magic in the i source.

dist[dist[0],…dist[n-1]]: an array of integers where dist[i] denotes the distance to the next magical source.

Constraints

1 ≤ n ≤ 100000

0 ≤ magic[i] ≤ 10000

0 ≤ dist[i] ≤ 10000

Input Format For Custom Testing

The first line contains an integer, n, that denotes the number of elements in magic.
Each line i of the n subsequent lines (where 0 ≤ i (where 0 ≤ i < n) contains an integer that describes magic[i].
The next line again contains the integer, n, that denotes the number of elements in dist.
Each line i of the n subsequent lines (where 0 ≤ i < n ) contains an integer that describes dist[i].

Sample Case 0

Sample Input For Custom Testing
magic = [2, 4, 5, 2] and dist = [4, 3, 1, 3]
Sample Output
1

Explanation

Here magic = [2, 4, 5, 2] and dist = [4, 3, 1, 3]. If Aladdin starts at the second magical source, his magic levels are:
magic[1] = 4

4 — dist[1] + magic[2] = 4–3 + 5 = 6

6 — dist[2] + magic[3] = 6–1 + 2 = 7

7 — dist[3] + magic[0] = 7–3 + 2 = 6

6 — dist[0] = 6–4 = 2.
The first point from where Aladdin can start his journey is the 2 magical source. The output should be 1, the index of the 2 location.
Sample Case 1
Sample Input For Custom Testing
magic = [8, 4, 1, 9] and dist = [10, 9, 3, 5]
Sample Output
-1

Explanation

Here magic = [8, 4, 1, 9] and dist = [10, 9, 3, 5]. In each case, the distance to the next source is greater than the amount of magic at the current source. No matter where Aladdin starts, he will not be able to finish his travel.
