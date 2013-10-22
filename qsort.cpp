#include <iostream>

using namespace std;

void printArr(int arr[], int len) {
	int i;
	for (i = 0; i < len; i++) {
		cout<<arr[i]<<" ";
	}
	cout<<endl;
}

void swap(int &a, int &b) {
	int tmp = a;
	a = b;
	b = tmp;
}

// Alternative partition method
// int partition(int arr[], int left, int right) {
// 	int
// 		pivot = arr[left],
// 		i = left,
// 		j;
// 	for (j = i + 1; j <= right; j++) {
// 		if (arr[j] < pivot) {
// 			i++;
// 			swap(arr[i], arr[j]);
// 		}
// 	}
// 	swap(arr[left], arr[i]);
// 	return i;
// }

int partition(int arr[], int left, int right) {
	int pivot = arr[left];
	while (left < right) {
		while (arr[right] >= pivot && left < right) {
			right--;
		}
		if (left < right) {
			arr[left] = arr[right];
			left++;
		}
		while (arr[left] <= pivot && left < right) {
			left++;
		}
		if (left < right) {
			arr[right] = arr[left];
			right--;
		}
	}
	arr[left] = pivot;
	return left;
}

// Sort [left, right] in arr
void qsort(int arr[], int left, int right) {
	if (left < right) {
		int mid = partition(arr, left, right);
		qsort(arr, left, mid - 1);
		qsort(arr, mid + 1, right);
	}
}

int main() {
	int arr[10] = {6, 2, 0, 9, 8, 1, 7, 54, -23, 5};
	int i;
	cout<<"init:"<<endl;
	printArr(arr, sizeof(arr) / sizeof(int));

	qsort(arr, 0, 9);

	cout<<"result:"<<endl;
	printArr(arr, sizeof(arr) / sizeof(int));

	return 0;
}
