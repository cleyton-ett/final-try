import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("arte")
export class arte{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    nome!: string

    @Column({nullable: true})
    imagem!: string

    @Column()
    descricao!: string

    
}