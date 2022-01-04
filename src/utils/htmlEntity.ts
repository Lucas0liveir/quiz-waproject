function htmlEntity(badString: string): string {
    return badString.replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&apos;/g, "'")
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/&#039;/g, "'")
    .replace(/&aacute;/g, "á")
    .replace(/&eacute;/g, "é")
}

export { htmlEntity }