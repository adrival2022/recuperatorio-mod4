import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity({name:'recipes'})
export class Recipe extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  ingredientes: string;

  @Column()
  imagen: string;

  @Column()
  preparacion: string;

  @Column()
  tiempo_preparacion: string;

  @CreateDateColumn({name: 'create_at'})
  createAt: Date;

  @UpdateDateColumn({name: 'update_at'})
  updateAt: Date;

  static createEntity(request: any): Recipe {
    const { nombre, descripcion, ingredientes, imagen, preparacion, tiempo_preparacion } = request;
    const recipe = new Recipe();
    recipe.nombre = nombre;
    recipe.descripcion = descripcion;
    recipe.ingredientes = ingredientes;
    recipe.imagen = imagen;
    recipe.preparacion = preparacion;
    recipe.tiempo_preparacion = tiempo_preparacion;
    return recipe; 
  }
}
