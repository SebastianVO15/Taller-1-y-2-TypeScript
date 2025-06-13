import { Serie } from './series.js'; // Importante: usamos serie.js aunque el archivo original es .ts

export const series: Serie[] = [
    new Serie(1, "Breaking Bad", "AMC", 5),
    new Serie(2, "Orange Is the New Black", "Netflix", 6),
    new Serie(3, "Game of Thrones", "HBO", 8),
    new Serie(4, "The Big Bang Theory", "CBS", 12),
    new Serie(5, "Sherlock", "BBC", 4),
    new Serie(6, "A Very English Scandal", "BBC", 1)
];