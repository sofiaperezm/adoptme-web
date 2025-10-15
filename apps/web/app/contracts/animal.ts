export type Species = 'cat' | 'dog';

export type AgeUnit = 'days' | 'weeks' | 'months' | 'years';

export type Gender = 'male' | 'female' | 'unknown';

export type Size = 'small' | 'medium' | 'large'

export type WeightUnit = 'grams' | 'kilograms';

export interface Animal {
    name: string;
    admissionDate?: Date;
    species: Species;
    breed?: string;
    ageUnit: AgeUnit;
    age: number;
    gender: Gender;
    size: Size;
    weightUnit?: WeightUnit;
    weight?: number;
    neuterDate?: Date;
    backstory?: string;
    physicalFeatures?: string;
    additionalNotes?: string;
    images?: string[];
}