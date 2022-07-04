<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      categorias: [
        { id: "c11556b2-18d2-48d7-ac95-df6d0431f3e6", nome: "Gênero1"},
        { id: "0204d8f7-52a5-463b-9d6f-3cf6d5ecffe9", nome: "Gênero2"},
        { id: "2148db23-7480-40d7-9cea-ae5876b01886", nome: "Gênero3"},
      ],
      nova_categoria: "",
    };
  },
  methods: {
    salvar() {
      if (this.nova_categoria !== "") {
        const novo_id = uuidv4();
        this.categorias.push({
          id: novo_id,
          nome: this.nova_categoria,
        });
        this.nova_categoria = "";
      }
    },
    excluir(categoria) {
      const indice = this.categorias.indexOf(categoria);
      this.categorias.splice(indice, 1);
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="title">
        <h2>Categorias</h2>
      </div>
      <div class="form-input">
        <input type="text" placeholder="Categoria" v-model="nova_categoria" />
        <button @click="salvar">Salvar</button>
      </div>
      <div class="list-cat">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Categoria</th>
              <th>Ações</th>
            </tr>
          </thead>
          
          <tbody>
            <tr v-for="categoria in categorias" :key="categoria.id">
              <td>{{ categoria.id }}</td>
              <td>{{ categoria.nome }}</td>
              <button @click="excluir(categoria)">Excluir</button>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  </main>
</template>