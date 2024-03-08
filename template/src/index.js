// markdown-parser.js

class MarkdownParser {
    constructor() {
        // Define regular expressions for Markdown syntax
        this.regex = {
            heading: /^#+\s*(.*)/,
            bold: /\*\*(.*?)\*\*/g,
            italic: /_(.*?)_/g,
            code: /`(.*?)`/g,
            link: /\[([^\[]+)\]\(([^\)]+)\)/g,
            image: /!\[([^\[]+)\]\(([^\)]+)\)/g,
            list: /^\s*[\*\-\+] (.*)/gm,
            blockquote: /^>\s*(.*)/gm
        };
    }

    parse(text) {
        // Replace Markdown syntax with HTML equivalents
        text = this.replaceHeading(text);
        text = this.replaceBold(text);
        text = this.replaceItalic(text);
        text = this.replaceCode(text);
        text = this.replaceLink(text);
        text = this.replaceImage(text);
        text = this.replaceList(text);
        text = this.replaceBlockquote(text);

        return text;
    }

    replaceHeading(text) {
        return text.replace(this.regex.heading, '<h1>$1</h1>');
    }

    replaceBold(text) {
        return text.replace(this.regex.bold, '<strong>$1</strong>');
    }

    replaceItalic(text) {
        return text.replace(this.regex.italic, '<em>$1</em>');
    }

    replaceCode(text) {
        return text.replace(this.regex.code, '<code>$1</code>');
    }

    replaceLink(text) {
        return text.replace(this.regex.link, '<a href="$2">$1</a>');
    }

    replaceImage(text) {
        return text.replace(this.regex.image, '<img src="$2" alt="$1">');
    }

    replaceList(text) {
        return text.replace(this.regex.list, '<li>$1</li>');
    }

    replaceBlockquote(text) {
        return text.replace(this.regex.blockquote, '<blockquote>$1</blockquote>');
    }
}

module.exports = MarkdownParser;
