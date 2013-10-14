// Evernote Coding Challenge
//
// Author:
//
//   Ye (Scott) Cheng <scottcheng@stanford.edu>
//
// Problem:
//
//   Given a document, write a function to return a given number of most
//   frequent words.
//
// Idea:
//
//   1. Split the document into words. This takes O(n) time.
//   2. Count frequency of each unique word, and store in a hash map. This
//      takes O(k) time, where k is the number of words in the document, which
//      is linear to n.
//   3. Build a max heap with the words. Words with higher frequency will be on
//      the top part of the heap. This takes O(l) time, where l is the number
//      of unique words in the document, which is linear to n.
//   4. Extract a number of most frequent words from the heap. This takes
//      O(m * log l) time, where m is the number of words to extract.
//
// Therefore the overall time complexity is O(n).
//
//
// P.S. I have been primarily writing JavaScript/CoffeeScript these days, and I
// apologize if my Java code below doesn't look too beautiful, especially with
// the typecasts.

import java.util.*;
import java.util.Map.Entry;

public class WordCounter {

	public static String[] topWords(String doc, int m) {
		// Split doc into words
		String[] words = doc.toLowerCase().split("[\\W\\d]+");

		// Count frequency of each word
		HashMap<String, Integer> wordCount = new HashMap<String, Integer>();
		for (String word : words) {
			wordCount.put(word,
				wordCount.get(word) == null ? 1 : wordCount.get(word) + 1);
		}

		Comparator compEntry = new Comparator<Entry<String, Integer>>() {
			public int compare(Entry<String, Integer> e1, Entry<String, Integer> e2) {
				return e1.getValue() - e2.getValue();
			}
		};
		MaxHeap<Entry<String, Integer>> heap =
			new MaxHeap<Entry<String, Integer>>(wordCount.entrySet(), compEntry);

		Object[] topEntries = heap.getTopElements(m);
		String[] topWords = new String[topEntries.length];
		for (int i = 0; i < topEntries.length; i++) {
			topWords[i] = ((Entry<String, Integer>) topEntries[i]).getKey();
		}
		return topWords;
	}

	public static void main(String[] args) {
		// Test case
		// Source: http://blog.evernote.com/blog/2013/10/04/the-evernote-conference-announcements-highlights-photos/
		String doc = "The Evernote Conference: Announcements, Highlights, Photos\nFor the third year in a row, we invited our friends, fans, users, partners, and developer community to join us for an event to look back and look forward. Over one thousand people showed up for two days’ worth of workshops and panels aimed to inspire, connect, and energize. We were thrilled to have so many of you join us in San Francisco, as well as tune into the live stream of action online.\n\nEvernote Conference\n\nFor those of you who missed the event, we wanted to take a moment to recap all of the great things that came out.\n\nThe Evernote Conference, at a Glance:\n\n1,013 attendees from 26 countries\nOver 2,600 Craftsman and Wolves pastries consumed\n850 lattes made by Verve Coffee Roasters\n28 workshops, sessions, panels and talks\n28 Evernote Ambassadors in attendance\n5,000 tweets using the hashtag #EC2013\n1,637 photos shared on Instagram using the hasthtag, #ec2013\n3M and the Evernote Market\n\nEvernote Conference\n\nHere at Evernote, we’re committed to bringing you the best tools and products to help you live a more productive life. We want to help you bridge the divide between the physical and digital world, and inspire you to achieve your personal and professional goals.\n\nEvernote Conference\n\nLast week, we announced a partnership with 3M to digitize Post-it® Notes inside your Evernote account. The relationship is unprecedented and unbelievably cool. We also unveiled a number of physical products — including an Evernote scanner and stylus — as part of the newly-launched Evernote Market.\n\nEvernote Conference\n\nSmarter Solutions for Businesses\n\nWe’re all too familiar with the siloed flows of information that happen at companies and inefficient approaches to knowledge sharing. At the Evernote Conference, we announced Evernote Business 2.0, which offers new ways to capture, find, share and discover knowledge at your company, along with Evernote Business for Salesforce, which makes it easy for your team to understand more about your leads and act on opportunities in new ways.\n\nEvernote Conference\n\nA Whole New Skitch\n\nOur markup and annotation app, Skitch, got a complete rebrand, a tighter integration with Evernote and some other incredibly useful features (like captions and more seamless sharing options).\n\nEvernote Conference\n\nDevcup: The Big Winners\n\nEvery year, some of the most talented developers in the world compete in our Devcup to build the most useful and interesting apps that integrate with Evernote. Finalists are carefully selected by our judging committee and invited to the Evernote Conference to pitch their app to the audience. One winner takes Gold and two others get to nab the Silver and Bronze awards, along with prizes and prestige. This year, all of the finalists will join our inaugural Evernote Accelerator class to take their projects to the next level (you can read more about the Evernote Accelerator).\n\nDevcup\n\nThe big winner was blogging app, Postach.io, which turns your Evernote notes into a beautiful blog, instantly. Read about all of the winners.\n\nEvernote Conference\n\nRelive the Event\n\nWe’ll be sharing recordings of keynotes and sessions from the event so whether you were able to join us in person or online, you can catch what you may have missed or just want to re-watch.\n\nEvernote Conference\n\nDon’t forget to follow us on Facebook, Twitter and Instagram to see more photos and behind-the-scenes action.";
		String[] topWords = topWords(doc, 30);
		for (String w : topWords) {
			System.out.println(w);
		}
	}

}

// MaxHeap as a helper class
class MaxHeap<E> {

	private E[] content;
	private int size;
	private Comparator<? super E> comparator;

	MaxHeap(Collection<E> content, Comparator<? super E> comparator) {
		this.content = (E[]) content.toArray();
		this.size = this.content.length;
		this.comparator = comparator;
		this.buildHeap();
	}

	// Build heap in O(size) time
	private void buildHeap() {
		for (int i = this.size / 2; i >= 0; i--) {
			this.siftDown(i);
		}
	}

	private void siftDown(int i) {
		int larger = i * 2 + 1;  // Index of larger number amoung i's children
		E tmp = this.content[i];  // Store content at i
		while (larger < this.size) {
			if (larger < this.size - 1 &&
				this.comparator.compare(this.content[larger], this.content[larger + 1]) < 0) {
				// Right child of i is larger
				larger++;
			}
			if (this.comparator.compare(tmp, this.content[larger]) < 0) {
				// Move content in larger up
				this.content[i] = this.content[larger];

				// Continue going down
				i = larger;
				larger = 2 * i + 1;
			} else {
				break;
			}
		}
		// Set value at current i
		this.content[i] = tmp;
	}

	// Return and remove max element in heap
	E removeMax() {
		if (this.size == 0) {
			return null;
		}
		E max = this.content[0];
		this.content[0] = this.content[this.size - 1];
		this.size--;
		this.siftDown(0);
		return max;
	}

	// Returns m biggest elements
	E[] getTopElements(int m) {
		if (m > this.size) {
			m = this.size;
		}
		E[] topEle = (E[]) new Object[m];
		for (int i = 0; i < m; i++) {
			topEle[i] = this.removeMax();
		}
		return topEle;
	}

}
