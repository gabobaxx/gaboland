export function limitWords({
	paragraph,
	numWords,
}: {
	paragraph: string;
	numWords: number;
}) {
	// Split the paragraph into an array of words
	const words = paragraph.split(/\s+/);

	// Check if the number of words is less than or equal to the limit
	if (words.length <= numWords) {
		return paragraph; // No need to truncate, return original paragraph
	}

	// Truncate the array to the specified number of words
	words.splice(numWords);

	// Join the truncated array back into a string with spaces
	const truncatedParagraph = words.join(' ');

	// Indicate truncation with an ellipsis (...)
	return `${truncatedParagraph}...`;
}
