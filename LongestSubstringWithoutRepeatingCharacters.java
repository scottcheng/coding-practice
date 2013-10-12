import java.util.*;

public class LongestSubstringWithoutRepeatingCharacters {
	public static int lengthOfLongestSubstring(String s) {
		HashMap<Character, Boolean> seen = new HashMap<Character, Boolean>();
		int res = 0;
		int start = 0;
		for (int end = 0; end < s.length(); end++) {
			if (seen.get(s.charAt(end)) != null && seen.get(s.charAt(end))) {
				while (s.charAt(start) != s.charAt(end)) {
					seen.put(s.charAt(start), false);
					start++;
				}
				// s.chartAt(start) == s.charAt(end)
				start++;
			}
            res = res > end - start + 1 ? res : end - start + 1;  // Length of substring which ends at `end`
			seen.put(s.charAt(end), true);
		}
		res = res > s.length() - start ? res : s.length() - start;
		return res;
	}

	public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("bbmqbhcdarzowkk"));
		System.out.println(lengthOfLongestSubstring("wlrbbmqbhcdarzowkkyhiddqscdxrjmowfrxsjybldbefsarcbynecdyggxxpklorellnmpapqfwkhopkmco"));
	}
}
