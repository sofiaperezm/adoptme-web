import { Animal } from "../../contracts/animal"
import { AnimalDTO } from "../../contracts/animal-dto"

const animalKeys: Record<string, string> = {
  "Nombre del animal": "name",
  "Fecha de ingreso a la fundación": "admissionDate",
  "Especie": "species",
  "Raza": "breed",
  "La edad del animal está dada en": "ageUnit",
  "¿Cuál es la edad del animal? (en números)": "age",
  "Sexo": "gender",
  "Tamaño": "size",
  "El peso del animal está dado en": "weightUnit",
  "¿Cuál es el peso del animal? (solo números)": "weight",
  "Fecha de esterilización": "neuterDate",
  "Historia": "backstory",
  "Características físicas": "physicalFeatures",
  "Observaciones de ingreso": "additionalNotes",
  "Imágenes (separa cada link con una coma)": "images"
}

export async function transformAnimalData(animalData: AnimalDTO[]) {
  return animalData.map(animal => mapAnimalKeys(animal))
}

export function mapAnimalKeys(animal: AnimalDTO) {
  const mapped  = {} as Record<keyof Animal, string | undefined>;

  for (const key in animalKeys) {
    const newKey = animalKeys[key]!
    mapped[newKey as keyof Animal] = animal[key as keyof AnimalDTO]
  }

  return mapped
}
