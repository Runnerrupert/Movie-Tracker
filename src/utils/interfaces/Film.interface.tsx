// TODO: Define an interface for the `Film` object based on the data provided by OMDb API
// TODO: Can the properties be marked as readonly?

export default interface Film {
    readonly title: string;
    readonly directedBy: string;
    readonly starring: string;
    readonly released: string;
    readonly genre: string;
    readonly plot: string;
}
