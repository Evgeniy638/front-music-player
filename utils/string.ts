export const string = {
    cutString(str: string, maxSize: number): string {
        if (str.length > maxSize) {
            return str.substring(0, maxSize - 1) + "...";
        }
    
        return str;
    }
}
