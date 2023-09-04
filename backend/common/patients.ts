import z from 'zod'

export const PatientSexSchema = z.enum(['Male', 'Female'])

export type PatientSex = z.infer<typeof PatientSexSchema>

export const PatientSchema = z.object({
    id: z.string(),
    name: z.string(),
    cpf: z.string(),
    address: z.string(),
    phone: z.string(),
    sibling: z.boolean(),
    transplante: z.boolean(),
    transfusao: z.boolean(),
    gender: PatientSexSchema,
    age: z.number(),
    genes: z.array(z.array(z.number())),
})

export type Patient = z.infer<typeof PatientSchema>
