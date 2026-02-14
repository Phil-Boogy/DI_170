class AnagramChecker:
    def __init__ (self):
        with open('words.txt', 'r') as f:
            self.word_list = [line.strip() for line in f.readlines()]

    def is_valid_word(self, word):
        if word in self.word_list:
            return True
        else:
            return False    
    
    def is_anagram(self, word, word2):
        if len(word) != len(word2):
            return False
        if word == word2:
            return False
        return sorted(word) == sorted (word2)
    
    def get_anagrams(self, word):
        anagram_list = []
        for word_to_check in self.word_list:
            if self.is_anagram(word, word_to_check):
                anagram_list.append(word_to_check.lower())
        return anagram_list