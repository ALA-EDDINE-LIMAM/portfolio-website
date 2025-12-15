// This file defines TypeScript types and interfaces used throughout the project.

export interface Skill {
    id: number;
    name: string;
    level: number; // Level from 1 to 100
}

export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    liveUrl: string;
    repoUrl: string;
}

export interface Experience {
    id: number;
    jobTitle: string;
    company: string;
    startDate: string; // Format: YYYY-MM-DD
    endDate: string; // Format: YYYY-MM-DD or "Present"
    description: string;
}

export interface Education {
    id: number;
    degree: string;
    institution: string;
    startDate: string; // Format: YYYY-MM-DD
    endDate: string; // Format: YYYY-MM-DD
}

export interface Service {
    id: number;
    title: string;
    description: string;
}

export interface Testimonial {
    id: number;
    quote: string;
    author: string;
}

export interface BlogPost {
    id: number;
    title: string;
    summary: string;
    content: string;
    date: string; // Format: YYYY-MM-DD
}