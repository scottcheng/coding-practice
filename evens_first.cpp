// Problem: operate on an array of integers so that all even numbers
// come before odd ones

// Idea: similar to an iteration in Quick Sort

#include <iostream>
#include <algorithm>

using namespace std;

void evens_first(int *arr, int length) {
	int l = 0;
	int r = length - 1;
	while (l < r) {
		if (arr[l] % 2 == 0) {
			l++;
		} else if (arr[r] % 2 == 1) {
			r--;
		} else {
			swap(arr[l], arr[r]);
			l++;
			r--;
		}
	}
}

int main() {
	int arr[] = { 1, 2, 3, 6, 5, 9, 7, 10 };
	int length = sizeof(arr) / sizeof(arr[0]);
	evens_first(arr, length);
	for (int i = 0; i < length; i++) {
		cout<<arr[i]<<' ';
	}
	return 0;
}
