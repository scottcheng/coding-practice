public class PalindromeNumber {
	public static boolean isPalindrome(int x) {
		if (x < 0) {
			return false;
		}
		int h = 1;
		while (x / h >= 10) {
			h *= 10;
		}
		while (h > 1) {
			if (x / h != x % 10) {
				return false;
			}
			x = (x % h) / 10;
			h /= 100;
		}
		return true;
	}

	public static void main(String[] args) {
		System.out.println(isPalindrome(141));
		System.out.println(isPalindrome(1410110141));
		System.out.println(isPalindrome(123));
	}
}
