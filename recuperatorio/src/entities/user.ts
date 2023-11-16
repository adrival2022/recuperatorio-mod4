import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

@Entity({name:'users'})
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column({ default: true })
    activo: boolean;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    create: Date;

    static createEntity(request: any): User {
        const { nombre, apellido, activo } = request;
        const user = new User();
        user.nombre = nombre;
        user.apellido = apellido;
        user.activo = activo;
        return user;
    }
}