<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      livros: [
        {
          id: "c11556b2-18d2-48d7-ac95-df6d0431f3e6",
          livro: "Livro1",
          autor: "Autor1",
          categoria: "Gênero1",
          editora: "Editora1",
        },
        {
          id: "0204d8f7-52a5-463b-9d6f-3cf6d5ecffe9",
          livro: "Livro2",
          autor: "Autor2",
          categoria: "Gênero2",
          editora: "Editora2",
        },
        {
          id: "2148db23-7480-40d7-9cea-ae5876b01886",
          livro: "Livro3",
          autor: "Autor3",
          categoria: "Gênero3",
          editora: "Editora3",
        },
      ],
      novo_livro: "",
      novo_autor: "",
      nova_categoria: "",
      nova_editora: "",
    };
  },
  methods: {
    salvar() {
      if (
        (this.novo_livro, this.novo_autor, this.nova_categoria, this.nova_editora !== "")) {
        const novo_id = uuidv4();
        this.livros.push({
          id: novo_id,
          livro: this.novo_livro,
          autor: this.novo_autor,
          categoria: this.nova_categoria,
          editora: this.nova_editora,
        });
        this.novo_livro = "";
        this.novo_autor = "";
        this.nova_categoria = "";
        this.nova_editora = "";
      }
    },
    excluir(livro) {
      const indice = this.livros.indexOf(livro);
      this.livros.splice(indice, 1);
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="title">
        <h2>Cadastro de Livro</h2>
      </div>
      <div class="form-input">
        <input type="text" placeholder="Livro" v-model="novo_livro" />
        <input type="text" placeholder="Autor" v-model="novo_autor" />
        <select id="pick" type="text" v-model="nova_categoria" >
          <option value="" disabled>Categoria</option>
          <option value="Gênero1">Gênero1</option>
          <option value="Gênero2">Gênero2</option>
          <option value="Gênero3">Gênero3</option>
        </select>
        <input type="text" placeholder="Editora" v-model="nova_editora" />
        <button @click="salvar">Salvar</button>
      </div>
      <div class="list-liv">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Livros</th>
              <th>Autor</th>
              <th>Categoria</th>
              <th>Editora</th>
              <th>Excluir</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="livro in livros" :key="livro.id">
              <td>{{ livro.id }}</td>
              <td>{{ livro.livro }}</td>
              <td>{{ livro.autor }}</td>
              <td>{{ livro.categoria }}</td>
              <td>{{ livro.editora }}</td>
              <button @click="excluir(livro)">Excluir</button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
<style>
#pick {
    border-radius: 10px;
}
</style>