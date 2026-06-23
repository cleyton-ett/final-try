import { blob } from "node:stream/consumers";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class instrumentos{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    nome!: string

    @Column({type: "blob"})
    imagem!: Buffer

    @Column({type: "blob"})
    audio!: Buffer

    @Column()
    descricao!: string
}